<template>
    <div class="g-container">
        <!--图片banner-->
        <div class="m-slider-banner h-banner-400">
            <swiper :options="swiperOption"
                    ref="mySwiper">
                <!-- slides -->
                <swiper-slide v-for="(item,index) in detail.banner"
                              :key="index">
                    <a class="oper-pic"
                       :style="{backgroundImage:'url(' + item + ')'}"
                       :href="item.outLink">
                    </a>
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
                <router-link tag="a"
                             class="c-crumbs"
                             :to="{name:'caseIndex'}">案例库</router-link>

                <span class="c-sep">&gt;</span>
                <span class="c-current">{{detail.title}}</span>
            </div>
            <!--案例详情-->
            <div class="g-case-detail">
                <div class="case-detail-cols">
                    <div class="common-title">{{detail.title}}</div>
                    <div class="case-detail-txt">{{detail.desc}}</div>
                </div>
                <div class="case-detail-cols">
                    <div class="case-common-title">
                        <i class="case-title-icon project"></i>
                        工程概况
                    </div>
                    <div class="case-detail-txt">
                        <p>工程质量：{{detail.quality}}</p>
                        <p>工程规模：{{detail.scale}}</p>
                        <p>工程周期：{{detail.cycle}}</p>
                    </div>
                </div>
                <!--联合质保书-->
                <div class="case-detail-cols"
                     v-if="detail.warrantys && detail.warrantys.length>0">
                    <div class="case-common-title">
                        <i class="case-title-icon quality"></i>
                        联合质保书
                    </div>
                    <div class="quality-pic-list">
                        <div class="qua-pic-item" 
                             @click="openPopImgList(index)"
                             v-for="(item,index) in detail.warrantys"
                             :key="index">
                            <img :src="'https://www.iduilv.com/'+item"
                                 alt>
                        </div>
                    </div>
                </div>
                <!--产品名称-->
                <div class="case-detail-cols">
                    <div class="case-common-title">
                        <i class="case-title-icon product"></i>
                        产品名称
                    </div>
                    <div class="case-pro-list">
                        <ul>
                            <li v-for="(item,index) in detail.product"
                                :key="index">
                                <div class="case-pro-pic">
                                    <img :src="item.picPath"
                                         alt>
                                </div>
                                <div class="case-pro-info">
                                    <h2>{{item.title}}</h2>
                                    <div class="case-pro-txt">{{item.desc}}</div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <!--项目回顾-->
                <div class="case-detail-cols">
                    <div class="case-common-title">
                        <i class="case-title-icon review"></i>
                        项目回顾
                        <!-- <a
              class="more-case-btn"
              href="../../../../html/pages/cases/trace/trace.html"
            >查看全部&gt;</a>-->
                        <router-link tag="a"
                                     class="more-case-btn"
                                     target="_blank"
                                     :to="{name:'caseTrace',params:{id:detail.id}}">查看全部&gt;</router-link>
                    </div>
                    <div class="review-content">
                        <div class="review-box-items"
                             v-for="(item,index) in detail.xmhg"
                             :key="index">
                            <h2 class="review-tit">{{item.title}}</h2>
                            <div class="review-txt">{{item.content}}</div>
                            <div class="cp-column hover-scale">
                                <div class="cp-item"
                                     v-for="(pic,i) in item.picPath"
                                     :key="i">
                                    <img :src="pic"
                                         alt>
                                </div>
                            </div>
                            <div class="comment-box"
                                 v-if="item.reps.length>0">
                                <div class="comment-title">
                                    <i class="msg-icon"></i>
                                    最新评论
                                </div>
                                <div class="comment-list">
                                    <ul>
                                        <li v-for="(rep,r) in item.reps"
                                            :key="r">
                                            <div class="comment-face">
                                                <img :src="rep.headImage"
                                                     alt>
                                            </div>
                                            <div class="comment-info">
                                                <div class="comment-name">{{rep.nickName}}</div>
                                                <div class="comment-msg">{{rep.content}}</div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="case-detail-cols"
                     v-if="detail.hxzz && detail.hxzz.length>0">
                    <div class="case-common-title">
                        <i class="case-title-icon trace"></i>
                        后续追踪
                    </div>
                    <div class="trace-d-list">
                        <ul>
                            <li v-for="(item,index) in detail.hxzz"
                                :key="index">
                                <router-link tag="a"
                                             target="_blank"
                                             :to="{name:'jxjDetail',params:{id:item.id}}">
                                    <a class="trace-pic">
                                        <img :src="item.picPath"
                                             alt>
                                    </a>
                                    <a class="trace-tit">{{item.title}}</a>
                                    <div class="trace-handle">
                                        <a class="th-col">游览：{{item.hits}}</a>
                                        <a class="th-col">点赞:{{item.likes}}</a>
                                    </div>
                                </router-link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="shadow-fixed show"
             v-if="currentImgShow">
            <div class="mask"></div>
            <div class="bomb-com-box full-bomb">
                <div class="bomb-small-close"
                     @click="closePopimglist"></div>
                <div class="qe-view-detail">
                    <div class="cp-column cp-bomb-full cp-swiper">

                        <swiper :options="swiperOption3">

                            <swiper-slide v-for="(item,index) in currentImgList"
                                          :key="index">
                                <img :src="'https://www.iduilv.com/'+item">
                            </swiper-slide>
                            <div class="swiper-button-prev"
                                 slot="button-prev"></div>
                            <div class="swiper-button-next"
                                 slot="button-next"></div>
                        </swiper>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import 'swiper/dist/css/swiper.css';
import '../../../../html/pages/cases/details/details.scss';
import '../../../../html/components/picture/picture.scss';
import '../../../../html/components/comments/comments.scss';

import { getCaseDetail } from '../../../../api/index';
import { swiper, swiperSlide } from 'vue-awesome-swiper';
export default {
    name: 'case-detail',
    components: {
        swiper,
        swiperSlide
    },
    data() {
        return {
            detail: {},
            swiperOption: {
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true
                },
                autoplay: {
                    delay: 8000
                }
            },
            currentImgShow: false,
            swiperOption3: {
                initialSlide: 0,
                simulateTouch: false,
                loop: true,
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev'
                }

            },
            currentImgList: [

            ]
        };
    },
    methods: {
        openPopImgList(i) {
            this.swiperOption3.initialSlide = i;
            // console.log(this.currentImgList);
            this.currentImgShow = true;

        },
        closePopimglist() {
            this.currentImgShow = false;
        },
        async getDetail() {
            let res = await getCaseDetail({
                id: this.$route.params.id
            });
            if (res.Type == 'Success') {
                this.detail = res.Data;
                if (res.Data.warrantys) {
                    this.currentImgList = res.Data.warrantys
                }
            }
        }
    },
    created() {
        console.log(1);
        this.getDetail();
    }
};
</script>

<style>
</style>
