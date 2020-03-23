<template>
<div>
    <div class="main">
        <div @click="$router.push({name:'loginc'})">
            <img src="/images/denglu.png" alt="" style="width:400px;height:400px;">
        </div>
        <div @click="$router.push({name:'echarts'})" >
            <img src="/images/echarts.png" alt="" style="width:400px;height:400px;">
        </div>
         <div @click="$router.push({name:'index'})">
            <img src="/images/dianying.png" alt=""  style="width:400px;height:400px;">
        </div>
    </div>
   <div class="footer">
       <div><span>登陆界面</span></div>
       <div><span>vue中使用echarts</span></div>
       <div><span>仿猫眼电影界面</span></div>
   </div>
</div>
  
</template>

<script>
export default {
    
}
</script>

<style scoped>
.main{
    
    display:flex;
    justify-content:center;
    margin:20px;
}
.main div{
    width:400px;
    height:400px;

    margin:20px;
    
}
 .footer{
    margin:0 20px;
    height:100px;
  
    display:flex;
    justify-content:center;
}
.footer div{
    width:400px;
    height:50px;
    
    margin:0 20px;
}
.footer div span{
  
   line-height:50px;
   margin-left:50%;
}
</style>