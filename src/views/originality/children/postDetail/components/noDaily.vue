<template>
    <div class="structure-border">
        <!--qe标题-->
        <div class="common-tit-space qe-title">
            <h2>{{detail.title}}</h2>
            <div class="u-news-handle">
                <div class="un-left">
                    <span class="un-col">发布时间：{{detail.createdTime}}</span>
                    <span class="un-col">{{detail.weather}}</span>
                </div>
                <div class="un-right">
                    <span class="un-col">
                        <i class="n-small-icon eye-icon"></i>
                        {{detail.hits}}
                    </span>
                    <span class="un-col u-pointer">
                        <i class="n-small-icon comment-icon"></i>
                        {{detail.repNum}}
                    </span>
                </div>
            </div>
        </div>
        <div class="m-prise-content">
            <div class="qe-preview">
                <div class="e-prise-box">
                    <div class="prise-article qe-article"
                         v-if="!detail.isNewPost">
                        <div class="prise-art-txt"
                             v-html="detail.content">
                        </div>
                    </div>
                    <div class="prise-article qe-article"
                         v-if="detail.isNewPost">
                        <div v-for="(item,i) in detail.postData"
                             :key="i">
                            <div class="prise-art-txt"
                                 v-if="item.type=='文字'">
                                {{item.content}}
                            </div>
                            <div class="qe-view-detail"
                                 v-if="item.type =='图片'">
                                <div class="cp-column pic-300">
                                    <div class="cp-item"
                                         v-for="(img,m) in item.content.split(',')"
                                         :key="m">
                                        <!-- <img src="../../../../../html/pages/home/images/demo.png" /> -->
                                        <img @click="popImg(item.content.split(','),m)"
                                             :src="img"
                                             alt="">
                                    </div>

                                </div>
                            </div>
                        </div>
                        <!-- <div class="prise-art-txt">
                            综合评价：<br/> 1. 项目部落实节后复工施工人员安全教育及交底工作<br/> 2. 项目部对施工质量要求较高 ， 把关较严 ， 项目施工质量佳<br/> 3. 对施工质量缺陷部位项目部需及时处理<br/> 4. 其 中一栋单体北立面楼顶横梁未施工完成，该部位施工难度较大 ， 也是此次施工重大危险源 ， 要求项目部在该部位施工前做好施工安全技术交底 ， 并做好交底记录 ， 严格按照交底要求进行施工<br/> 5. 现场原材料放置需进一步提高；材料空桶需集中放置并及时处理
                        </div> -->
                    </div>
                </div>
                <div class="e-prise-box"
                     v-if="detail.type == 'QE'">
                    <div class="score-box">
                        <div class="score-row">
                            <div class="score-label">各道工序核验情况</div>
                            <div class="score-bar">
                                <div class="score-bar-num"
                                     :style="{width:po1}"></div>
                            </div>
                            <div class="score-num">{{detail.qeInfo.qePoint[0]}}分（满分30分）</div>
                        </div>
                        <div class="score-row">
                            <div class="score-label">使用材料检测报告</div>
                            <div class="score-bar">
                                <div class="score-bar-num"
                                     :style="{width:po2}"></div>
                            </div>
                            <div class="score-num">{{detail.qeInfo.qePoint[1]}}分（满分10分）</div>
                        </div>
                        <div class="score-row">
                            <div class="score-label">现场核验实测数据</div>
                            <div class="score-bar">
                                <div class="score-bar-num"
                                     :style="{width:po3}"></div>
                            </div>
                            <div class="score-num">{{detail.qeInfo.qePoint[2]}}分（满分20分）</div>
                        </div>
                        <div class="score-row">
                            <div class="score-label">整改建议及复合情况</div>
                            <div class="score-bar">
                                <div class="score-bar-num"
                                     :style="{width:po4}"></div>
                            </div>
                            <div class="score-num">{{detail.qeInfo.qePoint[3]}}分（满分10分）</div>
                        </div>
                        <div class="score-row">
                            <div class="score-label">现场材料管理情况</div>
                            <div class="score-bar">
                                <div class="score-bar-num"
                                     :style="{width:po5}"></div>
                            </div>
                            <div class="score-num">{{detail.qeInfo.qePoint[4]}}分（满分10分）</div>
                        </div>
                        <div class="score-row">
                            <div class="score-label">现场人员环境安全情况</div>
                            <div class="score-bar">
                                <div class="score-bar-num"
                                     :style="{width:po6}"></div>
                            </div>
                            <div class="score-num">{{detail.qeInfo.qePoint[5]}}分（满分10分）</div>
                        </div>
                        <div class="score-row">
                            <div class="score-label">实现途径</div>
                            <div class="score-bar">
                                <div class="score-bar-num"
                                     :style="{width:po7}"></div>
                            </div>
                            <div class="score-num">{{detail.qeInfo.qePoint[6]}}分（满分10分）</div>
                        </div>
                    </div>
                    <div class="score-total-num">得分：{{detail.qeInfo.qeTotalScore}}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import '../../../../../html/components/score/score.scss';

// import cpSwpiper from './cp-swiper.vue';
export default {
    name: 'noDaily',
    props: ['detail'],
    computed: {
        po1() {
            let p = (this.detail.qeInfo.qePoint[0] / 30).toFixed(2) * 100 + '%';
            return p;
        },
        po2() {
            let p = (this.detail.qeInfo.qePoint[1] / 10).toFixed(2) * 100 + '%';
            return p;
        },
        po3() {
            let p = (this.detail.qeInfo.qePoint[2] / 20).toFixed(2) * 100 + '%';
            return p;
        },
        po4() {
            let p = (this.detail.qeInfo.qePoint[3] / 10).toFixed(2) * 100 + '%';
            return p;
        },
        po5() {
            let p = (this.detail.qeInfo.qePoint[4] / 10).toFixed(2) * 100 + '%';
            return p;
        },
        po6() {
            let p = (this.detail.qeInfo.qePoint[5] / 10).toFixed(2) * 100 + '%';
            return p;
        },
        po7() {
            let p = (this.detail.qeInfo.qePoint[6] / 10).toFixed(2) * 100 + '%';
            return p;
        },
    },
    methods: {
        popImg(imgs,m) {
            this.$emit('openPopImgList', imgs,m);
        }
    }
}
</script>

<style>
</style>
