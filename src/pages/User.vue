<template>
    <div id="user-page">
       <div class="user-center-pannel">
           <div class="user-card bs">
               <div class="background"></div>
               <div class="user-avatar"></div>
               <div class="user-info">
                   <div class="user-name">
                       <span>{{$store.getters.profile.nickname}}</span>
                   </div>
                   <div class="user-intro">
                       <span>主人很烂没有介绍</span>
                   </div>
                   <x-button class="user-profile-edit-btn"></x-button>
               </div>
           </div>
           <div class="user-main-pannel">
               <div class="user-main-left">
                   <div class="user-activity-filter bs">
                       <div class="user-filter-item" @click="getMyMoments()">我的动态</div>
                       <div class="user-filter-item" @click="getMyThumbUp()">我的点赞</div>
                       <div class="user-filter-item">我的评论</div>
                       <div class="user-filter-item">我的关注</div>
                       <div class="user-filter-item">关注我的</div>
                   </div>


                   <router-view></router-view>
<!--                   <moment-card class="user-moment-card bs"-->
<!--                                v-for="(item,index) in momentList" :key="index" :data="item">-->
<!--                   </moment-card>-->

<!--                   <moment-card class="user-moment-card bs"-->
<!--                                v-for="(item,index) in thumbMomentList" :key="index" :data="item">-->
<!--                   </moment-card>-->
               </div>
               <div class="user-main-right">
                   <div class="user-info-item"></div>
                   <div class="user-info-item "></div>
                   <div class="user-info-item "></div>
               </div>
           </div>
       </div>
    </div>
</template>

<script>
    import XButton from '../components/common/EditButton'
    import {getRequest} from "../utils/api"

    export default {
        name: "User",
        components:{
            XButton,
        },
        data() {
            return {
                momentList:[],
                thumbMomentList:[],
                api:{
                    userMoment:'/api/v1/moment/own',
                    thumbUpMoment:'/api/v1/moment/thumb'
                }
            }
        },
        mounted() {
            this.getMyMoments()
        },
        methods:{
            // 获取用户点赞的动态
            getMyThumbUp() {
                getRequest(this.api.thumbUpMoment).then(res=>{
                    this.thumbMomentList = res.data.payload
                    // 把动态列表数据传进 路由自组件
                    this.$router.push(
                            {
                                name:'userThumbUp',
                                params: {list:res.data.payload}
                            }
                        ).catch(()=>{})
                }).catch(()=>{
                    alert("错误: )")
                })
            },
            // 获取用户自己的动态
            getMyMoments() {
                getRequest(this.api.userMoment).then(res=>{
                    this.momentList = res.data.payload
                    this.$router.push({name:'userMoment',params: {list:res.data.payload}}).catch(()=>{})
                }).catch(()=>{
                    alert("错误: )")
                })
            }
        }
    }
</script>

<style scoped>
    #user-page {

    }

    .user-center-pannel {
        position: relative;
        margin: 0 auto;
        width: 900px;
    }

    .user-card {
        width: 100%;
        height: 300px;
        border-radius: 4px;
        background-color: #fff;
        position: relative;
    }

    .user-main-pannel{
        margin: 10px 0;
        width: 100%;
        display: flex;
    }

    .user-main-left {
        width: 690px;

    }

    .user-main-right {
        width: 300px;
        margin: 0 0 0 10px;
    }

    .user-info-item {
        width: 100%;
        height: 150px;
        margin-bottom: 10px;
        border-radius: 4px;
        background-color: #FF595E;
    }

    .user-activity-item {
        width: 100%;
        height: 200px;
        margin-bottom: 10px;
        border-radius: 4px;
        background-color: #0086b3;
    }

    .user-avatar {
        width: 160px;
        height: 160px;
        display: inline-block;
        overflow: hidden;
        vertical-align: top;
        border: 4px solid #fff;
        border-radius: 8px;
        background-color: #fff;
        background-image: url("../assets/images/jay.png");
        background-repeat: no-repeat;
        /*background-size: contain;*/
        background-size: cover;
        position: absolute;
        bottom: 25px;
        left: 25px;
        z-index: 5;

    }

    .background {
        height: 130px;
        background-color: #646464;
        /*background-image: url("../assets/images/cat.jpg");*/
        /*background-position-y:180px;*/
    }

    .user-info {
        display: inline-block;
        width: 670px;
        height: 140px;
        position: absolute;
        bottom: 25px;
        left: 210px;
    }

    .user-name {
        padding-top: 10px;
        font-size: 30px;
        font-weight: bolder;
    }

    .user-intro {
        padding-top: 10px;
    }

    .user-profile-edit-btn {
        position: absolute;
        right: 0;
        bottom: 0;
    }

    .user-activity-filter {
        width: 100%;
        height: 50px;
        margin-bottom: 10px;
        background-color: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
    }



    .user-filter-item {
        /*display: inline-block;*/
        cursor: pointer;
        width: 60px;
        margin: 0 30px;

    }
</style>
<style src="../assets/css/common.css"></style>