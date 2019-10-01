<template>
    <div id="topic" class="topic-container">
        <div class="title tc-black fs14">{{title}}</div>
        <div class="more-button">
            <a href="#" class="tc-slate">更多></a>
        </div>
    </div>
</template>

<script>
    export default {
        name: "topic",
        props:{
            title:{
                type:String,
                default:'小标题：我爱我国'
            }
        }
    }
</script>

<style src="../assets/css/common.css" scoped></style>
<style scoped>
    .topic-container{
        width: 244px;
        height: 35px;
        border-radius: 5%;
        background-color: #fff;
    }
    .title{
        width: 80%;
        display: inline-block;
        margin-top: 12px;
        margin-left: 5px;
    }
    a{
        text-decoration-line: none;
        text-decoration-style: initial;
        text-decoration-color: initial;
    }
    .more-button{
        font-size: 12px;
        letter-spacing: 0;
        display: inline-block;
    }
</style>