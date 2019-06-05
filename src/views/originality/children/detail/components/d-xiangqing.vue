<template>
    <!--项目详情 显示 +show-->
    <div class="shadow-fixed show">
        <div class="mask"></div>
        <div class="bomb-com-box bomb-full">
            <div class="bomb-small-close"
                 @click="close"></div>
            <div class="orig-modify-btn"
                 @click="gotoEdit">修改详情</div>
            <div class="modify-form-main">
                <div class="modify-box">
                    <h2 class="modify-form-tit">基本信息</h2>
                    <div class="modify-base-info">
                        <div class="base-i-row">项目名称：{{detail.title}}</div>
                        <div class="base-i-row">创建时间：{{detail.creatTime.split(' ')[0]}}</div>
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
                                {{detail.desc}}
                            </div>
                        </div>
                        <div class="modify-situation">
                            <div class="modify-caption">产品概况</div>
                            <div class="modify-sit-row">
                                <div class="sit-label">产品名称：</div>
                                <div class="sit-input">
                                    {{detail.productName}}
                                </div>
                            </div>
                            <div class="modify-sit-row">
                                <div class="sit-label">产品组成：</div>
                                <div class="sit-input">
                                    {{detail.productPart}}
                                </div>
                            </div>
                            <div class="modify-sit-row">
                                <div class="sit-label">产品特点：</div>
                                <div class="sit-input">
                                    {{detail.productTrait}}
                                </div>
                            </div>
                        </div>
                        <div class="modify-situation">
                            <div class="modify-caption">工程概况</div>
                            <div class="modify-sit-row">
                                <div class="sit-label">工程质量：</div>
                                <div class="sit-input">
                                    {{detail.quality}}
                                </div>
                            </div>
                            <div class="modify-sit-row">
                                <div class="sit-label">工程规模：</div>
                                <div class="sit-input">
                                    {{detail.scale}}
                                </div>
                            </div>
                            <div class="modify-sit-row">
                                <div class="sit-label">工程周期：</div>
                                <div class="sit-input">
                                    {{detail.cycle}}
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
                                <li v-for="(item,i) in detail.proUsers"
                                    :key="i">
                                    <div class="project-role-row"
                                         v-for="(person,p) in item.users"
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
                                        <div class="role-star"
                                             :class="'star-'+person.star">
                                            <i></i>
                                            <i></i>
                                            <i></i>
                                            <i></i>
                                            <i></i>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'd-xiangqing',
    props: ['detail'],
    methods: {
        initBaiduMap() {
            this.$emit('initBaiduMap');
        },
        close() {
            this.$emit('close');
        },
        gotoEdit() {
            this.$router.push({ name: 'modifyProject', params: { id: this.$route.params.id } });
        }
    },
    mounted() {
        this.initBaiduMap();
    }
}
</script>

<style>
#mapContent {
    width: 800px;
    height: 800px;
}
</style>
