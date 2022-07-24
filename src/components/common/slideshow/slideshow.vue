<template>
    <div>
        <div class="swiper">
            <div class="swiper-wrapper">
                <slot></slot>
            </div>
            <!-- 如果需要分页器 -->
            <div class="swiper-pagination"></div>


            <!-- 如果需要导航按钮 -->
            <!-- <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div> -->

            <!-- 如果需要滚动条 -->
            <!-- <div class="swiper-scrollbar"></div> -->
        </div>
    </div>

</template>
 
<script>
// import '@/components/common/slideshow/swiper-bundle.min.js';
// import { Swiper } from '@/components/common/slideshow/swiper-bundle.min.js';
// var swiper = new Swiper(".mySwiper", {
//     pagination: {
//         el: ".swiper-pagination",
//     },
// });
import Swiper from 'swiper'
import { Pagination, Autoplay } from 'swiper'
Swiper.use([Pagination, Autoplay])
// Swiper.use([Loop])
export default {
    mounted() {
        new Swiper('.swiper', {

            loop: true,


            pagination: {
                el: '.swiper-pagination',
                clickable: true
            },
            autoplay: {
                delay: 1000,


            }
        })
    }




};




</script>


<style>
@import '@/assets/css/swiper-bundle.css';

.swiper img {
    width: 100%;
    height: 200px;
}
</style>