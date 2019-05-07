<template>

    <!--详情头部-->
    <div class="com-detail-hd"
         v-if="header">
        <div class="com-hd-inner">
            <div class="com-hd-info">
                <div class="com-hd-face">
                    <!-- <img :src="header.picPath"
                         alt> -->
                </div>
                <div class="com-hd-name">
                    <div class="hd-bottom-td">
                        <!-- <div class="hd-name-row">{{header.title}}</div> -->
                        <!--今日信息-->
                        <div class="hd-name-row">
                            <!-- <span>{{header.timeAgo}}</span> -->
                            <!-- <span>{{header.now}}</span> -->
                            <!-- <span>{{header.dayOfWeek}}</span> -->
                            <!-- <span>天气：{{weather}}</span> -->
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
</template>

<script>
import timeago from '../../../../pubilc/util/timeago';
import { getHeader, getWeather } from '../../../../api/index';
export default {
    name: 'detailHeader',
    data() {
        return {
            header: {},
            weather: {}
        };
    },
    methods: {
        async getHeader() {

            let res = await getHeader({
                id: this.$route.params.id
            });
            if (res.Type == 'Success') {
                res.Data.timeAgo = timeago(new Date(res.Data.creatTime));
                this.header = res.Data;
                console.log(this.header);
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
    },
    mounted() {
        this.getHeader();
        this.getWeather();
    }
}
</script>

<style>
</style>
