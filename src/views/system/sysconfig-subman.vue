<template>
  <el-card class="box-card" width="100%">
    <el-tabs :before-leave="moreState">
      <el-tab-pane label="基本配置">
        <div style="display:inline-block;">
          <label class="radio-label" style="padding-left:0;">供应商开关:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
          <el-radio-group v-for="item in tabs" :key="item.id" v-model="tabPosition" @click="toggleTab(item.id)">
            <el-radio-button :label="item.name" />
          </el-radio-group>
        </div>
        <br><br>
        <div style="display:inline-block;">
          <label class="webname" style="padding-left:0;">营业时间:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
          <el-input v-model="webname" placeholder="请输入查询内容" style="width:345px;" prefix-icon="el-icon-document" />
        </div>
        <div style="display:inline-block;">
          <label class="sitecontent" style="padding-left:0;">结束时间:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
          <el-input v-model="sitecontent" placeholder="请输入查询内容" style="width:345px;" prefix-icon="el-icon-document" />
        </div>
        <div style="display:inline-block;">
          <label class="bah" style="padding-left:0;">供应商状态:&nbsp;&nbsp;&nbsp;</label>
          <el-input v-model="bah" placeholder="请输入查询内容" style="width:345px;" prefix-icon="el-icon-document" />
        </div>
        <br><br>
        <div style="display:inline-block;">
          <label class="bah" style="padding-left:0;">公司地址:&nbsp;&nbsp;&nbsp;</label>
          <el-input v-model="bah" placeholder="请输入查询内容" style="width:345px;" prefix-icon="el-icon-document" />
        </div>
        <div style="display:inline-block;">
          <label class="bah" style="padding-left:0;">联系电话:&nbsp;&nbsp;&nbsp;</label>
          <el-input v-model="lxdh" placeholder="请输入查询内容" style="width:345px;" prefix-icon="el-icon-document" />
        </div>
        <br><br>
        <div style="display:inline-block;">
          <label class="radio-label" style="padding-left:0;">支付开关:</label>
          <el-select v-model="sizeForm" placeholder="支付开关">
            <el-option label="零钱支付" value="jiedai" />
            <el-option label="微信支付" value="shichang" />
            <el-option label="支付宝支付" value="qita" />
          </el-select>
        </div>
        <br><br>
        <hr>
        <div style="display:inline-block;">
          <label class="xffx" style="padding-left:0;">消费返现:&nbsp;&nbsp;&nbsp;</label>
          <el-input v-model="xffx" placeholder="请输入查询内容" style="width:345px;" prefix-icon="el-icon-document" />
        </div>
        <br><br>
        <div style="display:inline-block;">
          <label class="zkbl" style="padding-left:0;">抵扣比例:&nbsp;&nbsp;&nbsp;</label>
          <el-input v-model="zkbl" placeholder="请输入查询内容" style="width:345px;" prefix-icon="el-icon-document" />
        </div>
        <hr>
        <label class="radio-label" style="padding-left:0;">内部通知/首页通知: </label><br>
        <div style="display:inline-block;">
          <label class="zkbl" style="padding-left:0;">首页通知内容:&nbsp;&nbsp;&nbsp;</label>
          <el-input v-model="zkbl" placeholder="首页通知内容" style="width:345px;" prefix-icon="el-icon-document" />
        </div>
        <div style="display:inline-block;">
          <label class="zkbl" style="padding-left:0;">内部通知内容:&nbsp;&nbsp;&nbsp;</label>
          <el-input v-model="zkbl" placeholder="内部通知内容" style="width:345px;" prefix-icon="el-icon-document" />
        </div>
      </el-tab-pane>
      <el-tab-pane label="支付配置">
        <div style="display:inline-block;">
          <label class="radio-label" style="padding-left:0;">支付开关:</label>
          <el-select v-model="sizeForm" placeholder="支付开关">
            <el-option label="零钱支付" value="jiedai" />
            <el-option label="微信支付" value="shichang" />
            <el-option label="支付宝支付" value="qita" />
          </el-select>
        </div>
        <br>
        <div style="display:inline-block;">
          <label class="webname" style="padding-left:0;">Appid:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
          <el-input v-model="webname" placeholder="请输入查询内容" style="width:345px;" prefix-icon="el-icon-document" />
        </div>
        <div style="display:inline-block;">
          <label class="sitecontent" style="padding-left:0;">Appsec:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
          <el-input v-model="sitecontent" placeholder="请输入查询内容" style="width:345px;" prefix-icon="el-icon-document" />
        </div>
        <div style="display:inline-block;">
          <label class="bah" style="padding-left:0;">MchId:&nbsp;&nbsp;&nbsp;</label>
          <el-input v-model="bah" placeholder="请输入查询内容" style="width:345px;" prefix-icon="el-icon-document" />
        </div>
        <hr>
        <div style="display:inline-block;">
          <label class="webname" style="padding-left:0;">PID:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
          <el-input v-model="webname" placeholder="请输入查询内容" style="width:345px;" prefix-icon="el-icon-document" />
        </div>
        <div style="display:inline-block;">
          <label class="sitecontent" style="padding-left:0;">key:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
          <el-input v-model="sitecontent" placeholder="请输入查询内容" style="width:345px;" prefix-icon="el-icon-document" />
        </div>
        <div style="display:inline-block;">
          <label class="bah" style="padding-left:0;">支付宝账号:&nbsp;&nbsp;&nbsp;</label>
          <el-input v-model="bah" placeholder="请输入查询内容" style="width:345px;" prefix-icon="el-icon-document" />
        </div>
      </el-tab-pane>
    </el-tabs>
  </el-card>
