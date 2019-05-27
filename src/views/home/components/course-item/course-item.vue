<template>
    <router-link class="course-item"
                 target="_blank"
                 tag="a"
                 :to="{name:'enterCourse',params:{id:info.id}}">

        <div class="course-pic">
            <img :src="info.bgImg"
                 alt>
        </div>
        <h2 class="course-tit">{{info.title}}</h2>
        <div class="course-txt">
            <span>{{info.type}}</span>
            <em class="course-circle">·</em>
            <span>{{info.peopleNum}}人在学</span>
        </div>
        <div class="course-handle">
            <span class="course-money">￥{{info.price}}元</span>
            <i class="star-icon"
               :class="info.stars"></i>
        </div>
    </router-link>
</template>

<script>
export default {
    name: 'course-item',
    props: {
        info: Object
    }
};
</script>

<style>
</style>
