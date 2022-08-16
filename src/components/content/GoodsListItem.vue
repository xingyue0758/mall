<template>


    <div class="goodslistitem">

        <img :src="showImages" alt="" @load="imgload" @click="itemclick">

        <p>{{ goodsitem.title }}</p>
        <span class="price">￥{{ goodsitem.price }}</span> |
        <span class="cfav">{{ goodsitem.cfav }}件</span>
    </div>


</template>

<script>
export default {
    methods: {
        imgload() {
            this.$bus.$emit('itemimageload')
        },
        itemclick() {
            this.$router.push('/detail/' + this.goodsitem.iid);

        }
    },
    computed:{
        showImages(){
            return this.goodsitem.image || this.goodsitem.show.img
        }
    },
    props: {
        goodsitem: {
            type: Object,
            default() {
                return {}
            }
        }
    }
}
</script>

<style>
</style>