<template>
    <div id="notify">
        <svg class="icon fs22" aria-hidden="true">
            <use xlink:href="#icon-xiaoxi1"></use>
        </svg>
        <span class="notify-count">{{count}}</span>
    </div>
</template>

<script>
    export default {
        name: "Notify",
        props:{
            count:{
                type:Number,
                default:1
            }
        }
    }
</script>

<style scoped>
    #notify {
        display: inline-block;
    }
    .notify-count {

    }
</style>