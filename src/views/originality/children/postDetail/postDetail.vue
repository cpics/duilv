<template>
    <div class="g-container">
        <!--详情头部-->
        <div class="com-detail-hd">
            <div class="com-hd-inner">
                <div class="com-hd-info">
                    <div class="com-hd-face">
                        <img :src="detail.proImage"
                             alt>
                    </div>
                    <div class="com-hd-name">
                        <div class="hd-bottom-td">
                            <div class="hd-name-row">{{detail.title}}</div>
                            <!--今日信息-->
                            <div class="hd-name-row">
                                <span>{{detail.timeAgo}}</span>
                                <!-- <span>{{header.now}}</span> -->
                                <span>{{header.dayOfWeek}}</span>
                                <span>天气：{{weather}}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <!--右侧操作-->
                <div class="com-hd-handle">
                    <div class="hd-bottom-td">
                        <span class="cm-sign-btn"
                              @click="openQiandao">签到详情</span>
                        <h-qrcode></h-qrcode>
                    </div>
                </div>
            </div>
        </div>
        <div class="m-container m-width">
            <!--面包屑-->
            <div class="crumbs-box">
                <router-link tag="a"
                             class="c-crumbs"
                             :to="{name:'default'}">首页</router-link>
                <span class="c-sep">&gt;</span>
                <span class="c-current">匠心记</span>
                <span class="c-sep">&gt;</span>
                <span class="c-current">{{detail.title}}</span>
            </div>
            <!--主体-->
            <div class="daily-content">
                <div class="m-structure-content">
                    <div class="m-structure-information">

                        <daily @openPopImgList="openPopImgList"
                               v-if="detail.type == '日报'"
                               :detail="detail"></daily>
                        <no-daily @openPopImgList="openPopImgList"
                                  v-if="detail.type != '日报'"
                                  :detail="detail"></no-daily>
                        <div class="structure-border"
                             id="toCommentBox">
                            <to-comment @jxjAddReplis="jxjAddReplis"></to-comment>
                            <comment-box :commentList="detail.reps"
                                         :replyBtnDir="true"
                                         @showReplayFunc="showReplayFunc">
                                <template scope="props">

                                    <reply-comment :replyId="props.rowdata.id"
                                                   @jxjAddReplis="jxjAddReplis"></reply-comment>
                                </template>
                            </comment-box>
                        </div>
                    </div>
                    <div class="m-structure-quick">
                        <div class="structure-btn"
                             @click="gotoCreate">发布内容</div>
                        <div class="structure-box"
                             v-if="detail.postUser">
                            <div class="com-md-face">
                                <img :src="detail.postUser.headImage"
                                     alt="">
                            </div>
                            <div class="str-row">
                                <span class="str-label">{{detail.postUser.type}}</span>
                                <i class="star-icon"
                                   :class="detail.postUser.starClass"></i>
                            </div>
                            <div class="str-row">
                                <span class="str-name">{{detail.postUser.nickName}}</span>
                                <span class="str-tag-icon">{{detail.postUser.tags[0]}}</span>
                            </div>
                        </div>
                        <div class="structure-box pd-small"
                             v-if="detail.likeImgs && detail.likeImgs.length > 0">
                            <div class="like-people-like">
                                <div class="lik-list">
                                    <div class="lik-face"
                                         v-for="(item,i) in detail.likeImgs"
                                         :key="i">
                                        <img :src="item"
                                             alt="">
                                    </div>

                                </div>
                                <div class="lik-more-tipper">
                                    ...等{{detail.likeImgs.length}}人点赞
                                </div>
                            </div>
                        </div>
                        <div class="structure-box"
                             v-if="detail.zjfb && detail.zjfb.length >0 && detail.type == 'QE'">
                            <div class="common-tit-h2">
                                <b>最近发布报告</b>
                            </div>
                            <div class="nearly-report">
                                <div class="nearly-row"
                                     v-for="(item,i) in detail.zjfb"
                                     :key="i">
                                    <router-link tag="a"
                                                 :to="{name:'jxjPostDetail',params:{id:item.id}}">{{item.title}}</router-link>
                                    <p>{{item.createdTime.split(' ')[0]}}</p>
                                </div>

                            </div>
                        </div>
                        <div class="structure-box"
                             v-if="detail.zjfb && detail.zjfb.length >0 && detail.type == '图文'">
                            <div class="common-tit-h2">
                                <b>最近主题</b>
                            </div>
                            <div class="nearly-report">
                                <div class="nearly-row"
                                     v-for="(item,i) in detail.zjfb"
                                     :key="i">
                                    <router-link tag="a"
                                                 :to="{name:'jxjPostDetail',params:{id:item.id}}">{{item.title}}</router-link>
                                    <p>{{item.createdTime.split(' ')[0]}}</p>
                                </div>

                            </div>
                        </div>
                        <div class="structure-box"
                             v-if="detail.zjfb && detail.zjfb.length >0 && detail.type == '周报'">
                            <div class="common-tit-h2 has-line">
                                <i class="weekly-icon">周</i>
                                <b>往期周报</b>
                            </div>
                            <div class="history-weekly-report">
                                <div class="weekly-item"
                                     v-for="(item,i) in detail.zjfb"
                                     :key="i">
                                    <div class="weekly-face">
                                        <img :src="item.headImage"
                                             alt="" />
                                    </div>
                                    <div class="weekly-info">
                                        <router-link tag="a"
                                                     :to="{name:'jxjPostDetail',params:{id:item.id}}"
                                                     class="weekly-name">{{item.title}}</router-link>
                                        <div class="weekly-time">{{item.createdTime.split(' ')[0]}}}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="structure-box"
                             v-if="detail.zjfb && detail.zjfb.length >0 && detail.type == '日报'">
                            <div class="common-tit-h2">
                                <b>历史日报</b>
                            </div>
                            <div class="his-daily">

                                <router-link class="his-daily-item"
                                             :to="{name:'jxjPostDetail',params:{id:item.id}}"
                                             v-for="(item,i) in detail.zjfb"
                                             :key="i">

                                    <span class="his-time">{{item.timeStr}}</span>
                                    <span class="stroke-tag-circle">{{item.salfState}}</span>
                                </router-link>
                            </div>
                        </div>
                        <div class="scan-code-quick">
                            <div class="code-quick-pic">
                                <qrcode-vue :value="localHref"
                                            :size="140"
                                            level="H"></qrcode-vue>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <d-qiandao v-if="qiandaoDir"
                   @close="closeQiandao"></d-qiandao>
        <to-top :isLike="detail.isLike"
                @likeFunc="likeFunc"
                :id="reParams.id"></to-top>

        <div class="shadow-fixed show"
             v-if="currentImgShow">
            <div class="mask"></div>
            <div class="bomb-com-box full-bomb">
                <div class="bomb-small-close"
                     @click="closePopimglist"></div>
                <div class="qe-view-detail">
                    <div class="cp-column cp-bomb-full cp-swiper">

                        <swiper :options="swiperOption">
                            <swiper-slide v-for="(item,index) in currentImgList"
                                          :key="index">
                                <img :src="item">
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
import '../../../../html/components/crumbs/crumbs.scss';
import '../../../../html/components/detailHd/detailHd.scss';
import '../../../../html/components/tabs/tabs.scss';

