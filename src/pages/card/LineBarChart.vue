<template>
<!--2个柱子柱状图-->
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
          },
          {
            name: '同期',
            type: 'bar',
            data: [26, 59, 90, 24, 27],
            barWidth: 10,
            itemStyle: {
              normal: {
                barBorderRadius: 2,
                color: '#FFAC4C'
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
