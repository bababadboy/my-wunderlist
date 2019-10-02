<template>
    <div class="input-container" @mouseover="addActive($event)" @focusout="removeActive($event)">
        <div class="input-box" contenteditable="true" @input="input()">
            {{currentVal}}
        </div>
    </div>
</template>

<script>
    export default {
        name: "textArea",
        props:{
            value:{
                type:String,
                default:''
            }
        },
        data() {
            return {
                currentVal: this.value,
            }
        },
        methods: {
            addActive($event) {
                $event.currentTarget.className = "input-container-active";
            },
            removeActive($event) {
                $event.currentTarget.className = "input-container";
            },
            input(){

                this.$emit('input',this.currentVal);
            }
        }
    }
</script>


<style src="../assets/css/common.css" scoped></style>
<style scoped>
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
        border-color: #00a1d6;;
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