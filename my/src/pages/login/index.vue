<template>
    <div>
        <h3>登陆</h3>
        <div class="content">
            <input type="text" placeholder="用户名" v-model="user">
            <input type="password" placeholder="密码" v-model="password">
            <button @click="login">登陆</button> 
            <p class="register">没有账号？<span @click="$router.push('register')">点我注册</span></p>
        </div>
    </div>
</template>

<script>
import {mapGetters,mapMutations} from 'vuex';
export default {
    data(){
        return{
            user:'',
            password:''
        }
    },
    computed:{
        ...mapGetters(['testUserInfo'])
    },
    methods:{
       ...mapMutations(['loginIn']),
        login(){
            if(!this.user.trim()) return alert('用户名不能为空');
            if(!this.password) return alert('请输入密码');
            let testInfo = this.testUserInfo(this.user)
            if(this.user === testInfo.account && this.password === testInfo.password){
                this.loginIn(testInfo)
                // console.log(testInfo)
                this.$router.push('/index')
            }else{
                alert('密码错误');
            }
        }
    }
}
</script>