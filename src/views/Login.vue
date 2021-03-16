<template>
  <div class="back-style">
    <div class="login-box-style">
      <el-form label-position="left" label-width="60px">
        <div><h1 style="text-align: left"><span>登录</span></h1></div>
        <el-form-item label="账号" class="text-style">
          <el-input clearable v-model="userName"></el-input>
        </el-form-item>
        <el-form-item label="密码" class="text-style">
          <el-input show-password v-model="password"></el-input>
        </el-form-item>
        <el-form-item label="验证码" class="text-style"  v-show="verify_show">
          <el-input v-model="verify"></el-input>
        </el-form-item>
        <el-button class="text-style" style="width: 100%" type="primary" @click="login">登录</el-button>
      </el-form>
    </div>
  </div>
</template>

<script>
    import axios from "axios";
    export default {
        name: "Login",
        data () {
            return {
                userName: '',
                password: '',
                verify: '',
                verify_show: false
            }
        },
        methods: {
            login () {
                this.$router.push({
                    name: 'Index'
                })
                // axios.post('/api/login', {
                //     'username': this.userName,
                //     'password': this.password
                // })
                // .then(response => {
                //     console.log(response)
                //         if (response.data === 'success') {
                //             this.$router.push({
                //              name: 'Index'
                //         })
                //     }
                // })
                // .catch(error => {
                //     console.log(error)
                // })
            }
        }
    }
</script>

<style scoped>
    .login-box-style {
        width: 400px;
        height: 380px !important;
        display: table;
        margin-left:-200px;
        margin-top: -190px;
        position: absolute;
        left: 75%;
        top: 40%;
        padding: 10px 20px 0px 20px;
        border: 1px solid rgb(75, 74, 74);
        background: aliceblue;
    }
    .back-style {
        width: 100%;
        height: 530px !important;
        display: table;
        margin-left: 0px;
        margin-top: -190px;
        position: absolute;
        left: 0%;
        top: 40%;
        padding-top: 50px;
    }
    .text-style {
        color: black !important;
        padding-top: 10px;
    }
</style>

