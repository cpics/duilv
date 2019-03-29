<template>
  <div class="g-container">
    <!--详情头部-->
    <div class="com-detail-hd">
      <div class="com-hd-inner">
        <div class="com-hd-info">
          <div class="com-hd-face">
            <img :src="header.picPath" alt>
          </div>
          <div class="com-hd-name">
            <div class="hd-bottom-td">
              <div class="hd-name-row">{{header.title}}</div>
              <!--今日信息-->
              <div class="hd-name-row">
                <span>今天</span>
                <span>{{header.now}}</span>
                <span>{{header.dayOfWeek}}</span>
                <span>天气：{{weather}}</span>
              </div>
            </div>
          </div>
        </div>
        <!--右侧操作-->
        <div class="com-hd-handle">
          <div class="hd-bottom-td">
            <span class="cm-sign-btn">签到详情</span>
            <!--<span class="share-wechat-btn">分享：<i class="u-wechat-icon"></i></span>-->
          </div>
        </div>
      </div>
    </div>
    <div class="m-container m-width">
      <!--面包屑-->
      <div class="crumbs-box">
        <a class="c-crumbs" href>首页</a>
        <span class="c-sep">&gt;</span>
        <a class="c-crumbs" href>匠心记</a>
        <span class="c-sep">&gt;</span>
        <span class="c-current">环秀湖花园</span>
      </div>
      <!--主体-->
      <div class="origin-content">
        <div class="m-second-tabs">
          <span>全部</span>
          <span class="u-line">|</span>
          <span class="active">日报</span>
          <span class="u-line">|</span>
          <span>周报</span>
          <span class="u-line">|</span>
          <span>检查报告</span>
        </div>
        <div class="m-structure-content">
          <div class="m-structure-information">
            <div class="m-prise-content">
              <div class="e-prise-box">
                <div class="prise-hd">
                  <div class="prise-face f-circle">
                    <img src alt>
                  </div>
                  <div class="prise-hd-info">
                    <div class="prise-hd-name">
                      <span>2019年1月10日</span>
                      <span class="prise-tag-icon">日报</span>
                    </div>
                    <div class="prise-time">项目经理：周德江</div>
                  </div>
                  <div class="prise-status">
                    <span class="prise-status-txt">安全状况：无事故</span>
                    <span class="prise-status-txt">天气：晴</span>
                  </div>
                </div>
                <div class="prise-article">
                  <!--<div class="prise-art-name">-->
                  <!--<b>嘉兴世合小镇</b>-->
                  <!--<span class="art-tips">推广</span>-->
                  <!--</div>-->
                  <div
                    class="prise-art-txt"
                  >不知道要求多少行字？？“他像是来自遥远古代的神祇──在某个意义上说，木心的那个世界，那个精致的、熠熠为光的、爱智的、澹泊却又为美为精神性叩问而骚乱的世界，在他展开他那淡泊、旖旎的文字卷轴时，早已崩毁覆灭...</div>
                  <div class="cp-column hover-scale pic-300">
                    <div class="cp-item">
                      <img src="../../../html/pages/home/images/demo.png" alt>
                    </div>
                    <div class="cp-item">
                      <img src="../../../html/pages/home/images/demo.png" alt>
                    </div>
                    <div class="cp-item">
                      <img src="../../../html/pages/home/images/demo.png" alt>
                    </div>
                  </div>
                  <div class="u-news-handle">
                    <div class="un-left">
                      <span class="un-col">
                        <i class="n-small-icon comment-icon"></i>
                        101
                        <em class="c-arrow-up"></em>
                      </span>
                      <span class="un-col">
                        <i class="n-small-icon eye-icon"></i>
                        101
                      </span>
                    </div>
                  </div>
                  <div class="comment-box">
                    <div class="prise-comment">
                      <div class="comment-list">
                        <ul>
                          <li>
                            <div class="comment-face">
                              <img src="../../../html/pages/home/images/demo.png" alt>
                            </div>
                            <div class="comment-info">
                              <div class="comment-name">我是你大哥</div>
                              <div class="comment-msg">斗破天穹粉红娘娘，在家吃西瓜不行吗，硬要出来浪，这么热！</div>
                            </div>
                          </li>
                          <li>
                            <div class="comment-face">
                              <img src="../../../html/pages/home/images/demo.png" alt>
                            </div>
                            <div class="comment-info">
                              <div class="comment-name">我是你大哥</div>
                              <div class="comment-msg">真厉害，厉害死了</div>
                            </div>
                          </li>
                          <li>
                            <div class="comment-face">
                              <img src="../../../html/pages/home/images/demo.png" alt>
                            </div>
                            <div class="comment-info">
                              <div class="comment-name">我是你大哥</div>
                              <div
                                class="comment-msg"
                              >我也在等待那一天。我必须等到能把自己当做另一个人的那一刻，等到自我消散的时候。那将会让我非常喜悦</div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="e-prise-box">
                <div class="prise-hd">
                  <div class="prise-face f-circle">
                    <img src="../../../html/pages/home/images/demo.png" alt>
                  </div>
                  <div class="prise-hd-info">
                    <div class="prise-hd-name">
                      <span>2019年1月10日</span>
                      <span class="prise-tag-icon">日报</span>
                    </div>
                    <div class="prise-time">项目经理：周德江</div>
                  </div>
                  <div class="prise-status">
                    <span class="prise-status-txt">安全状况：无事故</span>
                    <span class="prise-status-txt">天气：晴</span>
                  </div>
                </div>
                <div class="prise-article">
                  <!--<div class="prise-art-name">-->
                  <!--<b>嘉兴世合小镇</b>-->
                  <!--<span class="art-tips">推广</span>-->
                  <!--</div>-->
                  <div
                    class="prise-art-txt"
                  >不知道要求多少行字？？“他像是来自遥远古代的神祇──在某个意义上说，木心的那个世界，那个精致的、熠熠为光的、爱智的、澹泊却又为美为精神性叩问而骚乱的世界，在他展开他那淡泊、旖旎的文字卷轴时，早已崩毁覆灭...</div>
                  <div class="cp-column hover-scale pic-300">
                    <div class="cp-item">
                      <img src="../../../html/pages/home/images/demo.png" alt>
                    </div>
                    <div class="cp-item">
                      <img src="../../../html/pages/home/images/demo.png" alt>
                    </div>
                    <div class="cp-item">
                      <img src="../../../html/pages/home/images/demo.png" alt>
                    </div>
                  </div>
                  <div class="u-news-handle">
                    <div class="un-left">
                      <span class="un-col">
                        <i class="n-small-icon comment-icon"></i>
                        101
                        <em class="c-arrow-up"></em>
                      </span>
                      <span class="un-col">
                        <i class="n-small-icon eye-icon"></i>
                        101
                      </span>
                    </div>
                  </div>
                  <div class="comment-box">
                    <div class="prise-comment">
                      <div class="comment-list">
                        <ul>
                          <li>
                            <div class="comment-face">
                              <img src="../../../html/pages/home/images/demo.png" alt>
                            </div>
                            <div class="comment-info">
                              <div class="comment-name">我是你大哥</div>
                              <div class="comment-msg">斗破天穹粉红娘娘，在家吃西瓜不行吗，硬要出来浪，这么热！</div>
                            </div>
                          </li>
                          <li>
                            <div class="comment-face">
                              <img src="../../../html/pages/home/images/demo.png" alt>
                            </div>
                            <div class="comment-info">
                              <div class="comment-name">我是你大哥</div>
                              <div class="comment-msg">真厉害，厉害死了</div>
                            </div>
                          </li>
                          <li>
                            <div class="comment-face">
                              <img src="../../../html/pages/home/images/demo.png" alt>
                            </div>
                            <div class="comment-info">
                              <div class="comment-name">我是你大哥</div>
                              <div
                                class="comment-msg"
                              >我也在等待那一天。我必须等到能把自己当做另一个人的那一刻，等到自我消散的时候。那将会让我非常喜悦</div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="m-pages">
              <button type="button" disabled="disabled" class="btn-prev">上一页</button>
              <dl class="u-pager">
                <dd class="active">1</dd>
                <dd>2</dd>
                <dd>3</dd>
                <dd class="dots">···</dd>
                <dd>8</dd>
              </dl>
              <button type="button" class="btn-next">下一页</button>
            </div>
            <!--<div class="prompt-txt">加载更多...</div>-->
          </div>
          <div class="m-structure-quick">
            <div class="structure-btn">发布内容</div>
            <div class="structure-box pd-small">
              <div class="common-tit-h2">
                <b>项目概况简述</b>
              </div>
              <div class="project-intro">
                <div class="pro-intro-row">入场时间：{{header.creatTime.split(' ')[0]}}</div>
                <div class="pro-intro-row">项目地点：{{header.proAddr}}</div>
                <div class="pro-intro-row">项目简介：</div>
                <div class="pro-intro-txt">{{header.desc}}</div>
              </div>
              <div class="common-tit-h2">
                <a href class="more-tit-btn">项目详情&gt;</a>
              </div>
            </div>
            <div class="structure-box">
              <div class="com-md-face">
                <img :src="header.projectPartner.headImage" alt>
              </div>
              <div class="str-row">
                <span class="str-label">{{header.projectPartner.type}}</span>
                <i class="star-icon three-star"></i>
              </div>
              <div class="str-row">
                <span class="str-name">{{header.projectPartner.nickName}}</span>
                <!-- <span class="str-tag-icon">堆绿会员</span> -->
              </div>
            </div>
            <!-- <div class="structure-box">
              <div class="common-tit-h2">
                <b>类似项目</b>
              </div>
              <div class="guess-like">
                <a href class="guess-item">
                  <div class="guess-face">
                    <img src="../../../html/pages/home/images/demo.png" alt>
                  </div>
                  <div class="guess-info">苏州海的大姐软件有限公司</div>
                </a>
                <a href class="guess-item">
                  <div class="guess-face">
                    <img src="../../../html/pages/home/images/demo.png" alt>
                  </div>
                  <div class="guess-info">苏州海的大姐软件有限公司</div>
                </a>
                <a href class="guess-item">
                  <div class="guess-face">
                    <img src="../../../html/pages/home/images/demo.png" alt>
                  </div>
                  <div class="guess-info">苏州海的大姐软件有限公司</div>
                </a>
                <a href class="guess-item">
                  <div class="guess-face">
                    <img src="../../../html/pages/home/images/demo.png" alt>
                  </div>
                  <div class="guess-info">苏州海的大姐软件有限公司</div>
                </a>
              </div>
            </div>-->
            <div class="scan-code-quick">
              <div class="code-quick-pic">
                <img src="../../../html/components/comments/images/code1.png" alt>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import '../../../html/components/detailHd/detailHd.scss';
