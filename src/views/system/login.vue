<template>
  <div class="login-container">
    <el-form ref="loginForm" :model="loginForm" :rules="loginRules" class="login-form" autocomplete="on" label-position="left">

      <div class="title-container">
        <h3 class="title">系统登录</h3>
      </div>

      <el-form-item prop="username">
        <span class="svg-container">
          <svg-icon icon-class="user" />
        </span>
        <el-input
          ref="username"
          v-model="loginForm.username"
          placeholder="Username"
          name="username"
          type="text"
          tabindex="1"
          autocomplete="on"
        />
      </el-form-item>

      <el-tooltip v-model="capsTooltip" content="Caps lock is On" placement="right" manual>
        <el-form-item prop="password">
          <span class="svg-container">
            <svg-icon icon-class="password" />
          </span>
          <el-input
            :key="passwordType"
            ref="password"
            v-model="loginForm.password"
            :type="passwordType"
            placeholder="Password"
            name="password"
            tabindex="2"
            autocomplete="on"
            @keyup.native="checkCapslock"
            @blur="capsTooltip = false"
            @keyup.enter.native="handleLogin"
          />
          <span class="show-pwd" @click="showPwd">
            <svg-icon :icon-class="passwordType === 'password' ? 'eye' : 'eye-open'" />
          </span>
        </el-form-item>
      </el-tooltip>

      <el-button :loading="loading" type="primary" style="width:100%;margin-bottom:30px;" @click.native.prevent="handleLogin">登录</el-button>

      <div style="position:relative">
        <div class="tips">
          <span>忘记用户名/忘记密码</span>
          <span>密码 : any</span>
        </div>
        <div class="tips">
          <el-button class="thirdparty-button" type="primary" @click="showDialog=true">其他方式登录</el-button>
        </div>
      </div>
      <br>
      <div style="position:relative">
        <div class="tips">
          <el-button class="thirdparty-button" type="primary"><router-link to="/apply">商务合作申请2</router-link></el-button>
        </div>
      </div>
    </el-form>

    <el-dialog title="其他方式登录" :visible.sync="showDialog">
      Can not be simulated on local, so please combine you own business simulation! ! !
      <br>
      <br>
      <br>
      <social-sign />
    </el-dialog>
    <el-card class="box-card" width="100%" :style="styleObj1" @closed="handleClose2">
      <el-tabs :before-leave="moreState">
        <el-tab-pane label="区域代理商申请">
          <div style="display:inline-block;">
            <hr>
            <el-button @click="addData()">增加数据</el-button>
            <div style="display:inline-block; width: 1500px">
              <el-table ref="multipleTable" :data="tableData3" tooltip-effect="dark" style="" @selection-change="handleSelectionChange">
                <el-table-column type="selection" width="120"><template slot-scope="scope">{{ scope.row.date }}</template></el-table-column>
                <el-table-column prop="address" label="分类名称" width="400" show-overflow-tooltip />
                <el-table-column label="操作" width="400" show-overflow-tooltip>
                  <template slot-scope="scope">
                    <el-button type="primary" @click="dialogFormVisible = true">编辑</el-button>
                    <el-button type="danger" @click.native="delS(scope.row)">删除</el-button>
                  </template>
                </el-table-column>
              </el-table>
              <el-dialog title="编辑签到配置" :visible.sync="dialogFormVisible" @closed="handleClose">
                <el-form ref="ruleForm" :model="form" :rules="rules">
                  <template>
                    <el-form-item label="签到天数" :label-width="formLabelWidth" prop="name">
                      <el-input>(scope.row.date)</el-input>
                    </el-form-item>
                    <el-form-item label="签到值" :label-width="formLabelWidth">
                      <el-input>(scope.row.name)</el-input>
                    </el-form-item>
                  </template>
                </el-form>
                <div slot="footer" class="dialog-footer">
                  <el-button @click="dialogFormVisible = false">取 消</el-button>
                  <el-button type="primary" @click="handleSave">确 定</el-button>
                </div>
              </el-dialog>
            </div>
            <div style="margin-top: 20px">
              <!--<el-button @click="delMulData()">批量删除</el-button>-->
              <!--<el-button @click="prints()">打印</el-button>-->
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="供应商申请">
          <div style="display:inline-block;">
            <div style="display:inline-block;">
              <label class="lxqdn" style="padding-left:0;">产品分类:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
              <el-input v-model="lxqdn" placeholder="请输入查询内容" style="width:345px;" prefix-icon="el-icon-document" />
              <el-button type="primary">查询</el-button>
              <el-button @click="addData()">增加数据</el-button>
            </div>
            <br><br>
            <hr>
            <div style="display:inline-block; width: 1500px">
              <el-table ref="multipleTable" :data="tableData3" tooltip-effect="dark" style="" @selection-change="handleSelectionChange">
                <el-table-column type="selection" width="120"><template slot-scope="scope">{{ scope.row.date }}</template></el-table-column>
                <el-table-column prop="name" label="签到天数" width="120" />
                <el-table-column prop="address" label="签到值" width="400" show-overflow-tooltip />
                <el-table-column label="操作" width="400" show-overflow-tooltip>
                  <template slot-scope="scope">
                    <el-button type="primary" @click="dialogFormVisible = true">编辑</el-button>
                    <el-button type="danger" @click.native="delS(scope.row)">删除</el-button>
                  </template>
                </el-table-column>
              </el-table>
              <el-dialog title="编辑签到配置" :visible.sync="dialogFormVisible" @closed="handleClose">
                <el-form ref="ruleForm" :model="form" :rules="rules">
                  <template>
                    <el-form-item label="签到天数" :label-width="formLabelWidth" prop="name">
                      <el-input>(scope.row.date)</el-input>
                    </el-form-item>
                    <el-form-item label="签到值" :label-width="formLabelWidth">
                      <el-input>(scope.row.name)</el-input>
                    </el-form-item>
                  </template>
                </el-form>
                <div slot="footer" class="dialog-footer">
                  <el-button @click="dialogFormVisible = false">取 消</el-button>
                  <el-button type="primary" @click="handleSave">确 定</el-button>
                </div>
              </el-dialog>
            </div>
            <div style="margin-top: 20px">
              <!--<el-button @click="delMulData()">批量删除</el-button>-->
              <!--<el-button @click="prints()">打印</el-button>-->
            </div>
          </div>
        </el-tab-pane>
      </el-tabs>
    </el-card>
  </div>
