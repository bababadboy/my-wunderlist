<template>
    <div id="user-moment-list">
        <moment-card class="user-moment-card bs"
                     v-for="(item,index) in list" :key="index" :data="item">
        </moment-card>
    </div>
</template>

<script>
    import MomentCard from '../../components/MomentCard'
    export default {
        name: "UserMomentList",
        props:{
            list:{
                type:Array,
                default:()=>{return []}
            }
        },
        components:{
            MomentCard
        }
    }
</script>

<style scoped>
    .user-moment-card {
        margin-top: 10px;
        /*height: 160px;*/
        width: 632px;
        position: relative; /* 使用 相对定位的原因是,子元素more-panel必须使用绝对定位，见 https://www.iteye.com/blog/lixh1986-1948337,或者google搜索:css absolute 如何相对父元素*/
        background-color: #fff;
        border-radius: 4px;
        font-size: 30px;
    }
</style>