<template>
        <div class="nav">
            <ul class="icon">
                <li @click="changeTab('film')"  >
                    <span :class="[activeTab === 'film'?'active' : '']"> 电影</span>
                </li>
                <li @click="changeTab('cinema')">
                     <span :class="[activeTab === 'cinema'?'active' : '']">影院</span>
                </li>
                <li @click="changeTab('mine')" > 
                    <span :class="[activeTab === 'mine'?'active' : '']">我的</span>
                </li>
            </ul>
        </div>
</template>
<script>
export default {
   name:'pageFooter',
   data(){
       return{
           activeTab:'film',      
           iconStyle: {color:'red'},
           iconStyleActive: {color: 'blue'}
       }
   },
   methods:{
       changeTab(type){
           this.activeTab = type;
           //触发changeTab事件再触发chooseMenu事件
           this.$emit('chooseMenu',type);
           
       }
   }
}
</script>
<style scoped>

.icon{
    display:flex;
    justify-content:space-between;
    align-items:center;
    
}
.active{
    color:red;
}
</style>