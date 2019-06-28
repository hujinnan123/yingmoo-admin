<template>
  <div class="login-container">
    <el-form
      ref="loginForm"
      :model="loginForm"
      :rules="loginRules"
      class="login-form center"
      label-position="left"
    >
      <div class="title-container">
        <span>鹰目后台管理</span>
      </div>

      <el-form-item prop="username">
        <input type="text" name="username" autocomplete="off" style="display:none">
        <span class="login-icon active">
          <svg-icon icon-class="user" />
        </span>
        <el-input
          ref="username"
          v-model="loginForm.username"
          placeholder="请输入您的用户名"
          name="username"
          type="text"
        />
      </el-form-item>

      <el-form-item prop="password">
        <span class="login-icon"><svg-icon icon-class="password"/></span>
        <el-input
          ref="password"
          :key="passwordType"
          v-model="loginForm.password"
          :type="passwordType === true ? 'password' : 'text'"
          placeholder="请输入您密码"
          name="password"
        />
        <span class="login-icon login-icon-independent" @click="showPwd">
          <svg-icon :icon-class="passwordType === true ? 'eye' : 'eye-open'" />
        </span>
      </el-form-item>
      <el-form-item prop="vcode">
        <el-input
          ref="vcode"
          v-model="loginForm.vcode"
          placeholder="验证码"
          name="password"
          style="width: 45%;"
          @keyup.enter.native="handleLogin"
        />
        <span class="login-vcode" @click="showVCode">
          <img :src="vCodeUrl" alt="">
        </span>
      </el-form-item>
      <el-button :loading="loading" type="primary" @click.native.prevent="handleLogin">登录</el-button>
    </el-form>
  </div>
</template>

<script>
import { Message } from 'element-ui'
export default {
  data() {
    return {
      loginForm: {
        username: '',
        password: '',
        vcode: ''
      },
      loginRules: {
        username: [
          { required: true },
          { trigger: 'blur' }
          // { validator: loginRulesUserName }
        ],
        password: [
          { required: true },
          { trigger: 'blur' }
        ],
        vcode: [
          { required: true },
          { trigger: 'blur' }
        ]
      },
      passwordType: true,
      loading: false,
      vCodeUrl: '',
      redirect: undefined
    }
  },
  
  watch: {
    $route: {
      handler: function(route) {
        this.redirect = route.query && route.query.redirect
      },
      immediate: true
    }
  },
  created() {
    this.vCodeUrl = '/vcode?t=' + new Date().getTime()
  },
  mounted() {
    setTimeout(()=>{
      if (this.loginForm.username === '') {
        this.$refs.username.focus()
      } else if (this.loginForm.password === '') {
        this.$refs.password.focus()
      }else if(this.loginForm.vcode === '') {
        this.$refs.vcode.focus()
      }
    },1000)
    
  },
  methods: {
    showPwd() {
      this.passwordType = !this.passwordType
      this.$nextTick(() => {
        this.$refs.password.focus()
      })
    },
    showVCode() {
      this.vCodeUrl = '/vcode?t=' + new Date().getTime()
    },
    handleLogin() {
      
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.loading = true
          this.$store.dispatch('user/login', this.loginForm)
          .then((res) => {
            this.loading = false
            if(res.code && res.msg) {
               Message({
                message: res.msg,
                type: 'error',
                duration: 3 * 1000
              })
              this.vCodeUrl = '/vcode?t=' + new Date().getTime()
              this.loginForm.vcode = ''
            } else if (res.code == 0 && !res.msg) {
              this.$router.push({ path: this.redirect || '/' })
            }
          }).catch(() => {
            this.loading = false
          })
        } else {
          return false
        }
      })
    }
  }
}
</script>

<style lang="scss">
@function rem($px, $base-font-size: 75px) {
  @return ($px / $base-font-size) * 1rem;
}

.login-container {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  background-image: url("../../../static/login/landscape.jpg");
  background-size: 100% 100%;

  .login-form {
    width: rem(600px);
    height: rem(620px);
    color: #fff;
    background-color: rgba(241, 238, 238, 0.5);
    overflow: hidden;
    border-radius: 3px;

    .title-container {
      height: rem(128px);
      line-height: rem(128px);
      font-size: 24px;
    }
    .el-form-item__content {
      position: relative;
      display: flex;
      justify-content: space-around;

      .login-icon {
        font-size: 18px;
        color: #036eb7;
      }
      .login-icon-independent {
        position: absolute;
        right: 20px;
      }

      .el-input {
        width: 85%;
      }

      .el-form-item__error {
        right: 0;
        padding: 0 rem(60px);
        text-align: right;
        font-size: 14px;
      }

      .login-vcode {
        display: inline-block;
        width: 35%;
        height: 40px;
        background: #ccc;

        img{
          width: 100%;
          height: 100%;
          display: block;
        }
      }
    }
  }
}
</style>
