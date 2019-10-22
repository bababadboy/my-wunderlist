<template>
    <!--评论组件 楼层 -->
    <div class="floor fs14">
        <div class="i-face"></div>
        <div class="container ml10">
            <div class="name">{{data.nickname}}</div>
            <div class="text">{{data.content}}</div>
            <div class="info">
                <div class="icon">
                    <span>{{data.publishTime}}</span>
                </div>

                <div class="icon ml40">
                    <div class="iconfont icon-dianzan ib"></div>
                    <span v-if="data.numOfLike">{{data.numOfLike}}</span>
                    <span v-else>点赞</span>
                </div>

                <div class="icon ml40" @click="showFloorInput()">
                    <div class="iconfont icon-pinglun ib"></div>
                    <span v-if="data.numOfReplies">{{data.numOfReplies}}</span>
                    <span v-else>回复</span>
                </div>
            </div>

            <!-- 回复评论的输入框     -->
            <comment-send
                    txt-area-width="315"
                    :border-top="topBorder"
                    v-show="replyFloorShown"
                    :placeholder="'回复'+data.nickname"
                    @sendComment="handleSendComment($event)">
            </comment-send>

            <!-- 回复列表  -->
            <div class="reply-box">
                <div class="pt10" v-for="(item,index) in data.replyList" :key="index" :data="item">
                    <div class="reply-face">
                    </div>
                    <div class="reply-con">
                        <div class="user">{{item.nickname}}</div>
                        <span v-if="item.pnickname">{{'回复@'+item.pnickname+'： '}}</span>
                        <span>{{item.content}}</span>
                    </div>
                    <div class="info">
                        <div class="icon ml35">
                            <span>{{item.publishTime}}</span>
                        </div>
                        <div class="icon ml40">
                            <div class="iconfont icon-dianzan ib"></div>
                            <span>{{item.likeNum}}</span>
                        </div>
                        <div class="icon ml40" @click="showReplyInput(index)">
                            <div class="iconfont icon-pinglun ib"></div>
                            <span>{{item.disLikeNum}}</span>
                        </div>
                    </div>
                    <!--    回复回复的的输入框-->
                    <comment-send
                            txt-area-width="315"
                            :border-top="topBorder"
                            v-show="replyInputShown[index]"
                            :placeholder="'回复'+item.nickname"
                            @sendComment="handleSendReply($event,index)">

                    </comment-send>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
    import CommentSend from './CommentSend'
    import {getRequest, postRequest} from "../utils/api";
    export default {
        name: "Floor",
        components:{
            CommentSend
        },
        props:{
            data:{
                type:Object,
                default:function(){
                    return{
                        'id':'',    // 评论id
                        'uid':'',   // 用户id
                        'avatar':'',
                        'nickname':'',
                        'content':'',
                        'publishTime':'',
                        'numOfLike':0,
                        'numOfDislike':0,
                        'numOfReplies':0,
                        'replyList':[]  // 每个对象包含id,uid,nickname,pid,puid,pnickname,publishTime,content,likeNum,dislikeNum
                    }
                }
            },

            /*replyList:{
                type:Array,
                default:function (){
                    return[
                        {
                            'avatar':'../assets/images/avatar.jpg',
                            'nickname':'无里狗焕',
                            'publishTime':'2019-10-12 16:32:11',
                            'content':'蹭一蹭一楼',
                            'likeNum':2,
                            'replies':[1001,1002]
                        },
                        {
                            'avatar':'../assets/images/avatar.jpg',
                            'nickname':'无里哝哝',
                            'publishTime':'2019-10-12 16:32:11',
                            'content':'蹭一蹭二楼',
                            'likeNum':3,
                            'replies':[1001,1003]
                        }]
                }
            }*/
        },
        data(){
            return{
                topBorder:false,
                replyFloorShown:false,
                // 楼主的回复 的回复框显示状态
                replyInputShown:[...Array(this.data.replyList.length)].map(()=>false),
                api:{
                    addReply:'/api/v1/reply/add',
                    getAllReplies:'/api/v1/reply/get_all'
                }
            }
        },
        mounted(){

        },
        methods:{
            // 显示楼主的回复框
            showFloorInput(){
                this.replyFloorShown = !this.replyFloorShown
            },
            // 显示回复的回复框
            showReplyInput(index){
                this.replyInputShown.splice(index,1,!this.replyInputShown[index])   // 使用splice避免vue无法动态更新数组
            },
            // 发送回复
            handleSendComment($event){
                let body = {
                    'uid':'10001',
                    'comment_id':this.data.id,
                    'content':$event.input
                }
                postRequest(this.api.addReply,body).then(()=>{
                    alert("回复"+this.data.nickname+" 成功")
                    this.getReplies()
                })
            },
            handleSendReply($event,index){
                let body = {
                    'uid':'10001',
                    'comment_id':this.data.id,
                    'content':$event.input,
                    'pid': this.data.replyList[index].id    // 被回复的id作为 pid
                }
                // 把 回复的输入框 显示状态置为false
                this.replyInputShown.splice(index,1,false)
                postRequest(this.api.addReply,body).then(()=>{
                    alert("回复"+this.data.replyList[index].nickname+" 成功")
                    this.getReplies()
                })
            },
            // 获取评论的所有回复
            getReplies(){
                getRequest(this.api.getAllReplies,{'comment_id':this.data.id}).then(res=>{
                    this.data.replyList = res.data.payload
                })
            }
        }
    }
</script>


<style src="../assets/css/common.css" scoped></style>
<style scoped>
    .floor {
        margin-top: 10px;
        /*height: 100px;*/
        width: 580px;
        background-color: #fff;
        border-color: #FF595E;
    }
    .i-face {
        height: 48px;
        width: 48px;
        border-radius: 50%;
        position: relative;
        display: inline-block;
        background-image: url("../assets/images/avatar.jpg");
        background-size: cover;
        background-position: center center;
        background-repeat: no-repeat;
        float: left;
        margin: 24px 0 0 5px;
    }

    .reply-face {
        height: 24px;
        width: 24px;
        border-radius: 50%;
        position: relative;
        display: inline-block;
        background-image: url("../assets/images/avatar.jpg");
        background-size: cover;
        background-position: center center;
        background-repeat: no-repeat;
        float: left;
        margin: 5px 10px 0 0;
    }
    .container {
        position: relative;
        margin-left: 70px;
        padding: 22px 0 14px;
        border-top: 1px solid #e5e9ef;
    }
    .info {
        color: #99a2aa;
        line-height: 26px;
        font-size: 12px;
    }
    .reply-box {
        background-color:#fafbfc;
        padding: 0 0 0 8px;
    }
    .name {
        /*color: #4ed3ff;*/
        display: inline-block;
    }
    .icon{
        display: inline-block;
        cursor: pointer;
    }
</style>
