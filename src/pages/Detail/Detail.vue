<template>
  <DIV style='height: auto;background: #e0dddd'>
    <div class='middle'>
    </div>
    <div class='fanhuiClass'>
      <i
        @click='$router.go(-1)'
        class='el-icon-arrow-left'
        style='color:#FFFFFF;font-size: 16px'
      >{{menu_table.filter(item => item.code === this.menuCode)[0].name}}</i>
    </div>
    <div class='selectClass'>
      <template>
      <el-select class="menuClass" v-model='disguisedIndexcode'   @change ='handelChange' placeholder='请选择' >
      <el-option
        v-for='item in disguisedIndexs'
        :key='item.disguisedIndexcode'
        :label='item.disguisedIndexname'
        :value='item.disguisedIndexcode'>
      </el-option>
    </el-select>
      </template>
    </div>
          <span  v-for="(item,index) in bbb" :key="index">
      <van-button round @click='handelCard(item.dimensionColumn,item.dimensionName,item.chartType,index,item.unit)'  :class="{red:changeRed==index}">{{item.dimensionName}}</van-button>
       </span>
    <template v-for='(card, index) in comCards'>
      <van-card
      :key='card.disguisedIndexcode+index'
      class='cardClass1'
      :title='card.indexName'
      :desc='"(" + unit  + ")"'>
        <div slot="footer">
          <nested-pie-chart v-if="card.chrtCode == '3'" :key="card.disguisedIndexcode + card.dimensionColumn + index + ''" :ecid="index+''" :card="card" :disguisedIndexname1="disguisedIndexname1" :dimensionName1="dimensionName1"/>
          <stacked-area v-if="card.chrtCode == '4'" :key="card.disguisedIndexcode + card.dimensionColumn + index + ''" :ecid="index+''" :card="card" :disguisedIndexname1="disguisedIndexname1" :dimensionName1="dimensionName1"/>
          <horizontal-bar-echart v-if="card.chrtCode == '5'" :key="card.disguisedIndexcode + card.dimensionColumn + index + ''" :ecid="index+''" :card="card" :disguisedIndexname1="disguisedIndexname1" :dimensionName1="dimensionName1"/>
          <broken-line-bar-chart-two  v-if="card.chrtCode == '6'" :key="card.disguisedIndexcode + card.dimensionColumn + index + ''" :card="card"  :ecid="index+''"  :disguisedIndexname1="disguisedIndexname1" :dimensionName1="dimensionName1"/>
          <radar-map v-if="card.chrtCode == '8'" :key="card.disguisedIndexcode + card.dimensionColumn + index + ''" :ecid="index+''" :card="card" :disguisedIndexname1="disguisedIndexname1" :dimensionName1="dimensionName1" />
          <rich-text v-if="card.chrtCode == '10'" :key="card.disguisedIndexcode + card.dimensionColumn + index + ''" :ecid="index+''" :card="card" :disguisedIndexname1="disguisedIndexname1" :dimensionName1="dimensionName1" />
          <rose-chart v-if="card.chrtCode == '11'" :key="card.disguisedIndexcode + card.dimensionColumn + index + ''" :ecid="index+''" :card="card" :disguisedIndexname1="disguisedIndexname1" :dimensionName1="dimensionName1" />
          <card v-if="card.chrtCode == '12'" :key="card.disguisedIndexcode + card.dimensionColumn + index + ''" :ecid="index+''" :card="card" :disguisedIndexname1="disguisedIndexname1" :dimensionName1="dimensionName1" />
          <broken-line  v-if="card.chrtCode == '13'" :key="card.disguisedIndexcode + card.dimensionColumn + index + ''" :ecid="index+''" :card="card" :disguisedIndexname1="disguisedIndexname1" :dimensionName1="dimensionName1" />
          <broken-line-bar-chart  v-if="card.chrtCode == '14'" :key="card.disguisedIndexcode + card.dimensionColumn + index + ''" :ecid="index+''" :card="card" :disguisedIndexname1="disguisedIndexname1" :dimensionName1="dimensionName1" />
          <stacked-bar-chart v-if="card.chrtCode == '15'" :key="card.disguisedIndexcode + card.dimensionColumn + index + ''" :ecid="index+''" :card="card" :disguisedIndexname1="disguisedIndexname1" :dimensionName1="dimensionName1" />
          <map-echarts v-if="card.chrtCode == '16'" :key="card.disguisedIndexcode + card.dimensionColumn + index + ''" :ecid="index+''" :card="card" :disguisedIndexname1="disguisedIndexname1" :dimensionName1="dimensionName1" />
          <table-style-two v-if="card.chrtCode == '17'" :key="card.disguisedIndexcode + card.dimensionColumn + index + ''" :ecid="index+''" :card="card" :disguisedIndexname1="disguisedIndexname1" :dimensionName1="dimensionName1" />
          <the-pie-chart v-if="card.chrtCode == '18'" :key="card.disguisedIndexcode + card.dimensionColumn + index + ''" :ecid="index+''" :card="card" :disguisedIndexname1="disguisedIndexname1" :dimensionName1="dimensionName1" />
          <reuse-line v-if="card.chrtCode == '19'" :key="card.disguisedIndexcode + card.dimensionColumn + index + ''" :ecid="index+''" :card="card" :disguisedIndexname1="disguisedIndexname1" :dimensionName1="dimensionName1" />
          <table-style-eight v-if="card.chrtCode == '20'" :key="card.disguisedIndexcode + card.dimensionColumn + index + ''" :ecid="index+''" :card="card" :disguisedIndexname1="disguisedIndexname1" :dimensionName1="dimensionName1" />
          <jffs-the-pie-chart v-if="card.chrtCode == '21'" :key="card.disguisedIndexcode + card.dimensionColumn + index + ''" :ecid="index+''" :card="card" :disguisedIndexname1="disguisedIndexname1" :dimensionName1="dimensionName1" />
          <table-style-nine v-if="card.chrtCode == '22'" :key="card.disguisedIndexcode + card.dimensionColumn + index + ''" :ecid="index+''" :card="card" :disguisedIndexname1="disguisedIndexname1" :dimensionName1="dimensionName1" />
          <table-style-six v-if="card.chrtCode == '23'" :key="card.disguisedIndexcode + card.dimensionColumn + index + ''" :ecid="index+''" :card="card" :disguisedIndexname1="disguisedIndexname1" :dimensionName1="dimensionName1" />
      </div>
      </van-card>
          <table-style-one  v-if="card.chrtCode == '6'" :key="card.disguisedIndexcode + card.dimensionColumn + index + ''"  :ecid="index+''" :card="card" :disguisedIndexname1="disguisedIndexname1" :dimensionName1="dimensionName1" />
          <table-style-three v-if="card.chrtCode == '16'" :key="card.disguisedIndexcode + card.dimensionColumn + index + ''" :ecid="index+''" :card="card" :disguisedIndexname1="disguisedIndexname1" :dimensionName1="dimensionName1" />
          <table-style-four v-if="card.chrtCode == '18'" :key="card.disguisedIndexcode + card.dimensionColumn + index + ''" :ecid="index+''" :card="card" :disguisedIndexname1="disguisedIndexname1" :dimensionName1="dimensionName1" />
           <table-style-five v-if="card.chrtCode == '3'" :key="card.disguisedIndexcode + card.dimensionColumn + index + ''" :ecid="index+''" :card="card" :disguisedIndexname1="disguisedIndexname1" :dimensionName1="dimensionName1" />
            <table-style-seven v-if="card.chrtCode == '21'" :key="card.disguisedIndexcode + card.dimensionColumn + index + ''" :ecid="index+''" :card="card" :disguisedIndexname1="disguisedIndexname1" :dimensionName1="dimensionName1" />
 </template>
  </DIV>
