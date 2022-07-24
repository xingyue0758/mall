<template>
    <div class="wrapper">
        <div class="content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
import BSscroll from 'better-scroll'
export default {
    data() {
        return {
            scroll: null
        }
    },
    props: {
        probT: {
            type: Number,
            default() {
                return 0
            }
        },
        pullUpLoad: {
            type: Boolean,
            default() {
                return false
            }
        }
    },
    mounted() {
        this.scroll = new BSscroll('.wrapper', {
            observeDOM: true,
            click: true,
            probeType: this.probT,
            pullUpLoad: this.pullUpLoad

        });
        this.scroll.scrollTo(0, 0);
        this.scroll.on('scroll', (popo) => {
            this.$emit('scroll', popo)
        });
        this.scroll.on('pullingUp',()=>{
            this.$emit('pullingUp')
        });



    },
    methods:{
        finishPullUp(){
            this.scroll.finishPullUp()
        }
    }
}
</script>

<style>
/* .content{
    position: relative;
} */
</style>