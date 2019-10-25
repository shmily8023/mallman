<template>
  <div class="app-container">

    <div>
      <el-date-picker type="date" placeholder="选择日期" style="width: 15%;" />
      <el-date-picker type="date" placeholder="选择日期" style="width: 15%;" />
      <el-input style="width: 15%;" placeholder="APIID" />
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
      <el-table-column label="调用时间" width="255" align="center">
        <template slot-scope="scope">
          <el-tag>{{ scope.row.productName }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column label="调用用户" width="85" align="center">
        <template slot-scope="scope">
          {{ scope.row.productAttr }}
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
