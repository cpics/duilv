<template>
    <div class="m-prise-content">
        <div class="e-prise-box">
            <div class="prise-article">
                <div class="prise-art-name">
                    <b>项目进度</b>
                </div>
                <div class="prise-art-txt">
                    <div>{{detail.dailyProp.pschedule}}</div>
                </div>
            </div>
        </div>
        <div class="e-prise-box">
            <div class="daily-project">
                <div class="daily-pro-left">
                    <dl class="daily-pro-row">
                        <dt>项目名称</dt>
                        <dd>{{detail.title}}</dd>
                    </dl>
                    <dl class="daily-pro-row">
                        <dt>项目负责</dt>
                        <dd>{{detail.dailyProp.projectManage.join(',')}}</dd>
                    </dl>
                    <dl class="daily-pro-row">
                        <dt>安全状态</dt>
                        <dd>{{detail.dailyProp.salfState}}</dd>
                    </dl>
                </div>
                <div class="daily-pro-right">
                    <dl class="daily-r-row">
                        <dt>对策：</dt>
                        <dd>{{detail.dailyProp.measure}}</dd>
                    </dl>
                    <dl class="daily-r-row">
                        <dt>人员详情：</dt>
                        <dd>共{{detail.dailyProp.peopleNum}}人 {{detail.dailyProp.sDetail}}</dd>
                    </dl>
                    <dl class="daily-r-row">
                        <dt>需协调事宜：</dt>
                        <dd>{{detail.dailyProp.pdiscuss}}</dd>
                    </dl>
                </div>
            </div>
            <div class="daily-situation">
                <div class="sit-label">其他情况汇报：</div>
                <div class="sit-txt">
                    {{detail.dailyProp.pother}}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'daily',
    props: ['detail']
}
</script>

<style>
</style>
