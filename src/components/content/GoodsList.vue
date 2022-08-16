<template>
    <div class="goodslist clearfix">
        <GoodsListItem v-for="item in goods" :goodsitem="item"></GoodsListItem>
    </div>
</template>

<script>
import GoodsListItem from "@/components/content/GoodsListItem.vue";
export default {
    components: { GoodsListItem },
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

.goodslistitem img {
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