<template>
  <div class="app-container">

    <div>
      <FilenameOption v-model="filename" />
      <el-select v-model="namef" placeholder="验证类型">
        <el-option label="普通订单" value="group" />
        <el-option label="单项目订单" value="pt" />
      </el-select>
      <el-button :loading="downloadLoading" style="margin:0 0 20px 20px;" type="primary" icon="el-icon-document" @click="TestGet">Export Excel</el-button>
      <a href="https://panjiachen.github.io/vue-element-admin-site/feature/component/excel.html" target="_blank" style="margin-left:15px;">
        <el-tag type="info">Documentation</el-tag>
      </a>
    </div>

    <el-table v-loading="listLoading" :data="list" element-loading-text="拼命加载中" border fit highlight-current-row>
      <el-table-column align="center" label="Id" width="95">
        <template>
          <!--{{ scope.$index }}-->
          111
        </template>
      </el-table-column>
      <el-table-column label="订单号">
        <template slot-scope="scope">
          <!--{{ scope.row.orderId }}-->
          {{ scope.row.orderId }}
        </template>
      </el-table-column>
      <el-table-column label="创建时间" width="110" align="center">
        <template>
          <!-- <el-tag>{{ scope.row.orderId }}</el-tag>-->
        </template>
      </el-table-column>
      <el-table-column label="下单时间" width="110" align="center">
        <template>
          <!-- <el-tag>{{ scope.row.orderId }}</el-tag>-->
        </template>
      </el-table-column>
      <el-table-column label="有效期" width="115" align="center">
        <template>
          <!--{{ scope.row.orderId }}-->
        </template>
      </el-table-column>
      <el-table-column label="产品名称" width="115" align="center">
        <template>
          <!--{{ scope.row.orderId }}-->
        </template>
      </el-table-column>
      <el-table-column label="待验证数量" width="115" align="center">
        <template>
          <!--{{ scope.row.orderId }}-->
        </template>
      </el-table-column>
      <el-table-column label="已验证数量" width="115" align="center">
        <template>
          <!--{{ scope.row.orderId }}-->
        </template>
      </el-table-column>
      <el-table-column align="center" label="操作" width="220">
        <template>
          <i class="el-icon-time" />
          <!--<span>{{ scope.row.orderId | parseTime('{y}-{m}-{d} {h}:{i}') }}</span>-->
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
      bookType: 'xlsx',
      namef: ''
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
        const tHeader = ['Id', 'Title', 'Author', 'Readings', 'Date']
        const filterVal = ['id', 'title', 'author', 'pageviews', 'display_time']
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
