<template>
    <div class="mmtcard-container dev">
        <div class="i-face"></div>
        <div class="main-content">
            <div class="name fs15">
                {{data.nickname}}
            </div>
            <div class="tc-slate fs12">
                {{data.time}}
            </div>
            <div class="content fs14">
                {{data.content}}
            </div>
            <div class="mt15">
                <div class="single-btn">转发 {{data.forwardNum}}</div>
                <div class="single-btn">评论 {{data.commentNum}}</div>
                <div class="single-btn">点赞 {{data.likeNum}}</div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "MomentCard",
        props:{
            data:{
                type:Object,
                default:function () {
                    return {
                        'nickname':'无名小辈',
                        'time':'1970-1-1',
                        'content':'分布式系统不能抛弃 p(分区容错卫性)，所以一般会有 AP/CP两种选择。AP削弱了数据的一致性，比如发个微博啥的，数据延迟个几秒钟甚至几分钟问题不大，但为了用户体验不能不可用；而CP强调数据的一致性，宁愿用户有个短暂的无法使用，也必须保证数据是一致的，在金融相关软件更为常见。\n',
                        'forwardNum':0,
                        'commentNum':0,
                        'likeNum':0
                    }
                }
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