<template>
    <div class="g-container">
        <div class="m-norm-banner" v-if="detail.topVedio !=''">
            <div class="video-box">
                <video class="video-area" :poster="detail.topBgimg" controls="true">
                    <source :src="detail.topVedio" type="video/mp4">
                </video>
                <!--播放按钮 显示 +show-->
                <i class="video-icon"></i>
            </div>
        </div>
        <div class="m-container m-width">
            <!--面包屑-->
            <div class="crumbs-box">
                <a class="c-crumbs" href>首页</a>
                <span class="c-sep">&gt;</span>
                <a class="c-crumbs" href>云智库</a>
                <span class="c-sep">&gt;</span>
                <span class="c-current">{{detail.title}}</span>
            </div>
            <!--详情-->
            <div class="cloud-d-content">
                <!--滚动固定时 +fixation-->
                <div class="m-slide-bar" :class="{'fixation':isNowfixation}">
                    <!--选中显示内容 +active-->
                    <div class="u-slide-item" :class="{'active':ff==1}">
                        <div class="u-slide-tit" @click="showCate(1)">
                            <i class="slide-icon attentions"></i>
                            <p class="us-tit">注意事项</p>
                        </div>
                        <!--注意事项-->
                        <div class="m-slide-bomb">
                            <div class="m-bomb-cloud">
                                <div class="u-question-dispose">
                                    <div class="uqd-items" v-for="(item,i) in detail.precaution" :key="i">
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
                                        <div class="cp-column h-auto big-pic" v-if="item.images.length >0">
                                            <div class="cp-item" v-for="(img,m) in item.images" :key="m">
                                                <img :src="img">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!--选中显示内容 +active-->
                    <div class="u-slide-item" :class="{'active':ff==2}">
                        <div class="u-slide-tit" @click="showCate(2)">
                            <i class="slide-icon products"></i>
                            <p class="us-tit">产品信息</p>
                        </div>
                        <!--产品信息-->
                        <div class="m-slide-bomb">
                            <div class="m-bomb-cloud">
                                <div class="u-products-article" v-html="detail.product"></div>
                            </div>
                        </div>
                    </div>
                    <!--选中显示内容 +active-->
                    <div class="u-slide-item" :class="{'active':ff==3}">
                        <div class="u-slide-tit" @click="showCate(3)">
                            <i class="slide-icon cases"></i>
                            <p class="us-tit">相关案例</p>
                        </div>
                        <!--相关案例-->
                        <div class="m-slide-bomb">
                            <div class="m-bomb-cloud">
                                <div class="u-related-case">
                                    <div class="related-tab">
                                        <b class="active">往期案例</b>
                                        <span>|</span>
                                        <b>现有案例</b>
                                    </div>
                                    <div class="related-main">
                                        <!--往期案例 显示 +show-->
                                        <div class="related-box">
                                            <div class="related-list">
                                                <ul>
                                                    <li>
                                                        <div class="related-pic">
                                                            <img src alt>
                                                        </div>
                                                        <div class="related-info">
                                                            <h2>建发高铁新城（泱誉）</h2>
                                                            <div class="related-txt">
                                                                工程规模：4100平方米球场面层施工、1800平方米儿童活动场地面层施工、900平方米运动场器械区面层施工
                                                                |
                                                            </div>
                                                            <div class="related-tipper">
                                                                <span class="related-tip">质量检测报告</span>
                                                                <span class="related-tip">质量检测报告</span>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div class="related-pic">
                                                            <img src alt>
                                                        </div>
                                                        <div class="related-info">
                                                            <h2>建发高铁新城（泱誉）</h2>
                                                            <div class="related-txt">
                                                                工程规模：4100平方米球场面层施工、1800平方米儿童活动场地面层施工、900平方米运动场器械区面层施工
                                                                |
                                                            </div>
                                                            <div class="related-tipper">
                                                                <span class="related-tip">质量检测报告</span>
                                                                <span class="related-tip">质量检测报告</span>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div class="related-pic">
                                                            <img src alt>
                                                        </div>
                                                        <div class="related-info">
                                                            <h2>建发高铁新城（泱誉）</h2>
                                                            <div class="related-txt">
                                                                工程规模：4100平方米球场面层施工、1800平方米儿童活动场地面层施工、900平方米运动场器械区面层施工
                                                                |
                                                            </div>
                                                            <div class="related-tipper">
                                                                <span class="related-tip">质量检测报告</span>
                                                                <span class="related-tip">质量检测报告</span>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <!--现有案例 显示 +show-->
                                        <div class="related-box show">
                                            <div class="now-case-list">
                                                <ul>
                                                    <li>
                                                        <div class="n-case-pic">
                                                            <img src alt>
                                                        </div>
                                                        <div class="n-case-txt">绿地中央广场4号地块绿地</div>
                                                    </li>
                                                    <li>
                                                        <div class="n-case-pic">
                                                            <img src alt>
                                                        </div>
                                                        <div class="n-case-txt">绿地中央广场4号地块绿地</div>
                                                    </li>
                                                    <li>
                                                        <div class="n-case-pic">
                                                            <img src alt>
                                                        </div>
                                                        <div class="n-case-txt">绿地中央广场4号地块绿地</div>
                                                    </li>
                                                    <li>
                                                        <div class="n-case-pic">
                                                            <img src alt>
                                                        </div>
                                                        <div class="n-case-txt">绿地中央广场4号地块绿地</div>
                                                    </li>
                                                    <li>
                                                        <div class="n-case-pic">
                                                            <img src alt>
                                                        </div>
                                                        <div class="n-case-txt">绿地中央广场4号地块绿地</div>
                                                    </li>
                                                    <li>
                                                        <div class="n-case-pic">
                                                            <img src alt>
                                                        </div>
                                                        <div class="n-case-txt">绿地中央广场4号地块绿地</div>
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
                            <div
                                :id="'anchor'+i"
                                class="cloud-d-item"
                                v-for="(item,i) in detail.schemeItem"
                                :key="i"
                            >
                                <div class="cloud-d-headline">
                                    <h2>{{item.title}}</h2>
                                    <span class="video-play-btn">
                                        <i class="arrow-b-right"></i>
                                        <span>视频</span>
                                    </span>
                                </div>
                                <div v-for="(c,a) in item.content" :key="a">
                                    <article class="cloud-d-article">
                                        <div>{{c.title}}</div>
                                        <p v-html="c.content"></p>
                                    </article>
                                    <!--鼠标移上图片变大 + hover-scale-->
                                    <!--图片高度不固定 + h-auto-->
                                    <div class="cp-column hover-scale" v-if="c.images.length>0">
                                        <div class="cp-item" v-for="(img,m) in c.images" :key="m">
                                            <img :src="img">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!--滚动时固定 +fixation-->
                        <div class="m-slide-nav" :class="{'fixation':isSlidefixation}">
                            <div class="u-s-nav-items">
                                <ul>
                                    <li :class="{'active':i == iii}" v-for="(item,i) in detail.schemeItem" :key="i">
                                        <a @click="goto(i)">{{item.title}}</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import '../../../../html/components/topTab/topTab.css';
