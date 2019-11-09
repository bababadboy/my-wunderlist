<template>
    <div class="mmtcard-container">
        <!-- 动态行  -->
        <div class="moment-row">
            <div class="i-face cp" @click="toUserPage()"></div>
            <div class="main-content">
                <div class="name cp fs15">
                    <span @click="toUserPage()">{{data.nickname}}</span>
                </div>

                <follow-button class="follow-btn">
                </follow-button>
<!--                <button class="follow-btn" @click="handleFollowClick()">-->
<!--                    <span v-if="true">关注</span>-->
<!--                    <span v-else>已关注</span>-->
<!--                </button>-->

                <div class="iconfont icon-more icon more-btn" @click="clickMore"></div>

                <!-- native监听当前组件，自定义事件       -->
                <more-panel v-if="morePanelShownStatus" class="more-panel" @click.native="clickpanel()"></more-panel>
                <div class="tc-slate fs12">
                    {{data.publishTime}}
                </div>
                <div class="content fs14">
                    {{data.content}}
                </div>
                <div class="mt15 mb10">
                    <div class="single-btn">
                        <div class="iconfont icon-fenxiang icon"></div>
                        <span v-if="!data.numOfForwards"> 转发</span>
                        <span v-else>{{data.numOfForwards}}</span>
                    </div>
                    <div class="single-btn" @click="clickComment()">
                        <div class="iconfont icon-pinglun icon"></div>
                        <span v-if="!data.numOfComment"> 评论</span>
                        <span v-else>{{data.numOfComment}}</span>
                    </div>

                    <div class="single-btn" @click="clickLike()">
                        <svg v-if="data.vote" class="icon fs20" aria-hidden="true">
                            <use xlink:href="#icon-icon_dianzan_green"></use>
                        </svg>
                        <svg v-else class="icon fs20" aria-hidden="true">
                            <use xlink:href="#icon-icon_dianzan_white"></use>
                        </svg>
<!--                        <div v-if="likeClicked" class="iconfont icon-dianzan icon fc-lg"></div>-->
<!--                        <div v-else class="iconfont icon-dianzan icon"></div>-->

                        <span v-if="!data.numOfLike"> 点赞</span>
                        <span v-else :class="data.vote? 'fc-lg':''">{{data.numOfLike}}</span>
                    </div>
                </div>
            </div>
        </div>
        <!-- 评论行 -->
        <div class="comment-row" v-show="commentCardShownStatus" >
            <div class="comment-send">
                <comment-send
                        @input="handleInput($event)"
                        @sendComment="handleSendComment($event)">
                </comment-send>
                <!-- 评论列表 -->
                <floor class="ml20" v-for="(item,index) in commentList" :key="index" :data="item"></floor>
            </div>

        </div>
    </div>
</template>

