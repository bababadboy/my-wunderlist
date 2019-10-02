<template>
    <div class="pub-container">
        <div class="pub-panel">
            <text-area v-model="currentVal"></text-area>
            <div class="action-row">
                <!--  按钮组件自己写 todo-->
                <input type="button" value="点我发布" class="pub-button fr mt10">
            </div>
        </div>
    </div>
</template>

<script>
    import textArea from "./textArea";

    export default {
        name: "publish",
        props:{
            value:{
                type:String,
                default:"分享一下你的故事吧。"
            }
        },
        data(){
          return{
              currentVal: this.value
          }
        },
        components:{
            textArea
        }
    }
</script>

<style src="../assets/css/common.css" scoped></style>
<style scoped>
    .pub-container{
        height: 148px;
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

    .pub-button{

    }
</style>