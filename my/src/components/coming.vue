<template>
  <div>
    <div class="hopeful">
      <p>近期最受期待</p>
      <div class="img-list" ref="imglist">
        <div class="hopeful-list" v-for="(item,index) in hopefulList" :key="index">
          <div class="hope-img">
            <img :src="item.img.replace('w.h','128.180')" alt>
            <p class="wish">1200想看</p>
          </div>
          <div class="hopeful-info">
            <p class="name">{{item.nm}}</p>
            <p class="showTime">3.14日</p>
          </div>
        </div>
      </div>
    </div>

  </div>

</template>

<script>
// import movieList from './movieList'
export default {
    name:'coming',
    data(){
       return{
            hopefulList:[]
       } 
    },
    created(){
            this.$axios.get('/api/test').then(res=>{
    
            this.hopefulList = res.data.data.shuju;
        
        
         })
        },
        
    compontents:{
        // movieList
    }
    
}
</script>

<style scoped>
    .hopeful{
        padding:10px 0px 0px 15px;
        margin:0 20px 10px 0px;
        border-bottom:8px solid #eee;
    }
    .hopeful>p{
        font-size:14px;
        margin-bottom:10px;

    }
    .img-list{
        height:166px;
        overflow:hidden;
        display:flex;
        flex-direction:row;
        display:-webkit-box;
        overflow-x:auto;
        -webkit-overflow-scrolling:touch;
        
    }
    /* .img-list::-webkit-scrollbar{
        display:none;
    } */

    .hopeful-list{
        width:86px;
        height:166px;
        margin-right:12px;
    }
    .hope-img img{
        width:85px;
        height:115px;
       
    }
    .hope-img{
        position:relative;

    }
   .hope-img:before {
        content: "♡";
        color: #ccc;
        font-size: 14px;
        text-align: center;
        line-height: 28px;
        width: 28px;
        height: 28px;
        background-color: rgba(61, 63, 71, 0.6);
        border-bottom-right-radius: 10px;
        position: absolute;
        top: 0;
        left: 0;
    }
    .hope-img> .wish{
        position:relative;
        font-weight:bold;
        font-size:12px;
        color:#faaf00;
        margin:-40px 0px 6px 0px;
        padding:20px 0px 0px 3px;
        
    }
    .hopeful-info .name{
        font-size:13px;
        font-weight:bold;
        margin-bottom:3px;
        overflow:hidden;
        white-space:nowrap;
        text-overflow:ellipsis;
    }
    .hopeful-info .showTime{
        font-size:12px;
        color:#888;
        margin-top:-5px;
    }
</style>
