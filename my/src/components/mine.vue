<template>
    <div>
        <isLogin v-if="isLogin"></isLogin>
        <notLogin v-else></notLogin>
    </div>
</template>
<script>
import isLogin from './isLogin'
import notLogin from './notLogin'
import { mapState } from 'vuex'
export default {
    name:'mine',
    data(){
        return{
            
        }
    },
    components:{
        isLogin,notLogin
    },
    computed:{
        ...mapState(['isLogin'])
    }
   
 
}
</script>