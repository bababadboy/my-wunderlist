<template>
    <div class="btn-container cp">
        <button :class="['follow-btn',followState?'active':'']" @click="handleFollowClick()">
            <span v-if="!followState">+ 关注</span>
            <span v-else>已关注</span>
        </button>
    </div>
</template>

<script>
    export default {
        name: "FollowButton",
        props:{
            width:{
                type:String,
                default:'22'
            },
            height: {
                type:String,
                default:'55'
            },
            followState: {
                type:Boolean,
                default:false
            }
        },
        data() {
            return{
                // followState:false,
            }
        },
        methods:{
            handleFollowClick() {
                this.$emit('follow')
            }
        }
    }
</script>

<style scoped>

    button {
        transition: background-color .3s,color .3s;
    }

    .follow-btn {
        padding: 0 16px;
        /*width: 60px;*/
        height: 32px;
        border-radius: 3px;
        font-size: 13px;
        /*border-color: #6cbd45;*/
        border-color: #00cd00;
        /*color: #6cbd45;*/
        color: #00cd00;
        background-color: #fff;

    }

    .active{
        border-color: #ebebeb;
        color: #ebebeb;
        background-color: #6cbd45;
        /*background-color: #00cd00;*/
    }

    .btn-container {
        /*cursor: pointer;*/
        display: inline-block;
    }
</style>

<style src="../../assets/css/common.css"></style>