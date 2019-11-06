<template>
    <div id="app">
        <navi @showAuth="showAuthCard()"
              @logout="handleLogout()">
        </navi>
        <auth-card v-if="authShown"
                   @closeAuth="closeAuth"
                   @login="handleLogin($event)"></auth-card>
        <router-view></router-view>
    </div>
</template>

<script>
    import {postRequest, getRequest} from "./utils/api"
    import AuthCard from "./components/AuthCard"
    import navi from './components/Navi'
    export default {
        name: 'app',
        components: {
            AuthCard,
            navi
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
    body {
        font-family: Helvetica Neue, Helvetica, Arial, Microsoft Yahei, Hiragino Sans GB, Heiti SC, WenQuanYi Micro Hei, sans-serif;
        color: #222;
        font-size: 14px;
        /*background-color: #d2e9fb;*/
        background-color: #f4f5f5;
        margin: 0;
    }


</style>
