<template>

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



</template>
 
<script>
import Swiper from 'swiper'

import { Pagination, Autoplay } from 'swiper'
Swiper.use([Pagination, Autoplay])


export default {
    mounted() {


        new Swiper('.swiper', {
            // 垂直切换选项
            loop: true, // 循环模式选项

            // 如果需要分页器
            pagination: {
                el: '.swiper-pagination',
                clickable: true
            },
            autoplay: {
                delay: 1000,
            }

            // 如果需要前进后退按钮
            // navigation: {
            //     nextEl: '.swiper-button-next',
            //     prevEl: '.swiper-button-prev',
            // },

            // 如果需要滚动条
            // scrollbar: {
            //     el: '.swiper-scrollbar',
            // },
        })
    }

}

</script>


<style>
@import '@/assets/css/swiper-bundle.css';

.swiper img {
    width: 100%;
    height: 200px;
}
</style>