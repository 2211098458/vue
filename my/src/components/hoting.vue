<template>
<div>
    <loading v-if="!isReady"></loading>
    <div class="hoting">
       <movie-list v-for="(item,index) in newsData" :key="index" :mitem="item"></movie-list>
   </div>
</div>
</template>
   
<script>
// import axios from "axios"
import movieList from "./movieList"


export default {
   name:'hoting',
   data(){
       return{
          newsData:[],
          value:"我是传递给自组件的值",
          isReady:false
       };
   },

   created() {
   
      this.$axios.get('/api/test').then(res=>{
    
        this.newsData = res.data.data.shuju;
        this.isReady = true;
        
        
         
      
});

   },

 
   components:{
       movieList//注册组件
   }
}
</script>

<style scoped>

</style>