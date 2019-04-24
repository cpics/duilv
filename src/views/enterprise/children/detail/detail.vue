<template>
  <!--页面主体-->
  <div class="g-container">
    <!--详情头部-->
    <div class="com-detail-hd">
      <div class="com-hd-inner">
        <div class="com-hd-info">
          <div class="com-hd-face">
            <img :src="detail.icon" alt>
          </div>
          <div class="com-hd-name">
            <div class="hd-bottom-td">
              <div class="hd-name-row">{{detail.title}}</div>
              <!--今日信息-->
              <!--<div class="hd-name-row">-->
              <!--<span>今天</span>-->
              <!--<span>2017年3月18日</span>-->
              <!--<span>星期三</span>-->
              <!--<span>天气：晴</span>-->
              <!--</div>-->
            </div>
          </div>
        </div>
        <!--右侧操作-->
        <div class="com-hd-handle">
          <div class="hd-bottom-td">
            <span class="cm-sign-btn">签到详情</span>
            <span class="share-wechat-btn">
              分享：
              <i class="u-wechat-icon"></i>
            </span>
          </div>
        </div>
      </div>
    </div>
    <div class="m-container m-width">
      <!--面包屑-->
      <div class="crumbs-box">
        <a class="c-crumbs" href>首页</a>
        <span class="c-sep">&gt;</span>
        <a class="c-crumbs" href>匠企行</a>
        <span class="c-sep">&gt;</span>
        <span class="c-current">{{detail.title}}</span>
      </div>
      <!--项目回顾-->
      <div class="g-normal-content">
        <div class="m-normal-tabs">
          <dl>
            <dd :class="{'active':menu[0] == 1}" @click="showDetail(0)">企业简介</dd>
            <dd :class="{'active':menu[1] == 1}" @click="showDetail(1)">企业动态</dd>
            <dd :class="{'active':menu[2] == 1}" @click="showDetail(2)">信息管理</dd>
            <dd :class="{'active':menu[3] == 1}" @click="showDetail(3)">投诉</dd>
            <dd :class="{'active':menu[4] == 1}" @click="showDetail(4)">课程培训</dd>
          </dl>
        </div>
        <div class="m-normal-box">
          <!--企业简介 显示 +show-->
          <div class="u-normal-main show" v-if="menu[0]">
            <div class="news-article">
              <p v-html="desc"></p>
            </div>
            <!--编辑按钮-->
            <div class="fix-editor-btn"></div>
          </div>
          <!--企业动态 显示 +show-->
          <div class="u-normal-main m-structure-content show" v-if="menu[1]==1">
            <div class="m-structure-information">
              <div class="m-prise-content">
                <div class="e-prise-box" v-for="(item,i) in list" :key="i">
                  <div class="prise-hd">
                    <div class="prise-face">
                      <img :src="item.icon">
                    </div>
                    <div class="prise-hd-info">
                      <div class="prise-hd-name">{{item.enterName}}</div>
                      <div class="prise-time">12小时前</div>
                    </div>
                  </div>
                  <div class="prise-article">
                    <div class="prise-art-name">
                      <b>{{item.title}}</b>
                      <span class="art-tips">{{item.Type}}</span>
                    </div>
                    <div class="view-more-prise" :class="{'active':!item.zkDir}">
                      >
                      <div class="prise-art-txt" v-html="item.content"></div>
                      <div
                        class="view-more-txt unfold"
                        v-if="!item.zkDir"
                        @click.stop.prevent="zkFunc(i)"
                      >
                        查看更多
                        <i></i>
                      </div>
                      <div
                        class="view-more-txt fewer"
                        v-if="item.zkDir"
                        @click.stop.prevent="zkFunc(i)"
                      >
                        收起
                        <i></i>
                      </div>
                    </div>
                    <div class="cp-column hover-scale middle-pic">
                      <div class="cp-item" v-for="(img,m) in item.images" :key="m">
                        <img :src="img">
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
                        <span class="un-col u-pointer">
                          <i class="n-small-icon comment-icon"></i>
                          {{item.repNum}}
                          <em class="c-arrow-up"></em>
                        </span>
                        <!-- <span class="un-col u-pointer">
                          <i class="n-small-icon share-s-icon"></i>
                          588
                          <span class="share-code-pop">
                            <em class="c-arrow-up-border"></em>
                            <span class="s-code-pic">
                              <img src alt>
                            </span>
                          </span>
                        </span>-->
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
                </div>
              </div>
              <button
                style="margin-top:30px;"
                v-if="count < list.length"
                @click="more"
                type="button"
                class="prompt-txt"
              >加载更多</button>
            </div>
            <div class="m-structure-quick">
              <div class="structure-btn">写动态</div>
              <div class="structure-box clock-in">
                <div class="clock-list">
                  <div class="clock-today">
                    <h4>今日打卡</h4>
                    <div class="clock-search-date">
                      <!--<input placeholder="" value="2019年1月1日"/>-->
                      <span>2019年1月1日</span>
                      <i class="s-search-btn"></i>
                    </div>
                  </div>
                  <ul>
                    <li>
                      <div class="clock-hd">
                        <div class="clock-face">
                          <img src alt>
                        </div>
                        <div class="clock-info">
                          <div class="clock-name">我是你大哥</div>
                          <p>2019年1月1日</p>
                          <p>18点20分2秒</p>
                        </div>
                        <div class="clock-address">
                          <i class="address-icon"></i>
                          <span>苏州市乐嘉汇商务广场</span>
                        </div>
                        <!--<div class="sign-handle">-->
                        <!--<span class="sign-btn">在此签到</span>-->
                        <!--</div>-->
                      </div>
                    </li>
                    <li>
                      <div class="clock-hd">
                        <div class="clock-face">
                          <img src alt>
                        </div>
                        <div class="clock-info">
                          <div class="clock-name">我是你大哥</div>
                          <p>2019年1月1日</p>
                          <p>18点20分2秒</p>
                        </div>
                        <div class="clock-address">
                          <i class="address-icon"></i>
                          <span>苏州市乐嘉汇商务广场</span>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div class="clock-hd">
                        <div class="clock-face">
                          <img src alt>
                        </div>
                        <div class="clock-info">
                          <div class="clock-name">我是你大哥</div>
                          <p>2019年1月1日</p>
                          <p>18点20分2秒</p>
                        </div>
                        <div class="clock-address">
                          <i class="address-icon"></i>
                          <span>苏州市乐嘉汇商务广场</span>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="structure-box">
                <div class="common-tit-h2">
                  <b>猜你想看</b>
                  <a href class="more-tit-btn">全部&gt;</a>
                </div>
                <div class="guess-like">
                  <router-link
                    tag="a"
                    class="guess-item"
                    :to="{name:'enterDetail',params:{id:item.id}}"
                    v-for="(item,i) in likeArr"
                    :key="i"
                  >
                    <div class="guess-face">
                      <img :src="item.icon">
                    </div>
                    <div class="guess-info">{{item.title}}</div>
                  </router-link>
                </div>
              </div>
            </div>
          </div>
          <!--信息管理 显示 +show-->
          <div class="u-normal-main show" v-if="menu[2] ==1">
            <div class="info-msg-manage">
              <div class="info-msg-col">
                <div class="info-msg-row">
                  <span class="i-label">公司LOGO：</span>
                  <span class="i-company-face">
                    <img :src="detail.picPath">
                  </span>
                  <span class="i-msg-btn">更换</span>
                </div>
                <div class="info-msg-row">
                  <span class="i-label">公司名称：</span>
                  <span class="i-company-name">{{detail.title}}</span>
                  <!--<input class="i-company-name" type="text" placeholder=""-->
                  <!--value="海的大姐有限责任公司"/>-->
                  <span class="i-msg-btn">重命名</span>
                </div>
                <div class="info-msg-row">
                  <span class="i-label">项目地址：</span>
                  <span class="i-company-address">{{detail.proAddr}}</span>
                </div>
                <div class="i-msg-tipper">（用于项目签到显示，请在手机定位修改以及添加）</div>
              </div>
              <div class="info-msg-col">
                <div class="i-member-list">
                  <h2>负责人：</h2>
                  <ul>
                    <li v-for="(item,i) in detail.proUsers" :key="i">
                      <div class="i-member-face">
                        <img :src="item.headImage">
                      </div>
                      <div class="i-member-name">{{item.nickName}}</div>
                      <div class="i-member-handle">
                        <span class="i-msg-btn">删除</span>
                        <em>|</em>
                        <span class="i-msg-btn">更换</span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <!--投诉 显示 +show-->
          <div class="u-normal-main show" v-if="menu[3] ==1">
            <div class="write-complain-btn">
              <span class="write-btn">写客诉</span>
            </div>
            <div class="m-prise-content">
              <div class="e-prise-box has-border">
                <div class="prise-article">
                  <div class="prise-art-name">
                    <b>嘉兴世合小镇</b>
                    <div class="prise-time">2018/7/27</div>
                  </div>
                  <div
                    class="prise-art-txt"
                  >不知道要求多少行字？？“他像是来自遥远古代的神祇──在某个意义上说，木心的那个世界，那个精致的、熠熠为光的、爱智的、澹泊却又为美为精神性叩问而骚乱的世界，在他展开他那淡泊、旖旎的文字卷轴时，早已崩毁覆灭...</div>
                  <div class="cp-column hover-scale pic-260">
                    <div class="cp-item">
                      <img src alt>
                    </div>
                    <div class="cp-item">
                      <img src alt>
                    </div>
                    <div class="cp-item">
                      <img src alt>
                    </div>
                    <div class="cp-item">
                      <img src alt>
                    </div>
                  </div>
                </div>
              </div>
              <div class="e-prise-box has-border">
                <div class="prise-article">
                  <div class="prise-art-name">
                    <b>嘉兴世合小镇</b>
                    <div class="prise-time">2018/7/27</div>
                  </div>
                  <div
                    class="prise-art-txt"
                  >不知道要求多少行字？？“他像是来自遥远古代的神祇──在某个意义上说，木心的那个世界，那个精致的、熠熠为光的、爱智的、澹泊却又为美为精神性叩问而骚乱的世界，在他展开他那淡泊、旖旎的文字卷轴时，早已崩毁覆灭...</div>
                </div>
              </div>
              <div class="e-prise-box has-border">
                <div class="prise-article">
                  <div class="prise-art-name">
                    <b>嘉兴世合小镇</b>
                    <div class="prise-time">2018/7/27</div>
                  </div>
                  <div
                    class="prise-art-txt"
                  >不知道要求多少行字？？“他像是来自遥远古代的神祇──在某个意义上说，木心的那个世界，那个精致的、熠熠为光的、爱智的、澹泊却又为美为精神性叩问而骚乱的世界，在他展开他那淡泊、旖旎的文字卷轴时，早已崩毁覆灭...</div>
                </div>
              </div>
            </div>
          </div>
          <!--课程 显示 +show-->
          <div class="u-normal-main show" v-if="menu[4] ==1 ">
            <div class="course-list dole">
              <a href="../../../../html/pages/enterprise/course/course.html" class="course-item">
                <!--显示 +show-->
                <i class="dole-icon show">NEW</i>
                <div class="course-pic">
                  <img src alt>
                </div>
                <h2 class="course-tit">拍颗粒活动场地课程</h2>
                <div class="course-txt">
                  <span>高级课程</span>
                  <em class="course-circle">·</em>
                  <span>55人在学</span>
                </div>
                <div class="course-handle">
                  <span class="course-money">￥3000元</span>
                  <i class="star-icon three-star"></i>
                </div>
              </a>
              <a href="../../../../html/pages/enterprise/course/course.html" class="course-item">
                <!--显示 +show-->
                <i class="dole-icon show">HOT</i>
                <div class="course-pic">
                  <img src alt>
                </div>
                <h2 class="course-tit">拍颗粒活动场地课程</h2>
                <div class="course-txt">
                  <span>高级课程</span>
                  <em class="course-circle">·</em>
                  <span>55人在学</span>
                </div>
                <div class="course-handle">
                  <span class="course-money">￥3000元</span>
                  <i class="star-icon three-star"></i>
                </div>
              </a>
              <a href="../../../../html/pages/enterprise/course/course.html" class="course-item">
                <div class="course-pic">
                  <img src alt>
                </div>
                <h2 class="course-tit">拍颗粒活动场地课程</h2>
                <div class="course-txt">
                  <span>高级课程</span>
                  <em class="course-circle">·</em>
                  <span>55人在学</span>
                </div>
                <div class="course-handle">
                  <span class="course-money">￥3000元</span>
                  <i class="star-icon three-star"></i>
                </div>
              </a>
              <a href="../../../../html/pages/enterprise/course/course.html" class="course-item">
                <div class="course-pic">
                  <img src alt>
                </div>
                <h2 class="course-tit">拍颗粒活动场地课程</h2>
                <div class="course-txt">
                  <span>高级课程</span>
                  <em class="course-circle">·</em>
                  <span>55人在学</span>
                </div>
                <div class="course-handle">
                  <span class="course-money">￥3000元</span>
                  <i class="star-icon three-star"></i>
                </div>
              </a>
              <a href="../../../../html/pages/enterprise/course/course.html" class="course-item">
                <div class="course-pic">
                  <img src alt>
                </div>
                <h2 class="course-tit">拍颗粒活动场地课程</h2>
                <div class="course-txt">
                  <span>高级课程</span>
                  <em class="course-circle">·</em>
                  <span>55人在学</span>
                </div>
                <div class="course-handle">
                  <span class="course-money">￥3000元</span>
                  <i class="star-icon three-star"></i>
                </div>
              </a>
              <a href="../../../../html/pages/enterprise/course/course.html" class="course-item">
                <div class="course-pic">
                  <img src alt>
                </div>
                <h2 class="course-tit">拍颗粒活动场地课程</h2>
                <div class="course-txt">
                  <span>高级课程</span>
                  <em class="course-circle">·</em>
                  <span>55人在学</span>
                </div>
                <div class="course-handle">
                  <span class="course-money">￥3000元</span>
                  <i class="star-icon three-star"></i>
                </div>
              </a>
              <a href="../../../../html/pages/enterprise/course/course.html" class="course-item">
                <div class="course-pic">
                  <img src alt>
                </div>
                <h2 class="course-tit">拍颗粒活动场地课程</h2>
                <div class="course-txt">
                  <span>高级课程</span>
                  <em class="course-circle">·</em>
                  <span>55人在学</span>
                </div>
                <div class="course-handle">
                  <span class="course-money">￥3000元</span>
                  <i class="star-icon three-star"></i>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import '../../../../html/components/crumbs/crumbs.scss';

