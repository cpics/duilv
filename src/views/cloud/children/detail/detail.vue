<template>
    <div class="g-container">
        <div class="m-norm-banner"
             v-if="detail.topVedio !=''">
            <div class="video-box">
                <video muted
                       ref="topVideo"
                       class="video-area"
                       autoplay
                       :poster="detail.topBgimg"
                       controls="true">
                       <!-- <source :src="detail.topVedio"
                            type="video/mp4"> -->

                </video>
                <!--播放按钮 显示 +show-->
                <i class="video-icon"></i>
            </div>
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
                             :to="{name:'cloudIndex'}">云智库</router-link>

                <span class="c-sep">&gt;</span>
                <span class="c-current">{{detail.title}}</span>
            </div>
            <!--详情-->
            <div class="cloud-d-content">
                <!--滚动固定时 +fixation-->
                <div class="m-slide-bar"
                     :class="{'fixation':isNowfixation}">
                    <!--选中显示内容 +active-->
                    <div class="u-slide-item"
                         :class="{'active':ff==1}">
                        <div class="u-slide-tit"
                             @click="showCate(1)">
                            <i class="slide-icon attentions"></i>
                            <p class="us-tit">注意事项</p>
                        </div>
                        <!--注意事项-->
                        <div class="m-slide-bomb">
                            <div class="slide-close-icon"
                                 @click="showCate(1)"></div>
                            <div class="m-bomb-cloud">
                                <div class="u-question-dispose">
                                    <div class="uqd-items"
                                         v-for="(item,i) in detail.precaution"
                                         :key="i">
                                        <div class="uqd-row">
                                            <i class="uqd-icon question"></i>
                                            <div class="uqd-info">
                                                <p v-html="item.problem"></p>
                                            </div>
                                        </div>
                                        <div class="uqd-row">
                                            <i class="uqd-icon dispose"></i>
                                            <div class="uqd-info">
                                                <p>处理方法：{{item.approach}}</p>
                                            </div>
                                        </div>
                                        <!--图片高度不固定 + h-auto-->
                                        <div class="cp-column h-auto big-pic"
                                             v-if="item.images.length >0">
                                            <div class="cp-item"
                                                 v-for="(img,m) in item.images"
                                                 :key="m">
                                                <img :src="img">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!--选中显示内容 +active-->
                    <div class="u-slide-item"
                         :class="{'active':ff==2}">
                        <div class="u-slide-tit"
                             @click="showCate(2)">
                            <i class="slide-icon products"></i>
                            <p class="us-tit">产品信息</p>
                        </div>
                        <!--产品信息-->
                        <div class="m-slide-bomb">
                            <div class="slide-close-icon"
                                 @click="showCate(2)"></div>
                            <div class="m-bomb-cloud">
                                <div class="u-products-article"
                                     v-html="detail.product"></div>
                            </div>
                        </div>
                    </div>
                    <!--选中显示内容 +active-->
                    <div class="u-slide-item"
                         :class="{'active':ff==3}">
                        <div class="u-slide-tit"
                             @click="showCate(3)">
                            <i class="slide-icon cases"></i>
                            <p class="us-tit">相关案例</p>
                        </div>
                        <!--相关案例-->
                        <div class="m-slide-bomb">
                            <div class="slide-close-icon"
                                 @click="showCate(3)"></div>
                            <div class="m-bomb-cloud">
                                <div class="u-related-case">
                                    <div class="related-tab">
                                        <b :class="{'active':xgalIndex == 1}"
                                           @click="chooseXgal(1)">往期案例</b>
                                        <span>|</span>
                                        <b :class="{'active':xgalIndex == 2}"
                                           @click="chooseXgal(2)">现有案例</b>
                                    </div>
                                    <div class="related-main">
                                        <!--往期案例 显示 +show-->
                                        <div class="related-box show"
                                             v-if="xgalIndex == 1 && detail.xgal">
                                            <div class="related-list">
                                                <ul>
                                                    <li v-for="(item,i) in detail.xgal.wqal"
                                                        :key="i">
                                                        <router-link tag="a"
                                                                     target="_blank"
                                                                     :to="{name:'cloudDetail',params:{id:item.id}}">
                                                            <div class="related-pic">
                                                                <img :src="item.picPath"
                                                                     alt>
                                                            </div>
                                                            <div class="related-info">
                                                                <h2>{{item.title}}</h2>
                                                                <div class="related-txt">
                                                                    {{item.desc}}
                                                                </div>
                                                                <div class="related-tipper">
                                                                    <span class="related-tip"
                                                                          v-if="item.hasReport">质量检测报告</span>
                                                                    <span class="related-tip"
                                                                          v-if="item.hasWarranty">联合质保书</span>
                                                                    <span class="related-tip"
                                                                          v-if="item.hasTracking">项目追踪</span>
                                                                </div>
                                                            </div>
                                                        </router-link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <!--现有案例 显示 +show-->
                                        <div class="related-box show"
                                             v-if="xgalIndex == 2">
                                            <div class="now-case-list">
                                                <ul>
                                                    <li v-for="(item,i) in detail.xgal.xyPro"
                                                        :key="i">
                                                        <router-link tag="a"
                                                                     target="_blank"
                                                                     :to="{name:'cloudDetail',params:{id:item.id}}">
                                                            <div class="n-case-pic">
                                                                <img :src="item.picPath"
                                                                     alt>
                                                            </div>
                                                            <div class="n-case-txt">{{item.title}}</div>
                                                        </router-link>
                                                    </li>

                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!--详情内容-->
                <div class="cloud-d-box">
                    <h1 class="cloud-d-tit">{{detail.title}}</h1>
                    <div class="cloud-d-inner">
                        <div class="cloud-d-information">
                            <div :id="'anchor'+i"
                                 class="cloud-d-item"
                                 v-for="(item,i) in detail.schemeItem"
                                 :key="i">
                                <div class="cloud-d-headline">
                                    <h2>{{item.title}}</h2>
                                    <span class="video-play-btn"
                                          @click="openPopVideo(item.vedio)"
                                          v-if="item.vedio">
                                        <i class="arrow-b-right"></i>
                                        <span>视频</span>
                                    </span>
                                </div>
                                <div v-for="(c,a) in item.content"
                                     :key="a">
                                    <article class="cloud-d-article">
                                        <div>{{c.title}}</div>
                                        <p v-html="c.content"></p>
                                    </article>
                                    <!--鼠标移上图片变大 + hover-scale-->
                                    <!--图片高度不固定 + h-auto-->
                                    <div class="cp-column hover-scale"
                                         v-if="c.images.length>0">
                                        <div class="cp-item"
                                             v-for="(img,m) in c.images"
                                             :key="m">
                                            <img :src="img">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!--滚动时固定 +fixation-->
                        <div class="m-slide-nav"
                             :class="{'fixation':isSlidefixation}">
                            <div class="u-s-nav-items">
                                <ul>
                                    <li :class="{'active':i == iii}"
                                        v-for="(item,i) in detail.schemeItem"
                                        :key="i">
                                        <a @click="goto(i)">{{item.title}}</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!--回到顶部+评论-->
        <div class="m-fix-bar">
            <!--选中 +active-->
            <div class="u-fix-item"
                 @click="openPopComment">
                <i class="fix-big-icon comment-b-icon"></i>
                <p>评论</p>
            </div>
            <div class="u-fix-item scroll-top"
                 @click="toTop">
                <i class="scroll-top-icon"></i>
            </div>
        </div>
        <!--视频弹框 显示 +show-->
        <div class="shadow-fixed show"
             v-show="popVideoDir">
            <div class="mask"></div>
            <div class="bomb-com-box">
                <div class="bomb-small-close"
                     @click="closePopVideo"></div>
                <div class="bomb-video-box">

                    <video muted
                           ref="popVideo"
                           class="video-area"
                           autoplay
                           controls="true">
                           <!-- <source :src="detail.topVedio"
                            type="video/mp4"> -->

                    </video>
                    <!--播放按钮 显示 +show-->
                    <i class="video-icon"></i>
                </div>
            </div>
        </div>
        <!--评论弹框-->
        <div class="shadow-fixed show"
             v-if="popCommentDir">
            <div class="mask"></div>
            <div class="bomb-com-box">
                <div class="bomb-small-close"
                     @click="closePopComment"></div>
                <div class="">
                    <to-comment @jxjAddReplis="yzkAddReplis"></to-comment>
                    <comment-box :commentList="detail.reps"
                                 :replyBtnDir="false">
                    </comment-box>
                </div>
            </div>
        </div>
        <!--loading-->
        <div class="shadow-fixed show"
             v-if="loadingDir">
            <div class="mask-transparent"></div>
            <div class="g-loading">
                <div class="loading-icon"></div>
                <div class="load-txt">正在加载...</div>
            </div>
        </div>
    </div>
