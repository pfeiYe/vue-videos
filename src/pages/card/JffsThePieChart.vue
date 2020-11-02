<template>
<!--折线柱状图-->
    <div :id="ecid" class="echarts4" />
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
      bbb: []
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
          x: 10,
          y: 200,
          icon: 'roundRect',
          itemWidth: 12, // 设置宽度
          itemHeight: 5, // 设置高度
          textStyle: { // 图例文字的样式
            fontSize: 10
          }
        },

        color: ['#D83E1B', '#F08000', '#FF9D00', '#F8CAA1', '#FFC414', '#4B0082'],
        series: [{
          formatter: '{a} <br/>{b}: {c} ({d}%)',
          name: '',
          type: 'pie',
          radius: ['30%', '50%'],
          center: ['50%', '40%'],

          labelLine: {
            normal: {
              length: 0,
              length2: 20
            }
          },
          label: {
            normal: {
              formatter: '{b} : \n({d}%)',
              // formatter (data) {
              //   let text = data.name
              //   console.log(text)
              //   let percentFormat = Math.round(data.percent) + '%'
              //   // let percentFormat = v.value + '%'
              //   if (text.length <= 6) {
              //     return `${text}\n${percentFormat}`
              //   } else if (text.length > 6 && text.length <= 12) {
              //     return text === `${text.slice(0, 6)}\n${text.slice(6)}\n${percentFormat}`
              //   } else if (text.length > 12 && text.length <= 18) {
              //     return text === `${text.slice(0, 6)}\n${text.slice(6, 12)}\n${text.slice(12)}\n${percentFormat}`
              //   } else if (text.length > 18 && text.length <= 24) {
              //     return text === `${text.slice(0, 6)}\n${text.slice(6, 12)}\n${text.slice(12, 18)}\n${text.slice(18)}\n${percentFormat}`
              //   } else if (text.length > 24 && text.length <= 30) {
              //     return text === `${text.slice(0, 6)}\n${text.slice(6, 12)}\n${text.slice(12, 18)}\n${text.slice(18, 24)}\n${text.slice(24)}\n${percentFormat}`
              //   } else if (text.length > 30) {
              //     return text === `${text.slice(0, 6)}\n${text.slice(6, 12)}\n${text.slice(12, 18)}\n${text.slice(18, 24)}\n${text.slice(24, 30)}\n${text.slice(30)}\n${percentFormat}`
              //   }
              // },
              color: '#727272'
            }
          },
          avoidLabelOverlap: false,
          emphasis: {
            label: {
              show: true,
              fontSize: '10',
              fontWeight: 'bold'
            }
          },
          data: [{name: '新单趸缴规模保费', value: this.bbb[0]},
            {name: '新单期缴规模保费', value: this.bbb[1]},
            {name: '短期险规模保费', value: this.bbb[2]},
            {name: '续期规模保费', value: this.bbb[3]}]
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
          const dataTime = []
          console.log('缴费方式数据:', result)
          result.forEach(item => {
            dataTime.push(item.BUSI_DATE)
            this.bbb.push(item.INDEXVALUE_Y)
          })
          const d = dataTime[dataTime.length - 1]
          option.title.text = '截止业务日期:' + (d === undefined ? '--' : d)
          option.series[0].data[0].value = this.bbb[0]
          option.series[0].data[1].value = this.bbb[1]
          option.series[0].data[2].value = this.bbb[2]
          option.series[0].data[3].value = this.bbb[3]
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
@import '../../assets/css/wealthInsurance.css';
</style>
