<template>
  <div class="app-container">

    <div>
      <div style="display:inline-block;">
        <label class="radio-label" style="padding-left:0;">查询内容: </label>
        <el-input v-model="filename" placeholder="请输入查询内容" style="width:345px;" prefix-icon="el-icon-document" />
      </div>
      <!--<AutoWidthOption v-model="autoWidth" />-->
      <!--<BookTypeOption v-model="bookType" />-->
      <el-button :loading="downloadLoading" style="margin:0 0 20px 20px;" type="primary" icon="el-icon-document" @click="TestGet">查询</el-button>
      <el-button :loading="downloadLoading" style="margin:0 0 20px 20px;" type="primary" icon="el-icon-document" @click="handleDownload">导出</el-button>
      <a href="https://panjiachen.github.io/vue-element-admin-site/feature/component/excel.html" target="_blank" style="margin-left:15px;"><el-tag type="info">重发短信..</el-tag></a>
    </div>
    <el-table v-loading="listLoading" :data="list" element-loading-text="拼命加载中" border fit highlight-current-row>
      <!--<el-table-column align="center" label="Id" width="95" style="display:none">
        <template slot-scope="scope" >
          {{ scope.$index }}111
        </template>
      </el-table-column>-->
      <el-table-column label="订单号" width="110">
        <template slot-scope="scope">
          <!--{{ scope.row.orderId }}-->
          {{ scope.row.orderId }}
        </template>
      </el-table-column>
      <el-table-column label="产品名称" width="255" align="center">
        <template slot-scope="scope">
          <el-tag>{{ scope.row.productName }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column label="产品属性" width="85" align="center">
        <template slot-scope="scope">
          {{ scope.row.productAttr }}
        </template>
      </el-table-column>
      <el-table-column label="下单时间" width="135" align="center">
        <template>
          2019-10-16 12:49
        </template>
      </el-table-column>
      <el-table-column label="完成时间" width="135" align="center">
        <template>
          2019-10-16 12:49
        </template>
      </el-table-column>
      <el-table-column label="单价" width="70" align="center">
        <template slot-scope="scope">
          {{ scope.row.userPrice }}
        </template>
      </el-table-column>
      <el-table-column label="数量" width="50" align="center">
        <template slot-scope="scope">
          {{ scope.row.userNum }}
        </template>
      </el-table-column>
      <el-table-column label="总价" width="90" align="center">
        <template slot-scope="scope">
          {{ scope.row.userTotalPrice }}
        </template>
      </el-table-column>
      <el-table-column label="用户姓名" width="80" align="center">
        <template slot-scope="scope">
          {{ scope.row.userName }}
        </template>
      </el-table-column>
      <el-table-column label="用户身份证号" width="175" align="center">
        <template slot-scope="scope">
          {{ scope.row.userCardId }}
        </template>
      </el-table-column>
      <el-table-column label="用户手机号" width="115" align="center">
        <template slot-scope="scope">
          {{ scope.row.userPhone }}
        </template>
      </el-table-column>
      <el-table-column label="操作[..]" width="115" align="center">
        <template slot-scope="scope">
          {{ scope.row.orderId }}
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { fetchList } from '@/api/article'
import { parseTime } from '@/utils'
// options components

export default {
  name: 'ExportExcel',
  data() {
    return {
      list: null,
      listLoading: true,
      downloadLoading: false,
      filename: '',
      autoWidth: true,
      bookType: 'xlsx'
    }
  },
  created() {
    this.listLoading = false
    this.fetchData()
  },
  methods: {
    async TestGet() {
      this.$http
        .get('http://114.116.234.15:8080/a/r.jsp')
        .then(res => {
          this.list = res.data
          this.listLoading = false
          console.log(res)
        })
        .catch(error => {
          alert(error)
        })
    },
    fetchData() {
      this.listLoading = true
      fetchList().then(response => {
        this.list = response.data.items
        this.listLoading = false
      })
    },
    handleDownload() {
      this.downloadLoading = true
      import('@/vendor/Export2Excel').then(excel => {
        const tHeader = ['订单号', '产品名称', '产品属性', '下单时间', '完成时间', '单价', '数量', '总价', '用户姓名', '用户身份证号', '用户手机号']
        const filterVal = ['orderId', 'productName', 'productAttr', 'productName', 'productName', 'userPrice', 'userNum', 'userTotalPrice', 'userName', 'userCardId', 'userPhone']
        const list = this.list
        const data = this.formatJson(filterVal, list)
        excel.export_json_to_excel({
          header: tHeader,
          data,
          filename: this.filename,
          autoWidth: this.autoWidth,
          bookType: this.bookType
        })
        this.downloadLoading = false
      })
    },
    formatJson(filterVal, jsonData) {
      return jsonData.map(v => filterVal.map(j => {
        if (j === 'timestamp') {
          return parseTime(v[j])
        } else {
          return v[j]
        }
      }))
    }
  }
}
</script>

<style>
.radio-label {
  font-size: 14px;
  color: #606266;
  line-height: 40px;
  padding: 0 12px 0 30px;
}
</style>