</template>
<script>
export default {
  name: 'HomeNewsList',
  data() {
    return {
      dialogFormVisible: false,
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      formLabelWidth: '120px',
      rules: {
        name: [
          { required: true, message: '请输入活动名称', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ]
      },
      'sizeForm': '',
      'switchRoles': '',
      'switchRoles2': '',
      'tabPosition': '英语',
      'tabs': [],
      'lxqdn': '',
      'lxqdv': '',
      'webname': '',
      'sitecontent': '11111',
      'bah': '',
      'xffx': '',
      'zkbl': '',
      'level1': '',
      'level2': '',
      'level3': '',
      'tableData3': [{
        'rowNum': 1,
        'date': '1',
        'name': '1',
        'address': '10'
      }, {
        'rowNum': 2,
        'date': '2',
        'name': '2',
        'address': '20'
      }, {
        'rowNum': 3,
        'date': '3',
        'name': '3',
        'address': '30'
      }, {
        'rowNum': 4,
        'date': '4',
        'name': '4',
        'address': '40'
      }, {
        'rowNum': 5,
        'date': '5',
        'name': '5',
        'address': '50'
      }, {
        'rowNum': 6,
        'date': '6',
        'name': '6',
        'address': '60'
      }, {
        'rowNum': 7,
        'date': '7',
        'name': '7',
        'address': '70'
      }],
      multipleSelection: []
    }
  },
  created() {
    this.getTabs()
  },
  methods: {
    moreState(tab, event) {
      if (tab === 'more') {
        console.log('/////', tab, event)
        return false
      }
    },
    getTabs() {
      this.$http.get('/categories').then(val => {
        this.tabs = val.data
      })
    },
    addData() {
      var data = {
        romNum: 100,
        date: '2018-12-3',
        name: '当白',
        address: '郑州市二七区'
      }
      this.tableData3.unshift(data)
    },
    delS(index) {
      console.log(index)
      this.tableData3.splice(index, 1)
      /* 调用接口 删除数据  判断返回值 */
    },
    delMulData() {
      /* 拿到选中的数据 */
      const val = this.multipleSelection
      /* 如果选中数据存在 */
      if (val) {
        /* 将选中数据遍历 */
        val.forEach((val, index) => {
          /* 遍历源数据 */
          this.tableData3.forEach((v, i) => {
            // 如果选中数据和源数据的某一条唯一标识符相等，删除对应的源数据
            if (val.rowNum === v.rowNum) {
              this.tableData3.splice(i, 1)
            }
          })
        })
      }
      /* 清除选中状态 */
      this.$refs.multipleTable.clearSelection()
    },
    /* 得到选中数据 */
    handleSelectionChange(val) {
      this.multipleSelection = val
    },
    prints() {
      console.log(this.tableData3)
    },
    handleClose() {
      this.$refs.ruleForm.resetFields()
      this.form = {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      }
    },
    handleSave() {
      this.$refs.ruleForm.validate((valid) => {
        if (valid) {
          console.log('输入正确')
          this.dialogFormVisible = false
        } else {
          console.log('输入错误')
        }
      })
    }
  }
}
</script>
<style scoped>
.box-card{
  width: 100%;
}
.box-card .el-tabs__item.is-top:last-child{
  color: #ff4949;
}

</style>

