<template>
  <div class="app-container">
    <div>
      <div style="display:inline-block;">
        <label class="bah" style="padding-left:0;">查询内容:&nbsp;&nbsp;</label>
        <el-date-picker type="date" placeholder="选择日期" style="width: 15%;" />
        <el-date-picker type="date" placeholder="选择日期" style="width: 15%;" />
        <label class="radio-label" style="padding-left:0;">查询类型:</label>
        <el-select v-model="sizeForm" placeholder="查询类型">
          <el-option label="积分" value="jiedai" />
          <el-option label="零钱" value="shichang" />
        </el-select>
        <label class="radio-label" style="padding-left:0;">变动类型:</label>
        <el-select v-model="sizeForm" placeholder="变动类型">
          <el-option label="消费" value="jiedai" />
          <el-option label="充值" value="shichang" />
          <el-option label="提现" value="shichang" />
        </el-select>
        <el-button :loading="downloadLoading" style="margin:0 0 20px 20px;" type="primary" icon="el-icon-document" @click="TestGet">查询积分零钱</el-button>
      </div>
    </div>
    <el-table v-loading="listLoading" :data="list" element-loading-text="拼命加载中" border fit highlight-current-row>
      <!--<el-table-column align="center" label="Id" width="95" style="display:none">
        <template slot-scope="scope" >
          {{ scope.$index }}111
        </template>
      </el-table-column>-->
      <el-table-column label="变动时间" width="110">
        <template slot-scope="scope">
          <!--{{ scope.row.orderId }}-->
          {{ scope.row.orderId }}
        </template>
      </el-table-column>
      <el-table-column label="变动类型[积分/零钱]" width="255" align="center">
        <template slot-scope="scope">
          <el-tag>{{ scope.row.productName }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column label="变动类型[消费 充值 提现]" width="85" align="center">
        <template slot-scope="scope">
          {{ scope.row.productAttr }}
        </template>
      </el-table-column>
      <el-table-column label="变动用户" width="135" align="center">
        <template>
          2019-10-16 12:49
        </template>
      </el-table-column>
      <el-table-column label="备注" width="135" align="center">
        <template>
          2019-10-16 12:49
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { fetchList } from '@/api/article'
import { parseTime } from '@/utils'
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
