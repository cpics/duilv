<template>
  <div>
    <div class="group-left">
      <a href class="company-info">
        <div class="company-pic">
          <img :src="require('../../../../html/pages/home/images/demo.png')" alt>
        </div>
        <div class="company-name">
          <h4>苏州海的大姐软件有限公司</h4>
          <p>12小时前</p>
        </div>
      </a>
      <!--<a href="" class="cp-title">水性EAU丙烯酸高环保塑胶跑道鉴赏</a>-->
      <!--鼠标移上图片变大 + hover-scale-->
      <!--图片高度不固定 + h-auto-->
      <div class="cp-column">
        <a class="cp-item" href>
          <img :src="require('../../../../html/pages/home/images/demo.png')" alt>
        </a>
        <a class="cp-item" href>
          <img :src="require('../../../../html/pages/home/images/demo.png')" alt>
        </a>
        <a class="cp-item" href>
          <img :src="require('../../../../html/pages/home/images/demo.png')" alt>
        </a>
      </div>
    </div>
    <div class="group-right">
      <a
        href
        class="group-article"
      >不知道要求多少行字？？“他像是来自遥远古代的神祇──在某个意义上说，木心的那个世界，那个精致的、熠熠为光的、爱智的、澹泊却又为美为精神性叩问而骚乱的世界，在他展开他那淡泊、旖旎的文字卷轴时，早已崩毁覆灭...</a>
      <div class="group-address">
        <i class="address-icon"></i>
        <span>苏州市乐嘉汇商务广场</span>
      </div>
      <div class="group-handle">
        <span class="gh-col">
          <i class="like-icon"></i>
          <span>16</span>
        </span>
        <span class="gh-col">
          <i class="msg-icon"></i>
          <span>101</span>
        </span>
        <span class="gh-col">
          <i class="share-icon"></i>
          <span>分享</span>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'group-item'
};
</script>

<style>
</style>
