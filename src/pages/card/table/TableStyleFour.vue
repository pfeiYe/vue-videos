<template>
  <el-table
    :id="ecid"
    :data="tableData"
    :row-class-name="tableRowClassName"
    class="tableClass1"
  >
    <el-table-column
      v-if="isshow1"
      prop="busiChannel"
      label="名称"
      align='center'
    >
    </el-table-column>
    <el-table-column
      v-if="isshow2"
      prop="reserved3"
      label="名称"
      align='center'
    >
    </el-table-column>
    <el-table-column
      v-if="isshow3"
      prop="channel"
      label="名称"
      align='center'
    >
    </el-table-column>
        <el-table-column
      v-if="isshow4"
      prop="tyCmpType"
      label="名称"
      align='center'
    >
    </el-table-column>
            <el-table-column
      v-if="isshow5"
      prop="payMode"
      label="名称"
      align='center'
    >
    </el-table-column>
    <el-table-column
      prop="benQi"
      label="本期"
      align='center'
    >
    </el-table-column>
    <el-table-column
      prop="tongQi"
      align='center'
      label="同期"
    >
    </el-table-column>
    <el-table-column
      align='center'
      label="同比"
      width="100px">
<template slot-scope="scope">
        <div style="margin-left: 2%" v-if="scope.row.tongBi > 0">
         <div style="float: left;width: 65px;text-align: right;float: left">{{ scope.row.tongBi }}%</div>
        <div style="padding-top: 8%;text-align: left"><i class="el-icon-top" style="color:red;font-size: 13px"></i></div>
        </div>
        <div style="margin-left: 2%" v-else-if="scope.row.tongBi < 0">
          <div style="float: left;width: 65px;text-align: right;float: left">{{ scope.row.tongBi }}%</div>
        <div style="padding-top: 8%;text-align: left"><i class="el-icon-bottom" style="color:red;font-size: 13px"></i></div>
        </div>
        <div v-else-if="scope.row.tongBi === null || scope.row.tongBi == ''">
          <div>--</div>
        </div>
        <div  style="float: left;width: 65px;text-align: right;float: left" v-else>
          <div>{{ scope.row.tongBi }}%</div>
        </div>
      </template>
    </el-table-column>
  </el-table>
</template>
<script>
import { getListXqyData } from '@/api/data.js'
export default {
  props: {
    ecid: {
      type: String,
      required: true
    },
    card: {
      type: Object,
      default: null
    },
    dimensionName1: {
      type: String,
      default: null
    },
    disguisedIndexname1: {
      type: String,
      default: null
    }
  },
  data () {
    return {
      disguisedIndexcode1: null,
      comCode1: null,
      menuCode1: null,
      chartType1: null,
      dimensionColumn1: null,
      tableData: [],
      isshow1: false,
      isshow2: false,
      isshow3: false,
      isshow4: false,
      isshow5: false
    }
  },
  mounted () {
    this.comCode1 = this.card.comCode // 公司code
    this.menuCode1 = this.card.menuCode // 指标code
    this.disguisedIndexcode1 = this.card.disguisedIndexcode // 伪指标代码
    this.chartType1 = this.card.chrtCode // 图表类型
    this.dimensionColumn1 = this.card.dimensionColumn // 维度字段
    getListXqyData(this.comCode1, this.disguisedIndexcode1, this.menuCode1, this.disguisedIndexname1, this.chartType1, this.dimensionName1).then(res => {
      var result = res.data.result
      if (this.comCode1 === '2' || this.comCode1 === '3') {
        if (this.dimensionColumn1 === 'RESERVED3') {
          this.isshow2 = true
          this.tableData = result[0].dmPcDtoExtList
        } else if (this.dimensionColumn1 === 'TYCMPTYPE') {
          this.isshow4 = true
          this.tableData = result[0].dmPcDtoExtList
        } else {
          this.isshow1 = true
          this.tableData = result[0].dmPcDtoExtList
        }
      } else if (this.comCode1 === '4') {
        if (this.dimensionColumn1 === 'RESERVED3') {
          this.isshow2 = true
          this.tableData = result[0].dmPcDtoExtList
        } else if (this.dimensionColumn1 === 'TYCMPTYPE') {
          this.isshow4 = true
          this.tableData = result[0].dmPcDtoExtList
        } else if (this.dimensionColumn1 === 'PAYMODE') {
          this.isshow5 = true
          this.tableData = result[0].dmPcDtoExtList
        } else {
          this.isshow3 = true
          this.tableData = result[0].dmPcDtoExtList
        }
      }
    })
  },
  methods: {
    tableRowClassName ({ row, rowIndex }) {
      if (rowIndex !== 0) {
        return 'yellow'
      }
      return 'blue'
    }
  }
}
</script>
<style scoped>
@import "../../../../src/assets/css/detail.css";
</style>
