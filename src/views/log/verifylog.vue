<template>
  <div class="app-container">

    <div>
      <FilenameOption v-model="filename" />
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
      <el-table-column label="验证用户" width="110">
        <template slot-scope="scope">
          <!--{{ scope.row.orderId }}-->
          {{ scope.row.orderId }}
        </template>
      </el-table-column>
      <el-table-column label="验证时间" width="255" align="center">
        <template slot-scope="scope">
          <el-tag>{{ scope.row.productName }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column label="验证订单" width="85" align="center">
        <template slot-scope="scope">
          {{ scope.row.productAttr }}
        </template>
      </el-table-column>
      <el-table-column label="验证途径" width="135" align="center">
        <template>
          2019-10-16 12:49
        </template>
      </el-table-column>
      <el-table-column label="验证产品" width="135" align="center">
        <template>
          2019-10-16 12:49
        </template>
      </el-table-column>
      <el-table-column label="验证属性" width="70" align="center">
        <template slot-scope="scope">
          {{ scope.row.userPrice }}
        </template>
      </el-table-column>
      <el-table-column label="验证数量" width="50" align="center">
        <template slot-scope="scope">
          {{ scope.row.userNum }}
        </template>
      </el-table-column>
      <el-table-column label="验证设备编码" width="90" align="center">
        <template slot-scope="scope">
          {{ scope.row.userTotalPrice }}
        </template>
      </el-table-column>
      <el-table-column label="验证接口信息" width="80" align="center">
        <template slot-scope="scope">
          {{ scope.row.userName }}
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { fetchList } from '@/api/article'
import { parseTime } from '@/utils'
// options components
import FilenameOption from './components/FilenameOption'

export default {
  name: 'ExportExcel',
  components: { FilenameOption },
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
