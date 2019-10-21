<template>
  <el-card class="box-card" width="100%">
    <el-tabs :before-leave="moreState">
      <el-tab-pane label="普通门票产品">
        <el-form ref="form" :model="sizeForm" label-width="80px" size="mini">
          <span>下拉框多选属性 配置属性价格||| 优惠券？？？</span>
          <el-form-item label="活动名称">
            <el-input v-model="sizeForm.name" />
          </el-form-item>
          <el-form-item label="砍价总次数">
            <el-input v-model="sizeForm.name" />
          </el-form-item>
          <el-form-item label="砍价范围">
            <el-input v-model="sizeForm.name" />
          </el-form-item>
          <el-form-item label="可砍最低价">
            <el-input v-model="sizeForm.name" />
          </el-form-item>
          <el-form-item label="价格">
            <el-input v-model="sizeForm.name" />
          </el-form-item>
          <el-form-item label="活动时间"><span>几点不可购买？</span>
            <el-col :span="11">
              <el-date-picker v-model="sizeForm.date1" type="date" placeholder="选择日期" style="width: 100%;" />
            </el-col>
            <!--
      <el-col class="line" :span="2">-</el-col>
      <el-col :span="11">
        <el-time-picker v-model="sizeForm.date2" placeholder="选择时间" style="width: 100%;" />
      </el-col>-->
          </el-form-item>
          <el-form-item label="是否需要关注公众号">
            <el-radio-group v-model="sizeForm.resource" size="medium">
              <el-radio border label="关注" />
              <el-radio border label="不关注" />
            </el-radio-group>
          </el-form-item>
          <el-form-item size="large">
            <el-button type="primary" @click="onSubmit">立即创建</el-button>
            <el-button>取消</el-button>
          </el-form-item>
        </el-form>
      </el-tab-pane>
      <el-tab-pane label="砍价">
        <el-form ref="form" :model="sizeForm" label-width="80px" size="mini">
          <span>多次入场配置? 是否可以改期 是否退款 退款配置 支付手续费 退款手续费</span>
          <el-form-item label="活动名称">
            <el-input v-model="sizeForm.name" />
          </el-form-item>
          <el-form-item label="砍价总次数">
            <el-input v-model="sizeForm.name" />
          </el-form-item>
          <el-form-item label="砍价范围">
            <el-input v-model="sizeForm.name" />
          </el-form-item>
          <el-form-item label="可砍最低价">
            <el-input v-model="sizeForm.name" />
          </el-form-item>
          <el-form-item label="价格">
            <el-input v-model="sizeForm.name" />
          </el-form-item>
          <el-form-item label="活动时间"><span>几点不可购买？</span>
            <el-col :span="11">
              <el-date-picker v-model="sizeForm.date1" type="date" placeholder="选择日期" style="width: 100%;" />
            </el-col>
            <!--
      <el-col class="line" :span="2">-</el-col>
      <el-col :span="11">
        <el-time-picker v-model="sizeForm.date2" placeholder="选择时间" style="width: 100%;" />
      </el-col>-->
          </el-form-item>
          <el-form-item label="是否需要关注公众号">
            <el-radio-group v-model="sizeForm.resource" size="medium">
              <el-radio border label="关注" />
              <el-radio border label="不关注" />
            </el-radio-group>
          </el-form-item>
          <el-form-item size="large">
            <el-button type="primary" @click="onSubmit">立即创建</el-button>
            <el-button>取消</el-button>
          </el-form-item>
        </el-form>
      </el-tab-pane>
      <el-tab-pane label="积分">
        <el-form ref="form" :model="sizeForm" label-width="80px" size="mini">
          <span>多次入场配置?</span>
          <el-form-item label="产品名称">
            <el-input v-model="sizeForm.name" />
          </el-form-item>
          <el-form-item label="所需积分">
            <el-input v-model="sizeForm.name" />
          </el-form-item>
          <el-form-item label="参与次数">
            <el-input v-model="sizeForm.name" />
          </el-form-item>
          <el-form-item label="是否全价">
            <el-input v-model="sizeForm.name" />
          </el-form-item>
          <el-form-item label="活动时间"><span>几点不可购买？</span>
            <el-col :span="11">
              <el-date-picker v-model="sizeForm.date1" type="date" placeholder="选择日期" style="width: 100%;" />
            </el-col>
          <!--
            <el-col class="line" :span="2">-</el-col>
            <el-col :span="11">
            <el-time-picker v-model="sizeForm.date2" placeholder="选择时间" style="width: 100%;" />
            </el-col>-->
          </el-form-item>
          <el-form-item label="是否需要关注公众号">
            <el-radio-group v-model="sizeForm.resource" size="medium">
              <el-radio border label="关注" />
              <el-radio border label="不关注" />
            </el-radio-group>
          </el-form-item>
          <el-form-item size="large">
            <el-button type="primary" @click="onSubmit">立即创建</el-button>
            <el-button>取消</el-button>
          </el-form-item>
        </el-form>
      </el-tab-pane>
      <el-tab-pane label="拼团">
        <label class="radio-label" style="padding-left:0;">三级总和不得超过100:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
        <br><br>
        <label class="switchRoles" style="padding-left:0;">配置开关:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
        <el-radio-group v-model="switchRoles">
          <el-radio-button label="开" />
          <el-radio-button label="关" />
        </el-radio-group>
        <br><br>
        <div style="display:inline-block;">
          <label class="level1" style="padding-left:0;">第一级:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
          <el-input v-model="level1" placeholder="请输入查询内容" style="width:345px;" prefix-icon="el-icon-document" />
        </div>
        <br><br>
        <div style="display:inline-block;">
          <label class="level2" style="padding-left:0;">第二级:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
          <el-input v-model="level2" placeholder="请输入查询内容" style="width:345px;" prefix-icon="el-icon-document" />
        </div>
        <br><br>
        <div style="display:inline-block;">
          <label class="level3" style="padding-left:0;">第三级:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
          <el-input v-model="level3" placeholder="请输入查询内容" style="width:345px;" prefix-icon="el-icon-document" />
        </div>
      </el-tab-pane>
      <el-tab-pane label="限时">
        <el-form ref="form" :model="sizeForm" label-width="80px" size="mini">
          <span>多次入场配置? 秒杀是否报名</span>
          <el-form-item label="" />
          <el-form-item label="计时方式">
            <el-checkbox-group v-model="sizeForm.type">
              <el-checkbox-button label="正计时" name="type" />
              <el-checkbox-button label="倒计时" name="type" />
              <el-checkbox-button label="测试。。。。" name="type" />
            </el-checkbox-group>
          </el-form-item>
          <el-form-item label="产品名称">
            <el-input v-model="sizeForm.name" />
          </el-form-item>
          <el-form-item label="开始时间">
            <el-input v-model="sizeForm.name" />
          </el-form-item>
          <el-form-item label="结束时间">
            <el-input v-model="sizeForm.name" />
          </el-form-item>
          <el-form-item label="秒杀价格">
            <el-input v-model="sizeForm.name" />
          </el-form-item>
          <el-form-item label="可秒人数">
            <el-input v-model="sizeForm.name" />
          </el-form-item>
          <el-form-item label="产品总数量">
            <el-input v-model="sizeForm.name" />
          </el-form-item>
          <el-form-item label="单用户一单最多">
            <el-input v-model="sizeForm.name" />
          </el-form-item>
          <el-form-item label="秒杀按钮提前显示时间">
            <span>自动获取当前日期</span>
            <el-col :span="11">
              <el-date-picker v-model="sizeForm.date1" type="date" placeholder="选择日期" style="width: 100%;" />
            </el-col>
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
          <el-form-item size="large">
            <el-button type="primary" @click="onSubmit">立即创建</el-button>
            <el-button>取消</el-button>
          </el-form-item>
        </el-form>
      </el-tab-pane>
      <el-tab-pane label="秒杀产品">
        <el-form ref="form" :model="sizeForm" label-width="80px" size="mini">
          <span>多次入场配置? 秒杀是否报名</span>
          <el-form-item label="" />
          <el-form-item label="产品">
            <el-checkbox-group v-model="sizeForm.type">
              <el-checkbox-button label="陆地项目" name="type" />
              <el-checkbox-button label="水上乐园" name="type" />
              <el-checkbox-button label="测试。。。。" name="type" />
            </el-checkbox-group>
          </el-form-item>
          <el-form-item label="秒杀库存">
            <el-input v-model="sizeForm.name" />
          </el-form-item>
          <el-form-item label="是否报名">
            <el-input v-model="sizeForm.name" />
          </el-form-item>
          <el-form-item label="每人每天次数">
            <el-input v-model="sizeForm.name" />
          </el-form-item>
          <el-form-item label="参加总次数">
            <el-input v-model="sizeForm.name" />
          </el-form-item>
          <el-form-item label="价格">
            <el-input v-model="sizeForm.name" />
          </el-form-item>
          <el-form-item label="开始结束时间">
            <span>自动获取当前日期</span>
            <el-col :span="11">
              <el-date-picker v-model="sizeForm.date1" type="date" placeholder="选择日期" style="width: 100%;" />
            </el-col>
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
          <el-form-item size="large">
            <el-button type="primary" @click="onSubmit">立即创建</el-button>
            <el-button>取消</el-button>
          </el-form-item>
        </el-form>
      </el-tab-pane>
      <el-tab-pane label="票付通">
        <el-form ref="form" :model="sizeForm" label-width="80px" size="mini">
          <span>多次入场配置? 秒杀是否报名</span>
          <el-form-item label="" />
          <el-form-item label="产品名">
            <el-checkbox-group v-model="sizeForm.type">
              <el-checkbox-button label="陆地项目" name="type" />
              <el-checkbox-button label="水上乐园" name="type" />
              <el-checkbox-button label="测试。。。。" name="type" />
            </el-checkbox-group>
          </el-form-item>
          <el-form-item label="TID">
            <el-input v-model="sizeForm.name" />
          </el-form-item>
          <el-form-item label="LID">
            <el-input v-model="sizeForm.name" />
          </el-form-item>
          <el-form-item label="AID">
            <el-input v-model="sizeForm.name" />
          </el-form-item>
          <el-form-item label="账号">
            <el-input v-model="sizeForm.name" />
          </el-form-item>
          <el-form-item label="密码">
            <el-input v-model="sizeForm.name" />
          </el-form-item>
          <el-form-item label="是否实名">
            <el-input v-model="sizeForm.name" />
          </el-form-item>
          <el-form-item label="产品介绍">
            <span>自动获取当前日期</span>
            <el-col :span="11">
              <el-date-picker v-model="sizeForm.date1" type="date" placeholder="选择日期" style="width: 100%;" />
            </el-col>
            <!--
              <el-col class="line" :span="2">是否实名</el-col>
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
          <el-form-item size="large">
            <el-button type="primary" @click="onSubmit">立即创建</el-button>
            <el-button>取消</el-button>
          </el-form-item>
        </el-form>
      </el-tab-pane>
      <el-tab-pane label="联合票">
        <el-form ref="form" :model="sizeForm" label-width="80px" size="mini">
          <span>多次入场配置? 秒杀是否报名</span>
          <el-form-item label="" />
          <el-form-item label="产品">
            <el-checkbox-group v-model="sizeForm.type">
              <el-checkbox-button label="陆地项目" name="type" />
              <el-checkbox-button label="水上乐园" name="type" />
              <el-checkbox-button label="测试。。。。" name="type" />
            </el-checkbox-group>
          </el-form-item>
          <el-form-item label="产品名">
            <el-input v-model="sizeForm.name" />
          </el-form-item>
          <el-form-item label="源产品Id">
            <el-input v-model="sizeForm.name" />
          </el-form-item>
          <el-form-item label="源产品2Id">
            <el-input v-model="sizeForm.name" />
          </el-form-item>
          <el-form-item label="源产品属性Id">
            <el-input v-model="sizeForm.name" />
          </el-form-item>
          <el-form-item label="源产品属性Id2">
            <el-input v-model="sizeForm.name" />
          </el-form-item>
          <el-form-item label="产品介绍">
            <span>自动获取当前日期</span>
            <el-col :span="11">
              <el-date-picker v-model="sizeForm.date1" type="date" placeholder="选择日期" style="width: 100%;" />
            </el-col>
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
          <el-form-item size="large">
            <el-button type="primary" @click="onSubmit">立即创建</el-button>
            <el-button>取消</el-button>
          </el-form-item>
        </el-form>
      </el-tab-pane>
      <el-tab-pane label="区域产品">
        <el-form ref="form" :model="sizeForm" label-width="80px" size="mini">
          <span>多次入场配置? 秒杀是否报名</span>
          <el-form-item label="" />
          <el-form-item label="产品名称">
            <el-input v-model="sizeForm.name" />
          </el-form-item>
          <el-form-item label="经度">
            <el-input v-model="sizeForm.name" />
          </el-form-item>
          <el-form-item label="纬度">
            <el-input v-model="sizeForm.name" />
          </el-form-item>
          <el-form-item label="经度幅度">
            <el-input v-model="sizeForm.name" />
          </el-form-item>
          <el-form-item label="维度幅度">
            <el-input v-model="sizeForm.name" />
          </el-form-item>
          <el-form-item label="产品地区">
            <el-input v-model="sizeForm.name" />
          </el-form-item>
          <el-form-item label="开始结束时间">
            <span>自动获取当前日期</span>
            <el-col :span="11">
              <el-date-picker v-model="sizeForm.date1" type="date" placeholder="选择日期" style="width: 100%;" />
            </el-col>
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
          <el-form-item size="large">
            <el-button type="primary" @click="onSubmit">立即创建</el-button>
            <el-button>取消</el-button>
          </el-form-item>
        </el-form>
      </el-tab-pane>
      <el-tab-pane name="more" class="more-btn">
        <span slot="label"><router-link to="/apply">基本实物产品</router-link></span>
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

