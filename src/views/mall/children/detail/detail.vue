<template>
    <div class="g-container">
        <div class="m-container m-width">
            <!--面包屑-->
            <div class="crumbs-box">
                <router-link tag="a"
                             class="c-crumbs"
                             :to="{name:'mallIndex'}">商城</router-link>
                <span class="c-sep">&gt;</span>
                <span class="c-current">{{detail.title}}</span>
            </div>
            <!--主体-->
            <div class="mall-preview">
                <div class="preview-hd">
                    <div class="preview-picture">
                        <div class="preview-pic">
                            <img :src="activeImg"
                                 alt="" />
                            <!--显示+show-->
                            <div class="zoom-icon"></div>
                        </div>
                        <div class="preview-large-pic">
                            <!--<img src="../../../../html/pages/home/images/demo.png" alt="" />-->
                        </div>
                        <!--滑动小图-->
                        <div class="pre-small-swiper">
                            <swiper :options="swiperOption"
                                    ref="mySwiper">
                                <swiper-slide v-for="(item,index) in detail.images"
                                              :key="index">
                                    <a class="oper-pic"
                                       href="javascript:;">
                                        <img :src="item"
                                             @click="chooseImg(index)">
                                    </a>
                                </swiper-slide>
                            </swiper>
                            <!-- <div class="swiper-container">
                                <div class="swiper-wrapper">
                                    <div class="swiper-slide">
                                        <img src="../../../../html/pages/home/images/demo.png"
                                             alt="" />
                                    </div>
                                    <div class="swiper-slide active">
                                        <img src="../../../../html/pages/home/images/demo.png"
                                             alt="" />
                                    </div>
                                    <div class="swiper-slide">
                                        <img src="../../../../html/pages/home/images/demo.png"
                                             alt="" />
                                    </div>
                                    <div class="swiper-slide">
                                        <img src="../../../../html/pages/home/images/demo.png"
                                             alt="" />
                                    </div>
                                    <div class="swiper-slide">
                                        <img src="../../../../html/pages/home/images/demo.png"
                                             alt="" />
                                    </div>
                                </div>
                            </div> -->
                            <div class="cover-prev"></div>
                            <div class="cover-next"></div>
                        </div>
                    </div>
                    <div class="preview-hd-info">
                        <div class="goods-title">{{detail.title}}</div>
                        <div style="padding-bottom:10px;">{{detail.desc}}</div>
                        <div class="goods-price">
                            <span class="c-label">淘宝价：</span>
                            <span class="c-price">￥{{detail.price}}</span>
                        </div>
                        <div class="goods-classify">
                            <div class="classify-label">分类：</div>
                            <div class="classify-col">
                                <div class="c-cols"
                                     v-for="(item,i) in detail.types"
                                     :key="i">{{item}}</div>
                            </div>
                        </div>
                        <div class="add-cart-btn"
                             @click="gotoTaobao">
                            <i class="cart-icon"></i>去淘宝购买</div>
                    </div>
                </div>
                <div class="goods-preview">
                    <div class="goods-tab-tit">
                        <div class="good-tit">商品详情</div>
                    </div>
                    <div class="goods-preview-inner">
                        <div style="text-align: center;" v-html="detail.content"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import 'swiper/dist/css/swiper.css';
import '../../../../html/components/crumbs/crumbs.scss';
import '../../../../html/pages/mall/details/details.scss';
import { swiper, swiperSlide } from 'vue-awesome-swiper';

import { getMallDetail } from '../../../../api/index.js';
export default {
    name: 'detail',
    components: {
        swiper,
        swiperSlide
    },
    data() {
        return {
            detail: {},
            activeImg: '',
            swiperOption: {
                slidesPerView: 3,
                spaceBetween: 10,
                simulateTouch: false,
                prevButton: '.cover-prev',
                nextButton: '.cover-next',
            }
        };
    },
    methods: {
        async getMallDetail() {
            let res = await getMallDetail({
                id: this.$route.params.id
            });
            if (res.Type == 'Success') {
                // res.Data.type.forEach(item => {
                //     // item.active = false;
                // })
                this.activeImg = res.Data.images[0];
                this.detail = res.Data;
            }
        },
        chooseImg(i) {
            this.activeImg = this.detail.images[i];
        },

        gotoTaobao() {
            window.open(this.detail.taobaoUrl, '_blank'); 

        }
    },
    created() {
        this.getMallDetail();
    }
}
</script>

<style>
</style>
