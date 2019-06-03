<template>
    <!--页面主体-->
    <div class="g-container">
        <!--轮播-banner-->
        <div class="m-slider-banner m-norm-banner">
            <swiper :options="swiperOption"
                    ref="mySwiper">
                <!-- slides -->
                <swiper-slide v-for="(item,index) in banner"
                              :key="index">
                    <!-- <a class="oper-pic" :href="item.outLink"> -->
                    <img :src="item">
                    <!-- </a> -->
                </swiper-slide>

                <!-- Optional controls -->
                <div class="swiper-pagination"
                     slot="pagination"></div>
            </swiper>
        </div>
        <div class="m-container m-width">
            <!--面包屑-->
            <div class="crumbs-box">
                <router-link tag="a"
                             class="c-crumbs"
                             :to="{name:'default'}">首页</router-link>
                <span class="c-sep">&gt;</span>
                <span class="c-current">云智库</span>
            </div>
            <!--绿色校园-->
            <div class="grn-box"
                 v-for="(currentItem,c) in schemes"
                 :key="c">
                <div class="common-title">{{currentItem.type}}</div>
                <div class="grn-list">
                    <router-link class="grn-item"
                                 tag="a"
                                 target="_blank"
                                 v-for="(item,i) in currentItem.schemes"
                                 :key="i"
                                 :to="{name:'cloudDetail',params:{id:item.id}}">
                        <div class="grn-item-inner">
                            <div class="grn-pic">
                                <img :src="item.picPath">
                            </div>
                            <div class="grn-hd">
                                <h2>{{item.title}}</h2>
                                <div class="grn-hd-tip">
                                    <span>{{item.series}}</span>
                                </div>
                            </div>
                            <div class="grn-info">{{item.desc}}</div>
                        </div>
                    </router-link>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
import '../../../../html/components/topTab/topTab.scss';
import '../../../../html/components/banner/banner.scss';
import '../../../../html/components/crumbs/crumbs.scss';

import '../../../../html/pages/cloud/cloud/cloud.scss';
import '../../../../html/components/popCommon/popCommon.scss';
import '../../../../html/components/comments/comments.scss';

import { swiper, swiperSlide } from 'vue-awesome-swiper';

import { yzkIndex } from '../../../../api/index';
export default {
    name: 'cloudIndex',
    components: {
        swiper,
        swiperSlide
    },
    data() {
        return {
            swiperOption: {
                pagination: {
                    el: '.swiper-pagination'
                },
                autoplay: {
                    delay: 2000
                }
            },
            banner: [],
            schemes: []
        };
    },
    methods: {
        async getIndex() {
            let res = await yzkIndex();
            if (res.Type == 'Success') {
                this.banner = res.Data.banner;
                this.schemes = res.Data.data;
            }
        }
    },
    created() {
        this.getIndex();
    }
};
</script>

<style>
</style>
