<template>
    <div>

        <Slideshow class="slideshow">
            <SwiperItem v-for="item in banners.list">
                <a :href="item.link"><img :src="item.image" alt="" @load="imageload"></a>
            </SwiperItem>
        </Slideshow>

    </div>
</template>

<script>
import Slideshow from '@/components/common/slideshow/slideshow.vue';
import SwiperItem from '@/components/common/slideshow/SwiperItem.vue';

export default {
    methods: {
        imageload() {
            if (!this.isload) {
                this.$emit('swiperimageload');
                this.isload = true
            }
        }
    },
   
    data() {
        return {
            isload: false
        }
    },
    components: {

        Slideshow,
        SwiperItem
    },
    props: {
        banners: {
            type: Object,
            default() {
                return {}
            }
        }
    }

}
</script>

<style>
.slideshow {
    width: 100%;
    height: 200px;
}
</style>