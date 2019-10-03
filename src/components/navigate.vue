<template>
    <div class="header" id="nav">
        <div class="nav-menu">
            <div class="nav-mask">
                <div class="nav-wrapper">
                    <div class="nav-con fl">
                        <ul>
                            <li class="nav-item">
                                <a href="#" class="t">闵可夫斯基空间</a>
                            </li>
                            <li class="nav-item">
                                <a href="#" class="t">我的主页</a>
                            </li>
                            <li class="nav-item">
                                <a href="#" class="t">好友</a>
                            </li>
                        </ul>
                    </div>
                    <div class="nav-con fr">
                        <input type="text" placeholder="用户/动态" class="nav-searchform">
                        <ul class="fr">
                            <li class="nav-item profile-info">
                                <a href="#" class="t">
                                    <div class="i-face">
                                        <img src="https://static.easyicon.net/preview/121/1214124.gif" alt="" class="face">
<!--                                        <img alt="alt" src="https://i1.hdslb.com/bfs/face/be0e1af3c03680f203113c33ef9e9d2158d6fed8.jpg@72w_72h.webp" class="face">-->
                                    </div>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a href="#" class="t">我是管理员</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "navigate"
    }
</script>

<style src="../assets/css/common.css" scoped></style>
<style scoped>
    .face {
        border: 0 solid #fff;
        width: 100%;
        height: 100%;
        border-radius: 50%;
    }
    .profile-info {
        width: 46px;
    }
    .i-face {
        position: absolute;
        z-index: 20;
        width: 32px;
        height: 32px;
        top: 6px;
        transition: 0.3s;
    }
    .nav-searchform{
        margin: 8px;
        padding-top: 4px;
        padding-bottom: 4px;
        padding-left: 5px;
        color: #999;
    }
    #nav{
        margin: -8px;

    }
    .header{
        font: 12px 'Helvetica Neue', Helvetica, Arial, 'Microsoft Yahei', 'Hiragino Sans GB', 'Heiti SC', 'WenQuanYi Micro Hei', sans-serif;
        position: relative;
        z-index: 10000;
        background: #FFF;
        margin: 0;
        padding: 0;
    }
    .nav-menu{
        position: relative;
        z-index: 200;
        height: 42px;
        color: #222;
    }
    .nav-mask{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(255, 255, 255, 0.4);
        box-shadow: rgba(0, 0, 0, 0.1) 0 1px 2px;
    }
    .nav-wrapper{
        margin: 0 auto;
        width: 1160px;
    }
    .nav-con{
        display: inline;
    }

    .nav-item{
        color: #222;
        height: 100%;
        display: inline-block;
        padding: 0 7px;
    }
    .profile-info{
        /*todo*/
    }
    .t{
        color: #222;
        height: 100%;
        display: block;
        padding: 0 7px;
    }

    img{
        vertical-align: middle;
    }

    input {
        outline:none;
    }



</style>