</template>
<script>
import ReuseLine from '../card/ReuseLine'
import TableStyleOne from '../card/table/TableStyleOne'
import ThePieChart from '../card/ThePieChart'
import JffsThePieChart from '../card/JffsThePieChart'
import TableStyleTwo from '../card/table/TableStyleTwo'
import TableStyleSix from '../card/table/TableStyleSix'
import TableStyleEight from '../card/table/TableStyleEight'
import TableStyleNine from '../card/table/TableStyleNine'
import TableStyleThree from '../card/table/TableStyleThree'
import TableStyleFour from '../card/table/TableStyleFour'
import TableStyleFive from '../card/table/TableStyleFive'
import TableStyleSeven from '../card/table/TableStyleSeven'
import mapEcharts from '../card/mapEcharts'
import HorizontalBarEchart from '../card/HorizontalBarEchart'
import StackedBarChart from '../card/StackedBarChart'
import StackedArea from '../card/StackedArea'
import card from '../card/card'
import radarMap from '../card/radarMap'
import RoseChart from '../card/RoseChart'
import BrokenLine from '../card/BrokenLine'
import richText from '../card/richText'
import BrokenLineBarChart from '../card/BrokenLineBarChart'
import BrokenLineBarChartTwo from '../card/BrokenLineBarChartTwo'
import NestedPieChart from '../card/NestedPieChart'
import watermark from '@/api/watermark.js'
import { getMenuTable, getCardTable, getComCardDetailTable, getQueryDisguisedIndex } from '@/api/data.js'
export default {
  components: {watermark, JffsThePieChart, TableStyleSeven, TableStyleEight, TableStyleNine, TableStyleSix, ReuseLine, TableStyleOne, BrokenLineBarChartTwo, TableStyleThree, TableStyleFour, TableStyleFive, StackedBarChart, TableStyleTwo, card, ThePieChart, mapEcharts, BrokenLine, StackedArea, HorizontalBarEchart, richText, BrokenLineBarChart, NestedPieChart, radarMap, RoseChart},
  props: {
  },
  data () {
    return {
      comCode: '',
      menuCode: '',
      menu_table: [],
      card_table: [],
      disguisedIndexs: [],
      disguisedIndexcode: '',
      comCards: [],
      allData: [],
      index: 0,
      bbb: [],
      disguisedIndexname: '',
      disguisedIndexname1: '',
      dimensionName1: null,
      unit: ''
    }
  },
  mounted () {
    watermark.set(new Date().toLocaleString('chinese', {hour12: false}), window.localStorage.getItem('name'))
    this.comCode = this.$route.query.comCode
    this.menuCode = this.$route.query.menuCode
    this.menu_table = getMenuTable()
    this.card_table = getCardTable()
    getQueryDisguisedIndex(this.comCode, this.menuCode).then(res => {
      this.disguisedIndexs = res.data.result
      console.log('伪指标代码', this.disguisedIndexs)
      this.disguisedIndexcode = this.disguisedIndexs[0].disguisedIndexcode
      this.disguisedIndexname = this.disguisedIndexs[0].disguisedIndexname
      this.handelChange(this.disguisedIndexcode)
    })
  },
  methods: {
    handelCard (dimensionColumn, dimensionName, chartType, index, unit) {
      this.dimensionName1 = dimensionName
      this.changeRed = index
      this.unit = unit
      this.comCards = getComCardDetailTable().filter(item => item.comCode === this.comCode && item.menuCode === this.menuCode && item.dimensionColumn === dimensionColumn && item.disguisedIndexcode === this.disguisedIndexcode)
    },
    handelChange (disguisedIndexcode, disguisedIndexname) {
      this.disguisedIndexname1 = this.disguisedIndexname
      const aa = this.disguisedIndexs
      if (aa.length > 0) {
        aa.forEach(item => {
          if (item.disguisedIndexcode === disguisedIndexcode) {
            this.bbb = item.weiDus
          }
        })
        this.handelCard(this.bbb[0].dimensionColumn, this.bbb[0].dimensionName, this.chartType, this.index, this.bbb[0].unit)
      }
    }
  }
}
</script>
<style scoped >
@import '../../assets/css/detail.css';
</style>
