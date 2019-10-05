<template>
    <div id="app" style="margin-top: 0">
        <navigate></navigate>
        <div class="home-container">
            <div class="home-content">
                <div class="left-panel">
                    <card title="点击给wxb offer"></card>
                </div>
                <div class="center-panel">
                    <pub @input="handleInput($event)" :text="pubContent" @btnClick="publishMoment()"></pub>

                    <moment-card v-for="(item,index) in momentsList" :key="index" :data="item" class="moment-card"></moment-card>
                </div>
                <!-- todo 右边的面板-->
                <!--<div class="right-panel">-->
                    <!--<card></card>-->
                <!--</div>-->
            </div>
        </div>
    </div>
</template>

<script>
    import {postRequest, getRequest} from "./utils/api"
    import navigate from "./components/Navigate"
    import pub from "./components/Publish"
    import card from "./components/Card"
    import MomentCard from "./components/MomentCard"

    export default {
        name: 'app',
        components: {
            navigate,
            pub,
            card,
            MomentCard
        },
        data() {
            return {
                pubContent:'',
                offerNum: 0,
                momentsList:[], // 朋友圈列表
                api:{
                    incrOffer: "/api/v1/giveoffer",
                    getOffer: "/api/v1/getoffer",
                    publishMoment:'api/v1/publish_moment',
                    getMomentList:'api/v1/get_moments_list'
                }
            }
        },
        mounted() {
            this.getOffer();
            this.getMomentsList();
        },
        methods: {
            offerIncr() {
                postRequest(this.api.incrOffer).then(res => {
                    this.offerNum = res.data.offer_num
                })
            },
            getOffer() {
                getRequest(this.api.getOffer).then(res => {
                    this.offerNum = res.data.offer_num
                })
            },
            // 发布输入的内容
            publishMoment(){
                // todo uid 改成登录的用户的uid，当前先写死
                postRequest(this.api.publishMoment,{'uid':'10001','content':this.pubContent})
                // todo 弹出一个发布成功状态框
                this.pubContent = '';
                // this.momentsList.push(this.pubContent)
                this.getMomentsList();

            },
            handleInput($event){
                this.pubContent=$event.textVal;
            },
            // 获取动态列表
            getMomentsList(){
                getRequest(this.api.getMomentList).then(res=>{
                    this.momentsList =res;//todo to be confirmed
                })
                // this.momentsList.push(this.pubContent)
            }
        }
    }
</script>

<style>
    body {
        font-family: Helvetica Neue, Helvetica, Arial, Microsoft Yahei, Hiragino Sans GB, Heiti SC, WenQuanYi Micro Hei, sans-serif;
        color: #222;
        font-size: 14px;
        background-color: #d2e9fb;
    }

    .home-container{
        margin-top: 26px;
        width:100%;
    }

    .home-content{
        display: flex;
        justify-content: center;
    }

    .left-panel{
        width: 244px;
    }
    .center-panel{
        width: 632px;
        margin: 0 8px;

    }
    .right-panel{
        width: 268px;

    }
    .moment-card{
        margin-top: 10px;
        height: 160px;
        width: 632px;
        background-color: #fff;
        border-radius: 4px;
        font-size: 30px;
    }
</style>
