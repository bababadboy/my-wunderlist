<template>
    <div class="btn-container">
        <button :class="['follow-btn',followState?'active':'']" @click="handleFollowClick()">
            <span v-if="!followState">关注</span>
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
            }
        },
        data() {
            return{
                followState:false,
            }
        },
        methods:{
            handleFollowClick() {
                this.followState = !this.followState
                this.$emit('follow',{'follow':this.followState})
            }
        }
    }
</script>

<style scoped>

    button {
        transition: background-color .3s,color .3s;
    }

    .follow-btn {
        padding: 0;
        width: 55px;
        height: 26px;
        border-radius: 3px;
        font-size: 13px;
        /*border-color: #6cbd45;*/
        border-color: #00cd00;
        /*color: #6cbd45;*/
        color: #00cd00;

    }

    .active{
        border-color: #ebebeb;
        color: #ebebeb;
        background-color: #6cbd45;
        /*background-color: #00cd00;*/
    }

    .btn-container {
        display: inline-block;
    }
</style>

<style src="../../assets/css/common.css"></style>