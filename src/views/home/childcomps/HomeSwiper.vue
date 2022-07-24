<template>
    <div>

        <Slideshow>
            <SwiperItem v-for="item in banners.list">
                <a :href="item.link"><img :src="item.image" alt=""></a>
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
</style>