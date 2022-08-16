<template>
    <div class="bottombar clearfix">
        <div class="bottombardiv">
            <Button :checkedbutton="isSelectAll" class="barbutton" @click.native="allcheck"></Button>
            <span>全选</span>

        </div>
        <div class="totalprice111">合计:￥{{ totalprice }}</div>
        <div class="calculate">
            去计算({{ calculate }})
        </div>
    </div>
</template>

<script>
import Button from '@/components/common/button.vue';

export default {
    components: { Button },
    methods: {
        allcheck() {
            
            if (!this.isSelectAll) {
                this.$store.state.cartList.forEach(item => {
                    return item.checked = true
                })
            } else {
                this.$store.state.cartList.forEach(item => {
                    return item.checked = false
                })
            }
        }
    },
    data() {
        return {

        }
    },
    activated() {


    },
    computed: {
        totalprice() {
            return this.$store.state.cartList.filter(item => {
                return !item.checked
            }).reduce((preValue, item) => {
                return preValue + item.lowprice * item.count
            }, 0).toFixed(2)
        },
        calculate() {
            return this.$store.state.cartList.filter(item => { return !item.checked }).length
        },
        isSelectAll() {
            if (this.$store.state.cartList.length == 0) {
                return true
            } else {
                return Boolean(this.$store.state.cartList.find(item => { return item.checked }))
            }
        }
    }
}
</script>

<style>
.bottombar {
    position: fixed;
    bottom: 49px;
    right: 0;
    left: 0;

    height: 40px;
    background-color: red;
    width: 100%;
    font-size: 13px;

}

.calculate {
    float: left;
    margin-top: 12px;
    margin-left: 30px;
    font-size: 15px;
    color: antiquewhite;
}

.totalprice111 {
    float: left;

    margin-top: 13px;
    margin-left: 152px;

}

.bottombardiv {
    width: 70px;
    margin-top: 13px;
    margin-left: 9px;
    float: left;
    color: rgb(240, 228, 228);

}

.barbutton {
    display: inline-block;
    margin-right: 3px;
}
</style>