<template>
  <el-card class="box-card" width="100%">
    <el-tabs :before-leave="moreState">
      <el-tab-pane label="基本配置">
        <div style="display:inline-block;">
          <label class="radio-label" style="padding-left:0;">网站开关:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
          <label class="radio-label" style="padding-left:0;" />
          <label class="radio-label" style="padding-left:0;">意外险处理。判断抖音 快手环境。接口管理 接口停用。积分 积分类型:消费积分 签到积分 推荐积分 是否支持 动态获取停车场数据 附近停车场 [仅展示5个]</label>
          <el-radio-group v-for="item in tabs" :key="item.id" v-model="tabPosition" @click="toggleTab(item.id)">
            <el-radio-button :label="item.name" />
          </el-radio-group>
        </div>
        <br><br>
        <div style="display:inline-block;">
          <label class="webname" style="padding-left:0;">网站名称:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
          <el-input v-model="webname" placeholder="请输入查询内容" style="width:200px;" prefix-icon="el-icon-document" />
        </div>
        <div style="display:inline-block;">
          <label class="sitecontent" style="padding-left:0;">站点描述:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
          <el-input v-model="sitecontent" placeholder="请输入查询内容" style="width:200px;" prefix-icon="el-icon-document" />
        </div>
        <div style="display:inline-block;">
          <label class="bah" style="padding-left:0;">网站备案号:&nbsp;&nbsp;&nbsp;</label>
          <el-input v-model="bah" placeholder="请输入查询内容" style="width:200px;" prefix-icon="el-icon-document" />
        </div>
        <br><br>
        <div style="display:inline-block;">
          <label class="bah" style="padding-left:0;">公司地址:&nbsp;&nbsp;&nbsp;</label>
          <el-input v-model="bah" placeholder="请输入查询内容" style="width:500px;" prefix-icon="el-icon-document" />
        </div>
        <div style="display:inline-block;">
          <label class="bah" style="padding-left:0;">联系电话:&nbsp;&nbsp;&nbsp;</label>
          <el-input v-model="lxdh" placeholder="请输入查询内容" style="width:345px;" prefix-icon="el-icon-document" />
        </div>
        <br><br>
        <div style="display:inline-block;">
          <label class="radio-label" style="padding-left:0;">资源存储地址:</label>
          <el-select v-model="sizeForm" placeholder="存储地址">
            <el-option label="本地存储" value="jiedai" />
            <el-option label="阿里云存储OSS" value="shichang" />
            <el-option label="腾讯云COS" value="qita" />
            <el-option label="七牛云存储" value="none" />
          </el-select>
        </div>
        <div style="display:inline-block;">
          <label class="zkbl" style="padding-left:0;">引导关注公众号:&nbsp;&nbsp;&nbsp;</label>
          <el-input v-model="zkbl" placeholder="首页通知内容" style="width:345px;" prefix-icon="el-icon-document" />
        </div>
        <br><br>
        <hr>
        <div style="display:inline-block;">
          <label class="xffx" style="padding-left:0;">消费返现:&nbsp;&nbsp;&nbsp;</label>
          <el-input v-model="xffx" placeholder="请输入查询内容" style="width:200px;" prefix-icon="el-icon-document" />
        </div>
        <div style="display:inline-block;">
          <label class="zkbl" style="padding-left:0;">抵扣比例 积分和虚拟币:&nbsp;&nbsp;&nbsp;</label>
          <el-input v-model="zkbl" placeholder="请输入查询内容" style="width:200px;" prefix-icon="el-icon-document" />
        </div>
        <div style="display:inline-block;">
          <label class="zkbl" style="padding-left:0;">首次关注赠送积分:&nbsp;&nbsp;&nbsp;</label>
          <el-input v-model="zkbl" placeholder="请输入查询内容" style="width:200px;" prefix-icon="el-icon-document" />
        </div>
        <hr>
        <label class="radio-label" style="padding-left:0;">内部通知/首页通知: </label><br>
        <div style="display:inline-block;">
          <label class="zkbl" style="padding-left:0;">首页通知内容:&nbsp;&nbsp;&nbsp;</label>
          <el-input v-model="zkbl" placeholder="首页通知内容" style="width:345px;" prefix-icon="el-icon-document" />
        </div>

        <div style="display:inline-block;">
          <label class="zkbl" style="padding-left:0;">内部通知内容:&nbsp;&nbsp;&nbsp;</label>
          <el-input v-model="zkbl" placeholder="内部通知内容" style="width:345px;" prefix-icon="el-icon-document" />
        </div>
        <hr>
        <div style="display:inline-block;">
          <label class="zkbl" style="padding-left:0;">未支付多长时间取消:&nbsp;&nbsp;&nbsp;</label>
          <el-input v-model="zkbl" placeholder="内部通知内容" style="width:200px;" prefix-icon="el-icon-document" />
        </div>
        <div style="display:inline-block;">
          <label class="zkbl" style="padding-left:0;">支付手续费:&nbsp;&nbsp;&nbsp;</label>
          <el-input v-model="zkbl" placeholder="内部通知内容" style="width:200px;" prefix-icon="el-icon-document" />
        </div>
        <div style="display:inline-block;">
          <label class="zkbl" style="padding-left:0;">退款手续费:&nbsp;&nbsp;&nbsp;</label>
          <el-input v-model="zkbl" placeholder="内部通知内容" style="width:200px;" prefix-icon="el-icon-document" />
        </div>
      </el-tab-pane>
      <el-tab-pane label="积分">
        <div style="display:inline-block;">
          <label class="switchRoles2" style="padding-left:0;">积分开关:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
          <el-radio-group v-model="switchRoles2">
            <el-radio-button label="开" />
            <el-radio-button label="关" />
          </el-radio-group>
          <br><br>
          <div style="display:inline-block;">
            <label class="lxqdn" style="padding-left:0;">连续签到几天:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
            <el-input v-model="lxqdn" placeholder="请输入查询内容" style="width:345px;" prefix-icon="el-icon-document" />
          </div>
          <br><br>
          <div style="display:inline-block;">
            <label class="lxqdv" style="padding-left:0;">连续签到奖励:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
            <el-input v-model="lxqdv" placeholder="请输入查询内容" style="width:345px;" prefix-icon="el-icon-document" />
          </div>
          <br><br>
          <hr>
          <el-button @click="addData()">增加数据</el-button>
          <div style="display:inline-block; width: 1500px">
            <el-table ref="multipleTable" :data="tableData3" tooltip-effect="dark" style="" @selection-change="handleSelectionChange">
              <el-table-column type="selection" width="120"><template slot-scope="scope">{{ scope.row.date }}</template></el-table-column>
              <el-table-column prop="name" label="签到天数" width="120" />
              <el-table-column prop="address" label="签到值" width="400" show-overflow-tooltip />
              <el-table-column label="操作" width="400" show-overflow-tooltip>
                <template slot-scope="scope">
                  <el-button type="primary" @click="dialogFormVisible = true">编辑</el-button>
                  <el-button type="danger" @click.native="delS(scope.row)">删除</el-button>
                </template>
              </el-table-column>
            </el-table>
            <el-dialog title="编辑签到配置" :visible.sync="dialogFormVisible" @closed="handleClose">
              <el-form ref="ruleForm" :model="form" :rules="rules">
                <template>
                  <el-form-item label="签到天数" :label-width="formLabelWidth" prop="name">
                    <el-input>(scope.row.date)</el-input>
                  </el-form-item>
                  <el-form-item label="签到值" :label-width="formLabelWidth">
                    <el-input>(scope.row.name)</el-input>
                  </el-form-item>
                </template>
              </el-form>
              <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="handleSave">确 定</el-button>
              </div>
            </el-dialog>
          </div>
          <div style="margin-top: 20px">
            <!--<el-button @click="delMulData()">批量删除</el-button>-->
            <!--<el-button @click="prints()">打印</el-button>-->
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane label="三级配置">
        <label class="radio-label" style="padding-left:0;">三级总和不得超过100:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
        <br><br>
        <label class="switchRoles" style="padding-left:0;">配置开关:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
        <el-radio-group v-model="switchRoles">
          <el-radio-button label="开" />
          <el-radio-button label="关" />
        </el-radio-group>
        <br><br>
        <div style="display:inline-block;">
          <label class="level1" style="padding-left:0;">第一级:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
          <el-input v-model="level1" placeholder="请输入查询内容" style="width:345px;" prefix-icon="el-icon-document" />
        </div>
        <br><br>
        <div style="display:inline-block;">
          <label class="level2" style="padding-left:0;">第二级:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
          <el-input v-model="level2" placeholder="请输入查询内容" style="width:345px;" prefix-icon="el-icon-document" />
        </div>
        <br><br>
        <div style="display:inline-block;">
          <label class="level3" style="padding-left:0;">第三级:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
          <el-input v-model="level3" placeholder="请输入查询内容" style="width:345px;" prefix-icon="el-icon-document" />
        </div>
      </el-tab-pane>
      <el-tab-pane label="广告管理">
        <label class="radio-label" style="padding-left:0;">三级总和不得超过100:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
        <br><br>
        <el-form inline label-width="300px">
          <label class="level2" style="padding-left:0;">产品页:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
          <el-form-item :label="name">
            <el-select v-model="value" placeholder="请选择" popper-class="optionsContent" filterable :filter-method="filter" default-first-option @change="showMessage($event)" @keyup.native="showOption">
              <template slot="prefix">
                <span class="prefixSlot">选择产品</span>
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
          <span><label class="level2" style="padding-left:0;">CPC:&nbsp;&nbsp;&nbsp;</label>{{ v_company }}</span><label class="level2" style="padding-left:0;">CPM:&nbsp;&nbsp;&nbsp;</label><span>{{ v_label }}</span><label class="level2" style="padding-left:0;">CPI:&nbsp;&nbsp;&nbsp;</label><span>{{ v_school }}</span>
          <el-button type="info" plain>停用</el-button>
          <br>
          <label class="level2" style="padding-left:0;">增加内容:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
          <el-input v-model="level2" placeholder="请输入查询内容" style="width:200px;" prefix-icon="el-icon-document" />
          <el-input v-model="level2" placeholder="请输入查询内容" style="width:200px;" prefix-icon="el-icon-document" />
          <el-button type="info" plain>增加</el-button>
        </el-form>
        <hr>
        <el-form inline label-width="300px">
          <label class="level2" style="padding-left:0;">验证页:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
          <el-form-item :label="姓名">
            <el-select v-model="value" placeholder="请选择" popper-class="optionsContent" filterable :filter-method="filter" default-first-option @change="showMessage($event)" @keyup.native="showOption">
              <template slot="prefix">
                <span class="prefixSlot">选择产品</span>
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
          <span><label class="level2" style="padding-left:0;">CPC:&nbsp;&nbsp;&nbsp;</label>{{ v_company }}</span><label class="level2" style="padding-left:0;">CPM:&nbsp;&nbsp;&nbsp;</label><span>{{ v_label }}</span><label class="level2" style="padding-left:0;">CPI:&nbsp;&nbsp;&nbsp;</label><span>{{ v_school }}</span>
          <el-button type="info" plain>停用</el-button>
          <br>
          <label class="level2" style="padding-left:0;">增加内容:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
          <el-input v-model="level2" placeholder="请输入查询内容" style="width:200px;" prefix-icon="el-icon-document" />
          <el-input v-model="level2" placeholder="请输入查询内容" style="width:200px;" prefix-icon="el-icon-document" />
          <el-button type="info" plain>增加</el-button>
        </el-form>
        <hr>
        <el-form inline label-width="300px">
          <label class="level2" style="padding-left:0;">支付后打开页面:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
          <el-form-item :label="姓名">
            <el-select v-model="value" placeholder="请选择" popper-class="optionsContent" filterable :filter-method="filter" default-first-option @change="showMessage($event)" @keyup.native="showOption">
              <template slot="prefix">
                <span class="prefixSlot">选择产品</span>
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
          <el-button type="info" plain>停用</el-button>
          <br>
          <label class="level2" style="padding-left:0;">修改内容[显示图片/跳转网页/显示支付结果]:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
          <el-input v-model="level2" placeholder="请输入修改内容" style="width:200px;" prefix-icon="el-icon-document" />
          <el-button type="info" plain>修改</el-button>
        </el-form>
      </el-tab-pane>
      <el-tab-pane label="计划任务">
        <div style="display:inline-block;">
          <label class="switchRoles2" style="padding-left:0;">任务开关:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
          <el-radio-group v-model="switchRoles2">
            <el-radio-button label="开" />
            <el-radio-button label="关" />
          </el-radio-group>
          <br><br>
          <div style="display:inline-block;">
            <label class="lxqdn" style="padding-left:0;">任务名:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
            <el-input v-model="lxqdn" placeholder="请输入查询内容" style="width:345px;" prefix-icon="el-icon-document" />
          </div>
          <div style="display:inline-block;">
            <label class="lxqdv" style="padding-left:0;">任务周期:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
            <el-input v-model="lxqdv" placeholder="请输入查询内容" style="width:345px;" prefix-icon="el-icon-document" />
          </div>
          <br>
          <div style="display:inline-block;">
            <label class="lxqdv" style="padding-left:0;">计划任务类:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
            <el-input v-model="lxqdv" placeholder="请输入查询内容" style="width:345px;" prefix-icon="el-icon-document" />
          </div>
          <div style="display:inline-block;">
            <label class="lxqdv" style="padding-left:0;">计划任务方法:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
            <el-input v-model="lxqdv" placeholder="请输入查询内容" style="width:345px;" prefix-icon="el-icon-document" />
          </div>
          <el-link href="http://www.baidu.com" icon="el-icon-search" type="info" @click.capture="doThis">制作计划任务</el-link>
          <br><br>
          <hr>
          <el-button @click="addData()">增加数据</el-button>
          <div style="display:inline-block; width: 1500px">
            <el-table ref="multipleTable" :data="tableData3" tooltip-effect="dark" style="" @selection-change="handleSelectionChange">
              <el-table-column type="selection" width="120"><template slot-scope="scope">{{ scope.row.date }}</template></el-table-column>
              <el-table-column prop="name" label="签到天数" width="120" />
              <el-table-column prop="address" label="签到值" width="400" show-overflow-tooltip />
              <el-table-column label="操作" width="400" show-overflow-tooltip>
                <template slot-scope="scope">
                  <el-button type="primary" @click="dialogFormVisible = true">编辑</el-button>
                  <el-button type="danger" @click.native="delS(scope.row)">删除</el-button>
                </template>
              </el-table-column>
            </el-table>
            <el-dialog title="编辑签到配置" :visible.sync="dialogFormVisible" @closed="handleClose">
              <el-form ref="ruleForm" :model="form" :rules="rules">
                <template>
                  <el-form-item label="签到天数" :label-width="formLabelWidth" prop="name">
                    <el-input>(scope.row.date)</el-input>
                  </el-form-item>
                  <el-form-item label="签到值" :label-width="formLabelWidth">
                    <el-input>(scope.row.name)</el-input>
                  </el-form-item>
                </template>
              </el-form>
              <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="handleSave">确 定</el-button>
              </div>
            </el-dialog>
          </div>
          <div style="margin-top: 20px">
            <!--<el-button @click="delMulData()">批量删除</el-button>-->
            <!--<el-button @click="prints()">打印</el-button>-->
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane label="短信息配置">
        <label class="switchRoles" style="padding-left:0;">配置开关:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
        <el-radio-group v-model="switchRoles">
          <el-radio-button label="开" />
          <el-radio-button label="关" />
        </el-radio-group>
        <br><br>
      </el-tab-pane>
      <el-tab-pane label="邮件配置">
        <label class="switchRoles" style="padding-left:0;">配置开关:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
        <el-radio-group v-model="switchRoles">
          <el-radio-button label="开" />
          <el-radio-button label="关" />
        </el-radio-group>
        <br><br>
        <div style="display:inline-block;">
          <label class="webname" style="padding-left:0;">SMTP:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
          <el-input v-model="webname" placeholder="请输入查询内容" style="width:200px;" prefix-icon="el-icon-document" />
        </div>
        <br>
        <div style="display:inline-block;">
          <label class="webname" style="padding-left:0;">SMTP-AUTH:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
          <el-input v-model="webname" placeholder="请输入查询内容" style="width:200px;" prefix-icon="el-icon-document" />
        </div>
        <br>
        <div style="display:inline-block;">
          <label class="webname" style="padding-left:0;">SMTP-AUTH-USER:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
          <el-input v-model="webname" placeholder="请输入查询内容" style="width:200px;" prefix-icon="el-icon-document" />
        </div>
        <br>
        <div style="display:inline-block;">
          <label class="webname" style="padding-left:0;">SMTP-AUTH-PASSWORD:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
          <el-input v-model="webname" placeholder="请输入查询内容" style="width:200px;" prefix-icon="el-icon-document" />
        </div>
      </el-tab-pane>
      <el-tab-pane label="数据初始化">
        <label class="radio-label" style="padding-left:0;">初始化数据:执行后除基础数据 都将被删除。请谨慎操作！！&nbsp;&nbsp;&nbsp;&nbsp;</label>
        <br><br>
        <label class="radio-label" style="padding-left:0;">清除用户数据&nbsp;&nbsp;&nbsp;&nbsp;</label>
        <br><br>
        <label class="radio-label" style="padding-left:0;">清除产品数据&nbsp;&nbsp;&nbsp;&nbsp;</label>
        <br><br>
        <label class="radio-label" style="padding-left:0;">清除订单数据&nbsp;&nbsp;&nbsp;&nbsp;</label>
        <br><br>
        <label class="radio-label" style="padding-left:0;">清除客服记录&nbsp;&nbsp;&nbsp;&nbsp;</label>
        <br><br>
        <label class="radio-label" style="padding-left:0;">清除系统记录&nbsp;&nbsp;&nbsp;&nbsp;</label>
        <br><br>
        <br><br>
      </el-tab-pane>
    </el-tabs>
  </el-card>