<script>
    import MorePanel from './MorePanel'
    import Floor from './Floor'
    import CommentSend from './CommentSend'
    import FollowButton from './common/FollowButton'
    import {getRequest, postRequest,} from "../utils/api";
    export default {
        components:{
            MorePanel,
            Floor,
            CommentSend,
            FollowButton
        },
        name: "MomentCard",
        props:{
            data:{
                type:Object,
                default:function () {
                    return {
                        'id':'',
                        'avatar':'',
                        'nickname':'无名无姓',
                        'uid':'',
                        'publishTime':'1970-1-1',
                        'content':'分布式系统不能抛弃 p(分区容错卫性)，所以一般会有 AP/CP两种选择。AP削弱了数据的一致性，比如发个微博啥的，数据延迟个几秒钟甚至几分钟问题不大，但为了用户体验不能不可用；而CP强调数据的一致性，宁愿用户有个短暂的无法使用，也必须保证数据是一致的，在金融相关软件更为常见。\n',
                        'numOfForwards':0,
                        'numOfComment':0,
                        'numOfLike':0,
                        'commentSend':'',
                        'commentList':[{
                            'avatar':'',
                            'nickname':'',
                            'publishTime':'1970-1-1',
                            'content':'分布式系统不能抛弃 p(分区容错卫性)，所以一般会有 AP/CP两种选择。AP削弱了数据的一致性，比如发个微博啥的，数据延迟个几秒钟甚至几分钟问题不大，但为了用户体验不能不可用；而CP强调数据的一致性，宁愿用户有个短暂的无法使用，也必须保证数据是一致的，在金融相关软件更为常见。\n',
                            'numOfForwards':0,
                            'numOfComment':0,
                            'numOfLike':4,
                        }]
                    }
                }
            }
        },
        data(){
            return{
                morePanelShownStatus:false,
                commentCardShownStatus:false,
                inputVal:'',
                likeClicked:this.data.vote,  // 是否已经点击了"点赞按钮"
                likeNum:this.data.numOfLike,
                commentList:[],
                followState:false,
                api:{
                    getCommentsList:'/api/v1/comment/get_all',
                    postComment:'/api/v1/comment/add',
                    thumbUp:'/api/v1/msg/like'
                }
            }
        },
        methods:{
            clickMore() {
                this.morePanelShownStatus = !this.morePanelShownStatus;
            },
            clickpanel() {
                this.$emit('delete')
                this.morePanelShownStatus = false
            },
            // 显示动态 的评论内容
            clickComment() {
                this.commentCardShownStatus = !this.commentCardShownStatus
                if(this.commentCardShownStatus){
                    this.getCommentList()
                }

            },
            // 获取评论列表 以及获取评论的回复列表
            getCommentList(){
                getRequest(this.api.getCommentsList,{'moment_id':this.data.id}).then(res=>{
                    this.commentList = res.data.payload
                })

            },
            // 发送动态的评论
            handleSendComment($event){
                let param={
                    'uid':this.$store.getters.profile.uid,
                    'momentId':this.data.id,
                    'content':$event.input,
                }
                alert("发表成功")
                postRequest(this.api.postComment,param).then(()=>{
                    // 刷新
                    this.getCommentList();
                }).catch(err=>{
                    window.console.log(err)
                    alert("请登录")
                })
            },
            handleInput($event){
                this.inputVal = $event.textVal
            },
            // 点击点赞按钮
            clickLike(){
                let param={
                    'msg_id':this.data.id,
                    'msg_type':'m'
                }
                postRequest(this.api.thumbUp,param).then(res=>{
                    this.data.vote = res.data.vote
                    this.data.numOfLike = res.data.count
                    this.data.numOfLike = res.data.count
                }).catch(()=>{
                    // window.console.log(err)
                    alert("请登录")
                })
            },
            handleFollowClick(){
                this.followState = !this.followState
            },
            // 转到userpage
            toUserPage() {
                this.$router.push(
                    {
                        name:'user',
                        params:{
                            'uid':'uid',
                            'username':'nickname'
                        }
                    }).catch((err)=>{window.console.log(err)})
            }
        }
    }
</script>


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
        width: 632px;
        background-color: #fff;
        border-color: #FF595E;
    }

    .moment-row {
        margin-top: 10px;
        width: 632px;
        border-radius: 5px;
        background-color: #fff;
        border-color: #FF595E;
    }
    .comment-row {
        display: block;
        /*width: 632px;*/
        padding-bottom: 15px;
        border-radius: 5px;
        background-color: #fff;
        border-color: #FF595E;
    }
    .main-content {
        width: 534px;
        padding-top: 10px;
        margin-top: -50px;
        margin-left: 85px;
        display: inline-block;
    }

    .name {
        color: #4ed3ff;
        display: inline-block;
        width: 450px;
    }

    .content {
        width: 532px;
        /*height: 60%;*/
        margin-top: 15px;
        box-sizing: border-box;
    }


    .icon{
        display: inline-block;
        cursor: pointer;
    }
    .more-panel {
        position: absolute;
        right: 5px;
        top: 33px;
        cursor: pointer;
    }



    .follow-btn {
        position: absolute;
    }

    .more-btn{
       /*margin-left: 10px;*/
        float: right;
    }


</style>
<style src="../assets/css/common.css" scoped>
</style>