<template>
    <div class="shotitem clearfix">
        <Button class="itemselector" :checkedbutton="product.checked" @click.native="checkclick"></Button>
        <div class="itemimg">
            <img :src="product.image" alt="">
        </div>
        <div class="iteminfo">
            <div class="itemtitle">{{ product.title }}</div>
            <div class="infobottom clearfix">
                <div class="itemprice">{{ product.price }}</div>
                <div class="itemcount">{{ product.count }}</div>
            </div>
        </div>
    </div>
</template>

<script>
import Button from '@/components/common/button.vue';
export default {
    props: {
        product: {
            type: Object,
            default() {
                return {};
            }
        }
    },
    mounted() {

    },
    methods: {
        checkclick() {
            this.product.checked = !this.product.checked
        }
    },
    components: { Button }
}
</script>

<style>
.shotitem {
    width: 100%;
    height: 130px;

}

.itemselector {
    float: left;
    margin-top: 50px;
}

.itemimg {

    width: 120px;
    height: 120px;
    margin-top: 5px;
    float: left;
}


.itemimg img {
    display: block;
    width: 120px;
    height: 120px;
}

.iteminfo {
    width: 255px;
    height: 130px;
    float: left;
}

.itemprice {
    float: left;
}

.infobottom {
    margin-top: 35px;
}

.itemcount {
    float: right;
}

.itemtitle {
    margin-top: 10px;
    margin-left: 5px;
}
</style>