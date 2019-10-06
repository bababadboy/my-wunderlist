<template>
    <div class="more-panel-container">
        <div class="pointer"></div>
        <div class="main-panel fs14">
            <p>删除</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "MorePanel"
    }
</script>

<style src="../assets/css/common.css" scoped></style>
<style scoped>
    .more-panel-container{
        /*height: 70px;*/
        /*width: 100px;*/
        /*border-radius: 10px;*/
    }
    .pointer {
        height: 10px;
        width: 10px;
        transform:rotate(45deg);
        background-color: #FFFFFF;
        position: relative;
        left: 70px;
        border: 1px solid #e5e9ef;
        box-shadow: 0 11px 12px 0 rgba(106,115,133,0.12);

    }
    .main-panel {
        height: 53px;
        width: 90px;
        border-radius: 6px;
        background-color: #FFFFFF;
        border: 1px solid #e5e9ef;
        box-shadow: 0 11px 12px 0 rgba(106,115,133,0.12);
        color: #99a2aa;;
        position: relative;
        top: -8px;
        text-align: center;
    }
    p:hover{
        color: #222;
    }

</style>