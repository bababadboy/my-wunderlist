<template>
    <div :class="['btn',disabled?'bg-disabled':'']" :style="btnStyle" @click="click">
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
            },
            // 高度，以px为单位
            height:{
                type:String,
                default:'35'
            },
            width:{
                type:String,
                default:'75'
            },

        },
        methods:{
            click(){
                if (!this.btnDisabled){
                    this.$emit('click')
                }
            }
        },
        computed:{
            btnStyle(){
                return {
                    height: this.height + 'px',
                    width: this.width + 'px',
                }
            }
        }
    }
</script>

<style scoped>
    .txt{
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