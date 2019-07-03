<template>
    <div class="container">
        <div class="w400">
            <h1>{{title}}</h1>
        </div>
        <div class="input">
            <input type="text" v-model='add' @keydown.enter='addItem' placeholder="输入代办事项" class="w380 h30 fs15">
<!--            <input type="button" value="+" @click="addItem" class="ml10">-->
        </div>
        <div class="w400">
            <item v-for="(item,index) in list" :index="index" :data="item" :key="index" @click-btn="deleteItem(index)"></item>
<!--            <ol>-->
<!--                <li v-for="(item,index) in list" :key="index" class="li">-->
<!--                    -->
<!--                    <div class="mr0">-->
<!--                        <input type="button" value="✔️" @click="deleteItem(index)">-->
<!--                    </div>-->
<!--                    <div class="ml10">{{index+1+'.'+item.text}}</div>-->
<!--                </li>-->
<!--            </ol>-->
        </div>
        
    </div>
</template>

<script>
    import item from './item.vue'
    export default {
        name: "Wunderlist",
        components:{
          item
        },
        data(){
            return {
                add:'',
                title:'Wunderlist',
                list:[
                    // {text:"Keres"},
                    // {text:"Chian"},
                    // {text:"Xuejie"},
                    // {text:"Guohaowen"},
                ]
            }
        },
        methods:{
            addItem() {
                // console.log('你点击了加任务按钮!')
                if(this.add === ''){
                    alert('输入不能为空')
                }else{
                    this.list.push({text:this.add})
                    this.add = ''
                }
            },
            deleteItem(index){
                this.list.splice(index,1)
            }
        }
    }
</script>

<style src="../assets/css/common.css" scoped></style>
<style scoped>

    .container{
        padding: 20px;
        width: 500px;
        display: flex;
        flex-wrap: wrap; 
        justify-content: flex-start;
    }
    .input{
        width: 400px;
        height: 40px;
        margin-bottom: 20px;
        display: flex;
    }
</style>