</template>

<script>
import '../../../../html/components/topTab/topTab.scss';
import '../../../../html/components/banner/banner.scss';
import '../../../../html/components/crumbs/crumbs.scss';

import '../../../../html/components/slideBar/slideBar.scss';
import '../../../../html/components/picture/picture.scss';
import '../../../../html/components/fixBar/fixBar.scss';
import '../../../../html/pages/cloud/details/details.scss';

import '../../../../html/components/popCommon/popCommon.scss';
import '../../../../html/components/comments/comments.scss';
import '../../../../html/components/cases/cases.scss';

import timeago from '../../../../pubilc/util/timeago';

import commentBox from '../../../../components/comment-box/comment-box.vue';
import replyComment from '../../../../components/comment-box/reply-comment.vue';
import toComment from '../../../../components/to-comment/to-comment.vue';



import { yzkDetail, yzkAddReplis, yzkGetReplis } from '../../../../api/index';
import { createHash } from 'crypto';
import { setTimeout } from 'timers';
export default {
    name: 'cloudDetail',
    components: {
        commentBox,
        replyComment,
        toComment
    },
    data() {
        return {
            loadingDir: false,
            popCommentDir: false,
            xgalIndex: 1,
            popVideoDir: false,
            currentVideo: '',
            detail: {},
            iii: 0,
            isSlidefixation: false,
            isNowfixation: false,
            offsetTopArr: [],
            ff: 0,
            reParams: {
                id: this.$route.params.id,
                repId: '',
                content: ''
            },
        };
    },
    methods: {
        chooseXgal(index) {
            this.xgalIndex = index;
        },
        closePopComment() {
            this.popCommentDir = false;
        },
        openPopComment() {
            this.popCommentDir = true;
        },
        async yzkAddReplis(content, repId) {
            this.reParams.content = content;
            if (repId) {
                this.reParams.repId = repId;
            } else {
                this.reParams.repId = '';
            }
            let res = await yzkAddReplis(this.reParams);
            if (res.Type == 'Success') {
                this.$layer.alert(res.Content);
                this.yzkGetReplis();
            } else {
                this.$layer.alert(res.Content);
            }
        },
        async yzkGetReplis() {
            let res = await yzkGetReplis({ id: parseInt(this.$route.params.id) })
            if (res.Type == 'Success') {
                res.Data.forEach(item => {
                    item.showReplay = false;
                    item.timeAgo = timeago(new Date(item.createdTime));
                })
                this.detail.reps = res.Data;
            } else {
                this.$layer.alert(res.Content);
            }
        },
        showReplayFunc(index) {
            this.detail.reps[index].showReplay = !this.detail.reps[index].showReplay;
        },
        toTop() {
            document.documentElement.scrollTop = 0;
            this.iii = 0;

        },
        openPopVideo(vedio) {
            this.currentVideo = '//www.iduilv.com' + vedio;
            // console.log(this.currentVideo);

            this.popVideoDir = true;
            this.$refs.popVideo.src = this.currentVideo;
            this.$refs.popVideo.play();

        },
        closePopVideo() {
            this.$refs.popVideo.pause();
            this.popVideoDir = false;
        },
        async getDetail() {
            let res = await yzkDetail({
                id: this.$route.params.id
            });
            if (res.Type == 'Success') {

                res.Data.topVedio = '//www.iduilv.com' + res.Data.topVedio;
                this.$refs.topVideo.src = res.Data.topVedio;
                this.$refs.topVideo.play();
                res.Data.schemeItem.forEach(item => {
                    item.content.forEach(c => {
                        c.content = c.content.replace(/\r\n/g, '<br />');
                    });
                    res.Data.precaution.forEach(item => {
                        item.problem =
                            '问题' + item.problem.replace(/\r\n/g, '<br />');
                    });
                    // console.log(item.content);
                });
                res.Data.reps.forEach(item => {
                    item.showReplay = false;
                    item.timeAgo = timeago(new Date(item.createdTime));
                })
                this.detail = res.Data;
            }
        },
        goto(i) {
            this.loadingDir = true;
            setTimeout(() => {
                this.iii = i;
                let offsetTop = document.querySelector('#anchor' + i).offsetTop;
                // console.log(offsetTop);
                // document.body.scrollTop = offsetTop;
                // window.pageYOffset = offsetTop;
                document.documentElement.scrollTop = offsetTop;

                this.loadingDir = false;
            }, 500);
        },
        showCate(i) {
            if (this.ff == i) {
                this.ff = 0;
            } else {
                this.ff = i;
            }
        },
        handleScroll() {
            this.$nextTick(() => {
                setTimeout(() => {
                    let scrollTop =
                        window.pageYOffset ||
                        document.documentElement.scrollTop ||
                        document.body.scrollTop;
                    console.log(scrollTop);
                    if (scrollTop >= 360) {
                        this.isNowfixation = true;
                    } else {
                        this.isNowfixation = false;
                    }
                    if (scrollTop >= 440) {
                        this.isSlidefixation = true;
                    } else {
                        this.isSlidefixation = false;
                    }
                    if (this.offsetTopArr.length == 0) {
                        this.detail.schemeItem.forEach((item, i) => {
                            let offsetTop = document.querySelector(
                                '#anchor' + i
                            ).offsetTop;
                            this.offsetTopArr.push(offsetTop);
                        });
                        console.log(this.offsetTopArr);
                    }
                    this.offsetTopArr.forEach((item, i) => {
                        if (scrollTop >= 440) {
                            if (
                                scrollTop >= item &&
                                (i + 1 == this.offsetTopArr.length ||
                                    scrollTop < this.offsetTopArr[i + 1])
                            ) {
                                this.iii = i;
                            }
                        }
                    });
                }, 50);
            });
        }
    },
    created() {
        document.getElementsByTagName('body')[0].className ='bg-page-grey';
        this.getDetail();
        
    },
    mounted() {
        window.addEventListener('scroll', this.handleScroll);
    },
    destroyed() {
        document.getElementsByTagName('body')[0].className="";
        window.removeEventListener('scroll', this.handleScroll);
    }
};
</script>

<style>
</style>
