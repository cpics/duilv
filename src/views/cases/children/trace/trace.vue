<template>
  <div class="g-container">
    <div class="com-detail-hd">
      <div class="com-hd-inner">
        <div class="com-hd-info">
          <div class="com-hd-face">
            <img :src="trace.proIcon" alt>
          </div>
          <div class="com-hd-name">
            <div class="hd-bottom-td">
              <div class="hd-name-row">{{trace.proName}}</div>
              <!--今日信息-->
              <!--<div class="hd-name-row">-->
              <!--<span>今天</span>-->
              <!--<span>2017年3月18日</span>-->
              <!--<span>星期三</span>-->
              <!--<span>天气：晴</span>-->
              <!--</div>-->
            </div>
          </div>
        </div>
        <!--右侧操作-->
        <div class="com-hd-handle">
          <div class="hd-bottom-td">
            <!-- <span class="cm-sign-btn">签到详情</span> -->
            <!-- <span class="share-wechat-btn">分享：<i class="u-wechat-icon"></i></span> -->
          </div>
        </div>
      </div>
    </div>
    <div class="m-container m-width">
      <!--面包屑-->
      <div class="crumbs-box">
        <a class="c-crumbs" href>首页</a>
        <span class="c-sep">&gt;</span>
        <a class="c-crumbs" href>案例库</a>
        <span class="c-sep">&gt;</span>
        <a class="c-crumbs" href>嘉兴世合小镇</a>
        <span class="c-sep">&gt;</span>
        <span class="c-current">项目回顾</span>
      </div>
      <!--项目回顾-->
      <div class="project-trace-content">
        <div class="m-second-tabs">
          <span :class="{'active':params.type=='all'}" @click="getData('all')">全部</span>
          <span class="u-line">|</span>
          <span :class="{'active':params.type=='qe'}" @click="getData('qe')">QE报告</span>
          <span class="u-line">|</span>
          <span :class="{'active':params.type=='report'}" @click="getData('report')">周报</span>
        </div>
        <div class="trace-timeline">
          <!--全部-->
          <div class="time-line-box">
            <div class="time-line-row" v-for="(item,index) in projects" :key="index">
              <div class="time-line-date">{{item.year}}</div>
              <div class="time-line-info">
                <i class="time-number">{{item.day}}</i>
                <div class="time-line-title">
                  <b>{{item.title}}</b>
                  <span class="t-tags-icon">{{item.postType}}</span>
                  <span class="see-count-number">
                    <i class="n-small-icon eye-icon"></i>
                    <span>{{item.hits}}人看过</span>
                  </span>
                </div>
                <div class="time-line-tipper">
                  <p>{{item.content}}</p>
                  <p>
                    <span class="pr-20">安全状况:{{item.safeState}}</span>
                    <span>天气:{{item.weather}}</span>
                  </p>
                </div>
                <div class="cp-column big-pic hover-scale">
                  <div class="cp-item" v-for="(pic,i) in item.images" :key="i">
                    <img :src="pic" alt>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import '../../../../html/components/banner/banner.scss';
import '../../../../html/components/crumbs/crumbs.scss';
import '../../../../html/components/detailHd/detailHd.scss';
import '../../../../html/components/tabs/tabs.scss';
import '../../../../html/components/picture/picture.scss';
import '../../../../html/pages/cases/trace/trace.scss';

import { getProjectEnd } from '../../../../api/index';
export default {
    name: 'trace',
    data() {
        return {
            params: {
                id: this.$route.params.id,
                type: 'all',
                index: 1,
                size: 10000
            },
            projects: [],
            trace:{}
        };
    },
    methods: {
        //获取数据
        async getData(type) {
            this.params.type = type;
            let res = await getProjectEnd(this.params);
            if (res.Type == 'Success') {
                this.trace = res.Data;
                this.projects = res.Data.projectEnd;
                this.projects.forEach(item => {
                    item.year =
                        item.createdTime.split(' ')[0].split('-')[0] +
                        '.' +
                        item.createdTime.split(' ')[0].split('-')[1];
                    item.day = item.createdTime.split(' ')[0].split('-')[2];
                    // console.log(item.year, item.day);
                });
                
            } else {
                this.$layer.alert(res.Content);
            }
        }
    },
    created() {
        this.getData('all');
    }
};
</script>

<style>
</style>
