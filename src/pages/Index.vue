<template>
    <div id="index">
        <div class="home-content">
<!--                <div class="left-panel">-->
<!--                    <offer-card title="点击给wxb offer"></offer-card>-->
<!--                </div>-->
                <div class="center-panel">
                    <pub @publish="publishMoment($event)" class="bs"></pub>

                    <moment-card class="moment-card bs"
                                 v-for="(item,index) in momentsList" :key="index" :data="item"
                                 @delete="handleDelete(item.id)">
                    </moment-card>
                </div>
                <div class="right-panel">
                    <profile-card
                            class="bs"
                            v-if="$store.getters.authStatus"
                            :userProfile="$store.getters.profile">
                    </profile-card>
                </div>
            </div>
    </div>
</template>

<script>
    import {postRequest, getRequest} from "../utils/api"
    import pub from "../components/Publish"
    // import OfferCard from "../components/OfferCard"
    import MomentCard from "../components/MomentCard"
    import ProfileCard from '../components/ProfileCard'
    export default {
        name: 'index',
        components: {
            pub,
            // OfferCard,
            MomentCard,
            ProfileCard,
        },
        data() {
            return {
                pubContent:'',
                offerNum: 0,
                momentsList:[], // 朋友圈列表
                authShown:false,
                api:{
                    incrOffer: "/api/v1/offer/give",
                    getOffer: "/api/v1/offer/get",
                    // 动态相关
                    publishMoment:'/api/v1/moment/publish',
                    getMomentList:'/api/v1/moment/get_all',
                    deleteMoment:'/api/v1/moment/delete',
                    // 登录注册
                    login:"/api/v1/user/auth",
                    register:"/api/v1/user/register"
                }
            }
        },
        mounted() {
            this.init();
        },
        methods: {
            init(){
                this.getOffer();
                this.getMomentsList();
            },
            offerIncr() {
                postRequest(this.api.incrOffer).then(res => {
                    this.offerNum = res.data.offer_num
                }).catch(err=>{
                    window.console.log(err)
                    alert("请登录")
                })
            },
            getOffer() {
                getRequest(this.api.getOffer).then(res => {
                    this.offerNum = res.data.offer_num
                })
            },
            // 发布输入的内容
            publishMoment($event){
                postRequest(this.api.publishMoment,
                    {
                        'uid':this.$store.getters.profile.uid,
                        'content':$event.value
                    }).then(()=>{
                    // todo 弹出一个发布成功状态框
                    alert("发布成功: )")
                    this.getMomentsList();  // postRequest异步执行，必须把此行放在then()中
                }).catch(err=>{
                    window.console.log(err)
                    alert("请登录")
                })

            },
            handleInput($event){
                this.pubContent=$event.textVal;
            },
            // 获取动态列表
            getMomentsList(){
                getRequest(this.api.getMomentList).then(res=>{
                    // console.log(res)
                    this.momentsList =res.data.payload;
                    window.console.log(res.data.payload)
                })
            },
            // 删除动态卡片
            /*
            handleDelete(id){
                todo 暂且不使用
                postRequest(this.api.deleteMoment,{'id':id}).then(()=>{
                    this.getMomentsList();
                })
            },*/

            // 显示登录卡片
            showAuthCard(){
                this.authShown = true
            },
            // 关闭显示登录卡片、
            closeAuth(){
                this.authShown = false
            },
            // 处理登录
            handleLogin($event){
                window.console.log($event.loginParam)
                postRequest(this.api.login,$event.loginParam).then(res=>{
                    // 加上 Bearer
                    let token = "Bearer "+res.data.token
                    // 把token存到 localStorage
                    this.$store.dispatch('setAuthorization',{'Authorization':token})
                    // 存储用户基本信息
                    this.$store.dispatch('setProfile',res.data.userDto).then(()=>{
                        // 关闭auth界面
                        this.closeAuth();
                        this.init();
                    })

                }).catch(err=>{
                    alert("用户名或者密码错误")
                    window.console.log(err)
                })
            },
            handleLogout(){
                let r = confirm("你确定要离开吗？")
                if (r){
                    this.$store.dispatch('removeAuth').then(()=>{});
                    this.init();
                }
            },
            handle2UserPage(){
                this.$router.push({name:'user'}).catch(()=>{})
            }
            // 获取用户信息
            // showProfile(){
            //     window.console.log('==========用户信息========')
            //     window.console.log(JSON.parse(this.$store.getters.profile))
            // }
        }
    }
</script>

<style>



    .home-content{
        width: 1000px;
        margin: 0 auto;
        display: flex;

    }

    .left-panel{
        width: 244px;
    }
    .center-panel{
        width: 632px;
        margin: 0 20px;

    }
    .right-panel{
        width: 268px;

    }
    .moment-card{
        margin-top: 10px;
        /*height: 160px;*/
        width: 632px;
        position: relative; /* 使用 相对定位的原因是,子元素more-panel必须使用绝对定位，见 https://www.iteye.com/blog/lixh1986-1948337,或者google搜索:css absolute 如何相对父元素*/
        background-color: #fff;
        border-radius: 4px;
        font-size: 30px;
    }


</style>