</template>
<script>
export default {
  name: 'HomeNewsList',
  data() {
    return {
      dialogFormVisible: false,
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      formLabelWidth: '120px',
      rules: {
        name: [
          { required: true, message: '请输入活动名称', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ]
      },
      'sizeForm': '',
      'switchRoles': '',
      'switchRoles2': '',
      'tabPosition': '英语',
      'tabs': [],
      'lxqdn': '',
      'lxqdv': '',
      'webname': '',
      'sitecontent': '11111',
      'bah': '',
      'xffx': '',
      'zkbl': '',
      'level1': '',
      'level2': '',
      'level3': '',
      'tableData3': [{
        'rowNum': 1,
        'date': '1',
        'name': '1',
        'address': '10'
      }, {
        'rowNum': 2,
        'date': '2',
        'name': '2',
        'address': '20'
      }, {
        'rowNum': 3,
        'date': '3',
        'name': '3',
        'address': '30'
      }, {
        'rowNum': 4,
        'date': '4',
        'name': '4',
        'address': '40'
      }, {
        'rowNum': 5,
        'date': '5',
        'name': '5',
        'address': '50'
      }, {
        'rowNum': 6,
        'date': '6',
        'name': '6',
        'address': '60'
      }, {
        'rowNum': 7,
        'date': '7',
        'name': '7',
        'address': '70'
      }],
      multipleSelection: [],
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
  created() {
    this.getTabs()
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
    moreState(tab, event) {
      if (tab === 'more') {
        console.log('/////', tab, event)
        return false
      }
    },
    doThis() {
      window.open('http://www.jsons.cn/quartzcron/', '_blank')
    },
    getTabs() {
      this.$http.get('/categories').then(val => {
        this.tabs = val.data
      })
    },
    addData() {
      var data = {
        romNum: 100,
        date: '2018-12-3',
        name: '当白',
        address: '郑州市二七区'
      }
      this.tableData3.unshift(data)
    },
    delS(index) {
      console.log(index)
      this.tableData3.splice(index, 1)
      /* 调用接口 删除数据  判断返回值 */
    },
    delMulData() {
      /* 拿到选中的数据 */
      const val = this.multipleSelection
      /* 如果选中数据存在 */
      if (val) {
        /* 将选中数据遍历 */
        val.forEach((val, index) => {
          /* 遍历源数据 */
          this.tableData3.forEach((v, i) => {
            // 如果选中数据和源数据的某一条唯一标识符相等，删除对应的源数据
            if (val.rowNum === v.rowNum) {
              this.tableData3.splice(i, 1)
            }
          })
        })
      }
      /* 清除选中状态 */
      this.$refs.multipleTable.clearSelection()
    },
    /* 得到选中数据 */
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
    prints() {
      console.log(this.tableData3)
    },
    handleClose() {
      this.$refs.ruleForm.resetFields()
      this.form = {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      }
    },
    handleSave() {
      this.$refs.ruleForm.validate((valid) => {
        if (valid) {
          console.log('输入正确')
          this.dialogFormVisible = false
        } else {
          console.log('输入错误')
        }
      })
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
<style scoped>
.box-card{
  width: 100%;
}
.box-card .el-tabs__item.is-top:last-child{
  color: #ff4949;
}
  .rowStyle{
    background-color:#f0f9eb!important
  }
  .el-select-dropdown__item span{
    width:200px;/* 下拉数据的宽度*/
    text-align:center;
  }
  .el-input--prefix .el-input__inner {
    padding-left: 110px
  }
  .prefixSlot{
    height: 36px;
    width: 300px;
    display: block;
    line-height: 36px;
    border-right: 1px solid #f1f1f1;
  }
  .tableHeader{/* 下拉数据的头*/
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
    width:1500px;
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

