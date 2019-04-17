<template>
  <router-link class="petite-item" tag="a" :to="{name:'cloudDetail',params:{id:info.id}}">
    <div class="petite-pic">
      <img :src="info.bgImg" alt>
    </div>
    <div class="petite-describe">{{info.title}}</div>
  </router-link>
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
