<template>
    <div id="user-page">
       <div class="user-center-pannel">
           <div class="user-card">
               <div class="background"></div>
               <div class="user-avatar"></div>
               <div class="user-info">
                   <div class="user-name">
                       <span>你的名字</span>
                   </div>
                   <div class="user-intro">
                       <span>主人很烂没有介绍</span>
                   </div>
                   <x-button class="user-profile-edit-btn"></x-button>
               </div>
           </div>
           <div class="user-main-pannel">
               <div class="user-main-left">
                   <div class="user-activity"></div>
                   <div class="user-activity"></div>
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
    import XButton from '../components/common/Button'
    export default {
        name: "User",
        components:{
            XButton
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
        border-radius: 2px;
        background-color: #101216;
        position: relative;
    }

    .user-main-pannel{
        margin: 10px 0;
        width: 100%;
        display: flex;
    }

    .user-main-left {
        width: 550px;

    }

    .user-main-right {
        width: 340px;
        margin: 0 0 0 10px;
    }

    .user-info-item {
        width: 100%;
        height: 180px;
        margin-bottom: 10px;
        border-radius: 4px;
        background-color: #FF595E;
    }

    .user-activity {
        width: 550px;
        height: 400px;
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
        background-color: #a71d5d;
        position: absolute;
        bottom: 25px;
        left: 25px;
        z-index: 5;

    }

    .background {
        height: 130px;
        background-color: #646464;
        /*background-image: url("../assets/images/cat.jpg");*/
    }

    .user-info {
        display: inline-block;
        width: 670px;
        height: 140px;
        background-color: #FF595E;
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
</style>
<style src="../assets/css/common.css"></style>