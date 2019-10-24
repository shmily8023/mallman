<template>
  <el-form inline label-position="right" label-width="190px" class="query-form">
    <el-form-item :label="姓名" prop="name">
      <el-select v-model="value" placeholder="请选择" popper-class="optionsContent" filterable :filter-method="filter" default-first-option @change="showMessage($event)" @keyup.native="showOption">
        <template slot="prefix">
          <span class="prefixSlot">互联网大佬</span>
        </template>
        <template>
          <div v-show="optionVisible" class="tableHeader">
            <span style="float: left">公司</span>
            <span style="float: left;">姓名</span>
            <span style="float: left;">毕业院校</span>
          </div>
        </template>
        <el-option v-for="item in options" v-show="optionVisible" :key="item.value" :label="item.label" :value="item" :disabled="item.disabled">
          <span style="float: left">{{ item.company }}</span>
          <span style="float: left">{{ item.label }}</span>
          <span style="float: left">{{ item.school }}</span>
        </el-option>
      </el-select>
    </el-form-item>
    <span>公司：{{ v_company }}</span><span>姓名：{{ v_label }}</span><span>毕业院校：{{ v_school }}</span>
  </el-form>
</template>
<script>
export default {
  name: 'App',
  data() {
    return {
      optionVisible: false,
      v_company: '',
      v_label: '',
      v_school: '',
      options: [{
        value: '选项1',
        company: '腾讯',
        label: '马化腾',
        school: '深圳大学',
        szm: 'mht'
      }, {
        value: '选项2',
        company: '美团',
        label: '王兴',
        school: '清华大学',
        szm: 'wx'
      }, {
        value: '选项3',
        company: '小米',
        label: '雷军',
        school: '武汉大学',
        szm: 'lj'
      }, {
        value: '选项4',
        company: '今日头条',
        label: '张一鸣',
        school: '南开大学',
        szm: 'zym'
      }, {
        value: '选项5',
        company: '红杉资本',
        label: '沈南鹏',
        school: '耶鲁大学',
        szm: 'snp'
      }],
      value: '马化腾',
      multipleSelection2: []
    }
  },
  mounted() {
    // 保留数据源
    this.copy = Object.assign(this.options)
    document.addEventListener('keydown', this.FNine)
    this.$nextTick(() => {
      this.originalStylesheetCount = document.styleSheets.length
    })
  },
  methods: {
    handleSelectionChange(val) {
      var arr = []
      val.forEach((val, index) => {
        this.tableData.forEach((v, i) => {
        // id 是每一行的数据id
          if (val.id === v.id) {
            arr.push(i)
          }
        })
      })
      this.multipleSelection2 = arr
    },
    filter(v) {
      // 对绑定数据赋值
      this.options = this.copy.filter((item) => {
        // 如果直接包含输入值直接返回true
        const val = v.toLowerCase()
        if (item.label.indexOf(val) !== -1) return true
        if (item.szm.substring(0, 1).indexOf(val) !== -1) return true
        if (item.szm.indexOf(val) !== -1) return true
      })
    },
    showOption() {
      const inputContent = document.getElementsByClassName('el-input__inner')[0].value
      console.log(inputContent.length)
      if (inputContent.length !== 0) {
        this.optionVisible = true
      }
    },
    showMessage(e) {
      console.log(e)
      this.v_company = e.company
      this.v_label = e.label
      this.v_school = e.school
    }
  }
}
</script>
<style lang = "scss">
  .rowStyle{
    background-color:#f0f9eb!important
  }
  .el-select-dropdown__item span{
    width:100px;
    text-align:center;
  }
  .el-input--prefix .el-input__inner {
    padding-left: 110px
  }
  .prefixSlot{
    height: 36px;
    width: 90px;
    display: block;
    line-height: 36px;
    border-right: 1px solid #f1f1f1;
  }
  .tableHeader{
    background:rgb(64,158,255);
    color:#fff;
    height: 40px;
    line-height: 40px;
    font-size:14px;
    font-family:HiraginoSansGB-W3;
    font-weight:600;
    padding: 0 20px;
  }
  .tableHeader span{
    width:100px;
    text-align: center;
  }
  .title{
    margin-left:20px;
    width:400px;
  }
  .title span{
    display:block;
    width:150px;
    margin-bottom: 20px;
    font-weight: 800;
  }
  .popper__arrow{
    display: none!important;
  }
  .el-select-dropdown{
    box-shadow: none!important;
    min-width: 0px;
    border:0!important;
  }
  .el-scrollbar__view{
    padding:0;
    background: #ebf3ff;
  }
</style>
