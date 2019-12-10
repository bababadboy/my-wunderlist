<template>
    <div>
        <label :class="['text-input-wrapper',isFocus? 'is-focus':'']">
            <input type="text" class="text-input"
                   :value="value"
                   @input="handleInput($event)"
                   @focusin="inputFocus(true)"
                   @focusout="inputFocus(false)">
        </label>
    </div>
</template>

<script>
    export default {
        name: "TextInput",
        props:{
            value:{
                type:String,
                default:''
            }
        },
        data(){
            return {
                isFocus:false,
            }
        },
        methods:{
            inputFocus(status){
                this.isFocus = status
            },
            handleInput($event){
                // window.console.log($event.target.value)
                this.$emit('input',$event.target.value)
            }
        }
    }
</script>

<style scoped>
    .text-input {
        color: #1a1a1a;
        height: 24px;
        width: 380px;
        line-height: 24px;
        font-size: 14px;
        border: none;
    }

    .text-input-wrapper {
        align-items: center;
        height: 36px;
        box-sizing: border-box;
        padding: 8px 10px;
        background: #fff;
        border: 1px solid #ebebeb;
        border-radius: 3px;
        transition: background .2s,border .2s;
    }

    .is-focus {
        border-color: #8590a6;
    }
</style>
<style src="../../assets/css/common.css"></style>