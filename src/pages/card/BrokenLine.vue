<template>
<!--折线图-->
    <div :id="ecid" class="echarts" />
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
          icon: 'roundRect',
          itemWidth: 15, // 设置宽度
          itemHeight: 6 // 设置高度
        },
        tooltip: {
          trigger: 'axis',
          textStyle: {
            align: 'left'
          },
          formatter: function (params) {
            var res = '<div><p>' + params[0].name + '</p></div>'
            res += '<p>' + params[0].seriesName + ':' + params[0].data.value + params[0].data.unit + '</p>' +
            params[1].seriesName + ':' + params[1].data.value + params[1].data.unit + '</p>' +
            params[2].seriesName + ':' + params[2].data + '%' + '</p>'
            return res
          }
        },
        xAxis: {
          type: 'category',
          boundaryGap: ['10%', '20%'],
          data: [],
          axisLabel: { // X轴线 标签修改
            rotate: 20,
            textStyle: {
              padding: [0, -30, -20, 20], // ---坐标轴名称相对位置
              color: '#5A5A5A' // 坐标值的具体的颜色
            }
          },
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          }
        },
        yAxis: [
          {
            type: 'value',
            splitLine: {
              lineStyle: {
              //    type: 'dashed', // 设置网格线为虚线
                color: ['#DCDCDC']
              }
            },
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
            interval: 3,
            splitLine: {
              lineStyle: {
              //    type: 'dashed', // 设置网格线为虚线
                color: ['#DCDCDC']
              }
            },
            axisLabel: { // X轴线 标签修改
              textStyle: {
                align: 'right',
                color: '#5A5A5A' // 坐标值得具体的颜色
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
            data: [80, 93, 91, 34, 120],
            barGap: 1, // 柱图间距
            type: 'line',
            // symbol: 'circle',
            symbolSize: 6,
            lineStyle: {
              color: 'transparent',
              width: 1.5
            }, // 线条的样式
            itemStyle: {
              normal: {
                color: '#E6350C', // 拐点颜色
                lineStyle: {
                // shadowColor: 'rgba(0,0,0,0.4)',
                // shadowBlur: 20,
                // shadowOffsetY: 20,
                  color: '#E6350C', // 改变折线颜色
                  width: 1.5
                }
              }
            }
          },
          {
            name: '同期',
            data: [60, 103, 71, 84, 150],
            type: 'line',
            // symbol: 'circle',
            symbolSize: 6,
            lineStyle: {
              color: 'transparent',
              width: 1.5
            }, // 线条的样式
            itemStyle: {
              normal: {
                color: '#FB8F20', // 拐点颜色
                lineStyle: {
                // shadowColor: 'rgba(0,0,0,0.4)',
                // shadowBlur: 20,
                // shadowOffsetY: 20,
                  color: '#FB8F20', // 改变折线颜色
                  width: 1.5
                }
              }
            }
          },
          {
            name: '同比',
            data: [40, 73, 51, 74, 60],
            type: 'line',
            // symbol: 'circle',
            symbolSize: 6,
            lineStyle: {
              color: 'transparent',
              width: 1.5
            }, // 线条的样式
            itemStyle: {
              normal: {
                color: '#F8CAA1', // 拐点颜色
                lineStyle: {
                // shadowColor: 'rgba(0,0,0,0.4)',
                // shadowBlur: 20,
                // shadowOffsetY: 20,
                  color: '#F8CAA1', // 改变折线颜色
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
      if (this.card) {
        getListXqyData(this.comCode1, this.disguisedIndexcode1, this.menuCode1, this.disguisedIndexname1, this.chartType1, this.dimensionName1).then(res => {
          var result = res.data.result
          console.log('<><><><>', result)
          const data = []
          const listData = result[0].dmPcDtoExtList
          const xAxisData = []
          listData.forEach(element => {
            var object = {}
            xAxisData.push(element.busiDate)
            object.name = element.branchCode
            object.value = element.tongBi
            data.push(object)
          })
          const d = xAxisData[xAxisData.length - 1]
          option.title.text = '截止业务日期:' + (d === undefined ? '--' : d)
          option.series[0].data = data
          chart.setOption(option)
          this.$nextTick(() => {
            chart.resize()
          })
        })
      } else {
        getSYData(this.comCode, this.disguisedIndexcode, this.chrtCode).then(res => {
          var result = res.data.result
          // console.log('!!!', result)
          const data = result[0].dmPcDtoExtList
          this.unit = result[0].unit
          const bbb = []
          const bbb1 = []
          const xAxisData = []
          // const series0Data = []
          // const series1Data = []
          const series2Data = []
          data.forEach(element => {
            const aaa = {}
            const aaa1 = {}
            xAxisData.push(element.busiDate)
            // series0Data.push(element.benQi)
            // series1Data.push(element.tongQi)
            series2Data.push(element.tongBi)
            aaa.value = element.benQi
            aaa.unit = this.unit
            aaa1.value = element.tongQi
            aaa1.unit = this.unit
            bbb.push(aaa)
            bbb1.push(aaa1)
          })
          const d = xAxisData[xAxisData.length - 1]
          option.title.text = '截止业务日期:' + (d === undefined ? '--' : d)
          option.xAxis.data = xAxisData
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
@import '../../assets/css/main.css';
</style>
