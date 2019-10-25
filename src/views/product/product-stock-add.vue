<template>
  <el-card class="box-card" width="100%">
    <el-tabs :before-leave="moreState">
      <el-tab-pane label="产品库存管理">
        <el-form ref="form" :model="sizeForm" label-width="160px" size="mini">
          <span> 查询非虚拟的产品 ，添加库存</span>
          <el-form-item label="产品名称">
            <el-cascader placeholder="试试搜索：指南" :options="options2" filterable />
          </el-form-item>
          <el-form-item label="当前库存[各属性]">
            <el-input v-model="sizeForm.name" />
          </el-form-item>
          <el-form-item label="增加库存">
            <el-select v-model="value1price" placeholder="请选择">
              <el-option v-for="item in options3" :key="item.value" :label="item.label" :value="item.value" /></el-select>
          </el-form-item>
          <el-form-item label="增加数量"><span>0</span>
            <el-col :span="11">
              <el-date-picker v-model="sizeForm.date1" type="date" placeholder="选择日期" style="width: 100%;" />
            </el-col>
            <!--
      <el-col class="line" :span="2">-</el-col>
      <el-col :span="11">
        <el-time-picker v-model="sizeForm.date2" placeholder="选择时间" style="width: 100%;" />
      </el-col>-->
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
      'value1price': [],
      'tabs': [],
      'lxqdn': '',
      'validateFlag': '',
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
      options3: [{
        value: '选项1',
        label: '儿童票'
      }, {
        value: '选项2',
        label: '学生票'
      }, {
        value: '选项3',
        label: '成人票'
      }, {
        value: '选项4',
        label: '双人成人'
      }, {
        value: '选项5',
        label: '教师票'
      }, {
        value: '选项6',
        label: '军人票'
      }, {
        value: '选项7',
        label: '两大一小票'
      }],
      options2: [{
        value: 'zhinan',
        label: '指南',
        children: [{
          value: 'shejiyuanze',
          label: '设计原则',
          children: [{
            value: 'yizhi',
            label: '一致'
          }, {
            value: 'fankui',
            label: '反馈'
          }, {
            value: 'xiaolv',
            label: '效率'
          }, {
            value: 'kekong',
            label: '可控'
          }]
        }, {
          value: 'daohang',
          label: '导航',
          children: [{
            value: 'cexiangdaohang',
            label: '侧向导航'
          }, {
            value: 'dingbudaohang',
            label: '顶部导航'
          }]
        }]
      }, {
        value: 'zujian',
        label: '组件',
        children: [{
          value: 'basic',
          label: 'Basic',
          children: [{
            value: 'layout',
            label: 'Layout 布局'
          }, {
            value: 'color',
            label: 'Color 色彩'
          }, {
            value: 'typography',
            label: 'Typography 字体'
          }, {
            value: 'icon',
            label: 'Icon 图标'
          }, {
            value: 'button',
            label: 'Button 按钮'
          }]
        }, {
          value: 'form',
          label: 'Form',
          children: [{
            value: 'radio',
            label: 'Radio 单选框'
          }, {
            value: 'checkbox',
            label: 'Checkbox 多选框'
          }, {
            value: 'input',
            label: 'Input 输入框'
          }, {
            value: 'input-number',
            label: 'InputNumber 计数器'
          }, {
            value: 'select',
            label: 'Select 选择器'
          }, {
            value: 'cascader',
            label: 'Cascader 级联选择器'
          }, {
            value: 'switch',
            label: 'Switch 开关'
          }, {
            value: 'slider',
            label: 'Slider 滑块'
          }, {
            value: 'time-picker',
            label: 'TimePicker 时间选择器'
          }, {
            value: 'date-picker',
            label: 'DatePicker 日期选择器'
          }, {
            value: 'datetime-picker',
            label: 'DateTimePicker 日期时间选择器'
          }, {
            value: 'upload',
            label: 'Upload 上传'
          }, {
            value: 'rate',
            label: 'Rate 评分'
          }, {
            value: 'form',
            label: 'Form 表单'
          }]
        }, {
          value: 'data',
          label: 'Data',
          children: [{
            value: 'table',
            label: 'Table 表格'
          }, {
            value: 'tag',
            label: 'Tag 标签'
          }, {
            value: 'progress',
            label: 'Progress 进度条'
          }, {
            value: 'tree',
            label: 'Tree 树形控件'
          }, {
            value: 'pagination',
            label: 'Pagination 分页'
          }, {
            value: 'badge',
            label: 'Badge 标记'
          }]
        }, {
          value: 'notice',
          label: 'Notice',
          children: [{
            value: 'alert',
            label: 'Alert 警告'
          }, {
            value: 'loading',
            label: 'Loading 加载'
          }, {
            value: 'message',
            label: 'Message 消息提示'
          }, {
            value: 'message-box',
            label: 'MessageBox 弹框'
          }, {
            value: 'notification',
            label: 'Notification 通知'
          }]
        }, {
          value: 'navigation',
          label: 'Navigation',
          children: [{
            value: 'menu',
            label: 'NavMenu 导航菜单'
          }, {
            value: 'tabs',
            label: 'Tabs 标签页'
          }, {
            value: 'breadcrumb',
            label: 'Breadcrumb 面包屑'
          }, {
            value: 'dropdown',
            label: 'Dropdown 下拉菜单'
          }, {
            value: 'steps',
            label: 'Steps 步骤条'
          }]
        }, {
          value: 'others',
          label: 'Others',
          children: [{
            value: 'dialog',
            label: 'Dialog 对话框'
          }, {
            value: 'tooltip',
            label: 'Tooltip 文字提示'
          }, {
            value: 'popover',
            label: 'Popover 弹出框'
          }, {
            value: 'card',
            label: 'Card 卡片'
          }, {
            value: 'carousel',
            label: 'Carousel 走马灯'
          }, {
            value: 'collapse',
            label: 'Collapse 折叠面板'
          }]
        }]
      }, {
        value: 'ziyuan',
        label: '资源',
        children: [{
          value: 'axure',
          label: 'Axure Components'
        }, {
          value: 'sketch',
          label: 'Sketch Templates'
        }, {
          value: 'jiaohu',
          label: '组件交互文档'
        }]
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

