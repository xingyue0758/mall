<template>
    <div>
        <TabBar>
            <TabBarItem path="/home" activeColor="blue">
                <img slot='item-img' src="@/assets/img/tabbar/sm3.jpeg" alt="">
                <img slot='item-img-active' src="@/assets/img/tabbar/sm5.jpeg" alt="">
                <p slot="item-text">首页</p>
            </TabBarItem>
            <TabBarItem path="/category" activeColor="blue">
                <img slot='item-img' src="@/assets/img/tabbar/sm3.jpeg" alt="">
                <img slot='item-img-active' src="@/assets/img/tabbar/sm5.jpeg" alt="">
                <p slot="item-text">分类</p>
            </TabBarItem>
            <TabBarItem path="/cart" activeColor="blue">
                <img slot='item-img' src="@/assets/img/tabbar/sm3.jpeg" alt="">
                <img slot='item-img-active' src="@/assets/img/tabbar/sm5.jpeg" alt="">
                <p slot="item-text">购物车</p>
            </TabBarItem>
            <TabBarItem path="/profile" activeColor="blue">
                <img slot='item-img' src="@/assets/img/tabbar/sm3.jpeg" alt="">
                <img slot='item-img-active' src="@/assets/img/tabbar/sm5.jpeg" alt="">
                <p slot="item-text">我的</p>
            </TabBarItem>
        </TabBar>
    </div>
</template>

<script>
import TabBar from "@/components/common/tabbar/TabBar.vue";
import TabBarItem from "@/components/common/tabbar/TabBarItem.vue";
export default {
    components: {
        TabBar,
        TabBarItem
    }

}
</script>

<style>
</style>