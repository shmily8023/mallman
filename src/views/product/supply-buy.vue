<template>

  <el-form ref="form" :model="sizeForm" label-width="80px" size="mini">
    <span>多次入场配置?</span>
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
    <el-divider><span>购买人信息</span></el-divider>
    <el-form-item label="购买人">
      <el-col :span="11">
        <el-date-picker v-model="sizeForm.date1" type="date" placeholder="选择人员" style="width: 50%;" />&nbsp;&nbsp;<span>绑定关系</span>
      </el-col>
      <br>
      <el-col :span="11">
        <el-date-picker v-model="sizeForm.date1" type="date" placeholder="姓名" style="width: 100%;" />
      </el-col>
      <br>
      <el-col :span="11">
        <el-date-picker v-model="sizeForm.date1" type="date" placeholder="手机号" style="width: 100%;" />
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
