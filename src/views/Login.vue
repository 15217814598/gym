<template>
  <div>
    <div class="login_body">
       <h1 class="h1">狗东健身房</h1>
      <div class="login_right">
          <div class="back-style">
            <div class="login-box-style">
              <el-form  label-width="60px">
                <el-form-item label="账号" >
                  <el-input clearable v-model="userName" class="text-style"></el-input>
                </el-form-item>
                <el-form-item label="密码">
                  <el-input show-password v-model="password" class="text-style"></el-input>
                </el-form-item>
                <el-form-item label="验证码"  v-show="verify_show">
                  <el-input v-model="verify" class="text-style"></el-input>
                </el-form-item>
                <el-button class="login_buttton" style="width: 60%" type="primary" @click="login">登录</el-button>
              </el-form>
            </div>
          </div>
      </div>
      
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

<style lang="less" scoped >
     .h1{
       position: absolute;
       top: 0;
       left: 20px;
     }
    .login_body{
      background:url('../assets/images/login.jpg');
      background-size: 100% 100%;
      width:100%;
      height: 100%;
      .login_right{
        width: 58%;
        height: 100%;
        float: right;
        display: flex;
        justify-content: center;
        align-items: center;
        background: rgba(171, 202, 201,0.5);
        .login-box-style {
        width: 300px;
        height: 100%;
        border: 1px solid  rgba(171, 202, 201,0.8);
        padding: 70px 30px 30px  30px;
        box-shadow: 0px 0px 5px  rgba(171, 202, 201,0.8);
        .login_buttton{
          background-color: rgba(81, 133, 131, 0.8);
          margin-top: 30px;
          border: none;
        }
        .login_buttton:hover{
          background-color:  rgba(93, 148, 146, 0.8);
          border: none;
        }
      }
      }

    }
     .login_right:after .login_right:before{
        content: '';
        display: block;
        height: 0;
        overflow: hidden;
        clear: both;
        
      }
      .el-input__inner{
    background-color: rgba(171, 202, 201,0.8) !important;
    border-radius: 4px;
  }
  
</style>

