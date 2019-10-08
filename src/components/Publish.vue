<template>
    <div class="pub-container">
        <div class="pub-panel">
            <text-area @input="handleInput($event)" :text="text"></text-area>
            <div class="action-row">
                <x-button text="发布" :disabled="btnDisabled" class="pub-button" @click="btnClick()"></x-button>
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
            text:{
                type:String,
                default:''
            }
        },
        data(){
          return{
              currentVal: '',
              currentLimit:this.limit,
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
                this.btnDisabled = this.text === '';
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
        /*border-style: solid;*/
        /*border-width: 2px;*/
        /*border-color: #26BC7E;*/
        /*border-radius: 4px;*/
        position: relative;
        left: 4%;
        top: 12%;
    }

    .action-row{
        width: 100%;
        height: 30%;
        /*border-style: solid;*/
        /*border-width: 1px;*/
        /*border-color: red;*/
    }
    .limit{
        display: inline-block;
    }
    .pub-button{
        float: right;
        margin-top: 5px;
    }
</style>