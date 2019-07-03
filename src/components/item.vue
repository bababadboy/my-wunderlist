<template>
    <div class="item">
        <div class="data">{{data}}</div>
        <div>
            <button @click="handleClick">x</button>
        </div>
    </div>
</template>


<script>
export default {
    props:{
        data:String
    },
    methods:{
        handleClick(){
            this.$emit('')
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
    justify-content: space-between
}
.data{
    width:200px;
    height: 30px;
}
</style>


