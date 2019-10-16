<template>
    <!--评论组件 楼层 -->
    <div class="floor fs14">
        <div class="i-face"></div>
        <div class="container ml10">
            <div class="name">{{data.nickname}}</div>
            <div class="text">{{data.content}}</div>
            <div class="info">
                <div class="icon">
                    <span>{{data.publish_time}}</span>
                </div>

                <div class="icon ml40">
                    <div class="iconfont icon-dianzan ib"></div>
                    <span v-if="data.num_of_like">{{data.num_of_like}}</span>
                    <span v-else>点赞</span>
                </div>

                <div class="icon ml40" @click="showFloorReply()">
                    <div class="iconfont icon-pinglun ib"></div>
                    <span v-if="data.num_of_replies">{{data.num_of_replies}}</span>
                    <span v-else>回复</span>
                </div>
            </div>

            <!-- 回复输入框     -->
            <comment-send txt-area-width="315" :border-top="topBorder" v-show="replyFloorShown"></comment-send>

            <!-- 回复列表  -->
            <div class="reply-box">
                <div class="reply-item mt5" v-for="(item,index) in replyList" :key="index" :data="item">
                    <div class="reply-face">
                    </div>
                    <div class="reply-con">
                        <div class="user">{{item.user_name}}</div>
                        <span>{{item.reply_txt}}</span>
                    </div>
                    <div class="info">
                        <div class="icon ml35">
                            <span>2019-10-12 18:33</span>
                        </div>
                        <div class="icon ml40">
                            <div class="iconfont icon-dianzan ib"></div>
                            <span>{{item.like}}</span>
                        </div>
                        <div class="icon ml40" @click="showReplyReply(index)">
                            <div class="iconfont icon-pinglun ib"></div>
                            <span>回复{{item.replies}}</span>
                        </div>
                    </div>
                    <comment-send txt-area-width="315" :border-top="topBorder" v-show="replyReplyShown[index]"></comment-send>
                </div>
            </div>


        </div>
    </div>
</template>

<script>
    import CommentSend from './CommentSend'
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
                        'avatar':'',
                        'nickname':'',
                        'content':'',
                        'publish_time':'',
                        'num_of_like':0,
                        'num_of_dislike':0,
                        'num_of_replies':0
                    }
                }
            },
            replyList:{
                type:Array,
                default:function (){
                    return[
                        {
                            'avatar':'../assets/images/avatar.jpg',
                            'user_name':'无里狗焕',
                            'reply_txt':'蹭一蹭一楼',
                            'like':2,
                            'replies':[1001,1002]
                        },
                        {
                            'avatar':'../assets/images/avatar.jpg',
                            'user_name':'无里哝哝',
                            'reply_txt':'蹭一蹭二楼',
                            'like':3,
                            'replies':[1001,1003]
                        }
                        ]
                }
            }
        },
        data(){
            return{
                topBorder:false,
                replyFloorShown:false,
                // 楼主的回复 的回复框显示状态
                replyReplyShown:[...Array(this.replyList.length)].map(()=>false)
            }
        },
        mounted:{
          // 加载评论的回复内容
          getReplies(){

          }
        },
        methods:{
            // 显示楼主的回复框
            showFloorReply(){
                this.replyFloorShown = !this.replyFloorShown
            },
            // 显示回复的回复框
            showReplyReply(index){
                this.replyReplyShown.splice(index,1,!this.replyReplyShown[index])   // 使用splice避免vue无法动态更新数组
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
        padding: 8px 0 8px 8px;
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