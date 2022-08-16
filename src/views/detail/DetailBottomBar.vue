<template>
    <div class="bottomBar">
        <div>客服</div>
        <div>店铺</div>
        <div>收藏</div>
        <div class="shoppingTrolley" @click="addToCart">加入购物车</div>
        <div class="buy">购买</div>
    </div>
</template>

<script>
export default {
    methods: {
        addToCart() {
            this.$emit('addToCart')
        }
    }
}
</script>

<style>
.bottomBar {
    height: 49px;
    position: fixed;
    display: flex;
    bottom: 0px;
    right: 0px;
    left: 0;
    background-color: red;
    z-index: 100000;
    text-align: center;
    line-height: 49px;
    font-size: 14px;

}

.bottomBar div {
    flex: 1;
}

.shoppingTrolley {
    background-color: rgb(178, 148, 135);
}

.buy {
    background-color: rgb(164, 164, 180);
}
</style>