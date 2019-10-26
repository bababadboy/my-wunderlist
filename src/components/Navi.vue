<template>
    <div id="navi" class="header-box">
        <header class="main-header">
            <div class="container header-container">
                <a href="" class="logo">
                    <!--<img src="https://b-gold-cdn.xitu.io/v3/static/img/logo.a7995ad.svg" alt="">-->
                </a>
                <nav role="navigation" class="main-nav">
                    <ul class="nav-list">
                        <li class="nav-item">首页</li>
                        <li class="nav-item">推荐</li>
                        <li class="nav-item">话题</li>
                        <li class="nav-item search">
                            <form action="" class="search-form">
                                <input type="text" placeholder="搜索树洞" class="search-input">
                                <img src="https://b-gold-cdn.xitu.io/v3/static/img/juejin-search-icon.6f8ba1b.svg" alt="">
                            </form>
                        </li>
                        <li v-if="$store.getters.authStatus">
                            <div class="iconfont icon-xiaoxi fs24"></div>
                        </li>
                        <li v-if="!$store.getters.authStatus" class="nav-item auth" @click="showAuth()">
                            <span class="login">登录</span>
                            <span class="register">注册</span>
                        </li>
                        <li v-else class="nav-item auth">退出登录</li>
                    </ul>
                </nav>
            </div>
        </header>
    </div>
</template>

<script>
    export default {
        name: "Navi",
        methods:{
            showAuth(){
                this.$emit('showAuth')
            }
        }
    }
</script>


<style scoped>
    .header-box {
        position: relative;
        height: 5rem;
    }


    .main-header {
        position: fixed;
        left: 0;
        right: 0;
        top: 0;
        height: 45px;
        background-color: #fff;
        border-bottom: 1px solid #f1f1f1;
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
        padding: 0 1rem;
        margin: 0;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
    }

    .search {
        flex: 1 1 auto;
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
        max-width: 800px;
        position: relative;
        margin: 0 auto;
        width: 100%;
        display: flex;
    }
</style>
<style src="../assets/css/common.css" scoped>
</style>