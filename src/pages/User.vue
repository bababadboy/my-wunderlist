<template>
    <div id="user-page">
       <div class="user-center-pannel">
           <div class="user-card"></div>
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

    export default {
        name: "User",
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
        height: 200px;
        border-radius: 2px;
        background-color: #8a9aa9;
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
</style>
<style src="../assets/css/common.css"></style>