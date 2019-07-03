<template>
    <div class="item">
        <div class="mr0">
            <input type="button" value="✔️" @click="handleClick(index)">
        </div>
        <div class="ml10">{{index+1 +'.'+data.text}}</div>
    </div>
</template>


<script>
export default {
    props:{
        index:Number,
        data:Object,
    },
    methods:{
        handleClick(index){
            this.$emit('click-btn',index)
        }
    }
}
</script>
<style src="../assets/css/common.css" scoped></style>
<style scoped>
.item{
    width: 300px;
    height: 30px;
    display: flex;
    justify-content: flex-start;
}
.data{
    width:200px;
    height: 30px;
}
</style>


