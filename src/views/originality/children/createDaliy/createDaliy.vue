<template>
    <!--页面主体-->
    <div class="g-container">
        <div class="m-container m-width">
            <!--面包屑-->
            <div class="crumbs-box">
                <span class="c-current">匠心记</span>
                <span class="c-sep">&gt;</span>
                <span class="c-current">创建日报</span>
            </div>
            <!--主体-->
            <div class="create-qe-main">
                <h2 class="create-daily-tit">创建日报</h2>
                <div class="create-daily-form">
                    <div class="c-daily-row">
                        <div class="c-daily-label">项目名称</div>
                        <div class="c-daily-info">
                            <b>{{title}}</b>
                        </div>
                    </div>
                    <!-- <div class="c-daily-row">
                        <div class="c-daily-label">时间</div>
                        <div class="c-daily-info">
                            <div class="block">
                                <el-date-picker v-model="dateValue"
                                                align="right"
                                                type="date"
                                                placeholder="选择日期"
                                                :picker-options="pickerOptions">
                                </el-date-picker>
                            </div>
                        </div>
                    </div> -->
                    <div class="c-daily-row">
                        <div class="c-daily-label">安全状况</div>
                        <div class="c-daily-info">
                            <!--选中 +active-->
                            <span class="daily-tag-green"
                                  :class="{'active':this.form.salfState == '0'}"
                                  @click="chooseSafe(0)">安全</span>
                            <span class="daily-tag-red"
                                  @click="chooseSafe(1)"
                                  :class="{'active':this.form.salfState == '1'}">异常</span>
                            <span class="cm-red">(*必填)</span>
                        </div>
                    </div>
                    <div class="c-daily-row">
                        <div class="c-daily-label">项目负责</div>
                        <div class="c-daily-info">
                            <input type="text"
                                   v-model="projectPartnerString"
                                   @blur.prevent="filterprojectPartner"
                                   placeholder="" />
                            <span class="cm-red">(*必填)</span>
                        </div>
                    </div>
                    <div class="c-daily-row">
                        <div class="c-daily-label">项目管理</div>
                        <div class="c-daily-info">
                            <input type="text"
                                   v-model="projectManageString"
                                   @blur.prevent="filterprojectManage"
                                   placeholder="" />
                            <span class="cm-red">(*必填)</span>
                        </div>
                    </div>
                    <div class="c-daily-row">
                        <div class="c-daily-label">对策</div>
                        <div class="c-daily-info">
                            <input type="text"
                                   v-model="form.measure"
                                   placeholder="" />
                            <span class="cm-red">(*必填)</span>
                        </div>
                    </div>
                    <div class="c-daily-row">
                        <div class="c-daily-label">项目进度</div>
                        <div class="c-daily-info">
                            <textarea v-model="form.pschedule"
                                      placeholder=""></textarea>
                            <span class="cm-red">(*必填)</span>
                        </div>
                    </div>
                    <div class="c-daily-row">
                        <div class="c-daily-label">需协调事宜</div>
                        <div class="c-daily-info">
                            <textarea v-model="form.pdiscuss"
                                      placeholder=""></textarea>
                            <!--<span class="cm-red">(*必填)</span>-->
                        </div>
                    </div>
                    <div class="c-daily-row">
                        <div class="c-daily-label">人员人数</div>
                        <div class="c-daily-info">
                            <span class="pr-20">共</span>
                            <input class="short-input"
                                   type="text"
                                   v-model="form.peopleNum"
                                   placeholder="" />
                            <span class="cm-red">(*必填)</span>
                        </div>
                    </div>
                    <div class="c-daily-row">
                        <div class="c-daily-label">人员详情</div>
                        <div class="c-daily-info">
                            <textarea v-model="form.sDetail"
                                      placeholder=""></textarea>
                            <!-- <span class="cm-red">(*必填)</span> -->
                        </div>
                    </div>
                    <div class="c-daily-row">
                        <div class="c-daily-label">其他情况汇报</div>
                        <div class="c-daily-info">
                            <textarea v-model="form.pother"
                                      placeholder=""></textarea>
                        </div>
                    </div>
                    <div class="c-daily-row">
                        <div class="c-daily-label">现场图片上传</div>
                        <div class="c-daily-info">
                            <div class="create-daily-pic">
                                <div class="pic-daily-item">
                                    <button class="upload-btn">添加图片</button>
                                    <input type="file"
                                           id="imgFile"
                                           name="file"
                                           @change="uploadImg()"
                                           ref="imgFileInput"
                                           accept="image/png, image/jpeg, image/gif, image/jpg">
                                </div>
                                <div class="pic-daily-item"
                                     v-for="(img,m) in form.imgs"
                                     :key="m">
                                    <img :src="img"
                                         alt="">
                                    <i class="daily-del-pic"
                                       @click="delImg(m)"></i>
                                </div>
                            </div>
                            <span class="cm-red">(*必填)</span>
                        </div>
                    </div>
                </div>
                <div class="cm-form-btn">
                    <!-- <div class="cu-form-btn bg-grey">取消</div> -->
                    <div class="cu-form-btn"
                         @click="submitFunc()">创建</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import '../../../../html/components/crumbs/crumbs.css';

