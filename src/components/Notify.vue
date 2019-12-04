<template>
    <div id="notify">
        <svg class="icon fs22" aria-hidden="true">
            <use xlink:href="#icon-xiaoxi1"></use>
        </svg>
        <span v-if="count" class="notify-count">{{count}}</span>
    </div>
</template>

<script>
    export default {
        name: "Notify",
        props:{
            count:{
                type:Number,
                default:0
            }
        }
    }
</script>

<style scoped>
    #notify {
        display: inline-block;
        position: relative;
        cursor: pointer;
    }
    .notify-count {
        position: absolute;
        bottom: 50%;
        left: 50%;
        padding: 0 4px;
        font-size: 11px;
        color: #fff;
        background-color: #f1403c;
        border: 2px solid #fff;
        border-radius: 20px;
    }
</style>