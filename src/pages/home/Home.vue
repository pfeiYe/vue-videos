<template >
  <div
    class="bg"
  >
    <div class="logo">
      <img
        class="header-img"
        src="../../../static/logo.jpg"
        style="width: 2.7rem; height: 2.7rem;margin-top: 1rem;"
      >
    </div>
    <div
      class="loginFrom"
      id="loginFrom"
    >
      <div class="LoginButton">
        <div class="LoginInput">
          <van-cell-group>
            <van-field
              v-model="username"
              placeholder="请输入用户名"
              left-icon="contact"
              icon="question"
              id="userCode"/>
          </van-cell-group>
        </div>
      </div>
      <div class="LoginButton">
        <div class="LoginInput">
          <van-cell-group>
            <van-field
              v-model="password"
              placeholder="请输入密码"
              type="password"
              left-icon="closed-eye"
              icon="question"
              id="password"/>
          </van-cell-group>
        </div>
      </div>
        <div class="LoginInput">
          <el-button
            type="danger"
            style="width: 100%;margin: 0 auto;"
            @click="authLogin"
          >登录</el-button>
        </div>
    </div>
  </div>

</template>
<script>
import { getLogin } from '@/api/data.js'
// import CryptoJS from 'crypto-js'
// import mui from '../../../static/mui/js/mui'
// mui.init()
// document.addEventListener('plusready', function () {
//   // console.log("所有plus api都应该在此事件发生后调用，否则会出现plus is undefined。"
//   document.addEventListener('pause', function () {
//     mui.toast('程序在后台运行!')
//   })
// })
// const code = getUrlParam('code')
// console.log(code)

// function getUrlParam (name) {
//   var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)')
//   var url = window.location.toString()
//   var r = url.substring(url.indexOf('?') + 1, url.length).match(reg)
//   if (r != null) return unescape(r[2])
//   return null
// }
export default {
  components: {},
  data () {
    return {
      username: '',
      password: '',
      user: {}
    }
  },
  created () {
    // this.noauthLogin(code)
    // localStorage.clear()
    // if (code !== null) {
    //   this.noauthLogin(code)
    // }
  },
  computed: {
  },
  methods: {
    userCodeFocus () {
      document.body.scrollTop = 400
    },
    userCodeBlur () {
      document.body.scrollTop = 0
    },
    passwordFocus () {
      document.body.scrollTop = 600
    },
    passwordBlur () {
      document.body.scrollTop = 0
    },
    authLogin () {
      // const userPwd = this.aesMinEncrypt(this.userPwd)
      // login(this.userCode, userPwd).then(res => {
      //   console.log(res)
      //   res = res.data
      //   if (res.status === true) {
      //     var token = res.result.uc_token
      //     sessionStorage.setItem('comLevel', res.result.comLevel)
      //     sessionStorage.setItem('comCode', res.result.org)
      //     sessionStorage.setItem('uc-token', token)
      //     sessionStorage.setItem('nameOrg', res.result.comName)
      //     this.$router.push({ name: 'Main' })
      //   } else {
      //     this.$message.info(res.message)
      //   }
      // })
      // getLogin(this.username, this.password).then(res => {
      //   if (res.data.status === true) {
      //     this.user = res.data.result
      //     window.localStorage.setItem('name', res.data.result.name)
          this.$router.push({ path: '/main' })
      //   } else {
      //     this.$message.error('请输入正确的账号密码')
      //   }
      // })
    }
  },
  // aesMinEncrypt (word) {
  //   const _word = CryptoJS.enc.Utf8.parse(word)
  //   const _key = CryptoJS.enc.Utf8.parse('ihaierForTodoKey')
  //   const _iv = CryptoJS.enc.Utf8.parse('ihaierForTodo_Iv')
  //   const encrypted = CryptoJS.AES.encrypt(_word, _key, {
  //     iv: _iv,
  //     mode: CryptoJS.mode.CBC,
  //     padding: CryptoJS.pad.Pkcs7
  //   })
  //   return encrypted.toString()
  // }
  mounted () {
  },
  activated () {}
}
</script>
<style>
body,html {
  height: 100vh;
}
#app {
  height: 100vh;
}
.bg {
  height: 100vh;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  /* background: url("../../../static/login_bg.png") repeat-x;
  background-size: cover; */
  position: relative;
}
.logo {
  margin: 0 auto;
  position: relative;
  width: 2.7rem;
  height: 2.7rem;
}
.loginFrom {
  margin: 0 auto;
  position: relative;
  padding-top: 20%;
  min-height: 240px;
}
.LoginInput {
  /* padding-top: 70%; */
  width: 70%;
  padding-top: 25px;
  margin: 0 auto;
  border-radius: 5px;
}
.van-cell-group {
    border-radius: 5px;
    overflow: hidden;
}
.van-cell {
    border-radius: 5px;
    overflow: hidden;
}
.el-button {
  letter-spacing: 5px;
  font-size: 16px;
}
</style>
