<template>
    <div class="notification-container">
<!--        <div class="notification-select-bar">-->
<!--            <div class="notification-select-item" v-for="(item,index) in selectItem" :data="item" :key="index">{{item}}</div>-->
<!--        </div>-->
        <div class="notification-main bs">
            <h1 class="notification-header">通知中心</h1>
            <span class="filter-item cp" @click="showSelectBar()">筛选</span>
            <div class="notification-select-wrapper" @click="closeSelectBar()" v-if="selectBarStatus"></div>

            <div class="notification-select-bar" v-if="selectBarStatus">
                <div class="notification-select-bar-item"
                     v-for="(item,index) in selectItem"
                     :data="item" :key="index" @click="choose(index)">
                    {{item}}
                </div>
            </div>

            <div class="notification-item" v-for="(item,index) in notifyList" :data="item" :key="index">
                <div class="notification-item-time">{{item.action_time}}</div>
                <img v-if="item.type.includes('TO')" src="../assets/images/notificaiton/comment.png" alt="cmt" class="notification-item-img">
                <img v-else-if="item.type.includes('LIKE')" src="../assets/images/notificaiton/like.png" alt="cmt" class="notification-item-img">
                <div class="notification-item-content">
                    <div class="notification-item-content-line">
                        <span class="cp user-link-name" @click="goToUserPage(item.user_from.uid)">{{item.user_from.nickname}}</span>
                        {{actionName[item.type]}}
                    </div>
                    <div class="notification-item-content-line">{{item.content}}</div>
                    <div v-if="item.target.content" class="notification-item-target-content cp"
                         @click="goToMomentDetail(item.type,item.target)">
                        {{item.target.content}}
                    </div>
                </div>
            </div>

<!--            <div class="notification-item" v-for="(item,index) in notifyList" :data="item" :key="index">-->
<!--                 我是皮卡丘-->
<!--                2019-11-29 21:50-->
<!--                回复了你的动态:"我是谁"-->
<!--                "你是皮卡丘"-->
<!--            </div>-->
<!--            <div class="notification-item" v-for="(item,index) in notifyList" :data="item" :key="index">-->
<!--                我是皮卡丘-->
<!--                2019-11-29 21:50-->
<!--                开始关注了你-->
<!--            </div>-->
        </div>

    </div>
</template>

<script>
    import {getRequest} from "../utils/api";


    export default {
        name: "NotificationPage",
        data(){
            return {
                selectItem:['全部类别','点赞','评论与回复','关注我的','系统通知'],
                selectBarStatus:false,
                notifyList:[],
                api:{
                    userAllNotification:'/api/v1/notification/all'

                },
                actionName : {
                    'MOMENT_LIKE':'点赞了你的动态',
                    'COMMENT_LIKE':'点赞了你的评论',
                    'REPLY_LIKE':'点赞了你的回复',
                    'COMMENT_TO_MOMENT':'评论了你的动态',
                    'REPLY_TO_COMMENT':'回复了你的评论',
                    'REPLY_TO_REPLY':'回复了你的回复',
                    'FOLLOW_USER':'关注了你',
                    'SYSTEM_ANNOUNCE':'系统通知',
                }
            }
        },
        mounted() {
            // 导航栏状态改变
            this.$store.commit('changeNavItemState',[false,false,false])
            this.getUserAllNoti()
        },
        methods:{
            // 跳转到动态详细界面
            goToMomentDetail(type,target){
                // todo 对于动态/评论/回复做不同的处理
                if (type === 'MOMENT_LIKE' || type === 'COMMENT_TO_MOMENT'){

                    this.$router.push({name:'moment',params:{id:target.id}})

                } else if (type === 'COMMENT_LIKE' || type === 'REPLY_TO_COMMENT'){
                    this.$router.push({name:'moment',params:{id:target.momentId}})

                }else if (type === 'REPLY_LIKE' || type === 'REPLY_TO_REPLY') {
                    window.console.log("暂不支持 :  )")

                }else{
                    window.console.log("暂不支持 :  )")
                }
            },
            // 跳转到用户个人主页
            goToUserPage(userUid) {
                this.$router.push({name:'userActivity',params:{uid:userUid}}).catch(err=>{
                    window.console.log(err)
                })
            },
            getUserAllNoti(){
                getRequest(this.api.userAllNotification).then(res=>{
                    this.notifyList = res.data.payload
                    // window.console.log(res)
                })
            },

            choose(index){
                switch (index) {
                    case 0: break;
                    case 1: break;
                    case 2: break;
                    case 3: break;
                    case 4: break;
                    case 5: break;
                }
            },
            closeSelectBar(){
                this.selectBarStatus =false
            },
            showSelectBar(){
                this.selectBarStatus = true
            }
        }
    }
</script>

<style scoped>
    .notification-container {
        width: 900px;
        margin: 0 auto;
        display: flex;
    }

    .notification-select-bar {
        z-index: 100;
        position: absolute;
        right: 5px;
        top: 65px;
        /*width: 100px;*/
        /*height: 400px;*/
        padding: 5px 0;
        border-radius: 4px;
        border: 1px solid rgba(177,180,185,.45);
        box-shadow: 0 1px 5px 0 rgba(0,0,0,.1);
        background-color: #fff;
    }

    .notification-main {
        width: 780px;
        /*height: 400px;*/
        position: relative;
        background-color: #FFFFFF;
    }
    .notification-header {
        padding: 10px 0 10px 35px;
        margin: 0;
        border-bottom: 1px solid rgba(230,230,231,.5);

    }

    .filter-item {
        position: absolute;
        right: 15px;
        top:35px;
    }

    .notification-select-wrapper {
        z-index: 80;
        /*fixed也会影响子元素 absolute布局*/
        position: fixed;
        top: 0;
        left: 0;
        bottom:0;
        right: 0;
    }

    .notification-select-bar-item {
        padding: 10px 10px 10px 15px;
        cursor: pointer;
    }
    .notification-select-bar-item:hover {
        background-color: #f4f5f5;
    }

    .notification-item {
        width: 700px;
        /*background-color: #DD4A68;*/
        margin: 0 0 0 40px;
        padding: 20px 0 40px;
        border-bottom: 1px solid rgba(230,230,231,.5);
        position: relative;

    }

    .notification-item-time {
        /*position: relative;*/
        display: block;
        font-size: 14px;
        font-weight: 600;
        font-synthesis: style;
        line-height: 2.21429;
        color: #444;
        padding: 0 0 15px;
    }

    .notification-item-img {
        display: inline-block;
        height: 40px;
        width: 40px;
        border-radius: 50%;
    }

    .notification-item-content {

        display: inline-block;
        width: 90%;
        position:absolute;
        top: 60px;
        left: 60px;
    }

    .notification-item-target-content {
        width: 100%;
        background-color: #f8f8f8;
        padding: 5px 0 5px 5px;
    }

    .notification-item-content-line {
        padding: 2px 0;
    }
</style>
<style src="../assets/css/common.css" scoped></style>
