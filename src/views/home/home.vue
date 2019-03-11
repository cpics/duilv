<template>
  <div class="g-container">
    <div class="m-slider-banner">
      <swiper :options="swiperOption" ref="mySwiper">
        <!-- slides -->
        <swiper-slide v-for="(item,index) in banner" :key="index">
          <a class="oper-pic" href="javascript:;">
            <img :src="item">
          </a>
        </swiper-slide>

        <!-- Optional controls -->
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
    <div class="m-container m-width">
      <div class="ad-slogan-pic">
        <img :src="bgImg" alt>
      </div>
      <div class="mh-column-content">
        <div class="mh-left-main">
          <div class="mt-main">
            <div class="common-tit-h1">
              <b>热门案例</b>
              <span>专业优秀的教程免费看</span>
            </div>
            <div class="case-column">
              <case-item :info="item" v-for="(item,index) in rmal" :key="index"></case-item>
            </div>
          </div>
          <div class="mt-main">
            <div class="common-tit-h1">
              <b>绿建要闻</b>
              <span>时下最热门环保建材资讯</span>
            </div>
            <div class="news-column">
              <div class="news-column-hd">
                <a class="u-news-hd" v-show="index<2" v-for="(item,index) in ljyw" :key="index">
                  <div class="u-news-pic">
                    <img :src="item.bgImg" alt>
                  </div>
                  <div class="u-news-txt">{{item.title}}</div>
                </a>
              </div>
              <div class="u-news-list">
                <ul>
                  <li v-show="index>=2" v-for="(item,index) in ljyw" :key="index">
                    <a href>{{item.title}}</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="mh-right-main">
          <div class="petite-box">
            <div class="common-tit-h2">
              <b>常用方案</b>
              <a href class="more-tit-btn">更多&gt;</a>
            </div>
            <div class="petite-list">
              <petite-item v-for="(item,index) in cyfa" :info="item" :key="index"></petite-item>
            </div>
            <div class="petite-box">
              <div class="common-tit-h2">
                <b>产品课程</b>
                <a href class="more-tit-btn">更多&gt;</a>
              </div>
              <div class="course-list">
                <course-item v-for="(item,index) in cpkc" :info="item" :key="index"></course-item>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="mh-ingenuity-content">
        <div class="common-tit-h1">
          <b>匠心记</b>
          <span>现场经验分享，线下施工，线上体验</span>
        </div>
        <div class="ing-main">
          <div class="ing-information">
            <a href class="ing-hd">
              <div class="ing-face">
                <img :src="require('../../html/pages/home/images/demo.png')" alt>
              </div>
              <div class="ing-info">
                <h2 class="ing-tit">无锡世贸 — 时光里</h2>
                <div class="ing-status">
                  <span class="ing-sta-col">XX雷大爷</span>
                  <span class="ing-sta-col">12小时前</span>
                </div>
              </div>
            </a>
            <a href class="ing-article">
              <p>“他像是来自遥远古代的神祇──在某个意义上说，木心的那个世界，那个精致的、熠熠为光的、爱智的、澹泊却又为美为精神性叩问而骚乱的世界，在他展开他那淡泊、旖旎的文字卷轴时，早已崩毁覆灭，「世界早已精致得只等毁灭」──他像一个孤证，像空谷跫音，有时嘿笑如恶童，有时演奏起那绝美故事，销魂忘我；有时险峻刻诮，有时伤怀绵绵...</p>
            </a>
            <!--鼠标移上图片变大 + hover-scale-->
            <!--图片高度不固定 + h-auto-->
            <div class="cp-column">
              <a class="cp-item" href>
                <img :src="require('../../html/pages/home/images/demo.png')" alt>
              </a>
              <a class="cp-item" href>
                <img :src="require('../../html/pages/home/images/demo.png')" alt>
              </a>
              <a class="cp-item" href>
                <img :src="require('../../html/pages/home/images/demo.png')" alt>
              </a>
            </div>
          </div>
          <div class="ing-roll">
            <ul>
              <li>
                <a href>
                  <span class="roll-face">
                    <img :src="require('../../html/pages/home/images/demo.png')" alt>
                  </span>
                  <span class="roll-name">***王</span>
                  <b>在无锡绿地西水东六期</b>
                  施工上传了份日报
                </a>
              </li>
              <li>
                <a href>
                  <span class="roll-face">
                    <img :src="require('../../html/pages/home/images/demo.png')" alt>
                  </span>
                  <span class="roll-name">***王</span>
                  <b>在世茂运河城26#地块0#楼</b>
                  发表了主题：阳台涂料腻子批刮施工中
                </a>
              </li>
              <li>
                <a href>
                  <span class="roll-face">
                    <img :src="require('../../html/pages/home/images/demo.png')" alt>
                  </span>
                  <span class="roll-name">***王</span>
                  <b>在怡江城三期上传了份QE报告</b>
                  施工上传了份日报施工上传了份日报施工上传了份日报施工上传了份日报施工上传了份日报
                </a>
              </li>
              <li>
                <a href>
                  <span class="roll-face">
                    <img :src="require('../../html/pages/home/images/demo.png')" alt>
                  </span>
                  <span class="roll-name">***王</span>
                  <b>在怡江城三期上传了份QE报告</b>
                  施工上传了份日报施工上传了份日报施工上传了份日报施工上传了份日报施工上传了份日报
                </a>
              </li>
              <li>
                <a href>
                  <span class="roll-face">
                    <img :src="require('../../html/pages/home/images/demo.png')" alt>
                  </span>
                  <span class="roll-name">***王</span>
                  <b>在怡江城三期上传了份QE报告</b>
                  施工上传了份日报施工上传了份日报施工上传了份日报施工上传了份日报施工上传了份日报
                </a>
              </li>
              <li>
                <a href>
                  <span class="roll-face">
                    <img :src="require('../../html/pages/home/images/demo.png')" alt>
                  </span>
                  <span class="roll-name">***王</span>
                  <b>在怡江城三期上传了份QE报告</b>
                  施工上传了份日报施工上传了份日报施工上传了份日报施工上传了份日报施工上传了份日报
                </a>
              </li>
              <li>
                <a href>
                  <span class="roll-face">
                    <img :src="require('../../html/pages/home/images/demo.png')" alt>
                  </span>
                  <span class="roll-name">***王</span>
                  <b>在怡江城三期上传了份QE报告</b>
                  施工上传了份日报施工上传了份日报施工上传了份日报施工上传了份日报施工上传了份日报
                </a>
              </li>
              <li>
                <a href>
                  <span class="roll-face">
                    <img :src="require('../../html/pages/home/images/demo.png')" alt>
                  </span>
                  <span class="roll-name">***王</span>
                  <b>在怡江城三期上传了份QE报告</b>
                  施工上传了份日报施工上传了份日报施工上传了份日报施工上传了份日报施工上传了份日报
                </a>
              </li>
              <li>
                <a href>
                  <span class="roll-face">
                    <img :src="require('../../html/pages/home/images/demo.png')" alt>
                  </span>
                  <span class="roll-name">***王</span>
                  <b>在怡江城三期上传了份QE报告</b>
                  施工上传了份日报施工上传了份日报施工上传了份日报施工上传了份日报施工上传了份日报
                </a>
              </li>
              <li>
                <a href>
                  <span class="roll-face">
                    <img :src="require('../../html/pages/home/images/demo.png')" alt>
                  </span>
                  <span class="roll-name">***王</span>
                  <b>在怡江城三期上传了份QE报告</b>
                  施工上传了份日报施工上传了份日报施工上传了份日报施工上传了份日报施工上传了份日报
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="mh-column-content border-none">
        <div class="mh-left-main">
          <div class="common-tit-h1">
            <b>圈子</b>
            <span>现场经验分享，线下施工，线上体验</span>
          </div>
          <div class="u-group-list">
            <ul>
              <li v-for="(item,index) in qz" :key="index">
                <group-item :info="item"></group-item>
              </li>
            </ul>
          </div>
        </div>
        <div class="mh-right-main">
          <div class="ad-list">
            <ad-item></ad-item>
            <ad-item></ad-item>
            <ad-item></ad-item>
            <ad-item></ad-item>
            <ad-item></ad-item>
            <ad-item></ad-item>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import 'swiper/dist/css/swiper.css';
