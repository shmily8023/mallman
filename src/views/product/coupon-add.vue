<template>

  <el-form ref="form" :model="sizeForm" label-width="80px" size="mini">
    <span>多次入场配置? 领取多少日有效？</span>
    <el-form-item label="" />
    <el-form-item label="产品">
      <el-checkbox-group v-model="sizeForm.type">
        <el-checkbox-button label="陆地项目" name="type" />
        <el-checkbox-button label="水上乐园" name="type" />
        <el-checkbox-button label="测试。。。。" name="type" />
      </el-checkbox-group>
    </el-form-item>
    <el-form-item label="优惠券名称">
      <el-input v-model="sizeForm.name" />
    </el-form-item>
    <el-form-item label="优惠券面额">
      <el-input v-model="sizeForm.name" />
    </el-form-item>
    <el-form-item label="总数量">
      <el-input v-model="sizeForm.name" />
    </el-form-item>
    <el-form-item label="每人限领">
      <el-input v-model="sizeForm.name" />
    </el-form-item>
    <el-form-item label="使用条件-消费多少">
      <el-input v-model="sizeForm.name" />
    </el-form-item>
    <el-form-item label="是否全场">
      <el-input v-model="sizeForm.name" />
    </el-form-item>
    <el-form-item label="产品编号">
      <el-input v-model="sizeForm.name" />
    </el-form-item>
    <el-form-item label="有效期"><span>自动获取当前日期</span>
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
