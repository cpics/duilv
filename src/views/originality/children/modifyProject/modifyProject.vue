<template>
    <!--页面主体-->
    <div class="g-container">
        <div class="m-container m-width">
            <!--面包屑-->
            <div class="crumbs-box">
                <a class="c-crumbs"
                   href="">匠心记</a>
                <span class="c-sep">&gt;</span>
                <a class="c-crumbs"
                   href="">环秀湖花园北区</a>
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
                                <li>
                                    <div class="project-role-row">
                                        <div class="role-user-info">
                                            <div class="role-face">
                                                <img src=""
                                                     alt="">
                                            </div>
                                            <div class="role-name">
                                                <b>项目经理</b>
                                                <p>李小兵</p>
                                            </div>
                                            <div class="role-tag">堆绿会员</div>
                                        </div>
                                        <!--一星 one-star-->
                                        <!--二星 two-star-->
                                        <!--三星 three-star-->
                                        <!--四星 four-star-->
                                        <!--五星 five-star-->
                                        <div class="role-star three-star">
                                            <i></i>
                                            <i></i>
                                            <i></i>
                                            <i></i>
                                            <i></i>
                                        </div>
                                        <div class="role-handle">
                                            <span class="role-del">删除</span>
                                        </div>
                                    </div>
                                    <div class="project-role-row">
                                        <div class="role-user-info">
                                            <div class="role-face">
                                                <img src=""
                                                     alt="">
                                            </div>
                                            <div class="role-name">
                                                <b>项目经理</b>
                                                <p>李小兵</p>
                                            </div>
                                            <div class="role-tag">堆绿会员</div>
                                        </div>
                                        <!--一星 one-star-->
                                        <!--二星 two-star-->
                                        <!--三星 three-star-->
                                        <!--四星 four-star-->
                                        <!--五星 five-star-->
                                        <div class="role-star three-star">
                                            <i></i>
                                            <i></i>
                                            <i></i>
                                            <i></i>
                                            <i></i>
                                        </div>
                                        <div class="role-handle">
                                            <span class="role-del">删除</span>
                                        </div>
                                    </div>
                                    <div class="add-role-btn">+添加项目经理</div>
                                </li>
                                <li>
                                    <div class="project-role-row">
                                        <div class="role-user-info">
                                            <div class="role-face">
                                                <img src=""
                                                     alt="">
                                            </div>
                                            <div class="role-name">
                                                <b>项目负责人</b>
                                                <p>李小兵</p>
                                            </div>
                                            <div class="role-tag">堆绿会员</div>
                                        </div>
                                        <!--一星 one-star-->
                                        <!--二星 two-star-->
                                        <!--三星 three-star-->
                                        <!--四星 four-star-->
                                        <!--五星 five-star-->
                                        <div class="role-star three-star">
                                            <i></i>
                                            <i></i>
                                            <i></i>
                                            <i></i>
                                            <i></i>
                                        </div>
                                        <div class="role-handle">
                                            <span class="role-del">删除</span>
                                        </div>
                                    </div>
                                    <div class="add-role-btn">+添加项目负责人</div>
                                </li>
                                <li>
                                    <div class="project-role-row">
                                        <div class="role-user-info">
                                            <div class="role-face">
                                                <img src=""
                                                     alt="">
                                            </div>
                                            <div class="role-name">
                                                <b>项目设计</b>
                                                <p>李小兵</p>
                                            </div>
                                            <div class="role-tag">堆绿会员</div>
                                        </div>
                                        <!--一星 one-star-->
                                        <!--二星 two-star-->
                                        <!--三星 three-star-->
                                        <!--四星 four-star-->
                                        <!--五星 five-star-->
                                        <div class="role-star three-star">
                                            <i></i>
                                            <i></i>
                                            <i></i>
                                            <i></i>
                                            <i></i>
                                        </div>
                                        <div class="role-handle">
                                            <span class="role-del">删除</span>
                                        </div>
                                    </div>
                                    <div class="add-role-btn">+添加项目设计</div>
                                </li>
                                <li>
                                    <div class="project-role-row">
                                        <div class="role-user-info">
                                            <div class="role-face">
                                                <img src=""
                                                     alt="">
                                            </div>
                                            <div class="role-name">
                                                <b>项目质量安全</b>
                                                <p>李小兵</p>
                                            </div>
                                            <div class="role-tag">堆绿会员</div>
                                        </div>
                                        <div class="role-star one-star">
                                            <i></i>
                                            <i></i>
                                            <i></i>
                                            <i></i>
                                            <i></i>
                                        </div>
                                        <div class="role-handle">
                                            <span class="role-del">删除</span>
                                        </div>
                                    </div>
                                    <div class="add-role-btn">+添加项目质量安全</div>
                                </li>
                                <li>
                                    <div class="project-role-row">
                                        <div class="role-user-info">
                                            <div class="role-face">
                                                <img src=""
                                                     alt="">
                                            </div>
                                            <div class="role-name">
                                                <b>项目质量安全</b>
                                                <p>李小兵</p>
                                            </div>
                                            <div class="role-tag">堆绿会员</div>
                                        </div>
                                        <div class="role-star two-star">
                                            <i></i>
                                            <i></i>
                                            <i></i>
                                            <i></i>
                                            <i></i>
                                        </div>
                                        <div class="role-handle">
                                            <span class="role-del">删除</span>
                                        </div>
                                    </div>
                                    <div class="add-role-btn">+添加项目质量安全</div>
                                </li>
                                <li>
                                    <div class="project-role-row">
                                        <div class="role-user-info">
                                            <div class="role-face">
                                                <img src=""
                                                     alt="">
                                            </div>
                                            <div class="role-name">
                                                <b>项目支援</b>
                                                <p>李小兵</p>
                                            </div>
                                            <div class="role-tag">堆绿会员</div>
                                        </div>
                                        <div class="role-star four-star">
                                            <i></i>
                                            <i></i>
                                            <i></i>
                                            <i></i>
                                            <i></i>
                                        </div>
                                        <div class="role-handle">
                                            <span class="role-del">删除</span>
                                        </div>
                                    </div>
                                    <div class="add-role-btn">+添加项目支援</div>
                                </li>
                                <li>
                                    <div class="project-role-row">
                                        <div class="role-user-info">
                                            <div class="role-face">
                                                <img src=""
                                                     alt="">
                                            </div>
                                            <div class="role-name">
                                                <b>项目协理</b>
                                                <p>李小兵</p>
                                            </div>
                                            <div class="role-tag">堆绿会员</div>
                                        </div>
                                        <div class="role-star five-star">
                                            <i></i>
                                            <i></i>
                                            <i></i>
                                            <i></i>
                                            <i></i>
                                        </div>
                                        <div class="role-handle">
                                            <span class="role-del">删除</span>
                                        </div>
                                    </div>
                                    <div class="add-role-btn">+添加项目协理</div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="cm-form-btn">
                    <div class="cu-form-btn">提交</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import '../../../../html/components/crumbs/crumbs.css';
import '../../../../html/pages/originality/modifyProject/modifyProject.css';
// import loadScript from ''
import { getJxjDetail, GetJxjProUsers } from '../../../../api/index';
import loadScript from '../../../../pubilc/util/loadScript';
export default {
    name: 'modifyProject',
    data() {
        return {
            detail: {}
        }
    },
    methods: {
        async getJxjDetail() {
            let res = await getJxjDetail({
                id: this.$route.params.id
            });

            if (res.Type == 'Success') {
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
    },
    created() {
        this.getJxjDetail();

    },
    mounted() {
        // this.initBaiduMap();

    }

}
</script>

<style>
#mapContent {
    width: 800px;
    height: 800px;
}
</style>
