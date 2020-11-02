<template>
  <!--折线2柱状图-->
  <div
    :id="ecid"
    class="echarts3"
  />
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
    allData: {
      type: Array,
      default: null
    }
  },
  data () {
    return {
      disguisedIndexcode: null,
      comCode: null,
      chrtCode: null,
      unit: null
    }
  },
  mounted () {
    if (this.allData == null) {
      this.disguisedIndexcode = this.com_card.disguisedIndexcode
      this.comCode = this.com_card.comCode
      this.chrtCode = this.com_card.chrtCode
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
            // for (var i = 0; i < params.length; i++) {
            var res = '<div><p>' + params[0].name + '</p></div>'
            res += '<p>' + params[0].seriesName + ':' + params[0].data.value + params[0].data.unit + '</p>' +
            params[1].seriesName + ':' + params[1].data.value + params[1].data.unit + '</p>' +
            params[2].seriesName + ':' + params[2].data + '%' + '</p>'
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
          y: 2,
          itemWidth: 15, // 设置宽度
          itemHeight: 6 // 设置高度
        },
        xAxis: [
          {
            data: [],
            type: 'category',
            // axisPointer: {
            //   type: 'shadow'
            // },
            axisLabel: { // X轴线 标签修改
              rotate: 20,
              interval: 0,
              textStyle: {
                padding: [0, -15, -10, 20], // ---坐标轴名称相对位置
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
            // type: 'value',
            axisLabel: { // X轴线 标签修改
              formatter: '{value} %',
              textStyle: {
                align: 'right',
                padding: [0, -20, 0, 20], // ---坐标轴名称相对位置
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
          x2: '15%',
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
          const d = xAxisData[xAxisData.length - 1]
          option.title.text = '截止业务日期:' + (d === undefined ? '--' : d)
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
        getSYData(this.comCode, this.disguisedIndexcode, this.chrtCode).then(res => {
          var result = res.data.result
          console.log('两柱一线数据:', result)
          this.unit = result[0].unit
          const data = result[0].dmPcDtoExtList
          const bbb = []
          const bbb1 = []
          data.forEach(element => {
            const aaa = {}
            const aaa1 = {}
            xAxisData.push(element.busiDate)
            aaa.value = element.benQi
            aaa.unit = this.unit
            aaa1.value = element.tongQi
            aaa1.unit = this.unit
            // series0Data.push(element.benQi)
            // series1Data.push(element.tongQi)
            series2Data.push(element.tongBi)
            bbb.push(aaa)
            bbb1.push(aaa1)
          })
          const d = xAxisData[xAxisData.length - 1]
          option.title.text = '截止业务日期:' + (d === undefined ? '--' : d)
          option.xAxis[0].data = xAxisData
          option.series[0].data = bbb
          option.series[1].data = bbb1
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
@import "../../assets/css/main.css";
</style>
