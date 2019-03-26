<template>
  <div class="g-container">
    <div class="m-norm-banner">
      <div class="pic-banner">
        <img :src="cases.picPath" alt>
      </div>
    </div>
    <div class="m-container m-width">
      <!--面包屑-->
      <div class="crumbs-box">
        <a class="c-crumbs" href>首页</a>
        <span class="c-sep">&gt;</span>
        <span class="c-current">案例库</span>
      </div>
      <!--详情-->
      <!--参考 https://hao.uisdc.com/#inspiration-->
      <div class="m-cases-content">
        <left-menu :list="cases.tags" @filterTag="filterTag"></left-menu>
        <!--详情内容-->
        <div class="g-cases">
          <!--选中 +current-->
          <product-item v-for="(item,index) in filterList" :key="index" :info="item"></product-item>
         
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import '../../../../html/components/slideBar/slideBar.scss';
import '../../../../html/components/cases/cases.scss';
import '../../../../html/pages/cases/cases/cases.scss';

import { getCasesInex, getNewsIndex } from '../../../../api/index';

import leftMenu from './components/left-menu/left-menu';
import productItem from './components/product-item/product-item';
export default {
    name: 'cases-index',
    components: {
        leftMenu,
        productItem
    },
    data() {
        return {
            cases: {},
            currentTagId: undefined
        };
    },
    computed: {
        filterList() {
            if (this.currentTagId == undefined) {
                return this.cases.alk;
            } else {
                console.log(this.cases.alk.filter(item => {
                    return item.tagId == this.currentTagId;
                }));
                return this.cases.alk.filter(item => {
                    return item.tagId == this.currentTagId;
                });
            }
        }
    },
    methods: {
        async init() {
            let res = await getCasesInex();
            this.cases = res.Data;
            // console.log(res);
        },
        filterTag(id) {
            this.currentTagId = id;
            // this.$router.push('/cases/index?tagId=' + id);
        }
    },
    created() {
        this.init();
    }
};
</script>

<style>
</style>
