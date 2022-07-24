<template>
    <div class="goodslist clearfix">
        <div class="goodslistitem" v-for="items in goods">
            <a :href="items.link">
                <img :src="items.show.img" alt="">
            </a>
            <p>{{ items.title }}</p>
            <span class="price">￥{{ items.price }}</span> |
            <span class="cfav">{{ items.cfav }}件</span>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        goods: {
            type: Array,
            default() {
                return []
            }
        }
    }
}
</script>

<style>
.goodslist {
    padding-bottom: 49px;
}



.goodslistitem {
    /* position: absolute; */

    float: left;
    width: 50%;
    text-align: center;
    border: 3px solid #fff;
    /* border-radius: 2px; */

}

.goodslistitem a img {
    z-index: -4;
    height: 400px;
    width: 100%;

}

.goodslist p {

    width: 100%;
    height: 38px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
</style>