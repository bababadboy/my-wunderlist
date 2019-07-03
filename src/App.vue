<template>
  <div id="app">
    <wunderlist></wunderlist>
  </div>
</template>

<script>
import Wunderlist from './components/Wunderlist.vue'

export default {
  name: 'app',
  components: {
    Wunderlist
  },
  data(){
    return{
      title:'Wunderlist'
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
</style>