</template>

<script>
import { validUsername } from '@/utils/validate'
import SocialSign from './components/SocialSignin'

export default {
  name: 'Login',
  components: { SocialSign },
  data() {
    const validateUsername = (rule, value, callback) => {
      if (!validUsername(value)) {
        callback(new Error('Please enter the correct user name'))
      } else {
        callback()
      }
    }
    const validatePassword = (rule, value, callback) => {
      if (value.length < 6) {
        callback(new Error('The password can not be less than 6 digits'))
      } else {
        callback()
      }
    }
    return {
      openTab: false,
      displaya: 'none',
      loginForm: {
        username: 'admin',
        password: '111111'
      },
      loginRules: {
        username: [{ required: true, trigger: 'blur', validator: validateUsername }],
        password: [{ required: true, trigger: 'blur', validator: validatePassword }]
      },
      passwordType: 'password',
      capsTooltip: false,
      loading: false,
      showDialog: false,
      redirect: undefined,
      otherQuery: {}
    }
  },
  watch: {
    $route: {
      handler: function(route) {
        const query = route.query
        if (query) {
          this.redirect = query.redirect
          this.otherQuery = this.getOtherQuery(query)
        }
      },
      immediate: true
    }
  },
  created() {
    // window.addEventListener('storage', this.afterQRScan)
  },
  mounted() {
    if (this.loginForm.username === '') {
      this.$refs.username.focus()
    } else if (this.loginForm.password === '') {
      this.$refs.password.focus()
    }
  },
  destroyed() {
    // window.removeEventListener('storage', this.afterQRScan)
  },
  methods: {
    checkCapslock({ shiftKey, key } = {}) {
      if (key && key.length === 1) {
        if (shiftKey && (key >= 'a' && key <= 'z') || !shiftKey && (key >= 'A' && key <= 'Z')) {
          this.capsTooltip = true
        } else {
          this.capsTooltip = false
        }
      }
      if (key === 'CapsLock' && this.capsTooltip === true) {
        this.capsTooltip = false
      }
    },
    showPwd() {
      if (this.passwordType === 'password') {
        this.passwordType = ''
      } else {
        this.passwordType = 'password'
      }
      this.$nextTick(() => {
        this.$refs.password.focus()
      })
    },
    handleLogin() {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.loading = true
          this.$store.dispatch('user/login', this.loginForm)
            .then(() => {
              this.$router.push({ path: this.redirect || '/', query: this.otherQuery })
              this.loading = false
            })
            .catch(() => {
              this.loading = false
            })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    getOtherQuery(query) {
      return Object.keys(query).reduce((acc, cur) => {
        if (cur !== 'redirect') {
          acc[cur] = query[cur]
        }
        return acc
      }, {})
    },
    getOtherQuery2() {
      // alert('111')
      // this.$refs.tabs.$children[0].$el.style.display = 'none'
    }
    // afterQRScan() {
    //   if (e.key === 'x-admin-oauth-code') {
    //     const code = getQueryObject(e.newValue)
    //     const codeMap = {
    //       wechat: 'code',
    //       tencent: 'code'
    //     }
    //     const type = codeMap[this.auth_type]
    //     const codeName = code[type]
    //     if (codeName) {
    //       this.$store.dispatch('LoginByThirdparty', codeName).then(() => {
    //         this.$router.push({ path: this.redirect || '/' })
    //       })
    //     } else {
    //       alert('第三方登录失败')
    //     }
    //   }
    // }
  }
}
</script>

<style lang="scss">
/* 修复input 背景不协调 和光标变色 */
/* Detail see https://github.com/PanJiaChen/vue-element-admin/pull/927 */

$bg:#283443;
$light_gray:#fff;
$cursor: #fff;

@supports (-webkit-mask: none) and (not (cater-color: $cursor)) {
  .login-container .el-input input {
    color: $cursor;
  }
}

/* reset element-ui css */
.login-container {
  .el-input {
    display: inline-block;
    height: 47px;
    width: 85%;

    input {
      background: transparent;
      border: 0px;
      -webkit-appearance: none;
      border-radius: 0px;
      padding: 12px 5px 12px 15px;
      color: $light_gray;
      height: 47px;
      caret-color: $cursor;

      &:-webkit-autofill {
        box-shadow: 0 0 0px 1000px $bg inset !important;
        -webkit-text-fill-color: $cursor !important;
      }
    }
  }

  .el-form-item {
    border: 1px solid rgba(255, 255, 255, 0.1);
    background: rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    color: #454545;
  }
}
.applyform{
display:none;
}
</style>

<style lang="scss" scoped>
$bg:#2d3a4b;
$dark_gray:#889aa4;
$light_gray:#eee;

.login-container {
  min-height: 100%;
  width: 100%;
  background-color: $bg;
  overflow: hidden;

  .login-form {
    position: relative;
    width: 520px;
    max-width: 100%;
    padding: 160px 35px 0;
    margin: 0 auto;
    overflow: hidden;
  }

  .tips {
    font-size: 14px;
    color: #fff;
    margin-bottom: 10px;

    span {
      &:first-of-type {
        margin-right: 16px;
      }
    }
  }

  .svg-container {
    padding: 6px 5px 6px 15px;
    color: $dark_gray;
    vertical-align: middle;
    width: 30px;
    display: inline-block;
  }

  .title-container {
    position: relative;

    .title {
      font-size: 26px;
      color: $light_gray;
      margin: 0px auto 40px auto;
      text-align: center;
      font-weight: bold;
    }
  }

  .show-pwd {
    position: absolute;
    right: 10px;
    top: 7px;
    font-size: 16px;
    color: $dark_gray;
    cursor: pointer;
    user-select: none;
  }

  .thirdparty-button {
    position: absolute;
    right: 0;
    bottom: 6px;
  }

  @media only screen and (max-width: 470px) {
    .thirdparty-button {
      display: none;
    }
  }
}
</style>
