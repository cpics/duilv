<template>
  <router-link tag="a" :to="{'name':'enterDetail',params:{id:info.id}}">
    <div class="group-left">
      <a class="company-info">
        <div class="company-pic">
          <img :src="info.entIcon" alt>
        </div>
        <div class="company-name">
          <h4>{{info.title}}</h4>
          <p>{{info.createdTime}}</p>
        </div>
      </a>
      <!--<a href="" class="cp-title">水性EAU丙烯酸高环保塑胶跑道鉴赏</a>-->
      <!--鼠标移上图片变大 + hover-scale-->
      <!--图片高度不固定 + h-auto-->
      <div class="cp-column">
        <a class="cp-item" v-for="(item,index) in info.images" :key="index">
          <img :src="item" alt>
        </a>
      </div>
    </div>
    <div class="group-right">
      <a href class="group-article">{{info.content}}</a>
      <div class="group-address">
        <i class="address-icon"></i>
        <span>{{info.signAddr}}</span>
      </div>
      <div class="group-handle">
        <span class="gh-col">
          <h-like :likeNum="info.likeNum" :id="info.id"></h-like>
        </span>
        <span class="gh-col">
          <i class="msg-icon"></i>
          <span>{{info.repNum}}</span>
        </span>
        <!-- <span class="gh-col">
          <i class="share-icon"></i>
          <span>分享</span>
        </span>-->
      </div>
    </div>
  </router-link >
</template>

<script>
import hLike from '../../../../components/h-like/h-like';
export default {
    name: 'group-item',
    props: {
        info: Object
    },
    components: {
        hLike
    }
};
</script>

<style>
</style>
