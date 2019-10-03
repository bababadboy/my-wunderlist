<template>
    <!--    <div class="input-container"-->
    <!--         @mouseover="addActive($event)" @focusout="removeActive($event)">-->
    <!--        <div class="input-box" contenteditable="true" @input="handleInput($event)"></div>-->
    <!--    </div>-->

    <div class="textarea-container">
        <label for="">
            <textarea name="" id="" class="textarea" placeholder="说点什么吧" :value="currValue"
                      @input="handleInput($event)"
                      @mouseover="addActive($event)" @focusout="removeActive($event)">

            </textarea>
        </label>
    </div>
</template>

<script>
    export default {
        name: "textArea",
        props: {
            value: {
                type: String,
                default: ''
            }
        },
        data() {
            return{
                currValue:this.value,
            }
        },
        methods: {
            addActive($event) {
                $event.currentTarget.className = "textarea" + " textarea-active";
            },
            removeActive($event) {
                $event.currentTarget.className = "textarea";
            },
            handleInput($event) {
                this.currValue = $event.target.value;
                this.$emit('input', this.currValue);
            }
        }
    }
</script>


<style src="../assets/css/common.css" scoped></style>
<style scoped>
    .textarea-container {

    }

    .textarea {
        height: 76px;
        width: 555px;
        border-style: solid;
        border-width: 1px;
        border-color: #e5e9ef;
        border-radius: 5px;
        background-color: #e5e9ef;
        outline: none;
        padding: 4px 12px;
        min-height: 76px;
        max-height: 200px;
        letter-spacing: 1px;
        /*去除右下角的三角图标*/
        resize: none;
    }

    .textarea-active {
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