<template>
  <div class="g-container">
    <div class="m-container m-width">
      <!--面包屑-->
      <div class="crumbs-box">
        <a class="c-crumbs" href>首页</a>
        <span class="c-sep">&gt;</span>
        <span class="c-current">行业圈</span>
      </div>
      <!--行业圈-->
      <div class="m-structure-content">
        <div class="m-structure-information">
          <div class="m-prise-content">
            <div class="e-prise-box" v-for="(item,index) in list" :key="index">
              <router-link tag="a" :to="{name:'enterDetail',params:{id:item.id}}">
                <div class="prise-hd">
                  <div class="prise-face">
                    <img :src="item.icon">
                  </div>
                  <div class="prise-hd-info">
                    <div class="prise-hd-name">{{item.enterName}}</div>
                    <!-- <div class="prise-time">12小时前</div> -->
                  </div>
                </div>
                <div class="prise-article">
                  <div class="prise-art-name">
                    <b>{{item.title}}</b>
                    <span class="art-tips">{{item.type}}</span>
                  </div>
                  <div class="prise-art-txt" v-html="item.content"></div>
                  <div class="cp-column hover-scale big-pic">
                    <div class="cp-item" v-for="(img,i) in item.images" :key="i">
                      <img :src="img">>
                    </div>
                  </div>
                  <div class="u-news-handle">
                    <div class="un-left">
                      <span class="un-col c-grey-9">
                        <i class="address-icon"></i>
                        {{item.addr}}
                      </span>
                    </div>
                    <div class="un-right">
                      <span class="un-col">
                        <!--选中 +active-->
                        <i class="like-icon" :class="{'active':item.isLike}"></i>
                        {{item.likes}}
                      </span>
                      <span class="un-col">
                        <i class="n-small-icon comment-icon"></i>
                        {{item.repNum}}
                        <em class="c-arrow-up"></em>
                      </span>
                    </div>
                  </div>
                  <div class="comment-box">
                    <div class="prise-comment">
                      <div class="comment-list">
                        <ul>
                          <li v-for="(rep,r) in item.reps" :key="r">
                            <div class="comment-face">
                              <img src alt>
                            </div>
                            <div class="comment-info">
                              <div class="comment-name">{{rep.nickName}}</div>
                              <div class="comment-msg">{{rep.content}}</div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </router-link>
            </div>
          </div>
        </div>
        <div class="m-structure-quick">
          <div class="structure-btn">写动态</div>
          <div class="structure-box" v-if="likeArr.length >0 ">
            <div class="common-tit-h2">
              <b>猜你想看</b>
              <a href class="more-tit-btn">全部&gt;</a>
            </div>
            <div class="guess-like">
              <router-link
                tag="a"
                class="guess-item"
                v-for="(l,i) in likeArr"
                :key="i"
                :to="{name:'enterDetail',params:{id:l.id}}"
              >
                <div class="guess-face">
                  <img :src="l.icon">
                </div>
                <div class="guess-info">{{l.title}}</div>
              </router-link>
            </div>
          </div>
          <div class="structure-box">
            <div class="common-tit-h2">
              <b>绿建要闻</b>
            </div>
            <div class="recommend-list">
              <a href class="recommend-item">【要闻】为什么我们遇见一个畸形怪状的身体不。</a>
              <a href class="recommend-item">【要闻】为什么我们遇见一个畸形怪状的身体不。</a>
              <a href class="recommend-item">【要闻】为什么我们遇见一个畸形怪状的身体不。</a>
              <a href class="recommend-item">【要闻】为什么我们遇见一个畸形怪状的身体不。</a>
              <a href class="recommend-item">【要闻】为什么我们遇见一个畸形怪状的身体不。</a>
              <a href class="recommend-item">【要闻】为什么我们遇见一个畸形怪状的身体不。</a>
              <a href class="recommend-item">【要闻】为什么我们遇见一个畸形怪状的身体不。</a>
            </div>
          </div>
          <div class="scan-code-quick">
            <div class="code-quick-pic">
              <img src="../../../../html/components/footer/images/code.png" alt>
            </div>
            <div class="code-quick-txt">
              扫一扫”即可将
              <br>网页分享至朋友圈
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import '../../../../html/components/crumbs/crumbs.scss';
import '../../../../html/components/structure/structure.scss';
import '../../../../html/components/enterprise/enterprise.scss';
import '../../../../html/components/picture/picture.scss';
import '../../../../html/components/comments/comments.scss';

import '../../../../html/components/popCommon/popCommon.scss';
import '../../../../html/components/dynamic/dynamic.scss';

import { enterPriseIndex, getLikeEnter } from '../../../../api/index';
export default {
    name: 'enterInex',
    data() {
        return {
            params: {
                index: 0,
                size: 20
            },
            list: [],
            likeArr: []
        };
    },
    methods: {
        async enterPriseIndex() {
            let res = await enterPriseIndex(this.params);
            if (res.Type == 'Success') {
                this.list = res.Data.data;
                this.count = res.Data.count;
            }
        },
        async getLikeEnter() {
            let res = await getLikeEnter();
            if (res.Type == 'Success') {
                this.likeArr = res.Data;
            }
        }
    },
    created() {
        this.enterPriseIndex();
        this.getLikeEnter();
    }
};
</script>

<style>
</style>