import '../../../../html/components/structure/structure.scss';
import '../../../../html/components/enterprise/enterprise.scss';
import '../../../../html/components/picture/picture.scss';
import '../../../../html/components/comments/comments.scss';

import '../../../../html/pages/originality/daily/daily.scss';
import '../../../../html/pages/originality/qe/qe.scss';

import '../../../../html/components/fixBar/fixBar.scss';

import toTop from '../../../../components/to-top/to-top.vue';
import dQiandao from '../detail/components/d-qiandao';
import commentBox from '../../../../components/comment-box/comment-box.vue';
import replyComment from '../../../../components/comment-box/reply-comment.vue';
import toComment from '../../../../components/to-comment/to-comment.vue';
import { swiper, swiperSlide } from 'vue-awesome-swiper';
import daily from './components/daily.vue';
import noDaily from './components/noDaily.vue';
import { getJxjPostDetail, getJxjDetail, getWeather, jxjAddReplis } from '../../../../api';
import stars from '../../../../pubilc/util/stars';
import timeago from '../../../../pubilc/util/timeago';
import hQrcode from '../../../../components/h-qrcode/h-qrcode';

import QrcodeVue from 'qrcode.vue';

export default {
    name: 'postDetail',
    data() {
        return {
            localHref: location.href,
            currentImgShow: false,
            qiandaoDir: false,
            header: {},
            detail: {},
            weather: '',
            reParams: {
                id: this.$route.params.id,
                repId: '',
                content: ''
            },
            swiperOption: {
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

        }
    },
    components: {
        swiper,
        swiperSlide,
        commentBox,
        replyComment,
        toComment,
        toTop,
        daily,
        noDaily,
        hQrcode,
        dQiandao,
        QrcodeVue
    },
    methods: {
        // async getHeader() {
        //     let res = await getJxjDetail({
        //         id: this.$route.query.xid
        //     });
        //     if (res.Type == 'Success') {
        //         res.Data.timeAgo = timeago(new Date(res.Data.creatTime));
        //         this.header = res.Data;
        //         // console.log(this.header);
        //     }
        // },
        openPopImgList(imgList,index) {
            
            this.currentImgList = imgList;
            this.swiperOption.initialSlide = index;
            this.currentImgShow = true;

        },
        closePopimglist() {
            this.currentImgShow = false;
        },
        gotoCreate() {
            if (this.detail.type == 'QE') {
                this.$router.push({ name: 'createQE', params: { id: this.detail.id }, query: { type: 'QE' } })
            } else if (this.detail.type == '周报') {
                this.$router.push({ name: 'createQE', params: { id: this.detail.id }, query: { type: 'ZB' } })
            } else if (this.detail.type == '日报') {
                this.$router.push({ name: 'createDaliy', params: { id: this.detail.id }, query: { title: this.detail.title } })
            } else if (this.detail.type == '普通' || this.detail.type == '图文') {
                this.$router.push({ name: 'createQE', params: { id: this.detail.id }, query: { type: 'ZT' } });
            }
        },
        closeQiandao() {
            this.qiandaoDir = false;
        },
        openQiandao() {
            this.qiandaoDir = true;
        },
        async getData() {
            let res = await getJxjPostDetail({
                id: this.$route.params.id
            });

            if (res.Type == 'Success') {
                res.Data.timeAgo = timeago(new Date(res.Data.createdTime));
                if (res.Data.postUser) {
                    res.Data.postUser.starClass = stars(res.Data.postUser.star);
                }
                res.Data.zjfb.forEach(item => {
                    item.timeAgo = timeago(new Date(item.createdTime));
                    let ti = item.createdTime.split(' ')[0].split('-');
                    item.timeStr = ti[0] + '年' + ti[1] + '月' + ti[2] + '日';
                });
                res.Data.reps.forEach(item => {
                    item.showReplay = false;
                    item.timeAgo = timeago(new Date(item.createdTime));
                })
                this.detail = res.Data;
            } else {
                this.$layer.alert(res.Content);
            }

        },
        async getWeather() {
            let res = await getWeather({
                city: '苏州'
            });
            if (res.Type == 'Success') {
                this.weather = res.Data;
            }
        },
        async jxjAddReplis(content, repId) {
            this.reParams.content = content;
            if (repId) {
                this.reParams.repId = repId;
            } else {
                this.reParams.repId = '';
            }
            let res = await jxjAddReplis(this.reParams);
            if (res.Type == 'Success') {
                this.$layer.alert(res.Content);
                this.getData();
            } else {
                this.$layer.alert(res.Content);
            }
        },
        showReplayFunc(index) {
            // debugger;
            this.detail.reps[index].showReplay = !this.detail.reps[index].showReplay;
        },
        //点赞
        likeFunc(type) {
            if (type == 1) {
                this.detail.isLike++;
            } else if (type == 2) {
                this.detail.isLike--;
            }
        }
    },
    created() {
        // this.getHeader();
        this.getWeather();
        this.getData();

    },
    watch: {
        $route(to, from) {
            this.getWeather();
            this.getData();
        }
    }
}
</script>

<style>
</style>
