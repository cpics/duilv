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
                <span class="c-current">{{header.title}}</span>
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
                        <div class="structure-btn"
                             @click="showPoP">发布内容</div>
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
                                <a @click="openxq"
                                   class="more-tit-btn">项目详情&gt;</a>
                            </div>
                        </div>
                        <div class="structure-box">
                            <div v-if="item.type == '项目经理'"
                                 v-for="(item,index) in header.projectPartner"
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
                        <div class="structure-box"
                             v-if="header.lsProject && header.lsProject.length>0">
                            <div class="common-tit-h2">
                                <b>类似项目</b>
                            </div>
                            <div class="guess-like">
                                <router-link tag="a"
                                             v-for="(item,i) in header.lsProject"
                                             :key="i"
                                             :to="{name:'jxjDetail',params:{id:item.id}}"
                                             class="guess-item">
                                    <div class="guess-face">
                                        <img :src="item.picPath"
                                             alt>
                                    </div>
                                    <div class="guess-info">{{item.title}}</div>
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

        <!--写报告 显示 +show-->
        <div class="shadow-fixed show"
             v-if="popDir">
            <div class="mask"></div>
            <div class="bomb-com-box bomb-reply">
                <div class="bomb-small-close"
                     @click="showPoP"></div>
                <div class="bomb-entrance">
                    <div class="b-entrance-btn"
                         @click="gotoCreate('zt')">写主题</div>
                    <div class="b-entrance-btn"
                         @click="gotoCreate('zb')">写周报</div>
                    <div class="b-entrance-btn"
                         @click="gotoCreate('qe')">写QE报告</div>
                    <div class="b-entrance-btn"
                         @click="gotoCreate('daliy')">写日报</div>
                </div>
            </div>
        </div>
        <d-qiandao v-if="qiandaoDir"
                   @close="closeQiandao"></d-qiandao>
        <d-xiangqing :detail="header"
                     @initBaiduMap="initBaiduMap"
                     @close="closexq"
                     v-if="xiangqingDir"></d-xiangqing>
    </div>
</template>

<script>
import '../../../../html/components/detailHd/detailHd.scss';
import '../../../../html/components/tabs/tabs.scss';

import '../../../../html/components/structure/structure.scss';
import '../../../../html/components/enterprise/enterprise.scss';
import '../../../../html/components/picture/picture.scss';
import '../../../../html/components/comments/comments.scss';
import '../../../../html/components/page/page.scss';
import '../../../../html/pages/originality/originality/originality.scss';
import '../../../../html/pages/originality/modifyProject/modifyProject.scss';

import { getJxjDetail, getJxjLog, getWeather } from '../../../../api/index.js';
import timeago from '../../../../pubilc/util/timeago';

import dQiandao from './components/d-qiandao.vue';
import dXiangqing from './components/d-xiangqing.vue';
import hQrcode from '../../../../components/h-qrcode/h-qrcode';

import QrcodeVue from 'qrcode.vue';
export default {
    name: 'originality',
    components: {
        dQiandao,
        dXiangqing,
        hQrcode,
        QrcodeVue
    },
    data() {
        return {
            localHref: location.href,
            qiandaoDir: false,
            xiangqingDir: false,
            popDir: false,
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
        initBaiduMap() {
            let opints = this.header.proPoint.split(',');
            let that = this;
            let script = document.createElement("script");
            script.src = "//api.map.baidu.com/api?v=2.0&ak=uVdH4iqsEd2BPnlCupOlHFUytU7eqiWL&callback=createMap"
            document.head.appendChild(script)
            window.createMap = () => {
                //创建Map实例
                var map = new BMap.Map("mapContent");
                var point = new BMap.Point(opints[0], opints[1]);
                map.centerAndZoom(point, 16);
                var marker = new BMap.Marker(point);        // 创建标注    
                map.addOverlay(marker);
                map.enableScrollWheelZoom();
            }
        },
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
            // window.open()
            let routeData = this.$router.resolve({ name: 'jxjPostDetail', params: { id: item.id } });
            window.open(routeData.href, '_blank');
            // this.$router.push();
            // }
        },
        gotoCreate(type) {
            if (type == 'qe') {
                this.$router.push({ name: 'createQE', params: { id: this.$route.params.id }, query: { type: 'QE' } })
            } else if (type == 'zb') {
                this.$router.push({ name: 'createQE', params: { id: this.$route.params.id }, query: { type: 'ZB' } })
            } else if (type == 'daliy') {
                this.$router.push({ name: 'createDaliy', params: { id: this.$route.params.id }, query: { title: this.header.title } })
            } else if (type == 'zt') {
                this.$router.push({ name: 'createQE', params: { id: this.$route.params.id }, query: { type: 'ZT' } });
            }
        },
        closeQiandao() {
            this.qiandaoDir = false;
        },
        openQiandao() {
            this.qiandaoDir = true;
        },
        closexq() {
            this.xiangqingDir = false;
        },
        openxq() {
            this.xiangqingDir = true;
        },
        showPoP() {
            this.popDir = !this.popDir;
        }
    },
    created() {
        console.log(this.$route.params.id);
        this.getWeather();
        this.getHeader();
        this.getJxjLog();
    },
    watch: {
        $route(to, from) {
            this.list = [];
            this.type = 'all';
            this.pageIndex = 0;
            this.count = 0;
            this.getWeather();
            this.getHeader();
            this.getJxjLog();
        }
    }
};
</script>

<style>
</style>
