<template>
   <div>
       <div @click="$router.push({name:'movieDetail' ,query:{id:mitem.id}})" class="movie-list">
           <div class="movie-img">
               <img v-lazy="mitem.img" alt="" class="name-img">
           </div>
           <div class="right-info">
               <ul class="movie-info"> 
                   <li class="name">{{mitem.nm}}</li>
                    <li class="score">观众评 
                        <span>9</span>
                    </li>
                    <li class="score"><span>1000</span>想看</li>
                    <li>古天乐</li>
                    <li>333家影院</li>
               </ul>
               <div class="btn">
                   <button v-if="mitem.globalReleased" class="buy-btn">购票</button>
                   <button v-if="!mitem.globalReleased" class="pre-btn">预售</button>
               </div>
           </div>
       </div>
  </div>
</template>
<script>
export default {
    name:'movieList',
    props:["mitem"],
    data(){
        return{}
    }
}
</script>

<style scoped>
 
    .movie-list{
        padding:5px 10px;
    
    }
    .movie-img>img{
        height:120px;
        width:80px;
        float:left;
        margin-right:8px;
        margin-top:10px;
    }
    .right-info{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        border-bottom:1px solid #ededed;
        padding:0px 10px 5px 3px;
    }
    .right-info>ul{
        width:calc(100% - 56px);
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: left;
        padding:5px 0px;
        font-size:13px;
        color:#666;
    }
    .right-info>ul>li{
        overflow:hidden;
        white-space:nowrap; /*文本不进行换行 */
        text-overflow:ellipsis;
        margin-bottom:3px;
        
    }
    .movie-info .name{
        font-size:16px;
        font-weight:bold;
        color:#000;
    }
    .movie-info .score>span{
        font-weight: bold;
        font-size: 14px;
        color: #faaf00;
 }
  
  .btn>button{
      width:48px;
      padding:5px;
      border:none;
      border-radius:5px;
      font-size:12px;
  }
  .btn>.buy-btn{
      background-color:#f03d37;
      color:#fff;
  }
  .btn>.pre-btn{
      background-color:#3c9fe6;
      color:#fff;
  }
</style>