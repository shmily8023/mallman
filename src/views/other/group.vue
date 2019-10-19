<template>
  <el-form ref="form" :model="sizeForm" label-width="80px" size="mini">
    <el-form-item label="" />
    <el-form-item label="申请景区">
      <el-select v-model="sizeForm.sy" placeholder="申请事由">
        <el-option label="团队" value="group" />
        <el-option label="陪同" value="pt" />
        <el-option label="导游" value="dy" />
        <el-option label="媒体" value="mt" />
        <el-option label="踩点" value="cd" />
      </el-select>
    </el-form-item>
    <el-form-item label="免票种类">
      <el-select v-model="sizeForm.mp" placeholder="免票种类">
        <el-option label="接待免票" value="jiedai" />
        <el-option label="市场活动免票" value="shichang" />
        <el-option label="其他免票种类" value="qita" />
        <el-option label="不免票" value="none" />
      </el-select>
    </el-form-item>
    <el-form-item label="申请事由">
      <el-select v-model="sizeForm.sy" placeholder="申请事由">
        <el-option label="团队" value="group" />
        <el-option label="陪同" value="pt" />
        <el-option label="导游" value="dy" />
        <el-option label="媒体" value="mt" />
        <el-option label="踩点" value="cd" />
      </el-select>
    </el-form-item>
    <el-form-item label="申请组织">
      <el-input v-model="sizeForm.name" />
    </el-form-item>
    <el-form-item label="申请项目">
      <el-checkbox-group v-model="sizeForm.type">
        <el-checkbox-button label="陆地项目" name="type" />
        <el-checkbox-button label="水上乐园" name="type" />
        <el-checkbox-button label="测试。。。。" name="type" />
      </el-checkbox-group>
    </el-form-item>
    <el-form-item label="出发时间">
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
