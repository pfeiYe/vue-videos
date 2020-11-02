<template>
<!--横向柱状图-->
  <div
    :id="ecid"
       ref="chart"
    class="echarts1"
  />
</template>
<script>
import { getSYData, getListXqyData } from '@/api/data.js'
// import echarts from 'echarts'
require('echarts/theme/macarons') // echarts theme
// import { debounce } from '@/utils'

export default {
  props: {
    ecid: {
      type: String,
      required: true
    },
    com_card: {
      type: Object,
      default: null
    },
    card: {
      type: Object,
      default: null
    },
    indexData: {
      type: Number,
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
      disguisedIndexcode: null,
      comCode: null,
      disguisedIndexcode1: null,
      comCode1: null,
      menuCode1: null,
      chartType1: null,
      dimensionColumn1: null,
      unit: null
    }
  },
  mounted () {
    if (this.card == null) {
      this.disguisedIndexcode = this.com_card.disguisedIndexcode
      this.comCode = this.com_card.comCode
    } else {
      this.comCode1 = this.card.comCode // 公司code
      this.menuCode1 = this.card.menuCode // 指标code
      this.disguisedIndexcode1 = this.card.disguisedIndexcode // 伪指标代码
      this.chartType1 = this.card.chrtCode // 图表类型
      this.dimensionColumn1 = this.card.dimensionColumn // 维度字段
    }
    this.init()
  },
  methods: {
    init () {
      let option = {
        title: {
          show: true, // 显示策略，默认值true,可选为：true（显示） | false（隐藏）
          text: '主标题', // 主标题文本，'\n'指定换行
          x: 'right', // 水平安放位置，默认为'left'，可选为：'center' | 'left' | 'right' | {number}（x坐标，单位px）
          y: 'bottom', // 垂直安放位置，默认为top，可选为：'top' | 'bottom' | 'center' | {number}（y坐标，单位px）
          textStyle: {// 主标题文本样式{"fontSize": 18,"fontWeight": "bolder","color": "#333"}
            color: '#5A5A5A',
            fontSize: 10
          }
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          },
          textStyle: {
            align: 'left'
          },
          formatter: function (params) {
            var res = '<div><p>' + params[0].name + '</p></div>'
            for (var i = 0; i < params.length; i++) {
              res += '<p>' + params[i].seriesName + ':' + params[i].data.value + params[i].data.unit + '</p>'
            }
            return res
          }
        },
        legend: {
          formatter: function (params) {
            var tmp = ''
            var res = ''
            tmp = params.split('\n')
            res = '' + params
            for (var i in tmp) {
              res = res.replace(tmp[i], '')
            }
            return res + params
          },
          x: 'right',
          y: 0,
          icon: 'roundRect',
          itemWidth: 15, // 设置宽度
          itemHeight: 6 // 设置高度
        },
        grid: {
          x: 10,
          x2: '10%',
          y: 40,
          y2: 10,

          containLabel: true
        },
        xAxis: {
          type: 'value',
          boundaryGap: [0, 3],
          // max: 2500,
          axisLine: { // 轴线
            show: false,
            lineStyle: {
              color: '#DCDCDC'
            }
          },
          axisLabel: {
            show: false,
            textStyle: {
              color: '#919191'
            }
          },
          axisTick: { // 轴刻度线
            show: false
          },
          splitLine: { // 网格线
            show: false
          }

        },
        yAxis: {
          type: 'category',
          data: [],
          axisLine: { // 轴线
            show: false
          },
          axisTick: { // 轴刻度线
            show: false
          },
          splitLine: { // 网格线
            show: false
          },
          axisLabel: {
            textStyle: {
              color: '#919191',
              fontSize: 14 // 更改坐标轴文字大小
            }
          }

        },
        series: [
          {
            name: '本期',
            type: 'bar',
            // barCategoryGap: 10,
            barGap: 1, // 柱图间距
            barWidth: 5, // 线宽
            data: [],
            label: {
              normal: {
                show: true, // 显示数字
                fontSize: '11',
                position: ['190', 0],
                color: '#5A5A5A'
              }
            },
            itemStyle: {
              normal: {
                barBorderRadius: 2,
                color: '#E6350D'
              }
            }
          },
          {
            name: '同期',
            type: 'bar',
            barGap: 1, // 柱图间距
            barWidth: 5,
            data: [],
            label: {
              normal: {
                show: true, // 显示数字
                fontSize: '11',
                position: ['190', 0],
                color: '#5A5A5A'
              }
            },
            itemStyle: {
              normal: {
                barBorderRadius: 2,
                color: '#FFAC4C'
              }
            }
          }
        ]
      }
      let chart = this.$echarts.init(
        document.getElementById(this.ecid),
        'shine'
      )
      const xAxisData = []
      const yAxisData = []
      const yAxisData1 = []
      // const series0Data = []
      // const series1Data = []
      if (this.card) {
        getListXqyData(this.comCode1, this.disguisedIndexcode1, this.menuCode1, this.disguisedIndexname1, this.chartType1, this.dimensionName1).then(res => {
          var result = res.data.result
          console.log('横柱状图数据:', result)
          this.unit = result[0].unit
          const data = result[0].dmPcDtoExtList
          const bbb = []
          const bbb1 = []
          if (this.comCode1 === '2' || this.comCode1 === '3') {
            data.forEach(element => {
              const aaa = {}
              const aaa1 = {}
              xAxisData.push(element.busiDate)
              yAxisData.push(element.reserved1)
              yAxisData1.push(element.busiDate)
              // series0Data.push(element.benQi)
              // series1Data.push(element.tongQi)
              aaa.value = element.benQi
              aaa.unit = this.unit
              aaa1.value = element.tongQi
              aaa1.unit = this.unit
              bbb.push(aaa)
              bbb1.push(aaa1)
            })
            if (yAxisData.length > 0) {
              option.yAxis.data = yAxisData
            } else {
              option.yAxis.data = yAxisData1
            }
            const d = xAxisData[xAxisData.length - 1]
            option.title.text = '截止业务日期:' + d
            option.series[0].data = bbb
            option.series[1].data = bbb1
            chart.setOption(option)
            let num = data.length // x轴的数量
            window.onresize = chart.resize
            let autoHeight = num * 30 + 150
            chart.getDom().style.height = autoHeight + 'px'
            chart.getDom().childNodes[0].style.height = autoHeight + 'px'
            this.$nextTick(() => {
              chart.resize()
            })
          } else if (this.comCode1 === '4') {
            data.forEach(element => {
              const aaa = {}
              const aaa1 = {}
              xAxisData.push(element.busiDate)
              yAxisData.push(element.reserved2)
              yAxisData1.push(element.busiDate)
              // series0Data.push(element.benQi)
              // series1Data.push(element.tongQi)
              aaa.value = element.benQi
              aaa.unit = this.unit
              aaa1.value = element.tongQi
              aaa1.unit = this.unit
              bbb.push(aaa)
              bbb1.push(aaa1)
            })
            if (yAxisData.length > 0) {
              option.yAxis.data = yAxisData
            } else {
              option.yAxis.data = yAxisData1
            }
            const d = xAxisData[xAxisData.length - 1]
            option.title.text = '截止业务日期:' + (d === undefined ? '--' : d)
            option.series[0].data = bbb
            option.series[1].data = bbb1
            chart.setOption(option)
            let num = data.length // x轴的数量
            window.onresize = chart.resize
            let autoHeight = num * 30 + 100
            chart.getDom().style.height = autoHeight + 'px'
            chart.getDom().childNodes[0].style.height = autoHeight + 'px'
            this.$nextTick(() => {
              chart.resize()
            })
          }
        })
      } else {
        getSYData(this.comCode, this.disguisedIndexcode, this.chrtCode).then(res => {
          var result = res.data.result
          console.log('横柱状图数据:', result)
          this.unit = result[0].unit
          const data = result[0].dmPcDtoExtList
          const bbb = []
          const bbb1 = []
          data.forEach(element => {
            const aaa = {}
            const aaa1 = {}
            xAxisData.push(element.busiDate)
            yAxisData.push(element.busiDate)
            // series0Data.push(element.benQi)
            // series1Data.push(element.tongQi)
            aaa.value = element.benQi
            aaa.unit = this.unit
            aaa1.value = element.tongQi
            aaa1.unit = this.unit
            bbb.push(aaa)
            bbb1.push(aaa1)
          })
          const d = xAxisData[xAxisData.length - 1]
          option.title.text = '截止业务日期:' + (d === undefined ? '--' : d)
          option.yAxis.data = yAxisData
          option.series[0].data = bbb
          option.series[1].data = bbb1
          chart.setOption(option)
          let num = data.length // x轴的数量
          window.onresize = chart.resize
          let autoHeight = num * 30 + 100
          chart.getDom().style.height = autoHeight + 'px'
          chart.getDom().childNodes[0].style.height = autoHeight + 'px'
          this.$nextTick(() => {
            chart.resize()
          })
        })
      }
    }
  }
}
</script>
<style >
@import "../../assets/css/main.css";
</style>
