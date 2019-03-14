<template>
  <div class="ad-item">
    <a :href="info.outLink">
      <img :src="info.picPath" alt>
    </a>
  </div>
</template>

<script>
export default {
    name: 'ad-item',
    props:{
        info:Object
    }
};
</script>

<style>
</style>
