<template>
  <a href class="case-item">
    <div class="case-pic">
      <img :src="info.bgImg" alt>
      <div class="case-tag">
        <span class="tag-view" v-for="(item,index) in info.tags" :key="index">{{item}}</span>
      </div>
    </div>
    <h2 class="case-tit">{{info.title}}</h2>
    <div class="case-describe">{{info.desc}}</div>
    <div class="case-handle">
      <span>项目周期：{{info.cycle}}天</span>
      <!--零星 no-star、 一星 one-star、 二星 two-star、 三星 three-star 、四星 four-star、 五星 five-star -->
      <i class="star-icon" :class="info.stars"></i>
    </div>
  </a>
</template>

<script>
export default {
    name: 'caseItem',
    data() {
        return {};
    },
    props: {
        info: Object
    }
};
</script>

<style>
</style>
