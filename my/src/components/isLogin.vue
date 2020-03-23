<template>
    <div class="box">
        <div class="head">
            <p>{{userNick}}</p>
            <p>当前状态:{{isLogin === 1 ?'已登陆':'未登录'}}</p>
        </div>
        <button @click="loginOut">退出</button>
    </div>
</template>

<script>
import {mapState, mapMutations} from 'vuex'
export default {
    name:'isLogin',
    computed:{
        ...mapState(['isLogin', 'userNick'])
    },
    methods: {
    ...mapMutations(['loginOut'])
  }

}
</script>