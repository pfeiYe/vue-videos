<template>
<!--地图-->
  <div :id="ecid" class="mapEcharts" />
</template>
<script>
// import echarts from 'echarts'
import { getListXqyData } from '@/api/data.js'
require('echarts/map/js/china')
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
    }
    this.comCode1 = this.card.comCode // 公司code
    this.menuCode1 = this.card.menuCode // 指标code
    this.disguisedIndexcode1 = this.card.disguisedIndexcode // 伪指标代码
    this.chartType1 = this.card.chrtCode // 图表类型
    this.dimensionColumn1 = this.card.dimensionColumn // 维度字段
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
          // 鼠标移到图里面的浮动提示框
          // formatter详细配置： https://echarts.baidu.com/option.html#tooltip.formatter
          formatter (params, ticket, callback) {
            // params.data 就是series配置项中的data数据遍历
            let localValue
            if (params.data) {
              localValue = params.data.value
            } else {
              // 为了防止没有定义数据的时候报错写的
              localValue = 0
            }
            let htmlStr = `
          <div style='font-size:18px'> ${params.name}</div>
          <p style='text-align:leftmargin-top:-10px'>
          同比：${localValue}%<br/>
          </p>
        `
            return htmlStr
          }
          // backgroundColor:'#ff7f50',//提示标签背景颜色d
          // textStyle:{color:'#fff'} //提示标签字体颜色
        },
        // visualMap的详细配置解析：https://echarts.baidu.com/option.html#visualMap

        // title: {
        //   text: '增速',
        //   x: '1%', // 水平安放位置，默认为'left'，可选为：'center' | 'left' | 'right' | {number}（x坐标，单位px）
        //   y: '92%', // 垂直安放位置，默认为top，可选为：'top' | 'bottom' | 'center' | {number}（y坐标，单位px）
        //   textStyle: {
        //     color: 'RGBA(118, 118, 118, 1)',
        //     fontSize: 10, // 设置文字大小只能是数字
        //     fontFamily: 'MicrosoftYaHei'
        //   } // 主标题样式
        // },
        grid: { // 右边的bar
          right: '15%'
        },
        visualMap: {
          // 左下角的颜色区域
          type: 'piecewise', // 定义为分段型 visualMap
          min: '0',
          max: '1000',
          orient: 'horizontal',
          itemWidth: '30%',
          itemHeight: '5%',
          textGap: -30,
          x: 'left',
          bottom: 50,
          left: '0',
          top: '85%',
          itemGap: 3,
          pieces: [
            // 自定义『分段式视觉映射组件（visualMapPiecewise）』的每一段的范围，以及每一段的文字，以及每一段的特别的样式
            { min: 0, label: '\n' + '\n' + '≥0%', color: '#DC143C' }, // (900, 1000]
            { min: -2, max: 0, label: '\n' + '\n' + '≥-2%', color: 'yellow' }, // (500, 900]
            { min: -4, max: -2, label: '\n' + '\n' + '≥-4%', color: '#ff7656' }, // (310, 500]3
            { max: -4, label: '\n' + '\n' + '<-4%', color: '#9932CC' } // (200, 300]
          ]
        },
        // geo配置详解： https://echarts.baidu.com/option.html#geo
        geo: {
          y: 10,
          // 地理坐标系组件用于地图的绘制
          map: 'china', // 表示中国地图
          // roam: true, // 是否开启鼠标缩放和平移漫游
          zoom: 1.1, // 当前视角的缩放比例（地图的放大比例）
          label: {
            show: true,
            textStyle: {
              fontSize: 7,
              fontWeight: 'normal'
            }
          },
          itemStyle: {
            // 地图区域的多边形 图形样式。
            borderColor: 'rgba(0, 0, 0, 0.2)',
            emphasis: {
              // 高亮状态下的多边形和标签样式
              shadowBlur: 20,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        },
        series: [
          {
            name: '', // 浮动框的标题（上面的formatter自定义了提示框数据，所以这里可不写）
            type: 'map',
            geoIndex: 0,
            // 这是需要配置地图上的某个地区的数据，根据后台的返回的数据进行拼接（下面是我定义的假数据）

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
          console.log('地图数据:', result)
          const data = []
          const xAxisData = []
          const listData = result[0].dmPcDtoExtList
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
      }
    }
  }
}
</script>
<style >
@import "../../assets/css/wealthInsurance.css";
</style>
