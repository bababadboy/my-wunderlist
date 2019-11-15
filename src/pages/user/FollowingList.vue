<template>
    <div>
        <div v-if="list.length===0">你还没有关注其他人</div>
        <div v-else>
            <div v-for="(item,index) in list" :data="item" :key="index">
                关注状态：{{item.followState}}
                用户名：{{item.user.nickname}}
                关注他的:{{item.user.followers}}
                他关注的：{{item.user.following}}
                他的动态：{{item.user.moments}}
            </div>
        </div>
    </div>
</template>

<script>
    import {getRequest} from "../../utils/api";

    export default {
        name: "FollowingList",
        props:{
            uid:{
                type:String,
            }
        },
        data() {
            return {
                list:[],

                api:{
                    following:'/api/v1/people/following',
                }
            }
        },
        mounted() {
            getRequest(this.api.following,{'uid':this.uid}).then(res=>{
                this.list  = res.data.payload
            })
        }
    }
</script>

<style scoped>

</style>