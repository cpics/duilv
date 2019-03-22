<template>
  <div class="top-menu">
    <ul class="top-menu-list">
      <li v-for="(item,index) in menuRouter" :key="index">
        <router-link tag="a" class="top-m-item" :to="item">{{item.meta.title}}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { menuRouter } from '../../router.js';
export default {
    name: 'headerMenu',
    data() {
        return {
            menuRouter: menuRouter
        };
    },
    created() {
    }
};
</script>

<style>
</style>
