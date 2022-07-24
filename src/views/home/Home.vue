<template>
    <div id="home">
        <Navbar>
            <div slot="center">购物街</div>
        </Navbar>
        <Scroll class="homescroll" ref="scroll" :probT="3" @scroll="contentscroll" :pullUpLoad="true"
            @pullingUp="loadmore">
            <HomeSwiper :banners='banners' class="homeswiper"></HomeSwiper>
            <HomeRecommendView :recommends="recommends"></HomeRecommendView>
            <Feature></Feature>
            <TabControl class="control" :title="['流行', '新款', '精选']" @tabClick="tabclick"></TabControl>
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
    methods: {
        loadmore() {
            this.gethomegoods(this.currenttype);
            this.$refs.scroll.scroll.refresh();
        },
        contentscroll(popo) {
            this.desktopishow = popo.y <= -1000
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

}
</script>

<style>
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
    /* position: sticky;
    top: 44px; */


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
</style>