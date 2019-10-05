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

                    <!-- todo div改成 momentCard组件-->
<!--                    <div v-for="(item,index) in momentsList" :key="index" class="moment-card">-->
<!--                        {{item}}-->
<!--                    </div>-->
                    <moment-card v-for="(item,index) in momentsList" :key="index" :content="item" class="moment-card">
                    </moment-card>
                </div>
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
                postUrl: "/api/v1/giveoffer",
                getUrl: "/api/v1/getoffer"
            }
        },
        mounted() {
            this.getOffer();
            this.getMomentsList();
        },
        methods: {
            offerIncr() {
                postRequest(this.postUrl).then(res => {
                    this.offerNum = res.data.offer_num
                })
            },
            getOffer() {
                getRequest(this.getUrl).then(res => {
                    this.offerNum = res.data.offer_num
                })
            },
            // 发布输入的内容
            publishMoment(){

                // todo 发送数据到后台接口

                // todo 弹出一个发布成功状态框
                this.momentsList.push(this.pubContent)
                this.pubContent = '';


            },
            handleInput($event){
                this.pubContent=$event.textVal;
            },
            // 获取动态列表
            getMomentsList(){

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
