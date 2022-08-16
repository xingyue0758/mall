<template>
    <div class="detailswiper">
        <Slideshow>
            <SwiperItem v-for="item in topimages ">
            <img :src="item" alt="">
            </SwiperItem>
        </Slideshow>
    </div>
</template>

<script>
import Slideshow from '@/components/common/slideshow/slideshow.vue';
import SwiperItem from '@/components/common/slideshow/SwiperItem.vue';

export default {
    components: {
        Slideshow,
        SwiperItem
    },
    props: {
        topimages: {
            type: Array,
            default() {
                return []
            }
        }
    }
}
</script>

<style>
.detailswiper img {
    width: 100%;
    height: 400px;
}
</style>