import '../../../../html/pages/originality/createDaily/createDaily.css';

import { uploadImage, jxjAddDaily } from '../../../../api/index.js';

export default {
    name: 'createDaliy.vue',
    data() {
        return {
            title: this.$route.query.title,

            pickerOptions: {
                shortcuts: [{
                    text: '今天',
                    onClick(picker) {
                        picker.$emit('pick', new Date());
                    }
                }]
            },
            dateValue: '',
            projectPartnerString: '',
            projectManageString: '',
            form: {
                id: this.$route.params.id,//项目ID
                projectPartner: [],//项目负责
                projectManage: [],//项目管理
                measure: '',//对策
                salfState: '',//安全状态 0，1
                pdiscuss: '',//需协调事宜
                pschedule: '',//项目进度
                pother: '',//其他情况汇报
                peopleNum: '',//现场人数
                sDetail: '',//详情
                imgs: [],//图片
            },
            rules: {
                salfState: [
                    { required: true, message: '请选择安全状态!' },
                ],
                projectPartner: [
                    { required: true, message: '请填写项目负责人!' },
                ],
                projectManage: [
                    { required: true, message: '请填写项目管理人!' },
                ],
                measure: [
                    { required: true, message: '请填写对策!' },
                ],
                pschedule: [
                    { required: true, message: '请填写项目进度!' },
                ],
                peopleNum: [
                    { required: true, message: '请填写现场人数!' },
                    { pattern: /^[0-9]+$/, message: '现场人数必须是整数!' }
                ],
                imgs: [
                    { required: true, message: '请添加图片!' },
                ]
            }
            // validate: {
            //     partnerDir: false,
            //     manageDir: false,
            //     measureDir: false,
            //     salfStateDir: false,
            //     pscheduleDir: false,
            // }
        }
    },
    methods: {
        chooseSafe(state) {
            this.form.salfState = state;
            console.log(this.form.salfState);
        },
        delImg(i) {
            this.form.imgs.splice(i, 1);
        },
        //添加现场图片
        async uploadImg() {
            let file = this.$refs.imgFileInput.files[0];
            let reader = new FileReader();
            reader.readAsDataURL(file);
            let that = this;
            reader.onload = async function (e) {
                let res = await uploadImage({
                    file: file
                });
                if (res.Type == 'Success') {
                    that.form.imgs.push(res.Data);
                }

            };
        },
        filterprojectManage() {
            if (this.projectManageString.length > 0) {
                this.form.projectManage = this.projectManageString.split(',');

            } else {
                this.form.projectManage = [];
            }
            console.log(this.form.projectManage);
        },
        filterprojectPartner() {
            if (this.projectPartnerString.length > 0) {
                this.form.projectPartner = this.projectPartnerString.split(',');

            } else {
                this.form.projectPartner = [];
            }
            console.log(this.form.projectPartner);
        },
        async submitFunc() {
            let validator = new this.$validator(this.rules);
            let model = this.form;
            validator.validate(model, async (errors, fields) => {
                if (!errors) {
                    let res = await jxjAddDaily(this.form);

                } else {
                    this.$layer.alert(errors[0].message);
                }
            });
        }
    }
}
</script>

<style>
</style>
