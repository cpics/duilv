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
                        <div class="edit-save-button">
                            <span class="edit-save-btn" @click="updateEnterDesc()">保存</span>
                            <!--<span class="edit-save-btn bg-grey">取消</span>-->
                        </div>
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
                        <div class="editor-inner" :class="{'show':type == 2}">
                            <div class="editor-phone-info">
                                <div class="e-phone-textarea">
                                    <textarea v-model="mobileContent" placeholder="正文内容......"></textarea>
                                </div>
                                <div class="e-phone-pic">
                                    <div class="pic-phone-item">
                                        <button class="upload-btn">添加图片</button>
                                        <input @change="uploadImg()" type="file" name="file" ref="imgInput">
                                    </div>
                                    <div class="pic-phone-item" v-for="(item,i) in mobileImgs" :key="i">
                                        <img :src="item">
                                        <i class="phone-del-pic"></i>
                                    </div>
                                </div>
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

import {
    enterDetail,
    enterDesc,
    updateEnterDesc,
    uploadImage
} from '../../../../api/index';
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
            PCcontent: '',
            mobileContent: '',
            mobileImgs: []
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
                this.getMobileInfo(res.Data.descMobile);
            }
        },
        getMobileInfo(info) {
            if (!info || info == '') {
                this.mobileContent = '';
            } else {
                // let m = res.Data.descMobile;
                let arr = info.split('<div>');
                if (arr.length == 1) {
                    this.mobileContent = '';
                } else {
                    this.mobileContent = arr[0];

                    let imgStringArr = arr[1].split('</div>')[0].split('" />');
                    let imgUrlArr = [];
                    imgStringArr.forEach(item => {
                        if (item.length > 0) {
                            imgUrlArr.push(item.split('<img src="')[1]);
                        }
                    });
                    this.mobileImgs = imgUrlArr;
                    // console.log(imgUrlArr);
                }
            }
        },
        //修改企业简介
        async updateEnterDesc() {
            let params = {
                id: this.$route.params.id,
                type: this.type,
                desc: this.type == 1 ? this.PCcontent : ''
            };
            if (this.type == 2) {
                let content = this.mobileContent;
                let imgStr = this.splImgs();
                content += '<div>' + imgStr + '</div>';
                params.desc = content;
                console.log(content);
            }

            // return;
            let res = await updateEnterDesc(params);
            if (res.Type == 'Success') {
                this.$layer.alert(res.Content);
            }
        },
        splImgs() {
            // console.log(this.mobileImgs);
            let str = '';
            this.mobileImgs.forEach(item => {
                str += '<img src="' + item + '" />';
            });
            // console.log(str.toString());
            return str.toString();
        },
        async uploadImg() {
            let file = this.$refs.imgInput.files[0];
            let reader = new FileReader();
            reader.readAsDataURL(file);
            let that = this;
            reader.onload = async function(e) {
                let res = await uploadImage({
                    file: file
                });
                if (res.Type == 'Success') {
                    that.mobileImgs.push(res.Data);
                }
            };
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
        // this.updateEnterDesc();
        this.enterDesc();
        // this.getMobileInfo(
        //     '么么么哒么么么哒么么么哒么么么哒<div><img src="/Upload/Image/3b6fd444e97d42b791a97cf6680385c3.png" /><img src="/Upload/Image/f20aff3743714fcea79ca6197a568014.png" /></div>'
        // );
    }
};
</script>

<style>
</style>
