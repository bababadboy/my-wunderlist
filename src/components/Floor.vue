<template>
    <!--评论组件 楼层 -->
    <div class="floor fs14">
        <div class="i-face"></div>
        <div class="container ml10">
            <div class="name">{{data.nickname}}</div>
            <div class="text">{{data.content}}</div>
            <div class="info">
                <div class="info-item">
                    <span>{{data.publishTime}}</span>
                </div>

                <div class="info-item ml40" @click="commentThumbUp()">
                    <svg v-if="data.vote" class="icon fs20" aria-hidden="true">
                        <use xlink:href="#icon-icon_dianzan_green"></use>
                    </svg>
                    <svg v-else class="icon fs20" aria-hidden="true">
                        <use xlink:href="#icon-icon_dianzan_white"></use>
                    </svg>
                    <span v-if="data.numOfLike" :class="data.vote?'fc-lg':''">{{data.numOfLike}}</span>
                    <span v-else>点赞</span>
                </div>

                <div class="info-item ml40" @click="showFloorInput()">
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
                        <div class="info-item ml35">
                            <span>{{item.publishTime}}</span>
                        </div>
                        <div class="info-item ml40" @click="replyThumbUp(item.id,index)">
                            <svg v-if="item.vote" class="icon fs20" aria-hidden="true">
                                <use xlink:href="#icon-icon_dianzan_green"></use>
                            </svg>
                            <svg v-else class="icon fs20" aria-hidden="true">
                                <use xlink:href="#icon-icon_dianzan_white"></use>
                            </svg>
                            <span v-if="item.likeNum" :class="item.vote?'fc-lg':''">{{item.likeNum}}</span>
                        </div>
                        <div class="info-item ml40" @click="showReplyInput(index)">
                            <div class="iconfont icon-pinglun ib"></div>
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
                        'vote':0,
                        'numOfDislike':0,
                        'numOfReplies':0,
                        'replyList':[]  // 每个对象包含id,uid,nickname,pid,puid,pnickname,publishTime,content,likeNum,dislikeNum
                    }
                }
            },
        },
        data(){
            return{
                topBorder:false,
                replyFloorShown:false,
                // 楼主的回复 的回复框显示状态
                replyInputShown:[...Array(this.data.replyList.length)].map(()=>false),
                api:{
                    addReply:'/api/v1/reply/add',
                    getAllReplies:'/api/v1/reply/get_all',
                    thumbUp:'/api/v1/msg/like'
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
                    'uid':this.$store.getters.profile.uid,
                    'commentId':this.data.id,
                    'content':$event.input
                }
                postRequest(this.api.addReply,body).then(()=>{
                    alert("回复"+this.data.nickname+" 成功")
                    this.getReplies()
                }).catch(err=>{
                    window.console.log(err)
                    alert("请登录")
                })
            },
            handleSendReply($event,index){
                let body = {
                    'uid':this.$store.getters.profile.uid,
                    'commentId':this.data.id,
                    'content':$event.input,
                    'pid': this.data.replyList[index].id    // 被回复的id作为 pid
                }
                // 把 回复的输入框 显示状态置为false
                this.replyInputShown.splice(index,1,false)
                postRequest(this.api.addReply,body).then(()=>{
                    alert("回复"+this.data.replyList[index].nickname+" 成功")
                    this.getReplies()
                }).catch(err=>{
                    window.console.log(err)
                    alert("请登录")
                })
            },
            // 获取评论的所有回复
            getReplies(){
                getRequest(this.api.getAllReplies,{'comment_id':this.data.id}).then(res=>{
                    this.data.replyList = res.data.payload
                })
            },
            // 处理 评论 的点赞点击事件
            commentThumbUp() {
                let param={
                    'msg_id':this.data.id,
                    'msg_type':'c'
                };
                postRequest(this.api.thumbUp,param).then(res=>{
                    this.data.vote = res.data.vote
                    this.data.numOfLike = res.data.count
                }).catch(err=>{
                    window.console.log(err)
                    alert("请登录")
                })
            },
            // 回复点赞
            replyThumbUp(id,index) {
                let param={
                    'msg_id':id,
                    'msg_type':'r'
                };
                postRequest(this.api.thumbUp,param).then(res=>{
                    this.data.replyList[index].vote = res.data.vote
                    this.data.replyList[index].likeNum = res.data.count
                }).catch(err=>{
                    window.console.log(err)
                    alert("请登录")
                })
            },
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
    .info-item{
        display: inline-block;
        cursor: pointer;
    }
</style>
