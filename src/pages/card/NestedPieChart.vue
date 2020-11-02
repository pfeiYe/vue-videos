<template>
  <!--嵌套饼图-->
  <div :id='ecid' class='mapEcharts' />
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
    init  () {
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
          trigger: 'item',
          formatter: function (params) {
            // alert(JSON.stringify(params))
            var htmlStr = '<div>'
            htmlStr += params.data.name + '：' + params.data.value + params.data.unit
            return htmlStr
          }
        },
        legend: {
          orient: 'vertical',
          // y: '20%',
          x: '80%',
          itemGap: 2, // 图例之间的间距
          itemWidth: 15, // 设置宽度
          itemHeight: 5, // 设置高度
          textStyle: {
            // 图例文字的样式
            fontSize: 8
          }
        },
        // color: ['#e6350d', '#f5b201', '#53adee', '#e8340d', '#018330', '#0160a8', '#5ec8ad', '#f39667', '#3e919b', '#e7350d'],
        series: [
          {
            name: '',
            type: 'pie',
            selectedMode: 'single',
            radius: [0, '30%'],
            center: ['45%', '60%'],
            label: {
              show: true,
              fontSize: '10', // 图中文字大小
              fontWeight: 'lighter',
              formatter (v) {
                let text = v.name
                let percentFormat = Math.round(v.percent) + '%'
                // let percentFormat = v.value + '%'
                if (text.length <= 6) {
                  return `${text}:${percentFormat}`
                } else if (text.length > 6 && text.length <= 12) {
                  return text === `${text.slice(0, 6)}\n${text.slice(6)}\n${percentFormat}`
                } else if (text.length > 12 && text.length <= 18) {
                  return text === `${text.slice(0, 6)}\n${text.slice(6, 12)}\n${text.slice(12)}\n${percentFormat}`
                } else if (text.length > 18 && text.length <= 24) {
                  return text === `${text.slice(0, 6)}\n${text.slice(6, 12)}\n${text.slice(12, 18)}\n${text.slice(18)}\n${percentFormat}`
                } else if (text.length > 24 && text.length <= 30) {
                  return text === `${text.slice(0, 6)}\n${text.slice(6, 12)}\n${text.slice(12, 18)}\n${text.slice(18, 24)}\n${text.slice(24)}\n${percentFormat}`
                } else if (text.length > 30) {
                  return text === `${text.slice(0, 6)}\n${text.slice(6, 12)}\n${text.slice(12, 18)}\n${text.slice(18, 24)}\n${text.slice(24, 30)}\n${text.slice(30)}\n${percentFormat}`
                }
              }

            },
            labelLine: {
              show: true,
              normal: {
                length: 30
              }

            },
            data: []
          },
          {
            name: '',
            type: 'pie',
            radius: ['40%', '55%'],
            center: ['45%', '60%'],
            labelLine: {
              normal: {
                length: 6,
                length2: 10
              }
            },
            label: {
              show: false,
              fontSize: '7', // 图中文字大小
              fontWeight: 'lighter',
              formatter: '{b}'
            },

            data: []
          }
        ]
      }
      let chart = this.$echarts.init(
        document.getElementById(this.ecid),
        'shine'
      )
      if (this.card) {
        getListXqyData(this.comCode1, this.disguisedIndexcode1, this.menuCode1, this.disguisedIndexname1, this.chartType1, this.dimensionName1).then(res => {
          var result = res.data.result
          console.log('嵌套饼图:', result)
          this.unit = result[0].unit
          const data = result[0].dmPcDtoExtList
          const listData = result[0].dmPcDtoExtList
          const xAxisData = []
          const legendData = []
          listData.forEach(element => {
            xAxisData.push(element.busiDate)
            legendData.push(element.riskClass1)
          })
          let inner = []
          let outer = []
          let bool = false
          for (const item of data) {
            bool = false
            for (const ele of inner) {
              if (ele.name === item.riskClass1) {
                ele.value += parseFloat(item.benQi)
                bool = true
                break
              }
            }
            if (!bool) {
              inner.push({
                unit: this.unit,
                name: item.riskClass1,
                value: parseFloat(item.benQi)
              })
            }
            outer.push({
              unit: this.unit,
              name: item.riskClass2,
              value: item.benQi
            })
          }
          const d = xAxisData[xAxisData.length - 1]
          option.legend.data = legendData
          option.title.text = '截止业务日期:' + d
          option.series[0].data = inner
          option.series[1].data = outer
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
@import '../../assets/css/wealthInsurance.css'
</style>
