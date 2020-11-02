<template>
<!--折线2柱状图-->
    <div :id="ecid" class="echarts3" />
</template>
<script>
// import echarts from 'echarts'
import { getSYData, getListXqyData } from '@/api/data.js'
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
      dimensionColumn1: null
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
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
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
          x: 160,
          y: 20,
          itemWidth: 15, // 设置宽度
          itemHeight: 6 // 设置高度
        },
        xAxis: [
          {
            data: [],
            offset: 0,
            type: 'category',
            // axisPointer: {
            //   type: 'shadow'
            // },
            axisLabel: { // X轴线 标签修改
              rotate: 20,
              interval: 0,
              textStyle: {
                padding: [0, -20, -10, 20], // ---坐标轴名称相对位置
                color: '#5A5A5A' // 坐标值的具体的颜色

              }
            },
            axisLine: {
              show: false
            },
            axisTick: {
              show: false
            }
          }
        ],
        yAxis: [
          {
            type: 'value',
            // name: '水量',
            // min: 0,
            // max: 150,
            axisLabel: { // X轴线 标签修改
              textStyle: {
                color: '#5A5A5A' // 坐标值得具体的颜色
              }
            },
            axisLine: {
              show: false
            },
            axisTick: {
              show: false
            }
          },
          {
            type: 'value',
            // name: '温度',
            // min: 0,
            // max: 15,
            // interval: 3,
            axisLabel: { // X轴线 标签修改
              textStyle: {
                color: '#5A5A5A' // 坐标值得具体的颜色
              }
            },
            axisLine: {
              show: false
            },
            axisTick: {
              show: false
            },
            splitLine: {show: false}
          }
        ],
        grid: { // 设置canvas内部表格的内距
          x: 40,
          // y: 50,
          x2: 40,
          // y2: 60,
          borderWidth: 10
        },
        series: [
          {
            name: '本期',
            type: 'bar',
            data: [],
            barWidth: 10,
            itemStyle: {
              normal: {
                // barBorderRadius: 2,
                color: '#E6350D'
              }
            }
          },
          {
            name: '同期',
            type: 'bar',
            data: [],
            barWidth: 10,
            itemStyle: {
              normal: {
                // barBorderRadius: 2,
                color: '#FFAC4C'
              }
            }
          },
          {
            name: '同比',
            type: 'line',
            yAxisIndex: 1,
            data: [],
            symbolSize: 6,
            lineStyle: {
              color: 'transparent',
              width: 1.5
            }, // 线条的样式
            itemStyle: {
              normal: {
                color: '#FF7656', // 拐点颜色
                lineStyle: {
                  color: '#FF7656', // 改变折线颜色
                  width: 1.5
                }
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
      const series0Data = []
      const series1Data = []
      const series2Data = []
      if (this.card) {
        getListXqyData(this.comCode1, this.disguisedIndexcode1, this.menuCode1, this.disguisedIndexname1, this.chartType1, this.dimensionName1).then(res => {
          var result = res.data.result
          const data = result[0].dmPcDtoExtList
          data.forEach(element => {
            xAxisData.push(element.busiDate)
            series0Data.push(element.benQi)
            series1Data.push(element.tongQi)
            series2Data.push(element.tongBi)
          })
          option.xAxis[0].data = xAxisData
          option.series[0].data = series0Data
          option.series[1].data = series1Data
          option.series[2].data = series2Data
          chart.setOption(option)
          this.$nextTick(() => {
            chart.resize()
          })
        })
      } else {
        getSYData(this.comCode, this.disguisedIndexcode).then(res => {
          var result = res.data.result
          console.log('新业务价值', result)
          const data = result[0].dmPcDtoExtList
          data.forEach(element => {
            xAxisData.push(element.busiDate)
            series0Data.push(element.benQi)
            series1Data.push(element.tongQi)
            series2Data.push(element.tongBi)
          })

          // console.log(xAxisData)
          option.xAxis[0].data = xAxisData
          option.series[0].data = series0Data
          option.series[1].data = series1Data
          option.series[2].data = series2Data
          chart.setOption(option)
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
@import '../../assets/css/main.css';
</style>
