<template>
  <a href class="case-item">
    <div class="case-pic">
      <img :src="require('../../../../html/pages/home/images/demo.png')" alt>
      <div class="case-tag">
        <span class="tag-view">水性跑道</span>
        <span class="tag-view">岩棉带</span>
      </div>
    </div>
    <h2 class="case-tit">嘉兴世合小镇</h2>
    <div class="case-describe">拟将悬在纪念馆的几幅匾额，先生几年前就写好了毛笔字。</div>
    <div class="case-handle">
      <span>项目周期：15天</span>
      <!--零星 no-star、 一星 one-star、 二星 two-star、 三星 three-star 、四星 four-star、 五星 five-star -->
      <i class="star-icon three-star"></i>
    </div>
  </a>
</template>

<script>
export default {
    name: 'caseItem'
};
</script>

<style>
</style>
