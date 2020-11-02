<template>
<!--玫瑰图-->
    <div :id="ecid" class="echarts" />
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
        //   // backgroundColor: '../../../static/rbkb.png',
        //   text: '原保险保费收入',
        //   x: '20px', // 水平安放位置，默认为'left'，可选为：'center' | 'left' | 'right' | {number}（x坐标，单位px）
        //   y: '10px', // 垂直安放位置，默认为top，可选为：'top' | 'bottom' | 'center' | {number}（y坐标，单位px）
        //   textStyle: {
        //     color: '#3A3A3A',
        //     fontSize: 14.5, // 务必记住设置文字大小只能是数字
        //     fontFamily: 'MicrosoftYaHei'
        //   } // 主标题样式
        // },
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        legend: {
          // x: 195,
          // y: 10,
          // icon: 'roundRect',
          // itemWidth: 15, // 设置宽度
          // itemHeight: 6, // 设置高度
          // data: ['本期'],
          // textStyle: {
          //   y: 10,
          //   color: '#2A2A2A' // 这里设置图例文字颜色
          // }
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
          itemGap: 3, // 图例之间的间距
          itemWidth: 15, // 设置宽度
          itemHeight: 6, //  设置高度
          textStyle: {
            // 图例文字的样式
            fontSize: 10
          },
          x: '5%',
          y: '70%'
        // data: ['rose1', 'rose2', 'rose3', 'rose4', 'rose5', 'rose6', 'rose7', 'rose8']
        },
        series: [
          {
            name: '半径模式',
            type: 'pie',
            radius: [10, 60],
            center: ['30%', '40%'],
            roseType: 'radius',
            label: {
              show: false
            },
            labelLine: {
              normal: {
                length: 1,
                length2: 1
              }
            },
            emphasis: {
              label: {
                show: true
              }
            },
            data: [
              {value: 10, name: 'rose1'},
              {value: 5, name: 'rose2'},
              {value: 15, name: 'rose3'},
              {value: 25, name: 'rose4'},
              {value: 20, name: 'rose5'},
              {value: 35, name: 'rose6'},
              {value: 30, name: 'rose7'},
              {value: 40, name: 'rose8'}
            ]
          },
          {
            name: '面积模式',
            type: 'pie',
            radius: [10, 60],
            center: ['70%', '40%'],
            roseType: 'area',
            labelLine: {
              normal: {
                length: 1,
                length2: 1
              }
            },
            data: [
              {value: 10, name: 'rose1'},
              {value: 5, name: 'rose2'},
              {value: 15, name: 'rose3'},
              {value: 25, name: 'rose4'},
              {value: 20, name: 'rose5'},
              {value: 35, name: 'rose6'},
              {value: 30, name: 'rose7'},
              {value: 40, name: 'rose8'}
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
@import '../../assets/css/main.css';
</style>
