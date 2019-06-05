<template>
    <!--页面主体-->
    <div class="g-container">
        <div class="m-container m-width">
            <!--面包屑-->
            <div class="crumbs-box">
                <router-link tag="a"
                             class="c-crumbs"
                             :to="{name:'default'}">首页</router-link>
                <span class="c-sep">&gt;</span>
                <router-link tag="a"
                             class="c-crumbs"
                             :to="{name:'enterIndex'}">行业圈</router-link>
                <span class="c-sep">&gt;</span>
                <span class="c-current">课程</span>

            </div>
            <!--课程详情-->
            <div class="m-container">
                <div class="m-course-head">
                    <div class="u-course-vm">
                        <div class="course-vm-inner">
                            <h2>{{info.title}}</h2>
                            <div class="course-hd-view">
                                <span>{{info.xTitle1}}：{{info.xDesc1}}</span>
                                <span>{{info.xTitle2}}：{{info.xDesc2}}</span>
                                <i class="star-icon"
                                   :class="'star-'+info.score"></i>
                            </div>
                            <div class="course-buy">
                                <span class="cost-money">￥{{info.price}}元</span>
                                <span class="buy-btn" @click="CourseOrderAdd">联系购买</span>
                            </div>
                        </div>
                    </div>
                    <h-qrcode></h-qrcode>
                </div>
                <!--正文-->
                <div class="m-structure-content">
                    <div class="m-structure-information">
                        <div class="course-intro">
                            <b>课程简介：</b>{{info.desc}}
                        </div>
                        <div class="common-title c-orange">课程内容</div>
                        <div class="course-chapter">
                            <div class="chapter-box"
                                 v-for="(item,i) in info.content"
                                 :key="i">
                                <div class="chapter-title">第{{i+1}}章：{{item.title}}</div>
                                <ul class="chapter-list">
                                    <li v-for="(current,c) in item.serialInfo"
                                        :key="c">
                                        <div class="chapter-name">
                                            <div class="chap-label">{{i+1}}-{{c+1}}</div>
                                            <div class="chap-txt">{{current.title}}</div>
                                        </div>
                                        <div class="chapter-info">
                                            <div class="chap-picture hover-scale">
                                                <div class="chap-item"
                                                     v-for="(img,m) in current.image"
                                                     :key="m">
                                                    <img :src="img"
                                                         alt="" />
                                                </div>

                                            </div>
                                        </div>
                                    </li>

                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="m-structure-quick">
                        <div class="structure-box teacher-list"
                             v-if="info.lectors && info.lectors.length >0">
                            <ul>
                                <li v-for="(item,i) in info.lectors"
                                    :key="i">
                                    <div class="teacher-face">
                                        <img :src="item.headImage"
                                             alt="">
                                    </div>
                                    <div class="teacher-name">{{item.lectorName}}</div>
                                    <div class="teacher-tag">{{item.lectorLevel}}</div>
                                </li>
                            </ul>
                        </div>
                        <div v-if="info.tjCourse && info.tjCourse.length >0">
                            <div class="common-tit-h2">
                                <b>推荐课程</b>
                            </div>
                            <div class="course-list">
                                <router-link tag="a"
                                             v-for="(item,i) in info.tjCourse"
                                             :key="i"
                                             :to="{name:'enterCourse',params:{id:item.id}}"
                                             class="course-item">
                                    <div class="course-pic">
                                        <img :src="item.picPath"
                                             alt="" />
                                    </div>
                                    <h2 class="course-tit">{{item.title}}</h2>
                                    <div class="course-txt">
                                        <span>{{item.level == 1?'初级':(item.level == 2?'中级':'高级')}}</span>
                                        <em class="course-circle">·</em>
                                        <span>{{item.hits}}人在学</span>
                                    </div>
                                    <div class="course-handle">
                                        <span class="course-money">￥{{item.price}}元</span>
                                        <i class="star-icon"
                                           :class="'star-'+item.score"></i>
                                    </div>
                                </router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import '../../../../html/components/crumbs/crumbs.scss';
import '../../../../html/components/detailHd/detailHd.scss';
import '../../../../html/components/tabs/tabs.scss';
import '../../../../html/components/structure/structure.scss';
import '../../../../html/pages/enterprise/course/course.scss';
import '../../../../html/components/course/course.scss';

import hQrcode from '../../../../components/h-qrcode/h-qrcode';

import { enterCourseDetail, CourseOrderAdd } from '../../../../api/index.js';
export default {
    name: 'curseDetail',
    components:{
        hQrcode
    },
    data() {
        return {
            info: {
                // content: [],
                // desc: '',
                // hits: '',
                // id: '',
                // lectors: [],
                // level: '',
                // picPath: '',
                // price: '',
                // score: '',
                // title: '',
                // tjCourse: '',
                // xDesc1: '',
                // xDesc2: '',
                // xTitle1: '',
                // xTitle2: ''
            }
        }
    },
    methods: {
        async enterCourseDetail() {
            let res = await enterCourseDetail({
                id: this.$route.params.id
            });
            if (res.Type == 'Success') {
                // res.Data.forEach(item => {

                // })
                this.info = res.Data;
            } else {
                this.$layer.alert(res.Content);
            }

        },
        async CourseOrderAdd() {
            let res = await CourseOrderAdd({
                id: this.$route.params.id
            });
            if (res.Type == 'Success') {
                this.$layer.alert(res.Content);
            } else {
                this.$layer.alert(res.Content);
            }
        }
    },
    created() {
        this.enterCourseDetail();
    },
    watch: {
        $route(to, from) {
            this.enterCourseDetail();
        }
    }
}
</script>

<style>
</style>
