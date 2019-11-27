<template>
    <div id="user-page">
       <div class="user-center-pannel">
           <div class="user-card bs">
               <div class="background"></div>
               <div class="user-avatar"></div>
               <div class="user-info">
                   <div class="user-name">
                       <span>{{userProfile.nickname}}</span>
                   </div>
                   <div class="user-intro">
                       <span>主人很烂没有介绍</span>
                   </div>
                   <x-button v-if="userProfile.uid===$store.getters.profile.uid" class="user-profile-edit-btn"></x-button>
                   <follow-button v-else class="user-profile-edit-btn"
                                  @follow="followMe()"
                                  :follow-state="followInfo.followStatus">
                   </follow-button>
               </div>
           </div>
           <div class="user-main-pannel">
               <div class="user-main-left">
<!--                   <div class="user-activity-filter bs">-->
<!--                       <div class="user-filter-item" @click="getMyActivities()">动态</div>-->
<!--                       <div class="user-filter-item" @click="getMyMoments()">点赞</div>-->
<!--                       <div class="user-filter-item">评论</div>-->
<!--                       <div class="user-filter-item">关注</div>-->
<!--                       <div class="user-filter-item">粉丝</div>-->
<!--                   </div>-->
                   <select-bar
                           :list="uid==$store.getters.profile.uid? selectItemsMe:selectItems"
                           @choose="selectItem($event)" >
                   </select-bar>

                   <router-view></router-view>
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
    import FollowButton from '../components/common/FollowButton'
    import SelectBar from '../components/SelectBar'
    import {getRequest, postRequest} from "../utils/api"

    export default {
        name: "User",
        components:{
            XButton,
            FollowButton,
            SelectBar
        },
        props:{
            uid:{
                type:String,
                required:true
            },
        },
        data() {
            return {
                // momentList:[],
                // thumbMomentList:[],
                selectItems:['动态','发布','Ta关注的','关注Ta的'],
                selectItemsMe:['动态','发布','我关注的','关注我的'],
                userProfile:{
                    nickname:'没有名字',
                    avatar:'',
                    gender:'',
                    headLine:'',
                    followers: 0,
                    following: 0,
                },
                followInfo:{
                    followStatus:false,
                    followerCnt:0,
                },
                api:{
                    userMoment:'/api/v1/moment/own',
                    userBasicInfo:'/api/v1/people/info',
                    follow:'/api/v1/people/follow',
                    followState:'/api/v1/people/follow_state'
                }
            }
        },
        mounted() {
            this.getUserBasicInfo()
            this.$store.commit('changeNavItemState',[false,false,false])
        },
        methods:{
            // 是否有关注
            getFollowState() {
                  getRequest(this.api.followState,
                      {'uid':this.userProfile.uid,'follower_uid':this.$store.getters.profile.uid}).then(res=>{
                          this.followInfo.followStatus  = res.data.follow_state?true:false
                  })
            },
            followMe() {
                postRequest(this.api.follow,
                    {'uid':this.userProfile.uid,'follower_uid':this.$store.getters.profile.uid}).then(res=>{
                        this.followInfo.followStatus = res.data.follow_status?true:false;
                        this.followInfo.followerCnt = res.data.follower_cnt;
                }).catch(()=>{
                    alert("请先登录")
                })
            },
            // 获取用户基本信息
            getUserBasicInfo() {
                getRequest(this.api.userBasicInfo,{uid:this.uid}).then(res=>{
                    this.userProfile = res.data.payload
                    // 获取用户关注状态
                    this.getFollowState()
                }).catch(()=>{
                    alert("错误: )")
                })
            },
            // 获取用户点赞的动态
            getMyMoments() {
                    this.$router.push({
                                name:'userMoment',
                                params: {uid:this.uid}
                            }
                        ).catch(()=>{})
            },
            // 获取用户自己的动态
            getMyActivities() {
                this.$router.push({name:'userActivity',params:{uid:this.uid}}).catch(()=>{})
            },
            getFollowing(){
                this.$router.push({name:'userFollowing',params:{uid:this.uid}}).catch(()=>{})
            },
            getFollowers(){
                this.$router.push({name:'userFollower',params:{uid:this.uid}}).catch(()=>{})
            },
            selectItem($event) {
                if ($event.index === 0){
                    this.getMyActivities()
                }else if ($event.index === 1) {
                    this.getMyMoments()
                }else if ($event.index === 2) {
                    this.getFollowing()
                }else if ($event.index === 3){
                    this.getFollowers()
                } else{
                    alert("错误")
                }
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


    .user-filter-item {
        /*display: inline-block;*/
        cursor: pointer;
        width: 60px;
        margin: 0 30px;

    }
</style>
<style src="../assets/css/common.css"></style>