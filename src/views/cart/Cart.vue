<template>
    <div class="cart">
        <NavBar class="cartnav">
            <div slot="center">购物车({{ cartlength }}) </div>
        </NavBar>
        <CartList>
            
        </CartList>
        <CartBar></CartBar>
    </div>
</template>

<script>
import NavBar from '@/components/common/navbar/NavBar.vue';
import { mapGetters } from 'vuex';
import CartList from './CartList.vue';
import CartBar from './CartBar.vue';


export default {
    components: { NavBar, CartList, CartBar },
    computed: {
        ...mapGetters({
            cartlength: 'cartlength',
            list: 'cartList'
        })
    }
}
</script>

<style>
.cartnav {
    background-color: red;
    color: #fff;
    font-weight: 700;
}
</style>