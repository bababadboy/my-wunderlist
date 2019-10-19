<template>
    <div class="pub-container">
        <div class="pub-panel">
            <text-area @input="handleInput($event)" :text="currentVal" @submit="handleClick()"></text-area>
            <div class="action-row">
                <div class="tip">Ctrl or ⌘ + Enter</div>
                <div class="button-box">
                    <x-button text="发布" :disabled="btnDisabled" @click="handleClick()"></x-button>
                </div>
<!--                <div class="limit">{{currentLimit}}</div>-->
            </div>
        </div>
    </div>
</template>

<script>
    import textArea from "./TextArea";
    import XButton from "./common/Button"
    export default {
        components:{
            textArea,
            XButton
        },
        name: "publish",
        props:{
            limit:{
                type:Number,
                default: 100
            },
        },
        data(){
          return{
              currentVal: '',
              currentLimit:this.limit,
              btnDisabled:true
          }
        },
        methods:{
            handleClick(){
                if (!this.btnDisabled){
                    this.$emit('publish',{'value':this.currentVal})
                    // 输入框置空
                    this.currentVal = ''
                }
            },
            handleInput($event){
                this.currentVal = $event.textVal;
                // this.$emit('input',$event)
            }
        },
        watch:{
            currentVal:function(){
                this.btnDisabled = this.currentVal === '';
            },
        }
    }
</script>


<style scoped>

    .pub-container{
        height: 160px;
        width: 632px;
        background-color: #fff;
        border-radius: 4px;
    }
    .pub-panel{
        height: 85%;
        width: 90%;
        position: relative;
        left: 4%;
        top: 12%;
    }

    .action-row{
        width: 100%;
        height: 30%;
    }
    .limit{
        display: inline-block;
    }

    .button-box {
        display: inline-block;
        position: relative;
        left: 345px;
        width: 75px;
        height: 35px;
        margin: 5px 0 0 0;
    }

    .tip {
        display: inline-block;
        position: relative;
        left: 360px;
        color: #c2c2c2;
        text-align: center;
        width: 10rem;
        user-select: none;
    }
</style>
<style src="../assets/css/common.css" scoped>

</style>