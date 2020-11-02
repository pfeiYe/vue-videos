<template>
  <!--折线柱状图-->
  <div
    :id="ecid"
    class="echarts4"
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
          // formatter: function (name) {
          //   var tmp = ''
          //   var res = ''
          //   tmp = name.split('\n')
          //   res = '' + name
          //   for (var i in tmp) {
          //     res = res.replace(tmp[i], '')
          //   }
          //   return res + name
          // },
          x: 10,
          y: 200,
          orient: 'vertical',
          icon: 'roundRect',
          itemWidth: 12, // 设置宽度
          itemHeight: 5, // 设置高度
          textStyle: { // 图例文字的样式
            fontSize: 10
          }
        },

        // color: ['#D83E1B', '#F08000', '#FF9D00', '#F8CAA1', '#FFC414', '#4B0082'],
        series: [{
          formatter: '{a} <br/>{b}: {c} ({d}%)',
          name: '',
          type: 'pie',
          minAngle: 5, // 最小的扇区角度（0 ~ 360），用于防止某个值过小导致扇区太小影响交互
          avoidLabelOverlap: true, // 是否启用防止标签重叠策略
          hoverAnimation: true, // 是否开启 hover 在扇区上的放大动画效果。
          radius: ['30%', '50%'],
          center: ['50%', '40%'],
          labelLine: {
            normal: {
              length: 10,
              length2: 20
            }
          },
          label: {
            normal: {
              formatter (v) {
                let text = v.name
                let percentFormat = Math.round(v.percent) + '%'
                // let percentFormat = v.value + '%'
                if (text.length <= 6) {
                  return `${text}\n${percentFormat}`
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
              },
              color: '#727272'
            }
          },
          emphasis: {
            label: {
              show: true,
              fontSize: '10',
              fontWeight: 'bold'
            }
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
          console.log('饼图数据:', result)
          const bbb = []
          const dataTime = []
          this.list = result[0].dmPcDtoExtList
          if (this.comCode1 === '2' || this.comCode1 === '3') {
            if (this.dimensionColumn1 === 'RESERVED3') {
              console.log(this.dimensionColumn1 + ',' + '业务结构')
              this.list.forEach(item => {
                var aaa = {}
                dataTime.push(item.busiDate)
                aaa.value = item.benQi
                aaa.name = item.reserved3
                bbb.push(aaa)
              })
              const d = dataTime[dataTime.length - 1]
              option.title.text = '截止业务日期:' + (d === undefined ? '--' : d)
              option.series[0].data = bbb
              chart.setOption(option)
              this.$nextTick(() => {
                chart.resize()
              })
            } else if (this.dimensionColumn1 === 'TYCMPTYPE') {
              console.log(this.dimensionColumn1 + ',' + '同业公司')
              this.list.forEach(item => {
                var aaa = {}
                dataTime.push(item.busiDate)
                aaa.value = item.benQi
                aaa.name = item.tyCmpType
                bbb.push(aaa)
              })
              const d = dataTime[dataTime.length - 1]
              option.title.text = '截止业务日期:' + (d === undefined ? '--' : d)
              option.series[0].data = bbb
              chart.setOption(option)
              this.$nextTick(() => {
                chart.resize()
              })
            } else {
              console.log(this.dimensionColumn1 + ',' + '普通')
              this.list.forEach(item => {
                var aaa = {}
                dataTime.push(item.busiDate)
                aaa.value = item.benQi
                aaa.name = item.busiChannel
                bbb.push(aaa)
              })
              const d = dataTime[dataTime.length - 1]
              option.title.text = '截止业务日期:' + (d === undefined ? '--' : d)
              option.series[0].data = bbb
              chart.setOption(option)
              this.$nextTick(() => {
                chart.resize()
              })
            }
          } else if (this.comCode1 === '4') {
            if (this.dimensionColumn1 === 'RESERVED3') {
              console.log(this.dimensionColumn1 + ',' + '寿险的业务结构')
              this.list.forEach(item => {
                var aaa = {}
                dataTime.push(item.busiDate)
                aaa.value = item.benQi
                aaa.name = item.reserved3
                bbb.push(aaa)
              })
              const d = dataTime[dataTime.length - 1]
              option.title.text = '截止业务日期:' + (d === undefined ? '--' : d)
              option.series[0].data = bbb
              chart.setOption(option)
              this.$nextTick(() => {
                chart.resize()
              })
            } else if (this.dimensionColumn1 === 'TYCMPTYPE') {
              console.log(this.dimensionColumn1 + ',' + '同业公司')
              this.list.forEach(item => {
                var aaa = {}
                dataTime.push(item.busiDate)
                aaa.value = item.benQi
                aaa.name = item.tyCmpType
                bbb.push(aaa)
              })
              const d = dataTime[dataTime.length - 1]
              option.title.text = '截止业务日期:' + (d === undefined ? '--' : d)
              option.series[0].data = bbb
              chart.setOption(option)
              this.$nextTick(() => {
                chart.resize()
              })
            } else if (this.dimensionColumn1 === 'PAYMODE') {
              console.log(this.dimensionColumn1 + ',' + '缴费年限')
              this.list.forEach(item => {
                var aaa = {}
                dataTime.push(item.busiDate)
                aaa.value = item.benQi
                aaa.name = item.payMode
                bbb.push(aaa)
              })
              const d = dataTime[dataTime.length - 1]
              option.title.text = '截止业务日期:' + (d === undefined ? '--' : d)
              option.series[0].data = bbb
              chart.setOption(option)
              this.$nextTick(() => {
                chart.resize()
              })
            } else {
              console.log(this.dimensionColumn1 + ',' + '寿险的普通')
              this.list.forEach(item => {
                var aaa = {}
                dataTime.push(item.busiDate)
                aaa.value = item.benQi
                aaa.name = item.channel
                bbb.push(aaa)
              })
              const d = dataTime[dataTime.length - 1]
              option.title.text = '截止业务日期:' + (d === undefined ? '--' : d)
              option.series[0].data = bbb
              chart.setOption(option)
              this.$nextTick(() => {
                chart.resize()
              })
            }
          }
        })
      } else {
        getSYData(this.comCode, this.disguisedIndexcode, this.chrtCode).then(res => {
          var result = res.data.result
          console.log('饼图数据:', result)
          const bbb = []
          const dataTime = []
          result.forEach(element => {
            var aaa = {}
            this.list = element.dmPcDtoExtList
            if (this.list.length > 0) {
              this.list.forEach(item => {
                dataTime.push(item.busiDate)
                aaa.value = item.indexValue
                aaa.name = element.indexName
              })
            }
            bbb.push(aaa)
          })
          const d = dataTime[dataTime.length - 1]
          option.title.text = '截止业务日期:' + (d === undefined ? '--' : d)
          option.series[0].data = bbb
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
@import "../../assets/css/wealthInsurance.css";
</style>
