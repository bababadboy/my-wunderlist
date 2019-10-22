<template>
    <div class="auth-model-box">
        <form class="auth-card">
            <i class="close-btn" @click="closeAuth">x</i>
            <div class="panel" v-if="!registerShown">
                <h1 class="title">登录</h1>
                <div class="input-group">
                    <div class="input-box">
                        <input type="text" placeholder="请输入手机号码或者邮箱" class="input">
                    </div>
                    <div class="input-box">
                        <input type="password" placeholder="请输入密码"  class="input">
                    </div>
                </div>
                <button class="btn">登录</button>
                <div class="prompt-box">
                    <span>没有账号？</span>
                    <span class="clickable"  @click="switchRegister()">注册</span>
                </div>
            </div>

            <div class="panel" v-if="registerShown">
                <h1 class="title">注册</h1>
                <div class="input-group">
                    <div class="input-box">
                        <input type="text" placeholder="请输入用户名" class="input">
                    </div>
                    <div class="input-box">
                        <input type="text" placeholder="请输入邮箱" class="input">
                    </div>
                    <div class="input-box">
                        <input type="password" placeholder="请输入密码"  class="input">
                    </div>
                </div>
                <button class="btn">注册</button>
                <div class="prompt-box">
                    <span class="clickable" @click="switchAuth">已有账号登录</span>
                </div>
            </div>

            <div class="third-auth">
                <div class="hint">第三方账号登录：</div>
                <div class="auth-ways">
                    <div class="auth-item">
                        <img title="微博" alt="微博" src="https://b-gold-cdn.xitu.io/v3/static/img/weibo.fa758eb.svg" class="oauth-btn">
                    </div>
                    <div class="auth-item">
                        <img title="微信" alt="微信" src="https://b-gold-cdn.xitu.io/v3/static/img/wechat.e0ff124.svg" class="oauth-btn">
                    </div>
                    <div class="auth-item">
                        <img title="GitHub" alt="GitHub" src="https://b-gold-cdn.xitu.io/v3/static/img/github.547dd8a.svg" class="oauth-btn">
                    </div>
                </div>
            </div>
            <div class="agreement-box"></div>
        </form>

    </div>
</template>

<script>
    // import XButton from "./common/Button"

    export default {
        name: "AuthCard",
        components:{
            // XButton
        },
        data(){
            return{
                registerShown:false //是否为注册卡片
            }
        },
        methods:{
            closeAuth(){
                this.$emit('closeAuth')
            },
            switchRegister(){
                this.registerShown = true;
            },
            switchAuth(){
                this.registerShown = false;
            },
        }
    }
</script>

<style scoped>
    .auth-model-box {
        position: fixed;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        background-color: rgba(0,0,0,0.3);
        z-index: 500;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .auth-card {
        width: 17rem;
        border-radius: 0.3rem;
        background-color: #fff;
        padding: 2rem;
        /*font-size: 1.167rem;*/
    }

    .close-btn {
        cursor: pointer;
        float: right;
    }

    .title {
        /*font-size: 1.5rem;*/
        margin: 0 0 2rem;
    }

    .input-box {
        position: relative;
        margin-bottom: .8rem;
    }


    .input-group {
        margin-bottom: 0.5rem;
    }

    .input {
        padding: 10px;
        width: 100%;
        border: 1px solid #e9e9e9;
        border-radius: 2px;
        outline: none;
        box-sizing: border-box;
    }

    .btn {
        width: 100%;
        color: #fff;
        background-color: #4ed3ff;;
        border-radius: 2px;
        outline: none;
        box-sizing: border-box;
        cursor: pointer;
    }

    button {
        border: none;
        padding: .5rem 1.3rem;
    }

    .third-auth {
        /*margin-top: 1.1rem;*/
        /*line-height: 1.4rem;*/
        color: #767676;
    }

    .auth-ways {
        display: flex;
        align-items: center;
        justify-content: space-around;
        margin-top: 15px;
    }

    .auth-item {
        width: 45px;
        height: 45px;
        border-radius: 50%;
        background-color: #f4f8fb;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .oauth-btn {
        height: 30px;
        width: 30px;
        cursor: pointer;
    }

    .clickable {
        color: #26BC7E;
        cursor: pointer;
    }
</style>