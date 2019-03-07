<template>
  <div class="g-container">
    <div class="m-norm-banner">
      <div class="pic-banner">
        <img :src="require('../../../../html/components/banner/images/banner.png')" alt>
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
        <!--滚动固定时 +fixation-->
        <div class="m-slide-left">
          <div class="ml-slide-inner">
            <i class="ml-line-icon" style="transform:translateY(29px)"></i>
            <ul>
              <li class="active">
                <a href="#runway" class="ml-slide-tit">塑胶跑道</a>
              </li>
              <li>
                <a href="#floor" class="ml-slide-tit">球场地坪</a>
              </li>
              <li>
                <a href="#coating" class="ml-slide-tit">外墙涂料</a>
              </li>
              <li>
                <a href="#protect" class="ml-slide-tit">外墙保</a>
              </li>
            </ul>
          </div>
        </div>
        <!--详情内容-->
        <div class="g-cases">
          <!--选中 +current-->
          <div id="runway" class="related-list">
            <ul>
              <li>
                <a href>
                  <div class="related-pic">
                    <img :src="require('../../../../html/pages/home/images/demo.png')" alt>
                  </div>
                  <div class="related-info">
                    <h2>1建发高铁新城（泱誉）</h2>
                    <div class="related-txt">
                      工程规模：4100平方米球场面层施工、1800平方米儿童活动场地面层施工、900平方米运动场器械区面层施工
                      |
                    </div>
                    <div class="related-tipper">
                      <span class="related-tip">质量检测报告</span>
                      <span class="related-tip">联合质保书</span>
                    </div>
                  </div>
                </a>
              </li>
            </ul>
          </div>
          <div id="floor" class="related-list">
            <ul>
              <li>
                <a href>
                  <div class="related-pic">
                    <img :src="require('../../../../html/pages/home/images/demo.png')" alt>
                  </div>
                  <div class="related-info">
                    <h2>2建发高铁新城（泱誉）</h2>
                    <div class="related-txt">
                      工程规模：4100平方米球场面层施工、1800平方米儿童活动场地面层施工、900平方米运动场器械区面层施工
                      |
                    </div>
                    <div class="related-tipper">
                      <span class="related-tip">质量检测报告</span>
                      <span class="related-tip">质量检测报告</span>
                    </div>
                  </div>
                </a>
              </li>
            </ul>
          </div>
          <div id="coating" class="related-list">
            <ul>
              <li>
                <a href>
                  <div class="related-pic">
                    <img :src="require('../../../../html/pages/home/images/demo.png')" alt>
                  </div>
                  <div class="related-info">
                    <h2>3建发高铁新城（泱誉）</h2>
                    <div class="related-txt">
                      工程规模：4100平方米球场面层施工、1800平方米儿童活动场地面层施工、900平方米运动场器械区面层施工
                      |
                    </div>
                    <div class="related-tipper">
                      <span class="related-tip">质量检测报告</span>
                      <span class="related-tip">质量检测报告</span>
                    </div>
                  </div>
                </a>
              </li>
            </ul>
          </div>
          <div id="protect" class="related-list">
            <ul>
              <li>
                <a href>
                  <div class="related-pic">
                    <img :src="require('../../../../html/pages/home/images/demo.png')" alt>
                  </div>
                  <div class="related-info">
                    <h2>4建发高铁新城（泱誉）</h2>
                    <div class="related-txt">
                      工程规模：4100平方米球场面层施工、1800平方米儿童活动场地面层施工、900平方米运动场器械区面层施工
                      |
                    </div>
                    <div class="related-tipper">
                      <span class="related-tip">质量检测报告</span>
                      <span class="related-tip">质量检测报告</span>
                    </div>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import '../../../../html/components/slideBar/slideBar.scss';
import '../../../../html/pages/cases/cases/cases.scss';

import { getCasesInex, getNewsIndex } from '../../../../api/index';
export default {
    name: 'cases-index',
    methods: {
        async init() {
            let res = await getCasesInex();
            console.log(res);
        }
    },
    created() {
        this.init();
    }
};
</script>

<style>
</style>
