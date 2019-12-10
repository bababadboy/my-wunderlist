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
                    'background-color':this.bg_color,
                    'color':this.font_color,
                }
            }
        }
    }
</script>

<style scoped>
    .txt{
        font-size: small;
        display: flex;
        justify-content: center;
        position: relative;
        top: 25%;
    }
    .btn{
        width: 70px;
        height: 32px;
        border-radius: 4px;
        background-color: #4ed3ff;;
        cursor: pointer;
        color: #FFFFFF;
        position:relative;

    }
    .bg-disabled {
        background-color: #aaeaff;
        cursor: not-allowed;
    }

</style>