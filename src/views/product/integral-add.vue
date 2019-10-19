<template>

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
</template>
<script>
export default {
  data() {
    return {
      sizeForm: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      }
    }
  },
  methods: {
    onSubmit() {
      console.log('submit!')
    }
  }
}
</script>
