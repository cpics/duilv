<template>
  <div class="top-menu">
    <ul class="top-menu-list">
      <li v-for="(item,index) in menuRouter" :key="index">
        <router-link
          v-if="item.name!='originality'"
          tag="a"
          class="top-m-item"
          :to="item"
        >{{item.meta.title}}</router-link>

        <a
          v-if="item.name=='originality'"
          :class="{'active':originalityDir}"
          class="top-m-item"
        >{{item.meta.title}}</a>
        <div v-if="item.name=='originality'" class="second-menu">
          <div class="second-menu-inner">
            <div class="second-m-box">
              <div class="second-m-row" v-for="(jxj,i) in jxjSubMenu.parents" :key="i">
                <h4 class="second-label">
                  {{jxj.parentName}}
                  <i class="second-arrow-icon"></i>
                </h4>
                <div class="second-info">
                  <router-link
                    tag="a"
                    :to="{name:'jxjDetail',params:{id:child.id}}"
                    v-for="(child,c) in jxjSubMenu.projectLogs"
                    :key="c"
                    v-if="jxj.id == child.parentId"
                    class="second-item"
                  >{{child.title}}</router-link>
                </div>
              </div>
            </div>
            <div class="second-button">
              <span class="dm-btn dm-btn-default">申请匠心记+</span>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { getJxjList } from '../../api/index.js';
import { menuRouter } from '../../router.js';
export default {
    name: 'headerMenu',
    data() {
        return {
            jxjSubMenu: {},
            menuRouter: menuRouter,
            originalityDir: 0
        };
    },
    methods: {
        async getJxjList() {
            let res = await getJxjList();
            if (res.Type == 'Success') {
                this.jxjSubMenu = res.Data;
            }
            // this.jxjSubMenu = res;
            // console.log(res);
        }
    },
    created() {
        this.getJxjList();
    },
    watch: {
        $route(to, from) {
            if (location.href.indexOf('originality') > -1) {
                this.originalityDir = 1;
            } else {
                this.originalityDir = 0;
            }
        }
    }
};
</script>

<style>
</style>
