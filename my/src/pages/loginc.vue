<template>
    <div class="login-container">
        <el-form  class="demo-ruleForm login-page" ref="myForm" :rules="myRule" :model="myForm">
            <h3 class="title">登陆</h3>
            <el-form-item prop="username"> 
                <el-input  placeholder="用户名" v-model="myForm.username"></el-input>
            </el-form-item>
            <el-form-item prop="password">
                <el-input  placeholder="密码"  v-model="myForm.password"></el-input>
            </el-form-item>
            <el-form-item style="width:100%;">
                <el-button type="primary" style="width:100%;" :loading="logining" @click="handleSubmit">登录</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
export default {
    data(){
        return{
            logining:false,
            myForm:{
                username:'',
                password:''
            },
            //表单验证规则 prpo设置为需要设置验证的字段名即可
            myRule:{
                username:[{required:true,message:'请输入账号',trigger:'blur'}],
                password:[{required:true,message:'请输入密码',trigger:'blur'}]
            }
        }
    },
    methods:{
        handleSubmit(){
            this.$refs.myForm.validate((valid) =>{
                if(valid){
                    this.logining = true;
                    if(this.myForm.username === 'admin' && this.myForm.password == '123456'){
                        this.logining = false;
                        sessionStorage.setItem('user',this.myForm.usrename);
                        this.$router.push({path:'/'});
                    }else{
                        this.logining = false;
                        this.$alert('账号或密码错误',{
                            confrimButtonText:'确定'
                        })
                    }
                }else{
                    console.log('error submit!');
                    return false;
                }
            })
        }
    }
}
</script>

<style scoped>
.login-container {
  width: 100%;
  height: 100%;
}
.login-page {
  -webkit-border-radius: 5px;
  border-radius: 5px;
  margin: 180px auto;
  width: 350px;
  padding: 35px 35px 15px;
  background: #fff;
  border: 1px solid #eaeaea;
  box-shadow: 0 0 25px #cac6c6;
}
label.el-checkbox.rememberme {
  margin: 0px 0px 15px;
  text-align: left;
}
</style>