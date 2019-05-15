<template>

    <!--签到详情 显示 +show-->
    <div class="shadow-fixed show">
        <div class="mask"></div>
        <div class="bomb-com-box">
            <div class="bomb-small-close"
                 @click="close"></div>
            <div class="sign-pop-box">
                <div class="sign-pop-item"
                     v-for="(item,i) in arr"
                     :key="i">
                    <h2 class="sign-title">{{item.type}}</h2>
                    <dl class="sign-pop-info">
                        <dd v-for="(qd,q) in item.vArr"
                            :key="q">
                            <div class="sign-face">
                                <img :src="qd.headImage"
                                     alt="">
                            </div>
                            <div class="sign-info">
                                <div class="sign-i-name">{{qd.nickName}}</div>
                                <div class="sign-i-infor">
                                    <span class="dist-address">
                                        <i class="address-icon"></i>
                                        {{qd.signAddr}}
                                    </span>
                                    <span class="dist-size">
                                        距离目标{{qd.signAway}}米
                                    </span>
                                    <span class="dist-time">{{qd.signedTime}}</span>
                                </div>
                            </div>
                        </dd>
                    </dl>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { getJxjSignInfos } from '../../../../../api';
export default {
    name: 'd-qiandao',
    data() {
        return {
            arr: []
        }
    },
    methods: {
        async getData() {
            this.arr = [];
            let res = await getJxjSignInfos({
                id: this.$route.params.id
            });
            if (res.Type == 'Success') {
                let str = [];
                let sObj = {};
                res.Data.forEach(item => {
                    item.createDate = item.creatTime.split(' ')[0];

                    let timeArr = item.creatTime.split(' ')[1].split(':');
                    item.signedTime = timeArr[0] + ':' + timeArr[1];

                    if (str.indexOf(item.createDate) < 0) {
                        str.push(item.createDate);
                    };

                    if (!sObj[item.createDate]) {
                        sObj[item.createDate] = [];
                    }
                    sObj[item.createDate].push(item);

                });

                if (str.length > 0) {

                    str.forEach(item => {
                        this.arr.push({
                            type: item,
                            vArr: sObj[item]
                        });
                    })
                }
                console.log(this.arr)
                // console.log(sObj)
            }

        },
        close() {
            this.$emit('close');
        }
    },
    created() {
        this.getData();
    }
}
</script>

<style>
</style>
