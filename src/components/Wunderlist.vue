<template>
    <div class="container">

        <alert class="alert" v-if="alert_visible"></alert>

        <div class="w400">
            <h1>{{title}}</h1>
        </div>
        <div class="input-wrapper">
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
    import alert from './alert.vue'

    export default {
        name: "Wunderlist",
        components:{
            item,
            alert
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
                ],
                alert_visible:false,
                display_time : 2000
            }
        },
        methods:{
            addItem() {
                // console.log('你点击了加任务按钮!')
                if(this.add === ''){
                    this.alert_visible = true
                    // alert定时可见
                    this.display_time = 2000
                    this.setTimer(this.display_time)
                }else{
                    this.list.push({text:this.add})
                    this.add = ''
                }
            },
            setTimer(){
                setInterval(()=>{
                    if (this.display_time == 0){
                        this.alert_visible = false
                    } else {
                        this.display_time -= 1000
                    }
                },1000)
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
    .input-wrapper{
        width: 400px;
        height: 40px;
        margin-bottom: 20px;
        display: flex;
    }
    input{
        text-indent: 10px;
        outline: medium;
    }
    .alert{
        position: relative;
        margin-left: 25%;
    }

    /*过渡动画*/
    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s;
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
        opacity: 0;
    }
</style>