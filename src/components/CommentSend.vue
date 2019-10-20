<template>
    <!--对动态发布评论的组件 -->
    <div :class="['comment-send',borderTop?'bt':'']">
        <!-- 头像展示区    -->
        <div class="face"></div>

        <text-area class="txtarea"
                   @input="handleInput($event)"
                   @submit="handleClick()"
                   :text="currentVal"
                   height="60"
                   :width="txtAreaWidth"
                   :placeholder="placeholder"
                   fontSize="12">
        </text-area>
        <x-button class="button"
                  text="发表评论"
                  height="70"
                  width="70"
                  :disabled="btnDisabled"
                  @click="handleClick()"></x-button>
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
            },
            // 输入框的宽度
            txtAreaWidth:{
                type:String,
                default:'400'
            },
            //  上边界是否有灰色边界
            borderTop:{
                type:Boolean,
                default:true
            },
            // placeholder
            placeholder:{
                type:String,
                default:'输入评论...'
            }
        },
        data(){
            return {
                currentVal:'',
                btnDisabled:true
            }
        },
        methods:{
            handleClick(){
                if(!this.btnDisabled){
                    this.$emit("sendComment",{'input':this.currentVal})
                    this.currentVal = ''
                }
            },
            handleInput($event){
                this.currentVal = $event.textVal;
            }
        },
        watch:{
            currentVal:function(){
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
        /*width: 580px;*/
        display: flex;
        margin:0 0 20px 25px;
        padding-top: 20px;
    }
    .bt {
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