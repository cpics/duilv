<template>
    <!--页面主体-->
    <div class="g-container">
        <div class="m-container m-width">
            <!--面包屑-->
            <div class="crumbs-box">
                <span class="c-current">匠心记</span>
                <span class="c-sep">&gt;</span>
                <router-link tag="a"
                             :to="{name:'jxjDetail',params:{id:this.$route.params.id}}">{{detail.title}}</router-link>
                <!-- <a class="c-crumbs"
                   href="">环秀湖花园北区</a> -->
                <span class="c-sep">&gt;</span>
                <span class="c-current">项目信息修改</span>
            </div>
            <!--主体-->
            <div class="modify-form-main">
                <div class="modify-box">
                    <h2 class="modify-form-tit">基本信息</h2>
                    <div class="modify-base-info">
                        <div class="base-i-row">项目名称：{{detail.title}}</div>
                        <div class="base-i-row">创建时间：{{detail.creatTime}}</div>
                        <div class="base-i-row">项目地点：{{detail.proAddr}}</div>
                    </div>
                    <div class="modify-base-map"
                         id="mapContent">

                    </div>
                </div>
                <div class="modify-box">
                    <h2 class="modify-form-tit">项目概况</h2>
                    <div class="modify-base-info">
                        <div class="modify-situation">
                            <div class="modify-caption">项目简介</div>
                            <div class="modify-size">
                                <textarea v-model="detail.desc"
                                          placeholder=""></textarea>
                            </div>
                        </div>
                        <div class="modify-situation">
                            <div class="modify-caption">产品概况</div>
                            <div class="modify-sit-row">
                                <div class="sit-label">产品名称：</div>
                                <div class="sit-input">
                                    <input type="text"
                                           v-model="detail.productName"
                                           placeholder="" />
                                </div>
                            </div>
                            <div class="modify-sit-row">
                                <div class="sit-label">产品组成：</div>
                                <div class="sit-input">
                                    <textarea v-model="detail.productPart"
                                              placeholder=""></textarea>
                                </div>
                            </div>
                            <div class="modify-sit-row">
                                <div class="sit-label">产品特点：</div>
                                <div class="sit-input">
                                    <textarea v-model="detail.productTrait"
                                              placeholder=""></textarea>
                                </div>
                            </div>
                        </div>
                        <div class="modify-situation">
                            <div class="modify-caption">工程概况</div>
                            <div class="modify-sit-row">
                                <div class="sit-label">工程质量：</div>
                                <div class="sit-input">
                                    <input type="text"
                                           v-model="detail.quality"
                                           placeholder="" />
                                </div>
                            </div>
                            <div class="modify-sit-row">
                                <div class="sit-label">工程规模：</div>
                                <div class="sit-input">
                                    <input type="text"
                                           v-model="detail.scale"
                                           placeholder="" />
                                </div>
                            </div>
                            <div class="modify-sit-row">
                                <div class="sit-label">工程周期：</div>
                                <div class="sit-input">
                                    <input type="text"
                                           v-model="detail.cycle"
                                           placeholder="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modify-box">
                    <h2 class="modify-form-tit">项目角色</h2>
                    <div class="modify-base-info">
                        <div class="project-rol-list">
                            <ul>
                                <li v-for="(arr,i) in detail.proUsers"
                                    :key="i">
                                    <div class="project-role-row"
                                         v-for="(person,p) in arr.users"
                                         :key="p">
                                        <div class="role-user-info">
                                            <div class="role-face">
                                                <img :src="person.headImage"
                                                     alt="">
                                            </div>
                                            <div class="role-name">
                                                <b>{{person.type}}</b>
                                                <p>{{person.nickName}}</p>
                                            </div>
                                            <div class="role-tag"
                                                 v-for="(tag,t) in person.tags"
                                                 :key="t">{{tag}}</div>

                                        </div>
                                        <!--一星 one-star-->
                                        <!--二星 two-star-->
                                        <!--三星 three-star-->
                                        <!--四星 four-star-->
                                        <!--五星 five-star-->
                                        <div class="role-star"
                                             :class="'star-'+person.star">
                                            <i></i>
                                            <i></i>
                                            <i></i>
                                            <i></i>
                                            <i></i>
                                        </div>
                                        <div class="role-handle">
                                            <span class="role-del"
                                                  v-if="arr.type !='协理'"
                                                  @click="delPerson(arr,p)">删除</span>
                                        </div>
                                    </div>
                                    <!--添加 显示 +show-->
                                    <div class="add-role-box show"
                                         v-if="arr.showAdd">
                                        <div class="role-input">
                                            <input type="text"
                                                   v-model="arr.searchPhone"
                                                   v-on:input="getUserByPhone(arr)"
                                                   placeholder="请输入添加人的手机号" />
                                        </div>
                                        <div class="role-nike-name">{{arr.searchName}}</div>
                                        <div class="role-handle">
                                            <span class="role-btn"
                                                  @click="addPerson(i)">确定</span>
                                            <span class="role-line">|</span>
                                            <span class="role-btn"
                                                  @click="showAdd(i)">取消</span>
                                        </div>
                                    </div>
                                    <div class="add-role-btn"
                                         v-if="arr.type != '协理'"
                                         @click="showAdd(i)">+添加{{arr.type}}</div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="cm-form-btn">
                    <div class="cu-form-btn"
                         @click="submitFunc">提交</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import '../../../../html/components/crumbs/crumbs.scss';
