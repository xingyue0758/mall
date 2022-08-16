<template>
    <div class="cartlist">
        <Scroll class="cartlistsc" ref="cartscroll" :probT="3" :pullUpLoad="true">
            <div class="cartlistitem">
                <CartListItem v-for="(item, index) in cartList" :key="index" :product="item"></CartListItem>
            </div>
        </Scroll>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Scroll from '@/components/common/scroll/Scroll.vue';
import CartListItem from './CartListItem.vue';

export default {
    name: "CartList",
    computed: {
        ...mapGetters(["cartList"])
    },
    components: { Scroll, CartListItem },
    activated() {
        this.$refs.cartscroll.scroll.refresh() //数据更新通知scroll组件刷新
    }
}
</script>

<style>
.cartlistsc {
    height: calc(100vh - 93px - 40px);
    overflow: hidden;
}

.cartlistitem {
    width: 100%;
    overflow: hidden;
}
</style>