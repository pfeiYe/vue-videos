<template>
<!--柱状图-->
    <div :id="ecid" class="echarts3" />
</template>
<script>
// import echarts from 'echarts'
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
    this.initChart()
  },
  methods: {
    initChart () {
      this.chart = this.$echarts.init(
        document.getElementById(this.ecid),
        'shine'
      )
      this.chart.setOption({
        // title: {
        //   background: './ybxbfsr.png',
        //   text: '归属于母公司净利润',
        //   x: '20px', // 水平安放位置，默认为'left'，可选为：'center' | 'left' | 'right' | {number}（x坐标，单位px）
        //   y: '10px', // 垂直安放位置，默认为top，可选为：'top' | 'bottom' | 'center' | {number}（y坐标，单位px）
        //   textStyle: {
        //     color: '#3A3A3A',
        //     fontSize: 14.5, // 务必记住设置文字大小只能是数字
        //     fontFamily: 'MicrosoftYaHei'
        //   } // 主标题样式
        // },
        // tooltip: {
        //   trigger: 'axis',
        //   axisPointer: {
        //     type: 'cross',
        //     crossStyle: {
        //       color: '#999'
        //     }
        //   }
        // },
        // toolbox: {
        //   feature: {
        //     dataView: {show: true, readOnly: false},
        //     magicType: {show: true, type: ['line', 'bar']},
        //     restore: {show: true},
        //     saveAsImage: {show: true}
        //   }
        // },
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
          x: 145,
          y: 2,
          itemWidth: 15, // 设置宽度
          itemHeight: 6 // 设置高度
        },
        xAxis: [
          {
            type: 'category',
            data: ['2015年', '2016年', '2017年', '2018年', '2019年'],
            axisPointer: {
              type: 'shadow'
            },
            axisLabel: { // X轴线 标签修改
              textStyle: {
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
            min: 0,
            max: 150,
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
          // y: 50,
          x2: 40,
          // y2: 60,
          borderWidth: 10
        },
        series: [
          {
            name: '本期',
            type: 'bar',
            data: [20, 49, 70, 22, 26],
            barWidth: 10,
            itemStyle: {
              normal: {
                barBorderRadius: 2,
                color: '#E6350D'
              }
            }
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
@import '../../assets/css/main.css';
</style>
