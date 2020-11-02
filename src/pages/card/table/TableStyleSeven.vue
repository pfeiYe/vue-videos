<template>
<el-table
      :id="ecid"
      class="tableClass1"
      :data="tableData"
      :row-class-name="tableRowClassName">
      <el-table-column
      prop="INDEXNAME"
        label="卡片名称"
        width="120px"
        align='center'>
      </el-table-column>
      <el-table-column
        prop="INDEXVALUE_Y1"
        label="本期"
        align='center'>
      </el-table-column>
      <el-table-column
        prop="INDEXVALUE_Y_TQ"
        align='center'
        label="同期">
      </el-table-column>
      <el-table-column
        align='center'
        width="100px"
        label="同比">
        <template slot-scope="scope">
        <div style="margin-left: 2%" v-if="scope.row.D_VALUE_Y > 0">
         <div style="float: left;width: 65px;text-align: right;float: left">{{ scope.row.D_VALUE_Y }}%</div>
        <div style="padding-top: 8%;text-align: left"><i class="el-icon-top" style="color:red;font-size: 13px"></i></div>
        </div>
        <div style="margin-left: 2%" v-else-if="scope.row.D_VALUE_Y < 0">
          <div style="float: left;width: 65px;text-align: right;float: left">{{ scope.row.D_VALUE_Y }}%</div>
        <div style="padding-top: 8%;text-align: left"><i class="el-icon-bottom" style="color:red;font-size: 13px"></i></div>
        </div>
        <div v-else-if="scope.row.D_VALUE_Y === null || scope.row.D_VALUE_Y == '' || scope.row.D_VALUE_Y == undefined">
          <div>--</div>
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
      INDEXVALUE_Y1: [],
      isshow1: false,
      disguisedIndexcode1: null,
      comCode1: null,
      menuCode1: null,
      chartType1: null,
      dimensionColumn1: null,
      tableData: []
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
      console.log(result)
      this.isshow1 = true
      this.tableData = result
      this.tableData[0].INDEXNAME = '新单趸缴规模保费'
      this.tableData[1].INDEXNAME = '新单期缴规模保费'
      this.tableData[2].INDEXNAME = '短期险规模保费'
      this.tableData[3].INDEXNAME = '续期规模保费'
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
@import '../../../../src/assets/css/detail.css';
</style>
