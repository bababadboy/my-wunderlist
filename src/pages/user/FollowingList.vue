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
        name: "FollowingList",
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
                    following:'/api/v1/people/following',
                }
            }
        },
        mounted() {
            getRequest(this.api.following,{'uid':this.uid}).then(res=>{
                this.list  = res.data.payload
            })
        },
        methods:{

        }
    }
</script>

<style scoped>

</style>