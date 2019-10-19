<template>
    <div class="card">
        <topic :title=title></topic>
        <div class="card-down">
            <input type="button" v-on:click="offerIncr()" value="施舍一个offer" style="margin-left: 10px;margin-top: 5px">
            <h4 style="margin-left: 10px">现在wxb只有{{offerNum}}个offer</h4>
        </div>
    </div>
</template>

<script>
    import {postRequest, getRequest} from "../utils/api"
    import topic from './Topic'
    export default {
        name: "card",
        components:{
            topic
        },
        props:{
            title:{
                type:String,
                default:'我爱祖国'
            }
        },

        data() {
            return {
                offerNum: 0,
                postUrl: "/api/v1/offer/give",
                getUrl: "/api/v1/offer/get"
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

<style scoped>
    .card{
        display: flex;
        flex-direction: column;
    }
    .card-down{
        margin-top: -4px;
        width: 244px;
        height: 100px;
        background-color: #fff;
        border-radius: 4px;
    }
</style>