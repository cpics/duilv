<template>
  <div class="related-list">
    <ul>
      <li>
        <a @click="goDetail(info.id)">
          <div class="related-pic">
            <img :src="info.picPath" alt>
          </div>
          <div class="related-info">
            <h2>{{info.title}}</h2>
            <div class="related-txt">{{info.scale}}</div>
            <div class="related-tipper">
              <span v-if="info.hasReport" class="related-tip">质量检测报告</span>
              <span v-if="info.hasWarranty" class="related-tip">联合质保书</span>
              <span v-if="info.hasTracking" class="related-tip">项目追踪</span>
            </div>
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
    name: 'product-item',
    props: ['info'],
    methods: {
        goDetail(id) {
            this.$router.push({ name: 'caseDetal', params: { id: id } });
        }
    }
};
</script>

<style>
</style>
