<template>
    <div id="edit-btn-con">
        <button class="edit-btn" @click="click()">
            <span>编辑个人资料</span>
        </button>
    </div>
</template>

<script>
    export default {
        name: "EditButton",
        methods:{
            click() {
                this.$emit('edit')
            }
        }
    }
</script>

<style scoped>
    .edit-btn {
        cursor: pointer;
        padding: 7px 16px;
        border-radius: 3px;
        border: 1px solid #0084ff;
        color: #0084ff;
        background-color: #fff;
    }
    .edit-btn:hover {
        background-color: rgba(0,132,255,0.1);
    }

</style>
<style src="../../assets/css/common.css"></style>