<template>
<!--雷达图-->
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
          itemGap: 3, // 图例之间的间距
          itemWidth: 15, // 设置宽度
          itemHeight: 6, // 设置高度
          textStyle: {
            // 图例文字的样式
            fontSize: 10
          },
          left: 'center',
          y: '7%'

        },
        radar: {
          radius: '50%',
          splitNumber: 10,
          // shape: 'circle',
          name: {
            textStyle: {
              fontSize: 8,
              color: '#fff',
              backgroundColor: '#999',
              borderRadius: 5,
              padding: [5, 0]
            }
          },
          indicator: [
            {name: '销售(sales)', max: 600},
            {name: '管理(Administration)', max: 160},
            {name: '信息技术(Information Techology)', max: 300},
            {name: '客服(Customer Support)', max: 380},
            {name: '研发(Development)', max: 520},
            {name: '市场(Marketing)', max: 250}
          ]
        },
        series: [{

          name: '预算 vs 开销（Budget vs spending）',
          type: 'radar',
          // areaStyle: {normal: {}},
          data: [
            {
              value: [300, 100, 280, 350, 500, 190],
              name: '预算分配（Allocated Budget）'
            },
            {
              value: [0, 140, 280, 310, 420, 210],
              name: '实际开销（Actual Spending）'
            }
          ]
        }]
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
