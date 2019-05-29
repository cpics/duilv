<template>
    <!--滚动固定时 +fixation-->
    <div class="m-slide-left">
        <div class="ml-slide-inner">

            <ul>
                <li :class="{'active':item.id == currentTagId}"
                    v-for="(item,index) in list"
                    :key="index">
                    <!-- <router-link
            :to="{name:'caseIndex',params:{id:item.id}}"
            tag="a"
            class="ml-slide-tit"
          >{{item.tagName}}</router-link>-->
                    <i class="ml-line-icon"></i>
                    <a @click="filterTag(item.id)"
                       class="ml-slide-tit">{{item.tagName}}</a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'left-menu',
    props: ['list', 'currentTagId'],
    data() {
        return {
            // currentTagId: undefined
        };
    },
    methods: {
        filterTag(id) {
            // this.currentTagId = id;
            this.$emit('filterTag', id);
        }
    },
    created() {

    }
};
</script>

<style>
</style>
