<template>
  <a href class="petite-item">
    <div class="petite-pic">
      <img :src="info.bgImg" alt>
    </div>
    <div class="petite-describe">{{info.title}}</div>
  </a>
</template>

<script>
export default {
    name: 'petite-item',
    props: {
        info: Object
    }
};
</script>

<style>
</style>
