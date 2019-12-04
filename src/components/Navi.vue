<template>
    <div id="navi" class="header-box">
        <header class="main-header">
            <div class="container header-container">
                    <!--<img src="https://b-gold-cdn.xitu.io/v3/static/img/logo.a7995ad.svg" alt="">-->
                <span>MINKOWSK</span>
                <nav role="navigation" class="main-nav">
                    <ul class="nav-list">
                        <li :class="['nav-item',navItemState[0]?'nav-item-active':'']" @click="toIndex()">
                            <span class="nav-item-title">首页</span>
                        </li>
                        <li :class="['nav-item',navItemState[1]?'nav-item-active':'']">推荐</li>
                        <li :class="['nav-item',navItemState[2]?'nav-item-active':'']">话题</li>
                        <li class="nav-item search">
                            <form action="" class="search-form">
                                <input type="text" placeholder="搜索树洞" class="search-input">
                                <img src="https://b-gold-cdn.xitu.io/v3/static/img/juejin-search-icon.6f8ba1b.svg" alt="">
                            </form>
                        </li>
                        <li v-if="$store.getters.authStatus">
                                <!--                            todo-->
                            <notify :count="unreadCnt" @click.native="notificationPage()"></notify>
                        </li>
                        <li v-if="!$store.getters.authStatus" class="nav-item auth" @click="showAuth()">
                            <span class="login">登录</span>
                            <span class="register">注册</span>
                        </li>
                        <li v-else class="ml20">
                            <div class="avatar" @click="showMenu()">
                                <img src="../assets/images/jay.png" alt="avatar" class="avatar">
                            </div>
                        </li>
                    </ul>
                    <div class="nav-item-wrapper" @click="closeNavItem()" v-if="menuStatus"></div>

                    <ul class="nav-menu" v-if="menuStatus">
                        <li class="nav-menu-item" @click="handleUserPage()">
                            <svg class="icon fs16 mr5" aria-hidden="true">
                                <use xlink:href="#icon-danseshixintubiao-"></use>
                            </svg>
                            <span>我的主页</span>
                        </li>
                        <li class="nav-menu-item">
                            <svg class="icon fs16 mr5" aria-hidden="true">
                                <use xlink:href="#icon-setting-preferences-gear-office-application-structure-define-process-fbaaebdf"></use>
                            </svg>
                            <span>设置</span>
                        </li>
                        <li class="nav-menu-item" @click="logout">
                            <svg class="icon fs16 mr5" aria-hidden="true">
                                <use xlink:href="#icon-tuichu"></use>
                            </svg>
                            <span>退出</span>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    </div>
</template>

<script>

    import notify from './Notify'
    import {getRequest} from "../utils/api";

    export default {
        name: "Navi",
        components:{
            notify
        },
        data(){
            return{
                menuStatus:false,
                navItemState:this.$store.getters.navItemState,
                unreadCnt:0,
                api:{
                    unreadNotificationCnt:'/api/v1/notification/count'
                }
            }
        },
        mounted(){
            this.getUnreadCnt()
        },
        methods:{
            // 获取未读通知个数
            getUnreadCnt() {
                getRequest(this.api.unreadNotificationCnt).then(res=>{
                    this.unreadCnt = res.data.payload
                })
            },
            // 跳转到通知页面
            notificationPage(){
                this.$router.push({name:'notification'})
            },
            closeNavItem(){
                this.menuStatus = false;
            },
            showAuth(){
                this.$emit('showAuth')
            },
            logout(){
                this.$emit('logout')
                this.menuStatus = false;
            },
            showMenu() {
                this.menuStatus = !this.menuStatus
            },
            handleUserPage(){
                this.$router.push({
                        name:'userActivity',
                        params: {
                                uid:this.$store.getters.profile.uid.toString()
                            }
                    }).then(()=>{
                        window.location.reload();
                }).catch(()=>{})
                this.$store.commit('changeNavItemState',[false,false,false])
                this.menuStatus  = false
            },
            toIndex(){
                this.$store.commit('changeNavItemState',[true,false,false])
                this.$router.push('/').catch(()=>{})

            }

        }
    }
</script>


<style scoped>
    .header-box {
        position: relative;
        height: 60px;
    }


    .main-header {
        position: fixed;
        left: 0;
        right: 0;
        top: 0;
        height: 45px;
        background-color: #fff;
        box-shadow: 0 1px 3px rgba(26,26,26,.1);;
        z-index: 250;
    }

    .header-container {
        align-items: center;
        height: 100%;
    }


    .logo {
        text-decoration: none;
    }

    .main-nav {
        height: 100%;
        flex-grow: 1;
        flex-shrink: 0;
        flex-basis: auto;
    }

    .nav-list {
        display: flex;
        align-items: center;
        position: relative;
        height: 100%;
        margin: 0;
    }

    .nav-item {
        /*padding: 0 1rem;*/
        margin: 0 15px;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
    }

    .nav-item:hover {
        color:#000;
    }

    .nav-item-active {
        color: #000;
        border-bottom: solid 3px #0084ff;
    }

    .nav-item-title {
        /*line-height: 50px;*/
        /*width:auto;*/
    }

    .search {
        flex: 1 1 auto;
        justify-content: flex-end;
    }

    .search-form {
        border: 1px solid hsla(0,0%,59.2%,.2);
        background-color: rgba(227,231,236,.2);
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-radius: 2px;
    }

    .search-input {
        border: none;
        width: 10rem;
        padding: .4rem 0.8rem;
        box-shadow: none;
        outline: none;
        color: #666;
        background-color: transparent;
    }

    .auth {

    }

    .login {
    }

    .register {
    }

    .login::after{
        content: "·";
        margin: 0 0.4rem;
    }

    .container {
        max-width: 900px;
        position: relative;
        margin: 0 auto;
        width: 100%;
        display: flex;
    }

    .avatar {
        height: 32px;
        width: 32px;
        border-radius: 50%;
        cursor: pointer;
    }

    .nav-menu-item {
        color: #71777c;
        cursor: pointer;
        padding: 10px 0 10px 20px;
    }
    .nav-menu-item:hover {
        background-color: #f4f5f5;
    }

    .nav-item-wrapper {
        position: fixed;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        z-index: 80;
    }

    .nav-menu {
        z-index: 100;
        width: 120px;
        border-radius: 3px;
        transform: translateX(0);
        position: absolute;
        right: 0;
        top: 35px;
        background-color: #fff;
        box-shadow: 0 1px 2px 0 rgba(0,0,0,.1);
        border: 1px solid rgba(177,180,185,.45);
        font-size: 14px;
        padding: 5px 0;
    }
</style>
<style src="../assets/css/common.css" scoped>
</style>