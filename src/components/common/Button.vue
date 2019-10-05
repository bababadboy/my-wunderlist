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
                default: '#aaeaff'
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
        width: 70px;
        height: 32px;
        border-radius: 5px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #4ed3ff;;
        cursor: pointer;

    }
    .bg-disabled {
        background-color: #aaeaff;
        cursor: not-allowed;
    }

</style>