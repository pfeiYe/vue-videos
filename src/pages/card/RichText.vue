<template>
  <!--富文图-->
  <div :id='ecid' class='mapEcharts' />
</template>
<script>
require('echarts/theme/macarons') // echarts theme
// import { debounce } from '@/utils'

export default {
  props: {
    ecid: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      chart: null
    }
  },
  mounted () {
    // this.search2()
    this.initChart()
  },
  methods: {
    initChart () {
      this.chart = this.$echarts.init(
        document.getElementById(this.ecid),
        'shine'
      )
      this.chart.setOption({
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b}: {c} ({d}%)'
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
          orient: 'vertical',
          y: '10%',
          x: '1%',
          itemGap: 1, // 图例之间的间距
          itemWidth: 11, // 设置宽度
          itemHeight: 5, //  设置高度
          textStyle: {
            // 图例文字的样式
            fontSize: 9
          }
        },
        color: ['#e6350d', '#f5b201', '#53adee', '#e8340d', '#018330', '#0160a8', '#5ec8ad', '#f39667', '#3e919b', '#e7350d'],
        series: [
          {
            name: '访问来源',
            type: 'pie',
            selectedMode: 'single',
            radius: [0, '15%'],
            center: ['60%', '50%'],
            label: {
              fontSize: '7',
              fontWeight: 'lighter',
              position: 'inner'
            },
            labelLine: {
              show: false
            },
            data: [
              { value: 300, name: '保证险', selected: true },
              { value: 679, name: '工程险' },
              { value: 1548, name: '车险合计' }
            ]
          },
          {
            name: '访问来源',
            type: 'pie',
            radius: ['25%', '40%'],
            center: ['60%', '50%'],
            labelLine: {
              normal: {
                length: 6,
                length2: 10
              }
            },
            label: {
              // fontSize: '7', // 图中文字大小
              // fontWeight: 'lighter',
              formatter: '{a|{a}}{abg|}\n{hr|}\n{b|{b}:}\n{per|{d}%} ',
              // '{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c}  {per|{d}%}  ',
              backgroundColor: '#eee',
              borderColor: '#aaa',
              borderWidth: 1,
              borderRadius: 3,
              labelLine: {
                normal: {
                  length: 6,
                  length2: 8
                }
              },
              rich: {
                a: {
                  fontSize: 8,
                  color: '#999',
                  lineHeight: 10,
                  align: 'center'
                },
                // abg: {
                //     backgroundColor: '#333',
                //     width: '100%',
                //     align: 'right',
                //     height: 22,
                //     borderRadius: [4, 4, 0, 0]
                // },
                hr: {
                  borderColor: '#aaa',
                  width: '100%',
                  borderWidth: 0.5,
                  height: 0
                },
                b: {
                  fontSize: 10,
                  lineHeight: 18
                },
                per: {
                  fontSize: 8,
                  color: '#eee',
                  backgroundColor: '#334455',
                  // padding: [1, 1],
                  // borderRadius: 2
                  align: 'center'
                }
              }
            },
            data: [
              { value: 310, name: '企业财产险' },
              { value: 234, name: '家庭财产险' },
              { value: 448, name: ' 责任险' },
              { value: 251, name: ' 信用险' },
              { value: 202, name: ' 船舶险' },
              { value: 102, name: ' 货物运输险' },
              { value: 102, name: ' 特殊风险保险' }
            ]
          }
        ]
      })
      this.$nextTick(() => {
        this.chart.resize()
      })
    }
  }
}
</script>
<style >
@import '../../assets/css/wealthInsurance.css'
</style>
