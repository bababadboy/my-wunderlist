<template>
   <div id="app">
        <p>Wangxb现在只有<span class="no">{{offerNum}}</span>个offer</p>
        <input type="button" value="鼓励他,给个offer" @click="offerIncr()">
    </div>
</template> 

<script>
import {postRequest,getRequest} from "./utils/api"

export default {
  name: 'app',
  components: {
    
  },
  data(){
    return{
      offerNum:0,
      postUrl:"/api/v1/giveoffer",
      getUrl:"/api/v1/getoffer"
    }
  },
  mounted(){
    this.getOffer();
  },
  methods: {
     offerIncr(){
        postRequest(this.postUrl).then(res=>{
          // console.log(res)
          this.offerNum = res.data.offer_num
        })
        // todo 发送请求
        // this.offerNum = addOffer()
     },
     getOffer(){
        getRequest(this.getUrl).then(res=>{
          // console.log(res)
          this.offerNum = res.data.offer_num
        })
     }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
.no{
  font-size: 25px
  
}
</style>
