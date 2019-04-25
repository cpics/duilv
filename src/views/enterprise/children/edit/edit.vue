<template>
  <!--页面主体-->
  <div class="g-container">
    <!--详情头部-->
    <div class="com-detail-hd">
      <div class="com-hd-inner">
        <div class="com-hd-info">
          <div class="com-hd-face">
            <img :src="detail.picPath">
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
        <a class="c-crumbs" href>苏州海的大姐有限公司</a>
        <span class="c-sep">&gt;</span>
        <span class="c-current">企业编辑</span>
      </div>
      <!--项目回顾-->
      <div class="g-normal-content">
        <div class="m-editor-box">
          <div class="u-editor-tabs">
            <span class="edit-tab-col" :class="{'active':type == 1}" @click="show(1)">电脑页面</span>
            <span class="edit-tab-col" :class="{'active':type == 2}" @click="show(2)">手机页面</span>
          </div>
          <div class="u-editor-box">
            <!--电脑页面 显示 +show-->
            <div class="editor-inner" :class="{'show':type == 1}">
              <div class="edit_container">
                <quill-editor
                  v-model="PCcontent"
                  ref="myQuillEditor"
                  :options="editorOption"
                  @blur="onEditorBlur($event)"
                  @focus="onEditorFocus($event)"
                  @change="onEditorChange($event)"
                ></quill-editor>
              </div>
              <!-- <div class="news-article">
                <p>
                  木心
                  1927年生于浙江桐乡。本名孙璞，字仰中，号牧心，笔名木心。毕业于上海美术专科学校。1982年定居纽约。陈丹青的导师。在台湾和纽约华人圈中被视为深解中国传统文化的精英和传奇人物。曾出版多部著作。
                  1927年2月14日（西方情人节）生，浙江乌镇东栅人，据称，木心与作家茅盾（沈雁冰）两家有较远的姻亲关系。木心先生的大甥婿郑儒针是香港银行前行长——郑铁如先生的长子，民国著名社会活动家谢仁冰先生的外甥，与钱钟书先生交好，其母与鲁迅先生相识。
                  陈丹青解释木心的名字.
                </p>
                <p>常以为人是一种容器，盛着快乐，盛着悲哀。但人不是容器，人是导管，快乐流过，悲哀流过，导管只是导管。各种快乐悲哀流过流过，一直到死，导管才空了。疯子就是导管的淤塞和破裂。</p>
                <img src alt>
              </div>-->
            </div>
            <!--手机页面 显示 +show-->
            <div class="editor-inner" :class="{'show':type == 1}">
              <div class="choose-phone-list">
                <ul>
                  <li>
                    <div class="phone-pic">
                      <img src alt>
                    </div>
                    <div class="phone-choose-btn">
                      <span>手机经典页面</span>
                      <i class="is-open-icon active"></i>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import '../../../../html/components/crumbs/crumbs.css';

import '../../../../html/components/detailHd/detailHd.css';
import '../../../../html/components/tabs/tabs.css';

import '../../../../html/components/article/article.css';

import '../../../../html/pages/enterprise/edit/edit.css';
import { quillEditor } from 'vue-quill-editor'; //调用编辑器
import 'quill/dist/quill.core.css';
import 'quill/dist/quill.snow.css';
import 'quill/dist/quill.bubble.css';

import { enterDetail, enterDesc } from '../../../../api/index';
export default {
    name: 'edit',
    components: {
        quillEditor
    },
    data() {
        return {
            detail: {},
            type: 1, //1代表电脑 2代表手机
            editorOption: {},
            PCcontent: '<div>112313123132</div>',
            mobileContent: ''
        };
    },
    methods: {
        //企业详情-头部
        async enterDetail() {
            let res = await enterDetail({
                id: this.$route.params.id
            });
            if (res.Type == 'Success') {
                this.detail = res.Data;
            }
        },
        async enterDesc() {
            let res = await enterDesc({
                id: this.$route.params.id
            });
            if (res.Type == 'Success') {
                this.PCcontent = res.Data.descPc ? res.Data.descPc : '';
                this.mobileContent = res.Data.descMobile
                    ? res.Data.descMobile
                    : '';
            }
        },
        show(type) {
            this.type = type;
        },
        onEditorReady(editor) {
            // 准备编辑器
        },
        onEditorBlur() {}, // 失去焦点事件
        onEditorFocus() {}, // 获得焦点事件
        onEditorChange() {} // 内容改变事件
    },
    created() {
        this.enterDetail();
        // this.enterDesc();
    }
};
</script>

<style>
</style>
