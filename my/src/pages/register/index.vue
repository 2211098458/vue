<template>
  <div>
    <page-title :showBack='true'>注 册</page-title>
    <div class="content">
      <input type="text" placeholder="昵称" v-model="nick"><br>
      <input type="text" placeholder="用户名" v-model="account"><br>
      <input type="password" placeholder="密码" v-model="password"><br>
      <button @click="handleRegister">注 册</button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  data() {
    return {
      nick: '',
      account: '',
      password: ''
    }
  },
  computed: {
    ...mapGetters(['testUserInfo']),
  },
  methods: {
    ...mapMutations(['register']),
    handleRegister() {
      if(!this.nick.trim()) return alert('昵称不能为空！');
      if(!this.account.trim()) return alert('用户名不能为空！');
      if(!this.password) return alert('请输入密码！');
      let testInfo = this.testUserInfo(this.account)
      if (testInfo && testInfo.account) {
        alert('用户名已存在！')
        this.account = ''
        this.password = ''
      } else {
        const params = {
          userNick: this.nick,
          account: this.account,
          password: this.password,
        }
        this.register(params)
        alert('注册成功')
        this.$router.back()
      }
    }
  }
}
</script>

<style  scoped>


</style>