import '../../../html/components/tabs/tabs.scss';

import '../../../html/components/structure/structure.css';
import '../../../html/components/enterprise/enterprise.css';
import '../../../html/components/picture/picture.css';
import '../../../html/components/comments/comments.css';
import '../../../html/components/page/page.css';
import '../../../html/pages/originality/originality/originality.scss';

import { getJxjDetail, getJxjLog, getWeather } from '../../../api/index.js';
export default {
    name: 'originality',
    data() {
        return {
            header: {},
            list: [],
            weather: '',
            type: 'all',
            pageIndex: 0,
            count: 0
        };
    },
    methods: {
        async getHeader() {
            let res = await getJxjDetail({
                id: this.$route.params.id
            });
            if (res.Type == 'Success') {
                this.header = res.Data;
            }
        },
        //获取列表数据
        async getJxjLog() {
            let res = await getJxjLog({
                id: this.$route.params.id,
                type: this.type,
                index: this.pageIndex,
                size: 10
            });
            if (res.Type == 'Success') {
                this.list.concat(res.Data);
            }
        },
        async getWeather() {
            let res = await getWeather({
                city: '苏州'
            });
            if (res.Type == 'Success') {
                this.weather = res.Data;
            }
        },
        //加载更多
        more() {
            this.pageIndex++;
            this.getJxjLog();
        }
    },
    created() {
        console.log(this.$route.params.id);
        this.getWeather();
        this.getHeader();
        this.getJxjLog();
    }
};
</script>

<style>
</style>
