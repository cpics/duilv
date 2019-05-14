<template>
    <div class="cp-column pic-300 cp-swiper">
        <swiper :options="swiperOption">
            <swiper-slide v-for="(img,m) in list"
                          class="cp-item"
                          :key="m">
                <img :src="img" />
                <!-- <img src="../../../../../html/pages/home/images/demo.png" /> -->
            </swiper-slide>
            <div class="swiper-button-prev"
                 slot="button-prev"></div>
            <div class="swiper-button-next"
                 slot="button-next"></div>
        </swiper>
    </div>
</template>

<script>

import 'swiper/dist/css/swiper.css';
import { swiper, swiperSlide } from 'vue-awesome-swiper';
export default {
    name: 'cp-swiper',
    props: ['list'],
    data() {
        return {
            swiperOption: {
                slidesPerView: 3,
                spaceBetween: 30,
                slidesPerGroup: 3,
                loop: true,
                loopFillGroupWithBlank: true,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
            }
        }
    },
    components: {
        swiper,
        swiperSlide
    }
}
</script>

<style>
</style>
