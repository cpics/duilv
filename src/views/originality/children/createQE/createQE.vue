<template>
    <div class="g-container">
        <div class="m-container m-width">
            <!--面包屑-->
            <div class="crumbs-box">
                <a class="c-crumbs"
                   href="">匠心记</a>
                <span class="c-sep">&gt;</span>
                <span class="c-current"
                      v-if="type =='QE'">创建QE报告</span>
                <span class="c-current"
                      v-if="type =='ZB'">创建周报</span>
            </div>
            <!--主体-->
            <div class="create-qe-main">
                <!--<h2 class="create-qe-tit">创建每周报告</h2>-->
                <h2 class="create-qe-tit"
                    v-if="type =='QE'">创建QE报告</h2>
                <h2 class="create-qe-tit"
                    v-if="type =='ZB'">创建周报</h2>
                <div class="create-qe-form">
                    <div class="create-qe-row">
                        <div class="create-qe-input">
                            <input type="text"
                                   v-model="title"
                                   placeholder="请输入您的正文标题" />
                        </div>
                    </div>
                    <div class="create-qe-row">
                        <div v-for="(item,i) in dataArr"
                             :key="i">
                            <div class="create-qe-textarea"
                                 v-if="item.type == '文本'">
                                <textarea v-model="item.content"
                                          placeholder="正文内容......"></textarea>
                            </div>
                            <div class="create-form-pic"
                                 v-if="item.type == '图片'">
                                <div class="pic-qe-item">
                                    <button class="upload-btn">添加图片</button>
                                    <input type="file"
                                           name="file"
                                           @change="uploadImg(i)"
                                           :ref="'imgFileInput'+i"
                                           accept="image/png, image/jpeg, image/gif, image/jpg" />
                                </div>
                                <div class="pic-qe-item"
                                     v-for="(img,m) in item.content"
                                     :key="m">
                                    <img :src="img"
                                         alt="">
                                    <i class="qe-del-pic"
                                       @click="delImg(i,m)"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="create-qe-row"
                         v-if="pointsShowArr.length>0">
                        <div class="score-box">
                            <div class="score-row">
                                <div class="score-label">各道工序核验情况</div>
                                <div class="score-bar">
                                    <div class="score-bar-num"
                                         :style="{width:pointsShowArr[0]/30*100+'%'}"></div>
                                </div>
                                <div class="score-num">20分（满分30分）</div>
                            </div>
                            <div class="score-row">
                                <div class="score-label">使用材料检测报告</div>
                                <div class="score-bar">
                                    <div class="score-bar-num"
                                         :style="{width:pointsShowArr[1]/30*100+'%'}"></div>
                                </div>
                                <div class="score-num">8分（满分10分）</div>
                            </div>
                            <div class="score-row">
                                <div class="score-label">现场核验实测数据</div>
                                <div class="score-bar">
                                    <div class="score-bar-num"
                                         :style="{width:pointsShowArr[2]/30*100+'%'}"></div>
                                </div>
                                <div class="score-num">17分（满分20分）</div>
                            </div>
                            <div class="score-row">
                                <div class="score-label">整改建议及复合情况</div>
                                <div class="score-bar">
                                    <div class="score-bar-num"
                                         :style="{width:pointsShowArr[3]/30*100+'%'}"></div>
                                </div>
                                <div class="score-num">8分（满分10分）</div>
                            </div>
                            <div class="score-row">
                                <div class="score-label">现场材料管理情况</div>
                                <div class="score-bar">
                                    <div class="score-bar-num"
                                         :style="{width:pointsShowArr[4]/30*100+'%'}"></div>
                                </div>
                                <div class="score-num">8分（满分10分）</div>
                            </div>
                            <div class="score-row">
                                <div class="score-label">现场人员环境安全情况</div>
                                <div class="score-bar">
                                    <div class="score-bar-num"
                                         :style="{width:pointsShowArr[5]/30*100+'%'}"></div>
                                </div>
                                <div class="score-num">8分（满分10分）</div>
                            </div>
                            <div class="score-row">
                                <div class="score-label">实现途径</div>
                                <div class="score-bar">
                                    <div class="score-bar-num"
                                         :style="{width:pointsShowArr[6]/30*100+'%'}"></div>
                                </div>
                                <div class="score-num">8分（满分10分）</div>
                            </div>
                        </div>
                        <div class="score-total-num">检验评定：{{pointResult.result}}（{{pointResult.points}}分）</div>
                    </div>
                </div>
                <div class="create-qe-type">
                    <div class="qe-type-tit">您可以继续选择以下内容添加 ↓</div>
                    <div class="qe-type-choose">
                        <div class="qe-type-col"
                             @click="createTT(1)">
                            <div class="type-txt-icon"></div>
                            <p>添加文本段落</p>
                        </div>
                        <div class="qe-type-col"
                             @click="createTT(2)">
                            <div class="type-pic-icon"></div>
                            <p>添加图片</p>
                        </div>
                        <!-- <div class="qe-type-col">
                            <div class="type-photo-icon"></div>
                            <p>添加图集</p>
                        </div> -->
                        <div class="qe-type-col"
                             v-if="type == 'QE'"
                             @click="createTT(3)">
                            <div class="type-score-icon"></div>
                            <p>添加评分</p>
                        </div>
                    </div>
                </div>
                <div class="cm-form-btn">
                    <div class="cu-form-btn"
                         @click="submitFunc">创建</div>
                </div>
            </div>
        </div>
        <!--评分弹框 显示 +show-->
        <div class="shadow-fixed show"
             v-if="showPointsDir">
            <div class="mask"></div>
            <div class="bomb-com-box">
                <div class="bomb-small-close"
                     @click="createTT(3)"></div>
                <div class="give-score-form">
                    <div class="gs-row">
                        <div class="gs-label">各道工序核验情况</div>
                        <div class="gs-input">
                            <input type="text"
                                   maxlength="2"
                                   v-model="points0"
                                   placeholder="满分30" />
                        </div>
                    </div>
                    <div class="gs-row">
                        <div class="gs-label">使用材料检测报告</div>
                        <div class="gs-input">
                            <input type="text"
                                   maxlength="2"
                                   v-model="points1"
                                   placeholder="满分10" />
                        </div>
                    </div>
                    <div class="gs-row">
                        <div class="gs-label">现场核验实测数据</div>
                        <div class="gs-input">
                            <input type="text"
                                   maxlength="2"
                                   v-model="points2"
                                   placeholder="满分20" />
                        </div>
                    </div>
                    <div class="gs-row">
                        <div class="gs-label">整改建议及复合情况</div>
                        <div class="gs-input">
                            <input type="text"
                                   maxlength="2"
                                   v-model="points3"
                                   placeholder="满分10" />
                        </div>
                    </div>
                    <div class="gs-row">
                        <div class="gs-label">现场材料管理情况</div>
                        <div class="gs-input">
                            <input type="text"
                                   maxlength="2"
                                   v-model="points4"
                                   placeholder="满分10" />
                        </div>
                    </div>
                    <div class="gs-row">
                        <div class="gs-label">现场人员环境安全情况</div>
                        <div class="gs-input">
                            <input type="text"
                                   maxlength="2"
                                   v-model="points5"
                                   placeholder="满分10" />
                        </div>
                    </div>
                    <div class="gs-row">
                        <div class="gs-label">实现途径</div>
                        <div class="gs-input">
                            <input type="text"
                                   maxlength="2"
                                   v-model="points6"
                                   placeholder="满分10" />
                        </div>
                    </div>
                </div>
                <div class="bomb-bottom-btn">
                    <span class="bo-pop-btn bo-btn-border"
                          @click="resetPoints">重置</span>
                    <span class="bo-pop-btn"
                          @click="createPoints">确定</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import '../../../../html/components/crumbs/crumbs.css';
