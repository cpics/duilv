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
                        <!--<span class="share-wechat-btn">分享：<i class="u-wechat-icon"></i></span>-->
                    </div>
                </div>
            </div>
        </div>
        <div class="m-container m-width">
            <!--面包屑-->
            <div class="crumbs-box">
                <a class="c-crumbs"
                   href="">首页</a>
                <span class="c-sep">&gt;</span>
                <a class="c-crumbs"
                   href="">匠心记</a>
                <span class="c-sep">&gt;</span>
                <span class="c-current">{{detail.title}}</span>
            </div>
            <!--主体-->
            <div class="daily-content">
                <div class="m-structure-content">
                    <div class="m-structure-information">
                        <div class="common-tit-space">
                            <div class="common-title">
                                {{detail.timeAgo}}
                                <span class="small-txt">{{detail.weather}}</span>
                            </div>
                        </div>
                        <div class="m-prise-content">
                            <div class="e-prise-box">
                                <div class="prise-article">
                                    <!-- <div class="prise-art-name">
                                        <b>项目进度</b>
                                    </div> -->
                                    <div class="prise-art-txt"
                                         v-if="!detail.isNewPost">
                                        <div v-html="detail.content"></div>
                                    </div>
                                    <div v-if="detail.isNewPost"
                                         v-for="(item,i) in detail.postData"
                                         :key="i">
                                        <div class="prise-art-txt"
                                             v-if="item.type=='文字'">
                                            {{item.content}}
                                        </div>
                                        <div class="cp-column pic-300 cp-swiper"
                                             v-if="item.type=='图片'">
                                            <div class="swiper-container">
                                                <div class="swiper-wrapper">
                                                    <div class="swiper-slide cp-item">
                                                        <img :src="item.content"
                                                             alt="" />
                                                    </div>
                                                </div>
                                                <!-- <div class="swiper-button-next"
                                                 tabindex="0"
                                                 role="button"
                                                 aria-label="Next slide"></div>
                                            <div class="swiper-button-prev"
                                                 tabindex="0"
                                                 role="button"
                                                 aria-label="Previous slide"></div> -->
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="e-prise-box"
                                 v-if="detail.type == '日报'">
                                <div class="daily-project">
                                    <div class="daily-pro-left">
                                        <dl class="daily-pro-row">
                                            <dt>项目名称</dt>
                                            <dd>{{detail.title}}</dd>
                                        </dl>
                                        <dl class="daily-pro-row">
                                            <dt>项目负责</dt>
                                            <dd>{{detail.dailyProp.projectManage.join(',')}}</dd>
                                        </dl>
                                        <dl class="daily-pro-row">
                                            <dt>安全状态</dt>
                                            <dd>{{detail.dailyProp.salfState}}</dd>
                                        </dl>
                                    </div>
                                    <div class="daily-pro-right">
                                        <dl class="daily-r-row">
                                            <dt>对策：</dt>
                                            <dd>{{detail.dailyProp.measure}}</dd>
                                        </dl>
                                        <dl class="daily-r-row">
                                            <dt>人员详情：</dt>
                                            <dd>共{{detail.dailyProp.peopleNum}}人 {{detail.dailyProp.sDetail}}</dd>
                                        </dl>
                                        <dl class="daily-r-row">
                                            <dt>需协调事宜：</dt>
                                            <dd>{{detail.dailyProp.pdiscuss}}</dd>
                                        </dl>
                                    </div>
                                </div>
                                <div class="daily-situation">
                                    <div class="sit-label">其他情况汇报：</div>
                                    <div class="sit-txt">
                                        {{detail.dailyProp.pother}}
                                    </div>
                                </div>
                            </div>
                            <div class="e-prise-box">
                                <div class="">
                                    <!--<div class="comment-title">-->
                                    <!--发表评论-->
                                    <!--</div>-->
                                    <div class="comment-publish">
                                        <div class="publish-face">
                                            <img src=""
                                                 alt="">
                                        </div>
                                        <div class="comment-textarea">
                                            <textarea v-model="reParams.content"
                                                      placeholder="我有话说..."></textarea>
                                        </div>
                                    </div>
                                    <div class="comment-publish-btn">
                                        <span class="publish-btn"
                                              @click="jxjAddReplis()">发表评论</span>
                                    </div>
                                </div>
                                <div class="comment-box">
                                    <div class="comment-title">
                                        <span class="has-arrow-up">
                                            全部评论
                                            <i class="c-arrow-up"></i>
                                        </span>
                                    </div>
                                    <div class="prise-comment">
                                        <div class="comment-list">
                                            <ul>
                                                <li>
                                                    <div class="comment-face">
                                                        <img src=""
                                                             alt="">
                                                    </div>
                                                    <div class="comment-info">
                                                        <div class="comment-name">
                                                            <span>我是你大哥</span>
                                                            <span class="name-tipper">
                                                                <span class="comment-time">10分钟前</span>
                                                                <em class="comment-dot">·</em>
                                                                <span class="report-btn">举报</span>
                                                            </span>
                                                            <span class="reply-comment-btn">
                                                                <i class="n-small-icon comment-icon"></i>
                                                                <span>回复</span>
                                                            </span>
                                                        </div>
                                                        <div class="comment-msg">
                                                            斗破天穹粉红娘娘，在家吃西瓜不行吗，硬要出来浪，这么热！
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div class="comment-face">
                                                        <img src=""
                                                             alt="">
                                                    </div>
                                                    <div class="comment-info">
                                                        <div class="comment-name">
                                                            <span>我是你大哥</span>
                                                            <span class="name-tipper">
                                                                <span class="comment-time">10分钟前</span>
                                                                <em class="comment-dot">·</em>
                                                                <span class="report-btn">举报</span>
                                                            </span>
                                                            <span class="reply-comment-btn">
                                                                <i class="n-small-icon comment-icon"></i>
                                                                <span>回复</span>
                                                            </span>
                                                        </div>
                                                        <div class="comment-msg">
                                                            真厉害，厉害死了
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div class="comment-face">
                                                        <img src=""
                                                             alt="">
                                                    </div>
                                                    <div class="comment-info">
                                                        <div class="comment-name">
                                                            <span>我是你大哥</span>
                                                            <span class="name-tipper">
                                                                <span class="comment-time">10分钟前</span>
                                                                <em class="comment-dot">·</em>
                                                                <span class="report-btn">举报</span>
                                                            </span>
                                                            <span class="reply-comment-btn">
                                                                <i class="n-small-icon comment-icon"></i>
                                                                <span>回复</span>
                                                            </span>
                                                        </div>
                                                        <div class="comment-msg">
                                                            我也在等待那一天。我必须等到能把自己当做另一个人的那一刻，等到自我消散的时候。那将会让我非常喜悦
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="m-structure-quick">
                        <div class="structure-btn">发布内容</div>
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
    </div>
</template>

<script>
import '../../../../html/components/detailHd/detailHd.scss';
import '../../../../html/components/tabs/tabs.scss';

import '../../../../html/components/structure/structure.scss';
import '../../../../html/components/enterprise/enterprise.scss';
import '../../../../html/components/picture/picture.scss';
import '../../../../html/components/comments/comments.scss';

import '../../../../html/pages/originality/daily/daily.scss';

import '../../../../html/components/fixBar/fixBar.scss';


import { getJxjPostDetail, getJxjDetail, getWeather, jxjAddReplis } from '../../../../api';
import stars from '../../../../pubilc/util/stars';
import timeago from '../../../../pubilc/util/timeago';
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
                this.detail = res.Data;
            }else{
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
        async jxjAddReplis() {
            if (this.reParams.content.legnth == 0) {
                this.$layer.alert('请输入评论内容');
                return false;
            }
            let res = await jxjAddReplis(this.reParams);
            if (res.Type == 'Success') {
                this.$layer.alert(res.Content);
                this.getData();
            }
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
