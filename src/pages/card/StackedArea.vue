<template>
<!--堆叠面积图-->
    <div :id="ecid" class="echarts1" />
</template>
<script>
import { getSYData } from '@/api/data.js'
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
      required: true
    }
  },
  data () {
    return {
      disguisedIndexcode: null,
      comCode: null,
      indexCode: null,
      chrtCode: null
    }
  },
  mounted () {
    // alert(this.ecid)
    this.disguisedIndexcode = this.com_card.disguisedIndexcode
    this.comCode = this.com_card.comCode
    this.indexCode = this.com_card.indexCode
    this.chrtCode = this.com_card.chrtCode
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
            // alert(JSON.stringify(params))
            var res = '<div><p>' + params[0].name + '</p></div>'
            for (var i = 0; i < params.length; i++) {
              res += '<p>' + params[i].seriesName + ':' + params[i].data + '亿元' + '</p>'
            }
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
              padding: [0, -30, -25, 20], // ---坐标轴名称相对位置
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
        yAxis: [{
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
          x2: '15%',
          borderWidth: 10
        },
        series: [
          {
            name: '',
            data: [80, 93, 91, 94, 120],
            type: 'line',
            // symbol: 'circle',
            symbolSize: 6,
            areaStyle: {
              normal: {
                color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                  offset: 0, color: '#fbe2dc' },
                { offset: 0.4, color: '#fceae6' },

                { offset: 0.5, color: '#fef6f4' }
                ])
              }
            },
            // 填充区域样式
            lineStyle: {
              color: 'transparent',
              width: 1
            }, // 线条的样式
            itemStyle: {
              normal: {
                color: '#E6350C', // 拐点颜色
                lineStyle: {
                // shadowColor: 'rgba(0,0,0,0.4)',
                // shadowBlur: 20,
                // shadowOffsetY: 20,
                  color: '#E6350C', // 改变折线颜色
                  width: 1
                }
              }
            }
          },
          {
            name: '',
            data: [30, 53, 61, 44, 50],
            type: 'line',
            // symbol: 'circle',
            symbolSize: 6,
            areaStyle: {
              normal: {
                color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                  offset: 0.5, color: '#fef6d6' },
                { offset: 0.6, color: '#fefae5' },
                { offset: 1, color: '#ffffff' }
                ])
              }
            }, // 填充区域样式
            lineStyle: {
              color: 'transparent',
              width: 1
            }, // 线条的样式
            itemStyle: {
              normal: {
                color: '#FB8F20', // 拐点颜色
                lineStyle: {
                // shadowColor: 'rgba(0,0,0,0.4)',
                // shadowBlur: 20,
                // shadowOffsetY: 20,
                  color: '#FB8F20', // 改变折线颜色
                  width: 1
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
      getSYData(this.comCode, this.disguisedIndexcode, this.chrtCode).then(res => {
        var result = res.data.result
        console.log('堆叠面积图数据:', result)
        const indexCodes = this.indexCode.split(',')
        const xAxisData = []
        const series0Name = []
        const series1Name = []
        const series0Data = []
        const series1Data = []
        const iaf0 = indexCodes[0].split(':')
        const iaf0Data = result.filter(item => item.indexCode === iaf0[0])[0].dmPcDtoExtList
        iaf0Data.forEach(element => {
          xAxisData.push(element.busiDate)
          series0Data.push(element.benQi)
          series0Name.push(element.indexName)
        })
        const iaf1 = indexCodes[1].split(':')
        const iaf1Data = result.filter(item => item.indexCode === iaf1[0])[0].dmPcDtoExtList
        iaf1Data.forEach(element => {
          series1Data.push(element.benQi)
          series1Name.push(element.indexName)
        })
        const d = xAxisData[xAxisData.length - 1]
        option.title.text = '截止业务日期:' + (d === undefined ? '--' : d)
        option.xAxis.data = xAxisData
        option.series[0].data = series0Data
        option.series[1].data = series1Data
        option.series[0].name = series0Name[0]
        option.series[1].name = series1Name[1]
        chart.setOption(option)
        this.$nextTick(() => {
          chart.resize()
        })
      })
    }
  }
}
</script>
<style >
@import '../../assets/css/main.css';
</style>
