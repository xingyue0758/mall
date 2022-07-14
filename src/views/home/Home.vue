<template>
    <div id="home">
        <Navbar>
            <div slot="center">购物街</div>
        </Navbar>

    </div>
</template>

<script>
import Navbar from '@/components/common/navbar/NavBar.vue';
import { gethomemultidata } from '@/network/home.js';
export default {
    components: {
        Navbar
    },
    data() {
        return {
            banner: ''
        }
    },
    created() {
        gethomemultidata().then(
            res => {
                this.banner = res.data.data.banner
            }
        );

    }
}
</script>

<style>
.nav-bar {
    background-color: pink;
    color: #fff;
}
</style>