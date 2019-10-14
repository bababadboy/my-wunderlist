<template>
    <!--对动态发布评论的组件 -->
    <div class="comment-send">
        <!-- 头像展示区    -->
        <div class="face"></div>

        <text-area class="txtarea"
                   @input="handleInput($event)"
                   :text="text"
                   height="60"
                   width="400"
                   placeholder="输入评论..."
                   fontSize="12">
        </text-area>
        <x-button class="button"
                  text="发表评论"
                  height="70"
                  width="70"
                  @click="btnClick()"></x-button>
    </div>
</template>

<script>
    import textArea from "./TextArea";
    import XButton from "./common/Button"
    export default {
        name: "CommentSend",
        components:{
            textArea,
            XButton
        },
        props:{
            text:{
                type:String,
                default:''
            }
        },
        data(){
            return {
                currentVal:'',
                btnDisabled:true
            }
        },
        methods:{
            btnClick(){
                if (!this.btnDisabled){
                    this.$emit('btnClick')
                }
            },
            handleInput($event){
                this.currentVal = $event.textVal;
                this.$emit('input',$event)
            }
        },
        watch:{
            text:function(){
                this.btnDisabled = this.currentVal === '';
            },
        }

    }
</script>

<style src="../assets/css/common.css" scoped></style>
<style scoped>
    .txtarea {
        margin-left: 15px;
    }
    .comment-send {
        width: 580px;
        display: flex;
        margin-left: 25px;
        margin-top: 20px;
        padding-top: 20px;
        border-top: 1px solid #e5e9ef;
    }
    .button {
        margin-left: 10px;
    }
    .face {
        height: 48px;
        width: 48px;
        border-radius: 50%;
        position: relative;
        display: inline-block;
        background-image: url("../assets/images/happy.gif");
        background-size: cover;
        background-position: center center;
        background-repeat: no-repeat;
    }
</style>