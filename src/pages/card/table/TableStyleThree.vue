<template>
<el-table
:id ="ecid"
      :data="tableData"
      :row-class-name ="tableRowClassName"
      class="tableClass1">
      <el-table-column
        prop="branchCode"
        label="地区"
        align='center'>
      </el-table-column>
      <el-table-column
        prop="benQi"
        label="本期"
        align='center'>
      </el-table-column>
      <el-table-column
        align='center'
        label="同期">
         <template slot-scope="scope">
           <span v-if="scope.row.tongQi === '' || scope.row.tongBi === null">
             <span>--</span>
           </span>
           <span v-else>
             <span>{{scope.row.tongQi}}</span>
           </span>
         </template>
      </el-table-column>
      <el-table-column
        align='center'
        width="100px"
        label="同比">
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
      console.log('<><><><>', result)
      this.tableData = result[0].dmPcDtoExtList
      console.log(this.tableData)
    })
  },
  created () {
  },
  methods: {
    tableRowClassName ({row, rowIndex}) {
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
