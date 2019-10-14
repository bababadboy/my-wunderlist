<template>
    <!--    <div class="input-container"-->
    <!--         @mouseover="addActive($event)" @focusout="removeActive($event)">-->
    <!--        <div class="input-box" contenteditable="true" @input="handleInput($event)"></div>-->
    <!--    </div>-->

    <div class="textarea-container">
        <label for="">
            <textarea name="" id=""
                      :placeholder='placeholder'
                      :value="text"
                      :style="textAreaStyle"
                      :class="['textarea',active?'textarea-active':'']"
                      @input="handleInput($event)"
                      @mouseover="addActive($event)"
                      @focusout="removeActive($event)">

            </textarea>
        </label>
    </div>
</template>

<script>
    export default {
        name: "textArea",
        props:{
            text:{
                type:String,
                default:''
            },
            // 高度，以px为单位
            height:{
                type:String,
                default:'76'
            },
            width:{
                type:String,
                default:'555'
            },
            placeholder:{
                type:String,
                default:'说点什么吧'
            },
            // 字体大小,以px为单位
            fontSize:{
                type:String,
                default:'14'
            },
            bgColor:{
                type:String,
                default:'#e5e9ef'
            },
            active:{
                type:Boolean,
                default:false
            },
        },
        methods: {
            addActive($event) {
                $event.currentTarget.className = "textarea" + " textarea-active";
            },
            removeActive($event) {
                $event.currentTarget.className = "textarea";
            },
            handleInput($event) {
                // this.currValue = $event.target.value;
                let value ={
                    textVal:$event.target.value
                }
                this.$emit('input', value);
            }
        },
        computed:{
            textAreaStyle(){
                return{
                    height: this.height + 'px',
                    width: this.width + 'px',
                    'font-size': this.fontSize + 'px',
                }
            }
        }
    }
</script>


<!--<style src="../assets/css/common.css" scoped></style>-->
<style scoped>
    .textarea-container {

    }

    .textarea {
        border-style: solid;
        border-width: 1px;
        border-color: #e5e9ef;
        border-radius: 5px;
        outline: none;
        padding: 4px 12px;
        max-height: 200px;
        letter-spacing: 1px;
        /*去除右下角的三角图标,禁止resize：拉扯改变大小*/
        resize: none;
    }
    .textarea-active{
        border-color: #00a1d6;
        background-color: #fff;
    }

    .input-container {
        height: 70%;
        width: 100%;
        border-style: solid;
        border-width: 1px;
        border-color: #e5e9ef;
        border-radius: 5px;
        background-color: #e5e9ef;
    }

    .input-container-active {
        height: 70%;
        width: 100%;
        border-style: solid;
        border-width: 1px;
        border-color: #00a1d6;
        border-radius: 5px;
        background-color: #fff;
    }

    .input-box {
        height: 85%;
        width: 94%;
        /*border-style: solid;*/
        /*border-width: 1px;*/
        /*border-color: red;*/
        position: relative;
        left: 14px;
        top: 6px;
        outline: none;
        overflow: auto;
    }

</style>