import '../../../../html/components/detailHd/detailHd.scss';
import '../../../../html/components/tabs/tabs.scss';

import '../../../../html/components/article/article.scss';

import '../../../../html/components/structure/structure.scss';
import '../../../../html/components/enterprise/enterprise.scss';
import '../../../../html/components/picture/picture.scss';
import '../../../../html/components/comments/comments.scss';
import '../../../../html/pages/enterprise/details/details.scss';
import '../../../../html/components/course/course.scss';

import {
    enterDetail,
    enterCurrentIndex,
    enterDesc,
    getLikeEnter,
    getEnterComplaint,
    enterCourseIndex,
} from '../../../../api/index';
export default {
    name: 'enterDetail',
    data() {
        return {
            menu: [1, 0, 0, 0, 0],
            detail: {},
            list: [],
            count: 0,
            likeArr: [],
            desc: '',
            Complaints:[],
            courseList:[],
            params: {
                index: 0,
                size: 10
            }
        };
    },
    methods: {
        showDetail(i) {
            this.menu = [0, 0, 0, 0, 0];
            this.menu[i] = 1;
        },
        //企业详情~信息管理
        async enterDetail() {
            let res = await enterDetail({
                id: this.$route.params.id
            });
            if (res.Type == 'Success') {
                this.detail = res.Data;
            }
        },
        //企业动态
        async enterCurrentIndex() {
            let res = await enterCurrentIndex({
                id: this.$route.params.id,
                ...this.params
            });
            if (res.Type == 'Success') {
                res.Data.data.forEach(item => {
                    item.zkDir = false;
                });
                this.list = this.list.concat(res.Data.data);
                this.count = res.Data.count;
            }
        },
        //企业简介
        async enterDesc() {
            let res = await enterDesc({
                id: this.$route.params.id
            });
            if (res.Type == 'Success') {
                this.desc = res.Data.descPc;
            }
        },
        //获取投诉列表
        async getEnterComplaint() {
            let res = await getEnterComplaint({
                id: this.$route.params.id
            });
            if (res.Type == 'Success') {
                this.Complaints = res.Data;
            }
        },
        //获取培训课程
        async enterCourseIndex(){
            let res = await enterCourseIndex();
            if(res.Type == 'Success'){
                this.courseList = res.Data;
            }
        },
        zkFunc(i) {
            this.list[i].zkDir = !this.list[i].zkDir;
            console.log(this.list[i].zkDir);
        },
        more() {
            this.params.index++;
            this.enterCurrentIndex();
        },
        async getLikeEnter() {
            let res = await getLikeEnter();
            if (res.Type == 'Success') {
                this.likeArr = res.Data;
            }
        },
        init() {
            this.enterDetail();
            this.enterDesc();
            this.enterCurrentIndex();
            this.getLikeEnter();
            this.getEnterComplaint();
            this.enterCourseIndex();
        }
    },
    created() {
        this.init();
    },
    watch: {
        $route(to, from) {
            this.init();
        }
    }
};
</script>

<style>
</style>
