<template>
  <el-card class="box-card" width="100%">
    <el-tabs :before-leave="moreState">
      <el-tab-pane label="产品预订-消费者">
        <el-form ref="form" :model="sizeForm" label-width="80px" size="mini">
          <span />
          <el-form-item label="" />
          <el-form-item label="产品类型">
            <el-select v-model="sizeForm.sy" placeholder="申请事由">
              <el-option label="团队" value="group" />
              <el-option label="陪同" value="pt" />
              <el-option label="导游" value="dy" />
              <el-option label="媒体" value="mt" />
              <el-option label="踩点" value="cd" />
            </el-select>
          </el-form-item>
          <el-form-item label="景区名称">
            <el-select v-model="sizeForm.mp" placeholder="免票种类">
              <el-option label="接待免票" value="jiedai" />
              <el-option label="市场活动免票" value="shichang" />
              <el-option label="其他免票种类" value="qita" />
              <el-option label="不免票" value="none" />
            </el-select>
          </el-form-item>
          <el-form-item label="地区">
            <el-select v-model="sizeForm.sy" placeholder="申请事由">
              <el-option label="团队" value="group" />
              <el-option label="陪同" value="pt" />
              <el-option label="导游" value="dy" />
              <el-option label="媒体" value="mt" />
              <el-option label="踩点" value="cd" />
            </el-select>
          </el-form-item>
          <el-form-item label="主题">
            <el-select v-model="sizeForm.sy" placeholder="申请事由">
              <el-option label="团队" value="group" />
              <el-option label="陪同" value="pt" />
              <el-option label="导游" value="dy" />
              <el-option label="媒体" value="mt" />
              <el-option label="踩点" value="cd" />
            </el-select>
          </el-form-item>
          <el-form-item label="产品">
            <el-checkbox-group v-model="sizeForm.type">
              <el-checkbox-button label="陆地项目" name="type" />
              <el-checkbox-button label="水上乐园" name="type" />
              <el-checkbox-button label="测试。。。。" name="type" />
            </el-checkbox-group>
          </el-form-item>
          <el-form-item label="数量">
            <el-input v-model="sizeForm.name" />
          </el-form-item>
          <el-form-item label="价格">
            <el-input v-model="sizeForm.name" />
          </el-form-item>
          <el-form-item label="游玩日期"><span>几点不可购买？</span>
            <el-col :span="11">
              <el-date-picker v-model="sizeForm.date1" type="date" placeholder="选择日期" style="width: 100%;" />
            </el-col>
            <!--
            <el-col class="line" :span="2">-</el-col>
            <el-col :span="11">
              <el-time-picker v-model="sizeForm.date2" placeholder="选择时间" style="width: 100%;" />
            </el-col>-->
          </el-form-item>
          <el-divider><span>购买人信息</span></el-divider>
          <el-form-item label="购买人">

            <el-date-picker v-model="sizeForm.date1" type="date" placeholder="选择人员" style="width: 50%;" />&nbsp;<span>您还未实名认证,暂时无法购买&nbsp;&nbsp;</span>去实名<span>&nbsp;&nbsp;</span><span>绑定关系</span>

            <br>

            <el-date-picker v-model="sizeForm.date1" type="date" placeholder="姓名" style="width: 100%;" />
            <br>

            <el-date-picker v-model="sizeForm.date1" type="date" placeholder="手机号" style="width: 100%;" />

            <br>
            <!--
            <el-col class="line" :span="2">-</el-col>
            <el-col :span="11">
              <el-time-picker v-model="sizeForm.date2" placeholder="选择时间" style="width: 100%;" />
            </el-col>-->
          </el-form-item>
          <!--
          <el-form-item label="特殊资源">
          <el-radio-group v-model="sizeForm.resource" size="medium">
            <el-radio border label="线上品牌商赞助" />
            <el-radio border label="线下场地免费" />
          </el-radio-group>
          </el-form-item>
          -->
          <el-form-item label="申请备注">
            <el-input v-model="sizeForm.name" />
          </el-form-item>
          <el-form-item size="large">
            <el-button type="primary" @click="onSubmit">立即创建</el-button>
            <el-button>取消</el-button>
          </el-form-item>
        </el-form>
      </el-tab-pane>
      <el-tab-pane label="产品预订-供应商">
        <el-form ref="form" :model="sizeForm" label-width="80px" size="mini">
          <el-form-item label="" />
          <el-form-item label="产品">
            <el-checkbox-group v-model="sizeForm.type">
              <el-checkbox-button label="陆地项目" name="type" />
              <el-checkbox-button label="水上乐园" name="type" />
              <el-checkbox-button label="测试。。。。" name="type" />
            </el-checkbox-group>
          </el-form-item>
          <el-form-item label="数量">
            <el-input v-model="sizeForm.name" />
          </el-form-item>
          <el-form-item label="价格">
            <el-input v-model="sizeForm.name" />
          </el-form-item>
          <el-form-item label="游玩日期"><span>自动获取当前日期</span>
            <el-col :span="11">
              <el-date-picker v-model="sizeForm.date1" type="date" placeholder="选择日期" style="width: 100%;" />
            </el-col>
            <!--
            <el-col class="line" :span="2">-</el-col>
            <el-col :span="11">
              <el-time-picker v-model="sizeForm.date2" placeholder="选择时间" style="width: 100%;" />
            </el-col>-->
          </el-form-item>
          <el-form-item label="购买人">
            <br>
            <el-col :span="11">
              <el-date-picker v-model="sizeForm.date1" type="date" placeholder="姓名" style="width: 100%;" />
            </el-col>
            <br>
            <el-col :span="11">
              <el-date-picker v-model="sizeForm.date1" type="date" placeholder="手机号" style="width: 100%;" />
            </el-col>
            <br>
            <el-col :span="11">
              <el-date-picker v-model="sizeForm.date1" type="date" placeholder="身份证号" style="width: 100%;" />
            </el-col>
            <br>
            <!--
            <el-col class="line" :span="2">-</el-col>
            <el-col :span="11">
            <el-time-picker v-model="sizeForm.date2" placeholder="选择时间" style="width: 100%;" />
            </el-col>-->
          </el-form-item>
          <!--
          <el-form-item label="特殊资源">
            <el-radio-group v-model="sizeForm.resource" size="medium">
              <el-radio border label="线上品牌商赞助" />
              <el-radio border label="线下场地免费" />
            </el-radio-group>
          </el-form-item>
	-->
          <el-form-item label="申请备注">
            <el-input v-model="sizeForm.name" />
          </el-form-item>
          <el-form-item size="large">
            <el-button type="primary" @click="onSubmit">立即创建</el-button>
            <el-button>取消</el-button>
          </el-form-item>
        </el-form>
      </el-tab-pane>
      <el-tab-pane label="产品预订-零食售卖">
        <el-form ref="form" :model="sizeForm" label-width="80px" size="mini">
          <el-form-item label="" />
          <el-form-item label="产品名称">
            <el-select v-model="sizeForm.sy" placeholder="产品名称">
              <el-option label="哇哈哈纯净水" value="group" />
              <el-option label="红牛" value="pt" />
              <el-option label="导游" value="dy" />
              <el-option label="媒体" value="mt" />
              <el-option label="踩点" value="cd" />
            </el-select>
          </el-form-item>
          <el-form-item label="产品价格">
            <el-input v-model="sizeForm.name" value="2" />
          </el-form-item>
          <el-form-item label="产品单位">
            <el-select v-model="sizeForm.sy" placeholder="产品单位">
              <el-option label="件" value="group" />
              <el-option label="份" value="pt" />
              <el-option label="桶" value="dy" />
              <el-option label="箱" value="mt" />
            </el-select>
          </el-form-item>
          <el-form-item label="产品数量">
            <el-select v-model="sizeForm.sy" placeholder="产品数量">
              <el-option label="1" value="group" />
              <el-option label="2" value="pt" />
              <el-option label="3" value="dy" />
              <el-option label="4" value="mt" />
              <el-option label="5" value="cd" />
            </el-select>
          </el-form-item>
          <el-form-item label="产品总价格">
            <el-input v-model="sizeForm.name" />
          </el-form-item>
          <el-form-item size="large">
            <el-button type="primary" @click="onSubmit">立即创建</el-button>
            <el-button>取消</el-button>
          </el-form-item>
        </el-form>
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

