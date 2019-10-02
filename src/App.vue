<template>
    <div id="app" style="margin-top: 0">
        <navigate></navigate>
        <div class="home-container">
            <div class="home-content">
                <div class="left-panel">
                    <card title="点击给wxb offer"></card>
                </div>
                <div class="center-panel">
                    <pub :value="pubContent" @input="pubContent = $event.target.value"></pub>
                    <!--   同 ↑   <pub v-model="pubContent"></pub>-->
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
    import navigate from "./components/navigate"
    import pub from "./components/publish"
    import card from "./components/card"

    export default {
        name: 'app',
        components: {
            navigate,
            pub,
            card
        },
        data() {
            return {
                pubContent:'',
                offerNum: 0,
                postUrl: "/api/v1/giveoffer",
                getUrl: "/api/v1/getoffer"
            }
        },
        mounted() {
            this.getOffer();
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

    /*#app {*/
        /*font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
        /*-webkit-font-smoothing: antialiased;*/
        /*-moz-osx-font-smoothing: grayscale;*/
        /*text-align: center;*/
        /*color: #2c3e50;*/
        /*margin-top: 60px;*/
        /*display: flex;*/
        /*justify-content: center;*/
        /*flex-wrap: wrap;*/
    /*}*/

    .no {
        font-size: 25px
    }
</style>
