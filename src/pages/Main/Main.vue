<template>
<div>
  <div class="container">
    <!-- 背景图 -->
    <van-sticky>
      <div class="middle1"></div>
      <div class="FontClass">{{ com_table.filter(item => item.code === active)[0].name }}</div>
      <!--菜单栏-->
      <div class="daohangClass">
        <van-card
          v-for="(comMenu, index) in com_menu_table.filter(item => item.comCode === active)"
          @click="handleDetail(comMenu)"
          :key="active + ':' + index"
          :thumb="menu_table.filter(item => item.code === comMenu.menuCode)[0].icon"
          :title="menu_table.filter(item => item.code === comMenu.menuCode)[0].name"
        ></van-card>
      </div>
    </van-sticky>
    <!-- 指标 卡片 -->
    <template v-for="(card, index) in com_card_table.filter(item => item.comCode === active)">
      <van-card
        :key="active+ index"
        class="cardClass"
        :thumb="card_table.filter(item => item.code === card.cardCode)[0].icon"
        :title="card_table.filter(item => item.code === card.cardCode)[0].name"
        :desc='"(" + card_table.filter(item => item.code === card.cardCode)[0].unit + ")"'>
        <div slot="footer">
          <nested-pie-chart v-if="card.chrtCode === '3'" :key="active + index" :ecid="index + ''" :com_card="card"/>
          <stacked-area v-if="card.chrtCode === '4'" :key="active + index" :ecid="index+''" :com_card="card"/>
          <horizontal-bar-echart v-if="card.chrtCode === '5'" :key="active + index" :ecid="index+''" :com_card="card"/>
          <broken-line-bar-chart-two  v-if="card.chrtCode === '6'" :key="active + index" :ecid="index+''" :com_card="card"/>
          <radar-map v-if="card.chrtCode === '8'" :key="active + index" :ecid="index+''" :com_card="card"/>
          <rich-text v-if="card.chrtCode === '10'" :key="active + index" :ecid="index+''" :com_card="card"/>
          <rose-chart v-if="card.chrtCode === '11'" :key="active + index" :ecid="index+''" :com_card="card"/>
          <card v-if="card.chrtCode === '12'" :key="active + index" :ecid="index+''" :com_card ="card"/>
          <broken-line  v-if="card.chrtCode === '13'" :key="active + index" :ecid="index+''" :com_card="card"/>
          <broken-line-bar-chart  v-if="card.chrtCode === '14'" :key="active + index" :ecid="index+''" :com_card="card"/>
          <stacked-bar-chart v-if="card.chrtCode === '15'" :key="active + index" :ecid="index+''" :com_card="card"/>
          <map-echarts v-if="card.chrtCode === '16'" :key="active + index" :ecid="index+''" :com_card="card"/>
          <table-style-two v-if="card.chrtCode === '17'" :key="active + index" :ecid="index+''" :com_card="card"/>
          <the-pie-chart v-if="card.chrtCode === '18'" :key="active + index" :ecid="index+''" :com_card="card"/>
          <reuse-line v-if="card.chrtCode === '19'" :key="active + index" :ecid="index+''" :com_card="card"/>
                    <stacked-bar-chart2 v-if="card.chrtCode === '24'" :key="active + index" :ecid="index+''" :com_card="card"/>
          <broken-line-bar-chart-three  v-if="card.chrtCode === '30'" :key="active + index" :ecid="index+''" :com_card="card"/>

        </div>
      </van-card>
    </template>
    <!-- 底部导航开始 -->
  </div>
  <van-tabbar
      v-model="active"
      active-color="#E6350D"
      style="z-index:999"
      @change="onChange">
        <van-tabbar-item
        v-for="(com, index) in com_table"
          :key="index"
          :name="com.code">
        <span>{{ com.name }}</span>
        <img
          style="height:0.35rem;width:0.35rem;position:relative;top:0.02rem;"
          slot="icon"
          slot-scope="props"
          :src="props.active ? com.active : com.normal"/>
        </van-tabbar-item>
    </van-tabbar>
</div>
  <!-- 底部导航结束 -->
</template>
<script>
import ReuseLine from '../card/ReuseLine'
import ThePieChart from '../card/ThePieChart'
import TableStyleTwo from '../card/table/TableStyleTwo'
import mapEcharts from '../card/mapEcharts'
import HorizontalBarEchart from '../card/HorizontalBarEchart'
import StackedBarChart from '../card/StackedBarChart'
import StackedBarChart2 from '../card/StackedBarChart2'
import StackedArea from '../card/StackedArea'
import card from '../card/card'
import radarMap from '../card/radarMap'
import RoseChart from '../card/RoseChart'
import BrokenLine from '../card/BrokenLine'
import richText from '../card/richText'
import BrokenLineBarChart from '../card/BrokenLineBarChart'
import BrokenLineBarChartTwo from '../card/BrokenLineBarChartTwo'
import BrokenLineBarChartThree from '../card/BrokenLineBarChartThree'
import NestedPieChart from '../card/NestedPieChart'
import watermark from '@/api/watermark.js'

import {
  getComTable,
  getMenuTable,
  getComMenuTable,
  getComCardTable,
  getCardTable
} from '@/api/data.js'
export default {
  components: { watermark, ReuseLine, StackedBarChart, StackedBarChart2, BrokenLineBarChartTwo, BrokenLineBarChartThree, TableStyleTwo, card, ThePieChart, mapEcharts, BrokenLine, StackedArea, HorizontalBarEchart, richText, BrokenLineBarChart, NestedPieChart, radarMap, RoseChart },
  data () {
    let active = localStorage.getItem('active')
    if (!active) {
      active = '1'
    }
    return {
      active,
      com_table: [],
      menu_table: [],
      com_menu_table: [],
      com_card_table: [],
      card_table: [],
      unit1: null
    }
  },
  created () {
  },
  mounted () {
    watermark.set(new Date().toLocaleString('chinese', {hour12: false}), window.localStorage.getItem('name'))
    this.com_table = getComTable()
    this.menu_table = getMenuTable()
    this.com_menu_table = getComMenuTable()
    this.card_table = getCardTable()
    this.com_card_table = getComCardTable()
  },
  watch: {},
  methods: {
    onChange () {
      localStorage.setItem('active', this.active)
    },
    handleDetail (data) {
      this.$router.push({ path: '/detail', query: { ...data } })
    }
  }
}
</script>
<style lang="stylus" scoped>
@import '../../assets/css/main.css';
</style>
