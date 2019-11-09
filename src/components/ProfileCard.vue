<template>
    <div class="profile-box">
        <div class="profile">
            <div>
                <img src="../assets/images/avatar.jpg" alt="avatar" class="avatar" @click="toUser()">
            </div>
            <div class="nickname fs16" @click="toUser()">{{userProfile.nickname}}</div>
        </div>
        <div class="stat-lit">
            <div class="stat-item">
                <div class="smtitle">动态</div>
                <div class="num">{{userProfile.moments}}</div>
            </div>
            <div class="stat-item">
                <div class="smtitle">关注</div>
                <div class="num">{{userProfile.following}}</div>
            </div>
            <div class="stat-item">
                <div class="smtitle">粉丝</div>
                <div class="num">{{userProfile.followers}}</div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ProfileCard",
        props:{
            // width: {
            //     type: String,
            //     default:'244'
            // },
            // height:{
            //     type:String,
            //     default:'188'
            // },
            userProfile:{
                type:Object,
                default:()=>{
                    return {
                        nickname:'无名',
                        avatar:'', // 默认头像地址
                        moments:0,
                        followers:0,
                        following:0
                    }
                },

            }
        },
        methods:{
            toUser() {
                // 改变导航栏的状态为f,f,f
                this.$store.commit('changeNavItemState',[false,false,false])
                this.$router.push(
                    {
                        name:'user',
                        params:{
                            'uid':this.$store.getters.profile.uid,
                            'username':this.$store.getters.profile.nickname
                        }
                    }).catch(err=>{
                    window.console.log(err)
                })
            }
        }
    }
</script>

<style scoped>
    .profile-box {
        width: 244px;
        height: 170px;
        background-color: #fff;
        border-radius: 4px;
    }

    .profile {
        display: flex;
        padding: 16px;
        height: 38%;
        max-height: 92px;
        border-bottom: 1px solid rgba(92,96,102,.1);
    }

    .stat-lit {
        flex: 1 1 auto;
        display: flex;
        margin: 0;
        list-style: none;
        text-align: center;
        padding: 16px 0;
    }

    .avatar {
        width: 60px;
        height:60px;
        border-radius: 50%;
        cursor: pointer;
    }

    .nickname {
        padding: 15px;
        cursor: pointer;
    }

    .stat-item {
        flex: 1 1 33.333%;
        /*max-height: 2.833rem;*/
        /*line-height: 1;*/
    }

    .smtitle {
        color: #8a9aa9;
    }

    .num {
        font-size: 15px;
        font-weight: 600;
        color: #2e3135;
    }
</style>
<style src="../assets/css/common.css"></style>
