<template>
    <div class="g-container">
        <!--详情头部-->
        <div class="com-detail-hd">
            <div class="com-hd-inner">
                <div class="com-hd-info">
                    <div class="com-hd-face">
                        <img :src="header.picPath"
                             alt>
                    </div>
                    <div class="com-hd-name">
                        <div class="hd-bottom-td">
                            <div class="hd-name-row">{{header.title}}</div>
                            <!--今日信息-->
                            <div class="hd-name-row">
                                <span>{{header.timeAgo}}</span>
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
                        <span class="cm-sign-btn">签到详情</span>
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

                        <daily v-if="detail.type == '日报'"
                               :detail="detail"></daily>
                        <no-daily v-if="detail.type != '日报'"
                                  :detail="detail"></no-daily>
                        <div class="structure-border">
                            <to-comment @jxjAddReplis="jxjAddReplis"></to-comment>
                            <comment-box :commentList="detail.reps"
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
                             v-if="detail.zjfb && detail.zjfb.length >0">
                            <div class="common-tit-h2">
                                <b>历史日报</b>
                            </div>
                            <div class="his-daily">
                                <div class="his-daily-item"
                                     v-for="(item,i) in detail.zjfb"
                                     :key="i">
                                    <span class="his-time">{{item.createdTime.split(' ')[0]}}</span>
                                    <span class="stroke-tag-circle">{{item.salfState}}</span>
                                </div>
                            </div>
                        </div>
                        <div class="scan-code-quick">
                            <div class="code-quick-pic">
                                <img src="../../../../html/components/comments/images/code1.png"
                                     alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <to-top :isLike="detail.isLike"
                :id="reParams.id"></to-top>
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

import '../../../../html/components/fixBar/fixBar.scss';

import toTop from '../../../../components/to-top/to-top.vue';
import commentBox from '../../../../components/comment-box/comment-box.vue';
import replyComment from '../../../../components/comment-box/reply-comment.vue';
import toComment from '../../../../components/to-comment/to-comment.vue';
// import { swiper, swiperSlide } from 'vue-awesome-swiper';
import daily from './components/daily.vue';
import noDaily from './components/noDaily.vue';
import { getJxjPostDetail, getJxjDetail, getWeather, jxjAddReplis } from '../../../../api';
import stars from '../../../../pubilc/util/stars';
import timeago from '../../../../pubilc/util/timeago';
import hQrcode from '../../../../components/h-qrcode/h-qrcode';
export default {
    name: 'postDetail',
    data() {
        return {
            header: {},
            detail: {},
            weather: '',
            reParams: {
                id: this.$route.params.id,
                repId: '',
                content: ''
            }

        }
    },
    components: {
        commentBox,
        replyComment,
        toComment,
        toTop,
        daily,
        noDaily,
        hQrcode
    },
    methods: {
        async getHeader() {
            let res = await getJxjDetail({
                id: this.$route.query.xid
            });
            if (res.Type == 'Success') {
                res.Data.timeAgo = timeago(new Date(res.Data.creatTime));
                this.header = res.Data;
                // console.log(this.header);
            }
        },

        gotoCreate() {
            if (this.detail.type == 'QE') {
                this.$router.push({ name: 'createQE', params: { id: this.$route.query.xid }, query: { type: 'QE' } })
            } else if (this.detail.type == '周报') {
                this.$router.push({ name: 'createQE', params: { id: this.$route.query.xid }, query: { type: 'ZB' } })
            } else if (this.detail.type == '日报') {
                this.$router.push({ name: 'createDaliy', params: { id: this.$route.query.xid }, query: { title: this.detail.title } })
            } else if (this.detail.type == '普通' || this.detail.type == '图文') {
                this.$router.push({ name: 'createQE', params: { id: this.$route.query.xid }, query: { type: 'ZT' } });
            }
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
        likeFunc() {

        }
    },
    created() {
        this.getHeader();
        this.getWeather();
        this.getData();

    }
}
</script>

<style>
</style>
