<template>
    <div>

        <Detailitem @detailclick="detailclick" class="detailItem" ref="detailcurrent"></Detailitem>
        <Scroll class="detailscroll" ref="detailscroll" :probT="3" :pullUpLoad="true" @scroll="contentscroll">

            <DetailSwiper :topimages="topimages"></DetailSwiper>
            <DetailBaseInfo :goodsInfo="itemInfo1"></DetailBaseInfo>
            <DetailShopInfo></DetailShopInfo>
            <DetailImageInfo :detailinfo="detailinfo" ref="aaa"></DetailImageInfo>
            <DetailCommentInfo :commentInfo="commentInfo" ref="bbb"></DetailCommentInfo>
            <GoodsList :goods="recommend" ref="ccc"></GoodsList>
        </Scroll>
        <DetailBottomBar @addToCart="addToCart"></DetailBottomBar>
        <DeskTop v-show="desktopishow" class="detaildesktop" @click.native="backclick"></DeskTop>

    </div>
</template>

<script>
import Detailitem from "@/views/detail/DetailItem.vue";
import { getdetail, getrecommend } from "@/network/detail";
import { goods } from "@/network/detail";
import DetailSwiper from "@/views/detail/DetailSwiper.vue";
import DetailBaseInfo from "@/views/detail/DetailBaseInfo.vue";
import Scroll from "@/components/common/scroll/Scroll.vue";
import DetailShopInfo from "./DetailShopInfo.vue";
import DetailImageInfo from "./DetailImageInfo.vue";
import DetailCommentInfo from "./DetailCommentInfo.vue";
import GoodsList from "@/components/content/GoodsList.vue";
import DetailBottomBar from "./DetailBottomBar.vue";
import DeskTop from "@/components/content/DeskTop.vue";





export default {
    name: 'Detail',
    data() {
        return {
            iid: null,
            topimages: [],
            itemInfo1: {},
            shop: {},
            detailinfo: {},
            commentInfo: {},
            recommend: [],
            themeTopY: [],
            currentindex: null,
            desktopishow: false,


        };
    },
    methods: {
        detailclick(index) {

            this.$refs.detailscroll.scroll.scrollTo(0, -this.themeTopY[index], 200);
        },
        contentscroll(popo) {
            const positoinY = -popo.y;
            let length = this.themeTopY.length;
            for (let i = 0; i < length - 1; i++) {
                // if (this.currentindex !== i && ((i < length - 1 && positoinY >= this.themeTopY[i] && positoinY < this.themeTopY[i + 1]) || (i === length - 1 && positoinY >= this.themeTopY[i]))) {
                //     this.currentindex = i;
                //     this.$refs.detailcurrent.currentindex=this.currentindex;
                // }
                if (this.currentindex !== i && (positoinY >= this.themeTopY[i] && positoinY < this.themeTopY[i + 1])) {
                    this.currentindex = i;
                    this.$refs.detailcurrent.currentindex = this.currentindex;
                }
            };
            this.desktopishow = popo.y <= -1000;
        },
        backclick() {
            this.$refs.detailscroll.scroll.scrollTo(0, 0, 500)
        },
        addToCart() {
            const product = {};
            product.image = this.topimages[0];
            product.title = this.itemInfo1.desc;
            product.price = this.itemInfo1.price;
            product.iid = this.itemInfo1.iid;
            product.lowprice = this.itemInfo1.lowprice;
            this.$store.dispatch('addCart', product).then(res => {
                this.$toast.show(res, 1000)

            });



        }
    },
    created() {



        this.iid = this.$route.params.id;
        getdetail(this.iid).then(res => {
            console.log(res);
            this.topimages = res.data.result.itemInfo.topImages;
            this.itemInfo1 = new goods(res.data.result.itemInfo, res.data.result.columns, res.data.result.shopInfo.services);
            this.shop = res.data.result.shopInfo;
            this.detailinfo = res.data.result.detailInfo;
            if (res.data.result.cRate !== 0) {
                this.commentInfo = res.data.result.rate.list[0]
            }
        });
        getrecommend().then(res => {
            this.recommend = res.data.data.list
        })

    },
    mounted() {



    },
    updated() {
        this.themeTopY = [];
        this.themeTopY.push(0);
        this.themeTopY.push(this.$refs.aaa.$el.offsetTop);

        this.themeTopY.push(this.$refs.bbb.$el.offsetTop);
        this.themeTopY.push(this.$refs.ccc.$el.offsetTop);
        this.themeTopY.push(Number.MAX_VALUE);



    },
    components: {
        Detailitem,
        DetailSwiper,
        DetailBaseInfo,
        Scroll,
        DetailShopInfo,
        DetailImageInfo,
        DetailCommentInfo,
        GoodsList,
        Scroll,
        DetailBottomBar,
        DeskTop,

    }
}
</script>

<style>
.detailscroll {
    height: 567px;
    overflow: hidden;
}

.detaildesktop {
    position: fixed;
    bottom: 59px;
    right: 10px;
}


</style>