<template>
    <div class="mmtcard-container">
        <div class="i-face"></div>
        <div class="main-content">
            <div class="name fs15">
                我是管理员
            </div>
            <div class="tc-slate fs12">
                2019-10-01
            </div>
            <div class="content fs14">
                {{content}}
            </div>
            <div class="mt15">
                <div class="single-btn">转发</div>
                <div class="single-btn">评论</div>
                <div class="single-btn">点赞</div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "MomentCard",
        props:{
            content:{
                type:String,
                default:''
            }
        },
        data(){

        },
        methods:{

        }
    }
</script>

<style src="../assets/css/common.css" scoped>

</style>
<style scoped>
    .i-face{
        height: 48px;
        width: 48px;
        border-radius: 50%;
        position: relative;
        top: 24px;
        left: 24px;
        display: inline-block;
        background-image: url("../assets/images/avatar.jpg");
        background-size: cover;
        background-position: center center;
        background-repeat: no-repeat;

    }
    .mmtcard-container{
        margin-top: 10px;
        /*height: 347px;*/
        width: 632px;
        background-color: #fff;
        border-color: #FF595E;
    }

    .main-content {
        width: 534px;
        /*height: 300px;*/
        padding-top: 25px;
        margin-top: -50px;
        margin-left: 85px;
        display: inline-block;
    }

    .name {
        color: #4ed3ff;
    }

    .content {
        width: 532px;
        /*height: 60%;*/
        margin-top: 15px;
        box-sizing: border-box;
    }

    .single-btn {
        display: inline-block;
        width: 92px;
        font-size: 12px;
    }
</style>