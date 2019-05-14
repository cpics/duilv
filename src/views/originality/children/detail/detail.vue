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
                   href>首页</a>
                <span class="c-sep">&gt;</span>
                <a class="c-crumbs"
                   href>匠心记</a>
                <span class="c-sep">&gt;</span>
                <span class="c-current">环秀湖花园</span>
            </div>
            <!--主体-->
            <div class="origin-content">
                <div class="m-second-tabs">
                    <span :class="{'active':type=='all'}"
                          @click="changType('all')">全部</span>
                    <span class="u-line">|</span>
                    <span :class="{'active':type=='daily'}"
                          @click="changType('daily')">日报</span>
                    <span class="u-line">|</span>
                    <span :class="{'active':type=='report'}"
                          @click="changType('report')">周报</span>
                    <span class="u-line">|</span>
                    <span :class="{'active':type=='qe'}"
                          @click="changType('qe')">检查报告</span>
                </div>
                <div class="m-structure-content">
                    <div class="m-structure-information">
                        <div class="m-prise-content">
                            <div class="e-prise-box"
                                 @click="goto(item)"
                                 v-for="(item,index) in list"
                                 :key="index">
                                <!-- <router-link class="e-prise-box"
                                         tag="div"
                                         :to="{name:'jxjPostDetail',params:{id:item.id},query:{xid:xid}}"
                                         > -->
                                <div class="prise-hd">
                                    <div class="prise-face f-circle">
                                        <img :src="item.postUser.headImage">
                                    </div>
                                    <div class="prise-hd-info">
                                        <div class="prise-hd-name">
                                            <span>{{item.createdTime.split(' ')[0]}}</span>
                                            <span class="prise-tag-icon">{{item.type}}</span>
                                        </div>
                                        <div class="prise-time">{{item.postUser.type}}：{{item.postUser.nickName}}</div>
                                    </div>
                                    <div class="prise-status">
                                        <span class="prise-status-txt">安全状况：{{item.safeState}}</span>
                                        <span class="prise-status-txt">{{item.weather}}</span>
                                    </div>
                                </div>
                                <div class="prise-article">
                                    <!--<div class="prise-art-name">-->
                                    <!--<b>嘉兴世合小镇</b>-->
                                    <!--<span class="art-tips">推广</span>-->
                                    <!--</div>-->
                                    <div class="prise-art-txt">{{item.content}}</div>
                                    <div class="cp-column hover-scale pic-300">
                                        <div class="cp-item"
                                             v-for="(img,i) in item.images"
                                             :key="i">
                                            <img :src="img"
                                                 alt>
                                        </div>
                                    </div>
                                    <div class="u-news-handle">
                                        <div class="un-left">
                                            <span class="un-col">
                                                <i class="n-small-icon comment-icon"></i>
                                                {{item.repNum}}
                                                <em class="c-arrow-up"></em>
                                            </span>
                                            <span class="un-col">
                                                <i class="n-small-icon eye-icon"></i>
                                                {{item.hits}}
                                            </span>
                                        </div>
                                    </div>
                                    <div class="comment-box"
                                         v-if="item.reps.length >0">
                                        <div class="prise-comment">
                                            <div class="comment-list">
                                                <ul>
                                                    <li v-if="!rep.isChild"
                                                        v-for="(rep,r) in item.reps"
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
                        </div>
                        <!-- <div class="m-pages">
              <button type="button" disabled="disabled" class="btn-prev">上一页</button>
              <dl class="u-pager">
                <dd class="active">1</dd>
                <dd>2</dd>
                <dd>3</dd>
                <dd class="dots">···</dd>
                <dd>8</dd>
              </dl>
              <button type="button" class="btn-next">下一页</button>
            </div>-->
                        <button v-if="count > list.length"
                                @click="more"
                                type="button"
                                class="prompt-txt">加载更多</button>
                    </div>
                    <div class="m-structure-quick">
                        <div class="structure-btn">发布内容</div>
                        <div class="structure-box pd-small">
                            <div class="common-tit-h2">
                                <b>项目概况简述</b>
                            </div>
                            <div class="project-intro">
                                <!-- <div class="pro-intro-row">入场时间：{{header.creatTime.split(' ')[0]}}</div> -->
                                <div class="pro-intro-row">项目地点：{{header.proAddr}}</div>
                                <div class="pro-intro-row">项目简介：</div>
                                <div class="pro-intro-txt">{{header.desc}}</div>
                            </div>
                            <div class="common-tit-h2">
                                <a href
                                   class="more-tit-btn">项目详情&gt;</a>
                            </div>
                        </div>
                        <div class="structure-box">
                            <div v-for="(item,index) in header.projectPartner"
                                 :key="index">
                                <div class="com-md-face">
                                    <img :src="item.headImage"
                                         alt>
                                </div>
                                <div class="str-row">
                                    <span class="str-label">{{item.type}}</span>
                                    <i class="star-icon three-star"></i>
                                </div>
                                <div class="str-row">
                                    <span class="str-name">{{item.nickName}}</span>
                                    <span class="str-tag-icon">{{item.tags.join(',')}}</span>
                                </div>
                            </div>
                        </div>
                        <!-- <div class="structure-box">
              <div class="common-tit-h2">
                <b>类似项目</b>
              </div>
              <div class="guess-like">
                <a href class="guess-item">
                  <div class="guess-face">
                    <img src="../../../html/pages/home/images/demo.png" alt>
                  </div>
                  <div class="guess-info">苏州海的大姐软件有限公司</div>
                </a>
                <a href class="guess-item">
                  <div class="guess-face">
                    <img src="../../../html/pages/home/images/demo.png" alt>
                  </div>
                  <div class="guess-info">苏州海的大姐软件有限公司</div>
                </a>
                <a href class="guess-item">
                  <div class="guess-face">
                    <img src="../../../html/pages/home/images/demo.png" alt>
                  </div>
                  <div class="guess-info">苏州海的大姐软件有限公司</div>
                </a>
                <a href class="guess-item">
                  <div class="guess-face">
                    <img src="../../../html/pages/home/images/demo.png" alt>
                  </div>
                  <div class="guess-info">苏州海的大姐软件有限公司</div>
                </a>
              </div>
            </div>-->
                        <div class="scan-code-quick">
                            <div class="code-quick-pic">
                                <img src="../../../../html/components/comments/images/code1.png"
                                     alt>
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

