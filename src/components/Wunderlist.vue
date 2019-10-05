<template>
    <div class="container">
        <alert class="alert" v-if="alert_visible" :state="alert_state" :text="alert_text"></alert>

        <div class="w400">
            <h1>{{title}}</h1>
        </div>
        <div class="input-wrapper">
            <input type="text" v-model='add' @keydown.enter='addItem' placeholder="输入代办事项" class="w380 h30 fs15">
<!--            <input type="button" value="+" @click="addItem" class="ml10">-->
        </div>
        <div class="w400">
            <item v-for="(item,index) in list" :index="index" :data="item" :key="index" @click-btn="deleteItem(index)"></item>
        </div>
        
    </div>
</template>

<script>
    import item from './Item.vue'
    import alert from './Alert.vue'

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
                display_time : 5000,
                alert_state:'',
                alert_text:''
            }
        },
        methods:{
            // 添加项目
            addItem() {
                // console.log('你点击了加任务按钮!')
                if(this.add === ''){
                    this.display_alert('error','输入不能为空：(')
                }else{
                    this.list.push({text:this.add})
                    this.add = ''
                }
            },
            // 删除项目
            deleteItem(index){
                this.display_alert('success','删除成功: D')
                this.list.splice(index,1)
            },
            // alert从展示到消失
            display_alert(state,payload){
                this.alert_visible = true
                this.alert_state = state
                this.alert_text = payload
                this.display_time = 3000    // 重新设置时间
                // alert定时可见
                this.setTimer(this.display_time)
            },
            setTimer(){
                setInterval(()=>{   // 每过1000ms,display_time减一
                    this.display_time <=0 ?
                        this.alert_visible = false : this.display_time -= 1000
                },1000)
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