import '../../../../html/pages/originality/modifyProject/modifyProject.scss';
// import loadScript from ''
import { getJxjDetail, GetJxjProUsers, jxjUpdateProjectInfo } from '../../../../api/index';
import loadScript from '../../../../pubilc/util/loadScript';
export default {
    name: 'modifyProject',
    data() {
        return {
            detail: {},
            rules: {
                title: [
                    { required: true, message: '请填写项目名称!' }
                ],
                desc: [
                    { required: true, message: '请填写项目简介!' }
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
    methods: {
        async getJxjDetail() {
            let res = await getJxjDetail({
                id: this.$route.params.id
            });

            if (res.Type == 'Success') {
                res.Data.proUsers.forEach(item => {
                    item.showAdd = false;
                    item.searchPhone = '';
                    item.searchName = '这里显示昵称';
                    item.proAddUser = null;
                })
                this.detail = res.Data;

                if (this.detail.proPoint) {
                    let opints = this.detail.proPoint.split(',');
                    this.initBaiduMap(opints[0], opints[1]);
                }

            } else {
                this.$layer.alert(res.Content);
            }

        },
        initBaiduMap(a, b) {
            let that = this
            let script = document.createElement("script")
            script.src = "//api.map.baidu.com/api?v=2.0&ak=uVdH4iqsEd2BPnlCupOlHFUytU7eqiWL&callback=createMap"
            document.head.appendChild(script)
            window.createMap = () => {
                //创建Map实例
                var map = new BMap.Map("mapContent");
                var point = new BMap.Point(a, b);
                map.centerAndZoom(point, 16);
                var marker = new BMap.Marker(point);        // 创建标注    
                map.addOverlay(marker);
                map.enableScrollWheelZoom();
            }
        },
        showAdd(i) {
            this.detail.proUsers[i].showAdd = !this.detail.proUsers[i].showAdd;
        },
        addPerson(i) {
            this.detail.proUsers[i].users.push(this.detail.proUsers[i].proAddUser);
            this.detail.proUsers[i].proAddUser = null;
            this.detail.proUsers[i].searchPhone = '';
            this.detail.searchName = '这边显示昵称';
            this.detail.proUsers[i].showAdd = false;
            console.log(this.detail.proUsers[i].users);
        },
        delPerson(item, i) {
            item.users.splice(i, 1);
        },
        async getUserByPhone(item) {
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
            let res = await GetJxjProUsers({
                phone: item.searchPhone
            });
            if (res.Type == 'Success') {
                item.proAddUser = res.Data;
                item.proAddUser.type = item.type;

                item.searchName = res.Data.nickName;
            } else {
                item.proAddUser = null;
                item.searchName = '查无此人';
            }
        },
        async submitFunc() {

            let validator = new this.$validator(this.rules);
            let model = this.detail;
            validator.validate(model, async (errors, fields) => {
                if (!errors) {
                    let dir = true;
                    for (let i = 0; i < this.detail.proUsers.length; i++) {
                        if (this.detail.proUsers[i].users.length == 0 && this.detail.proUsers[i].type != '协理') {
                            dir = false;
                            this.$layer.alert('请添加' + this.detail.proUsers[i].type);
                            break;
                        }
                    }

                    if (!dir) {
                        return false;
                    }
                    let proUsers = [];

                    this.detail.proUsers.forEach(item => {
                        item.users.forEach(person => {
                            proUsers.push({
                                id: person.id,
                                type: item.typeid
                            })
                        })
                    });

                    let res = await jxjUpdateProjectInfo({
                        id: this.detail.id,
                        title: this.detail.title,
                        desc: this.detail.desc,
                        productName: this.detail.productName,
                        productPart: this.detail.productPart,
                        productTrait: this.detail.productTrait,
                        quality: this.detail.quality,
                        cycle: this.detail.cycle,
                        scale: this.detail.scale,
                        proUsers: proUsers
                    })
                    if (res.Type == 'Success') {
                        this.$layer.alert(res.Content, (index) => {
                            this.$layer.close(index);
                            this.$router.push({ name: 'jxjDetail', params: { id: this.detail.id } })
                            // console.log(1);
                        });
                    } else {
                        this.$layer.alert(res.Content);
                    }
                } else {
                    // this.setp1Dir = false;
                    this.$layer.alert(errors[0].message);
                }
            });
        }
    },
    created() {
        this.getJxjDetail();

    },
    mounted() {


    }

}
</script>

<style>
#mapContent {
    width: 800px;
    height: 800px;
}
</style>
