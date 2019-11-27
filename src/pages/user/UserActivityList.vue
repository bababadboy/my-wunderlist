<template>
    <div id="user-moment-list">
        <div class="user-moment-card bs" v-for="(item,index) in list" :key="index" :data="item">
            <moment-card v-if="item.action_type==='PUBLISH_MOMENT'" :data="item.target"></moment-card>
            <div v-if="item.action_type === 'LIKE_MOMENT'">
                <div class="activity-head">
                    <span>点赞了该动态</span>
                    <span class="thumb-time">{{item.time}}</span>
                </div>
                <moment-card :data="item.target"></moment-card>
            </div>
        </div>
    </div>
</template>

<script>
    import MomentCard from '../../components/MomentCard'
    import {getRequest} from "../../utils/api";

    export default {
        name: "UserActivityList",
        components:{
            MomentCard
        },
        props:{
            uid:{
                type:String
            }
        },
        data() {
            return {
                list :[],
                api:{
                    userActivity:"/api/v1/people/activity"
                }
            }

        },
        mounted() {
            getRequest(this.api.userActivity,{uid:this.uid}).then(res=>{
                this.list = res.data.payload
                // this.$router.push({name:'userMoment',params: {list:res.data.payload}}).catch(()=>{})
            }).catch(()=>{
                alert("错误: )")
            })
        }
    }
</script>

<style scoped>
    .user-moment-card {
        margin-top: 10px;
        /*height: 160px;*/
        width: 632px;
        position: relative; /* 使用 相对定位的原因是,子元素more-panel必须使用绝对定位，见 https://www.iteye.com/blog/lixh1986-1948337,或者google搜索:css absolute 如何相对父元素*/
        background-color: #fff;
        border-radius: 4px;
        font-size: 30px;
    }

    .activity-head {
        font-size: 14px;
        border-bottom: solid 1px rgba(92,96,102,0.1);
        padding: 8px 0 2px 20px;
        color: #8590a6;
    }

    .thumb-time {
        margin-left: 370px;
    }
</style>