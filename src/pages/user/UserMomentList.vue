<template>
    <div id="user-moment-list">
        <moment-card class="user-moment-card bs"
                     v-for="(item,index) in list" :key="index" :data="item">
        </moment-card>
    </div>
</template>

<script>
    import MomentCard from '../../components/MomentCard'
    import {getRequest} from "../../utils/api";

    export default {
        name: "UserMomentList",

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
                    userMoment:'/api/v1/moment/own',
                    thumbUpMoment:'/api/v1/moment/thumb',
                }
            }

        },
        mounted() {
            getRequest(this.api.userMoment,{uid:this.uid}).then(res=>{
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
</style>