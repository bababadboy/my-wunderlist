<template>
    <div :class="['btn',disabled?'bg-disabled':'']" @click="click">
        <div class="txt">
            {{text}}
        </div>
    </div>
</template>

<script>
    export default {
        name: "Button",
        props:{
            text:{
                type:String,
                default:'确定'
            },
            bg_color:{
                type: String,
                default: '#326EFD'
            },
            font_color:{
                type:String,
                default:'#FFFFFF'
            },
            disabled:{
                type:Boolean,
                default:false
            }

        },
        methods:{
            click(){
                this.$emit('click')
            }
        },
        computed:{
        }
    }
</script>

<style src="../../assets/css/common.css"></style>
<style scoped>
    .txt{
        width: 60px;
        height: 20px;
        font-size: small;
        color: #FFFFFF;
        display: flex;
        justify-content: center;
    }
    .btn{
        width: 80px;
        height: 30px;
        border-radius: 10%;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #326EFD;;
    }
    .bg-disabled {
        background-color: #98B6FE;
    }

</style>