import '../../../../html/components/banner/banner.css';
import '../../../../html/components/crumbs/crumbs.css';

import '../../../../html/components/slideBar/slideBar.css';
import '../../../../html/components/picture/picture.css';
import '../../../../html/components/fixBar/fixBar.css';
import '../../../../html/pages/cloud/details/details.css';

import '../../../../html/components/cases/cases.css';

import { yzkDetail } from '../../../../api/index';
import { createHash } from 'crypto';
import { setTimeout } from 'timers';
export default {
    name: 'cloudDetail',
    data() {
        return {
            detail: {},
            iii: 0,
            isSlidefixation: false,
            isNowfixation: false,
            offsetTopArr: [],
            ff: 0
        };
    },
    methods: {
        async getDetail() {
            let res = await yzkDetail({
                id: this.$route.params.id
            });
            if (res.Type == 'Success') {
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
                this.detail = res.Data;
            }
        },
        goto(i) {
            this.iii = i;
            let offsetTop = document.querySelector('#anchor' + i).offsetTop;
            console.log(offsetTop);
            // document.body.scrollTop = offsetTop;
            // window.pageYOffset = offsetTop;
            document.documentElement.scrollTop = offsetTop;
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
        this.getDetail();
    },
    mounted() {
        window.addEventListener('scroll', this.handleScroll);
    },
    destroyed() {
        window.removeEventListener('scroll', this.handleScroll);
    }
};
</script>

<style>
</style>
