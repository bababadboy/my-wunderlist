<template>
    <div class="follower-card">
        <img :src="GLOBAL.staticUrl+item.user.avatar" alt="" class="follower-card-avatar cp"  @click="toUser()">
        <div class="follower-card-content">
            <div class="follower-card-content-name  fs18 fw6 cp"  @click="toUser()">
                {{item.user.nickname}}
            </div>
            <div class="follower-card-content-info">
                此用户没有介绍
            </div>
            <div class="follower-card-content-status">
                <span class="status-item" v-if="item.user.followers">{{item.user.followers}}关注者</span>
                <span class="status-item" v-else>暂无关注者</span>
                <span class="status-item" v-if="item.user.moments">{{item.user.moments}}动态</span>
                <span class="status-item" v-else>暂无动态</span>
            </div>
        </div>
        <follow-button class="follower-card-btn"
                       @follow="handleFollow()" :follow-state="item.followState?true:false">
        </follow-button>
<!--        <div>-->
<!--            关注状态：{{item.followState}}-->

<!--            用户头像：{{item.user.avatar}}-->
<!--            关注他的:{{item.user.followers}}-->
<!--            他关注的：{{item.user.following}}-->
<!--            他的动态：{{item.user.moments}}-->
<!--        </div>-->
    </div>
</template>

<script>
    import FollowButton from "../components/common/FollowButton"
    import {postRequest} from "../utils/api";

    export default {
        name: "FollowCard",
        components:{
            FollowButton
        },
        props:{
            item:{
                type:Object,
                default:function () {
                    return {
                        // list的中的元素为：
                        followState: 0,
                        user: {
                            avatar: '',
                            email: "chendanddd@qq.com",
                            followers: 0,
                            following: 1,
                            gender: 2,
                            moments: 0,
                            nickname: "chendan",
                            uid: 10011,
                            userType: 1,
                            vip: 0,
                            info:'此用户没有介绍'
                        },

                    }
                }

            }
        },
        data() {
            return {
                api:{
                    follow:'/api/v1/people/follow',
                }
            }
        },
        methods:{
            handleFollow() {
                if (this.item.user.uid === this.$store.getters.profile.uid){
                    alert("不能关注自己")
                    return
                }
                postRequest(this.api.follow,
                    {'uid':this.item.user.uid,'follower_uid':this.$store.getters.profile.uid}).then(res=>{
                    this.item.followState = res.data.follow_status;
                    this.item.user.followers = res.data.follower_cnt;
                }).catch(()=>{
                    alert("请先登录")
                })
            },
            toUser(){
                this.$router
                    .push({name:'user',params:{uid:this.item.user.uid}})
                    .then(()=>{
                        window.location.reload()
                }).catch(()=>{})
            }
        }
    }
</script>

<style scoped>
    .follower-card {
        position: relative;
        background-color: #fff;
        padding: 16px 20px;
        border-bottom: 1px solid rgba(230,230,231,.5);
    }

    .follower-card:hover{
        background: #fdfdfd;
    }

    .follower-card-avatar {
        width: 60px;
        height: 60px;
        border-radius: 4px;
        background-image: url("../assets/images/jay.png");
        background-repeat: round;
        display: inline-block;
        position: absolute;
        top: 20px;
        left: 20px;
    }

    .follower-card-content {
        display: inline-block;
        margin-left: 20px;
        position: relative;
        left: 55px;
    }

    .follower-card-content-name {
        padding: 0 0 5px 0;
    }

    .follower-card-content-info {
        font-size: 15px;
        color: #646464;
        padding: 0 0 5px 0;
    }

    .follower-card-content-status {
        color: #8590a6;
        font-size: 14px
    }

    .follower-card-btn {
        /*float: right;*/
        position: absolute;
        right: 20px;
        top: 40px;
    }

    .status-item {
        padding: 0 10px 0 0;
    }
</style>
<style src="../assets/css/common.css"></style>