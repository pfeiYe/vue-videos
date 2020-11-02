<template>
<div :id="ecid">
  <!--卡片-->
  <van-divider />
  <van-grid column-num="3" square>
  <van-grid-item >
    <span  style="color:#434343;font-size:13px">当日保费</span><br>
    <span style="color:red;font-size:18px;font-weight: 600">{{drbf ? drbf : '--'}}</span>
  </van-grid-item>
    <van-grid-item>
    <span  style="color:#434343">当月累计</span><br>
    <span style="color:red;font-size:18px;font-weight: 600">{{dylj ? dylj  : '--'}}</span>
  </van-grid-item>
    <van-grid-item>
    <span  style="color:#434343;font-size: 13px">当年累计</span><br>
    <span style="color:red;font-size:18px;font-weight: 600">{{dnlj ? dnlj  : '--'}}</span>
  </van-grid-item>
    <van-grid-item>
    <span  style="color:#434343;font-size: 13px">年累计同比</span><br>
    <span style="color:red;font-size:18px;font-weight: 600">{{nljtb ? nljtb : '--'}}</span>
  </van-grid-item>
    <van-grid-item>
    <span  style="color:#434343;font-size: 13px">本年计划</span><br>
    <span style="color:red;font-size:18px;font-weight: 600">{{bnjh ? bnjh : '--'}}</span>
  </van-grid-item>
    <van-grid-item>
    <span  style="color:#434343;font-size: 13px">计划完成率</span><br>
    <span style="color:red;font-size:18px;font-weight: 600">{{jhwcl ? jhwcl + '%':'--'}}</span>
  </van-grid-item>
  <span style="margin-left: 60%;font-size: 10px;font-weight: 700;color:#5A5A5A">截至业务日期:{{time  ? time : '---'}}</span>
</van-grid>
</div>
</template>
<script>
import {getSYData} from '@/api/data.js'
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
  name: 'card',
  components: {},
  data () {
    return {
      drbf: null,
      dylj: null,
      dnlj: null,
      nljtb: null,
      bnjh: null,
      jhwcl: null,
      disguisedIndexcode: null,
      comCode: null,
      chrtCode: null,
      time: null
    }
  },
  created () {},
  mounted () {
    this.disguisedIndexcode = this.com_card.disguisedIndexcode
    this.comCode = this.com_card.comCode
    this.chrtCode = this.com_card.chrtCode
    getSYData(this.comCode, this.disguisedIndexcode, this.chrtCode).then(res => {
      // debugger
      var result = res.data.result
      console.log('卡片数据:', result)
      this.time = result['BUSI_DATE']
      this.drbf = result['TODAY']
      this.dylj = result['MONTH']
      this.dnlj = result['YEAR']
      this.nljtb = result['YEARTONGBI']
      this.bnjh = result['YEARPLAN']
      this.jhwcl = result['ACHIEVERATE']
    })
  },
  watch: {
  },
  methods: {
  }
}
</script>
<style scoped>
@import '../../assets/css/wealthInsurance.css';
</style>