import '../../html/pages/home/home.scss';
import '../../html/components/banner/banner.css';
import '../../html/components/picture/picture.css';

import { swiper, swiperSlide } from 'vue-awesome-swiper';

import sloganItem from './components/slogan-item/slogan-item';
import caseItem from './components/case-item/case-item';
import newsItem from './components/news-item/news-item';
import petiteItem from './components/petite-item/petite-item';
import courseItem from './components/course-item/course-item';
import groupItem from './components/group-item/group-item';
import adItem from './components/ad-item/ad-item';

import { home, domain } from '../../api/index';
import fetch from '../../pubilc/fetch/fetch';

import stars from '../../pubilc/util/stars';
export default {
    name: 'home',
    data() {
        return {
            banner: [], //首页banner
            cyfa: [], //常用方案
            rmal: [], //热门案列
            ljyw: [], //绿建要闻
            jxj: [], //匠心记
            qz: [], //圈子
            cpkc: [], //产品课程
            swiperOption: {
                pagination: {
                    el: '.swiper-pagination'
                },
                autoplay: {
                    delay: 2000
                }
            }
        };
    },
    methods: {
        async getHomeInfo() {
            let res = await home();
            if (res.Type == 'Success') {
                this.banner = res.Data.banner;
                this.bgImg = res.Data.bgImg;
                this.cyfa = res.Data.cyfa;
                this.rmal = res.Data.rmal;
                this.ljyw = res.Data.ljyw;
                this.jxj = res.Data.jxj;
                this.qz = res.Data.qz;
                this.cpkc = res.Data.cpkc;

                this.rmal.forEach(function(item) {
                    item.stars = stars(item.score);
                });
                this.cpkc.forEach(function(item) {
                    item.stars = stars(item.score);
                });
            }
        }
    },
    created() {
        this.getHomeInfo();
    },
    components: {
        swiper,
        swiperSlide,
        sloganItem,
        caseItem,
        newsItem,
        petiteItem,
        courseItem,
        groupItem,
        adItem
    }
};
</script>