import '../../../../html/components/structure/structure.css';
import '../../../../html/components/enterprise/enterprise.css';
import '../../../../html/components/picture/picture.css';
import '../../../../html/components/comments/comments.css';
import '../../../../html/components/page/page.css';
import '../../../../html/pages/originality/originality/originality.scss';

import { getJxjDetail, getJxjLog, getWeather } from '../../../../api/index.js';
import timeago from '../../../../pubilc/util/timeago';
export default {
    name: 'originality',
    data() {
        return {
            header: {},
            list: [],
            weather: '',
            type: 'all',
            pageIndex: 0,
            count: 0,
            xid: this.$route.params.id
        };
    },
    methods: {
        async getHeader() {
            let res = await getJxjDetail({
                id: this.$route.params.id
            });
            if (res.Type == 'Success') {
                res.Data.timeAgo = timeago(new Date(res.Data.creatTime));
                this.header = res.Data;
                // console.log(this.header);
            }
        },
        //获取列表数据
        async getJxjLog() {
            let res = await getJxjLog({
                id: this.$route.params.id,
                type: this.type,
                index: this.pageIndex,
                size: 10
            });
            if (res.Type == 'Success') {
                this.list = this.list.concat(res.Data.data);
                this.count = res.Data.count;
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
        //加载更多
        more() {
            if (this.count > this.list.length) {
                this.pageIndex++;
                this.getJxjLog();
            }
        },
        changType(type) {
            this.pageIndex = 0;
            this.count = 0;
            this.list = [];
            this.type = type;
            this.getJxjLog();
        },
        goto(item) {
            // if (item.type != 'QE') {
            this.$router.push({ name: 'jxjPostDetail', params: { id: item.id }, query: { xid: this.xid } });
            // }
        }
    },
    created() {
        console.log(this.$route.params.id);
        this.getWeather();
        this.getHeader();
        this.getJxjLog();
    }
};
</script>

<style>
</style>
