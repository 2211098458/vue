<template>
    <div>
        <div class="pageTitle">电影</div>
        <ul class="topNav">
            <li :class="[showHot==1?'active':'']" @click="showHot=1">正在热映</li>
            <li :class="[showHot==0?'active':'']" @click="showHot=0">即将上映</li>
        </ul>
        <div class="main">
            <div v-if="showMainType==='film'">
            <hoting v-show="showHot==1"></hoting>
            <coming v-show="showHot==0"></coming>
            </div>
            <div v-else-if="showMainType==='mine'">
                <mine></mine>
            </div>
            <div v-else>
                <cinima></cinima>
            </div>
        </div>
        <div class="footer-nav">
            <page-footer @chooseMenu="chooseMenu"></page-footer>
        </div>

    </div>
</template>

<script>
import hoting from '@/components/hoting'
import coming from '@/components/coming'
import cinima from '@/components/cinima'
import mine from '@/components/mine'
 
    export default{
    name:'index',
    components:{
        hoting,coming,cinima,mine
    },
    data(){
        return {
            showHot:1,
            showMainType:'film'
        }
    },
    methods:{
        chooseMenu(val){
            this.showMainType =val
        }
    }
}
</script>

<style scoped>
.pageTitle{
    height:51px;
    width:100%;
    background-color:rgb(229,72,71);
    text-align:center;
    line-height:51px;
    
    font-size:1.1em;
}
.topNav{
    display:flex;
    flex-direction:row;
    justify-content:space-around;
    align-items:center;
}
.topNav li{
    padding:8px;
    cursor:pointer;
}
.active{
    color:rgb(229,72,71);
    border-bottom:2px solid rgb(229,72,71);
}
.footer-nav{
    position:fixed;
    height:50px;
    bottom:0;
    width:calc(100% - 12px) ;
    border-top:1px solid #dbdbdb;
    background-color:#fff;
   
}
</style>
