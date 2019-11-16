<template>
    <div>
        <div v-if="list.length===0"></div>
        <div v-else>
            <follow-card  v-for="(item,index) in list" :item="item" :key="index">
            </follow-card>
        </div>
    </div>
</template>

<script>
    import {getRequest} from "../../utils/api";
    import FollowCard from "../../components/FollowCard"
    export default {
        name: "FollowerList",
        props:{
            uid:{
                type:String,
            }
        },
        components:{
            FollowCard
        },
        data() {
            return {
                list:[],

                api:{
                    follower:'/api/v1/people/followers',
                }
            }
        },
        mounted() {
            getRequest(this.api.follower,{'uid':this.uid}).then(res=>{
                this.list  = res.data.payload
                // window.console.log(res)
            })
        },
        methods:{

        }
    }
</script>

<style scoped>

</style>