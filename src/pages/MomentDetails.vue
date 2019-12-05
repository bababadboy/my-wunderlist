<template>
    <div class="moment-con">
        <moment-card class="bs" :data="momentData" :auto-load-comment="true">
        </moment-card>
    </div>
</template>

<script>
    import MomentCard from '../components/MomentCard'
    import {getRequest} from "../utils/api";
    export default {
        name: "MomentDetails",
        components:{
            MomentCard,
        },
        props:{
            id:{ //动态id
                type:String,
            },
        },
        data() {
            return {
                momentData: Object,
                api:{
                    byMomentId:'/api/v1/moment/details'
                }
            }
        },
        mounted() {
            this.getMomentDetails()
        },
        methods:{
            getMomentDetails() {
                getRequest(this.api.byMomentId,{id:this.id}).then(res=>{
                    this.momentData = res.data.payload
                })
            },
        }
    }
</script>

<style scoped>
    .moment-con {
        width: 900px;
        margin: 0 auto;
    }
</style>