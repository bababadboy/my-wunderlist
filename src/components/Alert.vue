<template>
    <div :class="['alert',computeState]">
        <span :class="['fs14',computeFont]">{{text}}</span>
    </div>
</template>

<script>
    export default {
        name: "alert.vue",
        props:{
            text:{
                type:String,
                default:'错误：输入不能为空'
            },
            // 种类: success/warn/error
            state:{
                type:String,
                default:"error"
            },
            visible:{
                type: Boolean,
                default:true
            }
        },
        computed:{
            computeState(){
                if (this.state === 'error'){
                    return 'alert-err'
                }else if (this.state === 'warn'){
                    return 'alert-warn'
                } else{
                    return 'alert-success'
                }
            },
            computeFont(){
                if (this.state === 'error'){
                    return 'err-font'
                }else if (this.state === 'warn'){
                    return 'warn-font'
                } else{
                    return 'success-font'
                }
            }
        }
    }
</script>

<style scoped>
    .alert{
        width: 150px;
        height: 30px;
        border-radius: 4px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .alert-err{
        background-color: rgba(255,49,49,0.1);
    }
    .alert-warn{
        background-color: rgba(247,186,42,.1);
    }
    .alert-success{
        background-color: rgba(19,206,102,0.1);
    }
    .fs14{
        font-size: 14px;
    }
    .err-font{
        color: rgb(255,73,73);
    }
    .warn-font{
        color: rgb(247, 186, 42);
    }
    .success-font{
        color: rgb(19, 206, 102);
    }

    .alert-close-btn {
        font-size: 12px;
        color: #b4bccc;
        top: 12px;
        right: 15px;
        position: absolute;
        cursor: pointer;
        content: "\E6DD";
        font-family: iconfont!important;
        font-style: normal;
        vertical-align: baseline;
        display: inline-block;
        -webkit-font-smoothing: antialiased;
    }
</style>