import '../../../../html/pages/originality/createQe/createQe.css';
import '../../../../html/components/score/score.css';
import '../../../../html/components/popCommon/popCommon.css';

import {
    uploadImage,
    jxjAddQEReport,
    jxjAddReport,
} from '../../../../api/index.js';
export default {
    name: 'createE',
    data() {
        return {
            id: this.$route.params.id,
            type: this.$route.query.type,
            title: '',
            point: [],
            dataArr: [{
                type: '文本',
                content: ''
            }],
            showPointsDir: false,
            pointsShowArr: [],
            points0: '',
            points1: '',
            points2: '',
            points3: '',
            points4: '',
            points5: '',
            points6: '',
        }
    },
    computed: {
        pointResult() {
            let points = 0;
            let result = '';
            this.pointsShowArr.forEach(item => {
                points += parseInt(item);
            });

            if (points < 60) {
                result = '不及格';
            } else if (points >= 60 && points < 80) {
                result = '及格';
            } else if (points >= 80 && points < 90) {
                result = '良好';
            } else if (points >= 90) {
                result = '优秀';
            }
            return {
                points: points,
                result: result
            };
        }
    },
    methods: {
        //添加图片
        async uploadImg(i) {
            // console.log(this.$refs);
            // return;
            let file = this.$refs['imgFileInput' + i][0].files[0];

            let reader = new FileReader();
            reader.readAsDataURL(file);
            let that = this;
            reader.onload = async function (e) {
                let res = await uploadImage({
                    file: file
                });
                if (res.Type == 'Success') {
                    that.dataArr[i].content.push(res.Data);
                    // let editRes = updateEnterIcon({
                    //     id: that.$route.params.id,
                    //     picPath: res.Data
                    // });
                    // if (editRes.Type == 'Success') {
                    //     // that.detail.picPath = res.Data;
                    //     that.dataArr[i].content.push(res.Data);
                    // }
                }
            };
        },
        delImg(i, m) {
            // console.log(this.dataArr);
            this.dataArr[i].content.splice(m, 1);
        },
        createTT(type) {
            if (type == 1) {
                this.dataArr.push({
                    content: '',
                    type: '文本'
                });
            } else if (type == 2) {
                this.dataArr.push({
                    content: [],
                    type: '图片'
                });
            } else if (type == 3) {
                this.showPointsDir = !this.showPointsDir;
            }
            console.log(this.dataArr);
        },
        createPoints() {
            console.log(this.points1);
            if (this.points0.length == 0) {
                this.$layer.alert('请评分各道工序核验情况');
                return;
            }
            if (this.points1.length == 0) {
                this.$layer.alert('请评分使用材料检测报告');
                return;
            }
            if (this.points2.length == 0) {
                this.$layer.alert('请评分现场核验实测数据');
                return;
            }
            if (this.points3.length == 0) {
                this.$layer.alert('请评分整改建议及复合情况');
                return;
            }
            if (this.points4.length == 0) {
                this.$layer.alert('请评分现场材料管理情况');
                return;
            }
            if (this.points5.length == 0) {
                this.$layer.alert('请评分现场人员环境安全情况');
                return;
            }
            if (this.points6.length == 0) {
                this.$layer.alert('请评分实现途径');
                return;
            }

            this.pointsShowArr = [
                this.points0,
                this.points1,
                this.points2,
                this.points3,
                this.points4,
                this.points5,
                this.points6,
            ];
            this.showPointsDir = false;
        },
        resetPoints() {
            this.pointsShowArr = [];
            this.points0 = '';
            this.points1 = '';
            this.points2 = '';
            this.points3 = '';
            this.points4 = '';
            this.points5 = '';
            this.points6 = '';
        },
        async submitFunc() {
            if (this.title.length == 0) {
                this.$layer.alert('请填写标题');
                return;
            }
            if (this.dataArr[0].content.length == 0) {
                this.$layer.alert('请填写正文内容');
                return;
            }

            if (this.pointsShowArr.length == 0 && this.type == 'QE') {
                this.$layer.alert('请添加评分');
                return;
            }

            let data = [];
            this.dataArr.forEach(item => {
                if (this.type == '文本') {
                    data.push({
                        type: '文本',
                        content: item.content
                    });
                } else if (item.type == '图片') {
                    item.content.forEach(img => {
                        data.push({
                            type: '图片',
                            content: img
                        })
                    })
                }
            })
            if (this.type == 'QE') {
                let res = await jxjAddQEReport({
                    title: this.title,
                    id: this.id,
                    points: this.pointsShowArr,
                    data: data
                })
                if (res.Type == 'Success') {
                    this.$layer.alert(res.Content);
                } else if (res.Type == 'Error') {
                    this.$layer.alert(res.Content);
                }
            }

            if (this.type == 'ZB') {
                let res = await jxjAddReport({
                    title: this.title,
                    id: this.id,
                    data: data
                })
                if (res.Type == 'Success') {
                    this.$layer.alert(res.Content);
                } else if (res.Type == 'Error') {
                    this.$layer.alert(res.Content);
                }
            }



        }
    }
}
</script>

<style>
</style>
