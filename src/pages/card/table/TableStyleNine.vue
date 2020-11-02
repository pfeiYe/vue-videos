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
      prop="RESERVED1NAME"
        label="委托方"
        align='center'>
      </el-table-column>
      <el-table-column
        prop="VALUE1"
        label="受托资产规模"
        align='center'>
      </el-table-column>
      <el-table-column
        prop="VALUE2"
        align='center'
        label="受托资产规模较上月末变动率">
      </el-table-column>
      <el-table-column
        prop="VALUE3"
        align='center'
        label="投资收益(财务)">
      </el-table-column>
      <el-table-column
        prop="VALUE4"
        align='center'
        label="投资收益(业务)">
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
