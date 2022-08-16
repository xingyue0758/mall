<template>
    <div id="home">
        <Navbar>
            <div slot="center">购物街</div>
        </Navbar>
        <div v-show="istabfixed" class="tabcontrol1">
            <TabControl class="control tabcontrol" :title="['流行', '新款', '精选']" @tabClick="tabclick" ref="tabcontrol1">
            </TabControl>
        </div>

        <Scroll class="homescroll" ref="scroll" :probT="3" @scroll="contentscroll" :pullUpLoad="true"
            @pullingUp="loadmore">
            <HomeSwiper :banners='banners' class="homeswiper" @swiperimageload="swiperimageload"></HomeSwiper>
            <HomeRecommendView :recommends="recommends"></HomeRecommendView>
            <Feature></Feature>
            <TabControl class="control" :title="['流行', '新款', '精选']" @tabClick="tabclick" ref="tabcontrol2">
            </TabControl>
            <GoodsList :goods="goods[currenttype].list"></GoodsList>
        </Scroll>
        <DeskTop v-show="desktopishow" class="desktop" @click.native="backclick"></DeskTop>
    </div>
</template>

<script>
import Navbar from '@/components/common/navbar/NavBar.vue';
import HomeSwiper from '@/views/home/childcomps/HomeSwiper.vue';
import HomeRecommendView from '@/views/home/childcomps/HomeRecommendView.vue';
import Feature from '@/views/home/childcomps/Feature.vue';
import TabControl from '@/components/content/TabControl.vue';
import {
    gethomemultidata,
    gethomegoods
} from '@/network/home';
import GoodsList from '@/components/content/GoodsList.vue';
import Scroll from '@/components/common/scroll/Scroll.vue';
import DeskTop from '@/components/content/DeskTop.vue';

export default {
    components: {
        Navbar,
        HomeSwiper,
        HomeRecommendView,
        Feature,
        TabControl,
        GoodsList,
        Scroll,
        DeskTop
    },
    data() {
        return {
            savey: 0,
            istabfixed: false,
            taboffsettop: 0,
            isfix: false,
            desktopishow: false,
            scroll: null,
            banners: {},
            recommends: [],
            goods: {
                'pop': { page: 0, list: [] },
                'new': { page: 0, list: [] },
                'sell': { page: 0, list: [] },
            },
            currenttype: 'pop'
        }
    },
    created() {
       
        this.gethomemultidata();

        this.gethomegoods('pop');
        this.gethomegoods('new');
        this.gethomegoods('sell');


    },
    mounted() {
       

        const refresh = this.debounce(this.$refs.scroll.refresh, 500);
        this.$bus.$on('itemimageload', () => {
            refresh()
        })
    },
    methods: {
        // 防抖函数
        debounce(func, delay) {
            let timer = null;
            return function (...args) {
                if (timer) clearTimeout(timer)
                timer = setTimeout(() => {
                    func.apply(this, args)
                }, delay)
            }

        },
        swiperimageload() {

            this.taboffsettop = this.$refs.tabcontrol2.$el.offsetTop

        },
        loadmore() {
            this.gethomegoods(this.currenttype);
            this.$refs.scroll.scroll.refresh();
        },
        contentscroll(popo) {
            this.desktopishow = popo.y <= -1000;
            this.istabfixed = popo.y < -(this.taboffsettop - 40);
        },
        backclick() {
            this.$refs.scroll.scroll.scrollTo(0, 0, 500)
        },
        tabclick(index) {
            switch (index) {
                case 0:
                    this.currenttype = 'pop'
                    break
                case 1:
                    this.currenttype = 'new'
                    break
                case 2:
                    this.currenttype = 'sell'
                    break
            }
            this.$refs.tabcontrol2.currentindex = index;
            this.$refs.tabcontrol1.currentindex = index;
        },
        gethomemultidata() {
            gethomemultidata().then(
                res => {
                    this.banners = res.data.data.banner;

                    this.recommends = res.data.data.recommend.list
                }
            )
        },
        gethomegoods(type) {
            const page = this.goods[type].page + 1
            gethomegoods(type, page).then(
                res => {
                    this.goods[type].list.push(...res.data.data.list);
                    this.goods[type].page += 1;
                    this.$refs.scroll.finishPullUp();
                  
                }
            )
        }
    },
    activated() {
        this.$refs.scroll.refresh()
        this.$refs.scroll.scroll.scrollTo(0, this.savey, 0);
        
    },
    deactivated() {
        this.savey = this.$refs.scroll.scroll.y
    },
    destroyed(){
        console.log(111);
    },
    beforeDestroy(){
        console.log(222);
    }

}
</script>

<style scoped>
#home {
    padding-top: 44px;
    height: 100vh;
}

.nav-bar {
    background-color: pink;
    color: #fff;
    position: fixed;
    top: 0px;
    right: 0px;
    left: 0px;
    z-index: 2;
}

/* .homeswiper {
    margin-top: 44px;
    
} */

.control {
    background-color: #fff;



}

.homescroll {
    /* position: relative; */
    height: 100%;
    overflow: hidden;



}

.desktop {
    position: fixed;
    bottom: 59px;
    right: 10px;
}

.tabcontrol1 {
    position: fixed;
    z-index: 33;
    top: 44px;
    right: 0px;
    left: 0px;
}
</style>