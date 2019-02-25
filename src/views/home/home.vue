<template>
  <div class="g-container">
    <div class="m-slider-banner">
      <swiper :options="swiperOption" ref="mySwiper">
        <!-- slides -->
        <swiper-slide>
          <a class="oper-pic" href="javascript:;">
            <img :src="require('../../html/components/banner/images/banner.png')">
          </a>
        </swiper-slide>
        <swiper-slide>
          <a class="oper-pic" href="javascript:;">
            <img :src="require('../../html/components/banner/images/banner.png')">
          </a>
        </swiper-slide>
        <swiper-slide>
          <a class="oper-pic" href="javascript:;">
            <img :src="require('../../html/components/banner/images/banner.png')">
          </a>
        </swiper-slide>
        <swiper-slide>
          <a class="oper-pic" href="javascript:;">
            <img :src="require('../../html/components/banner/images/banner.png')">
          </a>
        </swiper-slide>
        <!-- Optional controls -->
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
    <div class="m-container m-width">
      <div class="mh-slogan-content">
        <ul>
          <li class="msi-item">
            <slogan-item></slogan-item>
          </li>
          <li class="msi-item">
            <slogan-item></slogan-item>
          </li>
          <li class="msi-item">
            <slogan-item></slogan-item>
          </li>
          <li class="msi-item">
            <slogan-item></slogan-item>
          </li>
          <li class="msi-item">
            <slogan-item></slogan-item>
          </li>
        </ul>
      </div>
      <div class="mh-column-content">
        <div class="mh-left-main">
          <div class="mt-main">
            <div class="common-tit-h1">
              <b>热门案例</b>
              <span>专业优秀的教程免费看</span>
            </div>
            <div class="case-column">
              <case-item></case-item>
              <case-item></case-item>
              <case-item></case-item>
              <case-item></case-item>
              <case-item></case-item>
              <case-item></case-item>
            </div>
          </div>
          <div class="mt-main">
            <div class="common-tit-h1">
              <b>绿建要闻</b>
              <span>时下最热门环保建材资讯</span>
            </div>
            <div class="news-column">
              <news-item></news-item>
              <news-item></news-item>
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
              <petite-item></petite-item>
              <petite-item></petite-item>
            </div>
            <div class="petite-box">
              <div class="common-tit-h2">
                <b>产品课程</b>
                <a href class="more-tit-btn">更多&gt;</a>
              </div>
              <div class="course-list">
                <course-item></course-item>
                <course-item></course-item>
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
              <li>
                <group-item></group-item>
              </li>
              <li>
                <group-item></group-item>
              </li>
              <li>
                <group-item></group-item>
              </li>
              <li>
                <group-item></group-item>
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

import { home } from '../../api/index';
export default {
    name: 'home',
    data() {
        return {
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
            console.log(res)
        }
    },
    created(){
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
