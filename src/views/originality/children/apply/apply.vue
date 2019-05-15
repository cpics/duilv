<template>
    <!--页面主体-->
    <div class="g-container">

        <div class="m-container m-width">
            <!--面包屑-->
            <div class="crumbs-box">
                <a class="c-crumbs"
                   href="">匠心记</a>
                <span class="c-sep">&gt;</span>
                <span class="c-current">申请匠心记</span>
            </div>
            <!--申请匠心记-->
            <div class="apply-orig-main">
                <div class="apply-orig-hd">
                    <ul>
                        <!--选中 +active-->
                        <li :class="{'active':setp == 1}">
                            <h4>第一步</h4>
                            <p>填写项目信息</p>
                            <i></i>
                        </li>
                        <li :class="{'active':setp == 2}">
                            <h4>第二步</h4>
                            <p>填写角色信息</p>
                            <i></i>
                        </li>
                        <li :class="{'active':setp == 3}">
                            <h4>第三步</h4>
                            <p>提交等待审核</p>
                            <i></i>
                        </li>
                    </ul>
                </div>
                <div class="apply-orig-content">
                    <!--填写项目信息-->
                    <div class="apply-orig-box"
                         v-if="setp == 1">
                        <h1 class="a-orig-tit">创建的我匠心记</h1>
                        <div>
                            <!--项目概况-->
                            <div class="a-orig-column">
                                <div class="a-column-tit">
                                    <div class="a-tit">项目概况</div>
                                </div>
                                <div class="apply-form">
                                    <div class="apply-form-row">
                                        <input type="text"
                                               v-model="form1.title"
                                               placeholder="我的项目名" />
                                        <span class="unit-vere">(*必填)</span>
                                    </div>
                                    <div class="apply-form-row">
                                        <el-date-picker v-model="form1.createdTime"
                                                        type="date"
                                                        placeholder="项目创建时间">
                                        </el-date-picker>
                                        <span class="unit-vere">(*必填)</span>
                                    </div>
                                    <!-- <div class="apply-form-row">
                                        <input type="text"
                                               placeholder="项目地点" />
                                        <span class="unit-vere">(请在手机上完成此操作)</span>
                                    </div> -->
                                    <div class="apply-form-row">
                                        <textarea v-model="form1.desc"
                                                  placeholder="简单描述项目的相关介绍"></textarea>
                                        <span class="unit-vere">(*必填)</span>
                                    </div>
                                    <div class="apply-form-row">
                                        <div class="apply-pic">
                                            <div class="apply-pic-item">
                                                <button class="upload-btn">{{form1.picPath.length ==0 ? '点击添加' : '重新选择'}}项目图片</button>
                                                <input type="file"
                                                       id="imgFile"
                                                       name="file"
                                                       @change="uploadImg()"
                                                       ref="imgFileInput"
                                                       accept="image/png, image/jpeg, image/gif, image/jpg">

                                            </div>
                                            <div class="apply-pic-item"
                                                 v-if="form1.picPath.length >0">
                                                <img :src="form1.picPath"
                                                     alt="">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!--选择标签-->
                            <div class="a-orig-column">
                                <div class="a-column-tit">
                                    <div class="a-tit">选择标签</div>
                                </div>
                                <div class="apply-form">
                                    <div class="apply-form-row">
                                        <!--选中 +active-->
                                        <span class="apply-tag"
                                              :class="{'active':tag.active}"
                                              v-for="(tag,t) in tags"
                                              @click="chooseTags(t)"
                                              :key="t">{{tag.title}}</span>

                                    </div>
                                </div>
                            </div>
                            <!--产品概况-->
                            <div class="a-orig-column">
                                <div class="a-column-tit">
                                    <div class="a-tit">产品概况</div>
                                </div>
                                <div class="apply-form">
                                    <div class="apply-form-row">
                                        <input type="text"
                                               v-model="form1.productName"
                                               placeholder="请简述您的所用产品名称" />
                                        <span class="unit-vere">(*必填)</span>
                                    </div>
                                    <div class="apply-form-row txt-short">
                                        <textarea v-model="form1.productPart"
                                                  placeholder="请简述您的所用产品组成"></textarea>
                                        <span class="unit-vere">(*必填)</span>
                                    </div>
                                    <div class="apply-form-row txt-short">
                                        <textarea v-model="form1.productTrait"
                                                  placeholder="请简述您的所用产品特点"></textarea>
                                        <span class="unit-vere">(*必填)</span>
                                    </div>
                                </div>
                            </div>
                            <!--工程概况-->
                            <div class="a-orig-column">
                                <div class="a-column-tit">
                                    <div class="a-tit">工程概况</div>
                                </div>
                                <div class="apply-form">
                                    <div class="apply-form-row txt-short">
                                        <textarea v-model="form1.quality"
                                                  placeholder="请简述您的工程质量"></textarea>
                                        <span class="unit-vere">(*必填)</span>
                                    </div>
                                    <div class="apply-form-row txt-short">
                                        <textarea v-model="form1.scale"
                                                  placeholder="请简述您的工程规模"></textarea>
                                        <span class="unit-vere">(*必填)</span>
                                    </div>
                                    <div class="apply-form-row txt-short">
                                        <textarea v-model="form1.cycle"
                                                  placeholder="请简述您的工程周期"></textarea>
                                        <span class="unit-vere">(*必填)</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="cm-form-btn">
                            <div class="cu-form-btn"
                                 @click="submitStep1">下一步</div>
                        </div>
                    </div>
                    <!--填写角色信息-->
                    <div class="apply-orig-box"
                         v-if="setp == 2">
                        <div>
                            <div class="a-orig-column"
                                 v-if="item.typeName !='协理'"
                                 v-for="(item,i) in persons"
                                 :key="i">
                                <div class="a-column-tit">
                                    <div class="a-tit">{{item.typeName}}</div>
                                </div>
                                <div class="project-rol-list">
                                    <ul>
                                        <li>
                                            <div class="project-role-row"
                                                 v-for="(per ,p) in item.arr"
                                                 :key="p">
                                                <div class="role-user-info">
                                                    <div class="role-face">
                                                        <img :src="per.headImage" />
                                                    </div>
                                                    <div class="role-name">
                                                        <p>{{per.nickName}}</p>
                                                    </div>
                                                    <div class="role-tag"
                                                         v-for="(ta,t) in per.tags"
                                                         :key="t">{{ta}}</div>
                                                </div>
                                                <!--一星 one-star-->
                                                <!--二星 two-star-->
                                                <!--三星 three-star-->
                                                <!--四星 four-star-->
                                                <!--五星 five-star-->
                                                <div class="role-star "
                                                     :class="'star-'+per.star">
                                                    <i></i>
                                                    <i></i>
                                                    <i></i>
                                                    <i></i>
                                                    <i></i>
                                                </div>
                                                <div class="role-handle">
                                                    <span class="role-del"
                                                          v-if="per.isDir"
                                                          @click="delPerson(item,p)">删除</span>
                                                </div>
                                            </div>
                                            <!--添加 显示 +show-->
                                            <div class="add-role-box show">
                                                <div class="role-input">
                                                    <input type="text"
                                                           v-on:input="getonlineUser(item)"
                                                           v-model="item.searchPhone"
                                                           placeholder="请输入添加人的手机号" />
                                                </div>
                                                <div class="role-nike-name">{{item.searchName}}</div>
                                                <!-- <div class="role-handle">
                                                    <span class="role-btn" @click="addPerson(item)">确定</span>
                                                    <span class="role-line">|</span>
                                                    <span class="role-btn" @click="showA">取消</span>
                                                </div> -->
                                            </div>
                                            <div class="add-role-btn"
                                                 @click="addPerson(item)">+添加{{item.typeName}}</div>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                        </div>
                        <div class="cm-form-btn">
                            <div class="cu-form-btn">上一步</div>
                            <div class="cu-form-btn"
                                 @click="submitStep2">下一步</div>
                        </div>
                    </div>
                    <!--提交等待审核-->
                    <div class="apply-orig-box"
                         v-if="setp == 3">
                        <div class="apply-result">
                            <div class="result-icon ok-icon"></div>
                            <h2 class="result-tit">恭喜，提交成功！</h2>
                            <div class="result-prompt">
                                我们已经收到您的申请请求，堆绿工作人员将会在
                                <span class="c-orange">24小时</span>内进行处理，请您耐心等待，感谢您的参与……
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import '../../../../html/components/crumbs/crumbs.scss';
import '../../../../html/pages/originality/apply/apply.scss';
import '../../../../html/pages/originality/modifyProject/modifyProject.scss';
import { getJxjTags, uploadImage, GetJxjProUserTypes, GetJxjProUsers, jxjAddProjectLog } from '../../../../api';
import { mapState, mapMutations } from 'vuex';
export default {
    name: 'jxjApply',
    data() {
        return {
            tags: [],
            setp: 1,
            persons: [],
            setp1Dir: false,
            form1: {
                title: '',//项目名称
                createdTime: '',//创建时间
                desc: '',//项目简介
                picPath: '',//图片
                tagIds: [],//标签
                productName: '',//产品名称
                productPart: '',//产品组成
                productTrait: '',//产品特点
                quality: '',//工程质量
                cycle: '',//工程周期
                scale: '',//工程规模
                proUsers: []
            },
            rules: {
                title: [
                    { required: true, message: '请填写项目名称!' }
                ],
                createdTime: [
                    { required: true, message: '请选择创建时间!' }
                ],
                desc: [
                    { required: true, message: '请填写项目简介!' }
                ],
                picPath: [
                    { required: true, message: '请添加图片!' }
                ],
                tagIds: [
                    { required: true, message: '请选择标签!' }
                ],
                productName: [
                    { required: true, message: '请填写产品名称!' }
                ],
                productPart: [
                    { required: true, message: '请填写产品组成!' }
                ],
                productTrait: [
                    { required: true, message: '请填写产品特点!' }
                ],
                quality: [
                    { required: true, message: '请填写工程质量!' }
                ],
                cycle: [
                    { required: true, message: '请填写工程周期!' }
                ],
                scale: [
                    { required: true, message: '请填写工程规模!' }
                ],

            }
        }
    },
    computed: {
        ...mapState(['userInfo'])
    },
    methods: {
        async getJxjTags() {
            let res = await getJxjTags();
            if (res.Type == 'Success') {
                res.Data.forEach(item => {
                    item.active = false;
                });
                this.tags = res.Data;
            } else {
                this.$layer.alert(res.Content);
            }
        },
        chooseTags(i) {
            this.tags[i].active = !this.tags[i].active;
            this.form1.tagIds = [];
            this.tags.forEach(item => {
                if (item.active) {
                    this.form1.tagIds.push(item.id);
                }
            })
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
                    that.form1.picPath = res.Data;
                }

            };
        },
        submitStep1() {
            let validator = new this.$validator(this.rules);
            let model = this.form1;
            validator.validate(model, async (errors, fields) => {
                if (!errors) {
                    this.setp = 2;
                    this.setp1Dir = true;
                } else {
                    this.setp1Dir = false;
                    this.$layer.alert(errors[0].message);

                }
            });
        },
        async submitStep2() {
            let dir = true;
            for (let i = 0; i < this.persons.length; i++) {
                if (this.persons[i].arr.length == 0 && this.persons[i].typeName != '协理') {
                    dir = false;
                    this.$layer.alert('请添加' + this.persons[i].typeName);
                    break;
                }
            }

            if (!dir) {
                return false;
            }

            this.persons.proUsers = [];

            this.persons.forEach(item => {
                item.arr.forEach(person => {
                    this.persons.proUsers.push({
                        id: person.id,
                        type: item.id
                    })
                })
            });

            let res = await jxjAddProjectLog(this.form1);

            if (res.Type == 'Success') {
                this.setp = 3;
            }


        },
        async getUserByPhone(phone, callback) {
            let res = await GetJxjProUsers({
                phone: phone
            })
            if (callback) {
                callback(res);
            }

        },
        getonlineUser(item) {
            if (item.searchPhone == '') {
                item.searchName = '这边显示昵称';
                item.proAddUser = null;
                return;
            }
            if (!/^1[34578]\d{9}$/.test(item.searchPhone)) {
                item.searchName = '号码不正确';
                item.proAddUser = null;
                return;
            }
            this.getUserByPhone(item.searchPhone, res => {
                if (res.Type == 'Success') {
                    res.Data.isDir = true;
                    item.proAddUser = res.Data;
                    // item.proAddUser.type = item.type;

                    item.searchName = res.Data.nickName;
                } else {
                    item.proAddUser = null;
                    item.searchName = '查无此人';
                }
            })

        },
        addPerson(item) {

            if (item.proAddUser == null) {
                return false;
            }
            item.arr.push(item.proAddUser);
            item.proAddUser = null;
            item.searchPhone = '';
            item.searchName = '这边显示昵称';
        },
        delPerson(item, i) {
            item.arr.splice(i, 1);
        },
        async GetJxjProUserTypes() {
            let res = await GetJxjProUserTypes();
            if (res.Type == 'Success') {
                res.Data.forEach(item => {
                    item.arr = [];
                    item.proAddUser = null;
                    item.searchPhone = '';
                    item.searchName = '这边显示昵称';
                })
                this.persons = res.Data;
                this.getUserByPhone(this.userInfo.phone, res => {
                    res.Data.isDir = false;
                    this.persons[0].arr.push(res.Data);
                });
            }
        }

    },
    created() {
        // console.log(this.userInfo);
        this.getJxjTags();
        this.GetJxjProUserTypes();

    }

}
</script>

<style>
</style>
