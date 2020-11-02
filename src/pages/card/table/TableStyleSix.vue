<template>
<div>
<el-table
      :id="ecid"
      class="tableClass2"
      :data="tableData"
      :row-class-name ="tableRowClassName1"
      :header-cell-style="{background:'#E6350D',color:'#FFFFFF'}"
      style="width: 100%;margin-top:10%">
      <el-table-column
      prop="RESERVED2NAME"
        label="分板块规模保费"
        align='center'>
      </el-table-column>
      <el-table-column
        prop="VALUE1"
        label="本年计划"
        align='center'>
      </el-table-column>
      <el-table-column
        prop="VALUE2"
        align='center'
        label="当日">
      </el-table-column>
      <el-table-column
        prop="VALUE3"
        align='center'
        label="当年累计">
      </el-table-column>
      <el-table-column
        align='center'
        label="同比">
        <template slot-scope="scope">
        <div style="margin-left: 2%" v-if="scope.row.VALUE4 > 0">
         <div style="float: left;width: 65px;text-align: right;float: left">{{ scope.row.VALUE4 }}%</div>
        <div style="padding-top: 8%;text-align: left"><i class="el-icon-top" style="color:red;font-size: 13px"></i></div>
        </div>
        <div style="margin-left: 2%" v-else-if="scope.row.VALUE4 < 0">
          <div style="float: left;width: 65px;text-align: right;float: left">{{ scope.row.VALUE4 }}%</div>
        <div style="padding-top: 8%;text-align: left"><i class="el-icon-bottom" style="color:red;font-size: 13px"></i></div>
        </div>
        <div v-else-if="scope.row.VALUE4 === null || scope.row.VALUE4 == ''">
          <div>--</div>
        </div>
        <div  style="float: left;width: 65px;text-align: right;float: left" v-else>
          <div>{{ scope.row.VALUE4 }}%</div>
        </div>
      </template>
      </el-table-column>
      <el-table-column
        align='center'
        label="计划完成率">
      </el-table-column>
    </el-table>
            <div class="">截至业务日期:{{this.date === undefined ? '--' : this.date}}</div>
    </div>
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
      date: null
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
      this.date = result[0].BUSI_DATE
      console.log('<><><><>', result)
      this.tableData = result
      console.log(this.tableData)
    })
  },
  methods: {
    tableRowClassName1 ({row, rowIndex}) {
      if (rowIndex % 2 !== 0) {
        return 'color2'
      }
    }
  }
}
</script>
<style scoped>
@import '../../../../src/assets/css/detail.css';
</style>
