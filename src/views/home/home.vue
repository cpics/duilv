<template>
  <div class="g-container">
    <div class="m-slider-banner">
      <swiper :options="swiperOption" ref="mySwiper">
        <!-- slides -->
        <swiper-slide v-for="(item,index) in banner" :key="index">
          <a class="oper-pic" :href="item.outLink">
            <img :src="item.picPath">
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
                <router-link
                  tag="a"
                  class="u-news-hd"
                  :to="{name:'newsDdetail',params:{id:item.id}}"
                  v-show="index<2"
                  v-for="(item,index) in ljyw"
                  :key="index"
                >
                  <div class="u-news-pic">
                    <img :src="item.bgImg" alt>
                  </div>
                  <div class="u-news-txt">{{item.title}}</div>
                </router-link>
              </div>
              <div class="u-news-list">
                <ul>
                  <li v-show="index>=2" v-for="(item,index) in ljyw" :key="index">
                    <router-link
                      tag="a"
                      :to="{name:'newsDdetail',params:{id:item.id}}"
                    >{{item.title}}</router-link>
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
          <router-link
            tag="div"
            :to="{name:'jxjDetail',params:{id:currentJxj.id}}"
            class="ing-information"
          >
            <a class="ing-hd">
              <div class="ing-face">
                <img :src="currentJxj.headImage" alt>
              </div>
              <div class="ing-info">
                <h2 class="ing-tit">{{currentJxj.projectName}}</h2>
                <div class="ing-status">
                  <span class="ing-sta-col">{{currentJxj.nickName}}</span>
                  <!-- <span class="ing-sta-col">12小时前</span> -->
                </div>
              </div>
            </a>
            <a class="ing-article">
              <p>{{currentJxj.content}}</p>
            </a>
            <!--鼠标移上图片变大 + hover-scale-->
            <!--图片高度不固定 + h-auto-->
            <div class="cp-column">
              <a class="cp-item" v-for="(img,i) in currentJxj.images" :key="i">
                <img :src="img" alt>
              </a>
            </div>
          </router-link>
          <div class="ing-roll">
            <ul>
              <li v-for="(jxjItem,i) in jxj" :key="i" @click="changejxjItem(i)">
                <a>
                  <span class="roll-face">
                    <img :src="jxjItem.headImage" alt>
                  </span>
                  <span class="roll-name">{{jxjItem.nickName}}</span>
                  <b>{{jxjItem.projectName}}</b>
                  施工上传了{{jxjItem.postName}}
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
            <ad-item v-for="(item,index) in hzqy" :key="index" :info="item"></ad-item>
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

// import sloganItem from './components/slogan-item/slogan-item';
import caseItem from './components/case-item/case-item';
// import newsItem from './components/news-item/news-item';
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
            hzqy: [],
            bgImg: null,
            banner: [], //首页banner
            cyfa: [], //常用方案
            rmal: [], //热门案列
            ljyw: [], //绿建要闻
            jxj: [], //匠心记
            currentJxj: {},
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
                this.currentJxj = this.jxj[0];
                this.qz = res.Data.qz;
                this.cpkc = res.Data.cpkc;
                this.hzqy = res.Data.hzqy;
                // console.log(this.bgImg,this.hzqy);

                this.rmal.forEach(function(item) {
                    item.stars = stars(item.score);
                });
                this.cpkc.forEach(function(item) {
                    item.stars = stars(item.score);
                });
            }
        },
        changejxjItem(i){
            this.currentJxj = this.jxj[i];
        }
    },
    created() {
        this.getHomeInfo();
    },
    components: {
        swiper,
        swiperSlide,
        // sloganItem,
        caseItem,
        // newsItem,
        petiteItem,
        courseItem,
        groupItem,
        adItem
    }
};
</script>
