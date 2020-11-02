import request from '@/axios/index'
const PN = '/datapanel/'
// const PN = ''
export function getComTable () {
  return [{
    code: '1',
    name: '人保集团',
    normal: PN + '/static/rbjt.png',
    active: PN + '/static/rbjt1.png',
    ordr: 1
  },
  {
    code: '2',
    name: '人保财险',
    normal: PN + '/static/rbcx.png',
    active: PN + '/static/rbcx1.png',
    ordr: 2
  },
  {
    code: '3',
    name: '人保健康',
    normal: PN + '/static/rbjk.png',
    active: PN + '/static/rbjk1.png',
    ordr: 3
  },
  {
    code: '4',
    name: '人保寿险',
    normal: PN + '/static/rbsx.png',
    active: PN + '/static/rbsx1.png',
    ordr: 4
  },
  {
    code: '6',
    name: '人保资产',
    normal: PN + '/static/rbzc.png',
    active: PN + '/static/rbzc1.png',
    ordr: 5
  }]
}
export function getMenuTable () {
  return [{
    code: '1',
    name: '业务增长',
    icon: PN + '/static/ywzc.png',
    ordr: 1
  }, {
    code: '2',
    name: '运营效率',
    icon: PN + '/static/yyxl.png',
    ordr: 2
  }, {
    code: '3',
    name: '盈利价值',
    icon: PN + '/static/yljz.png',
    ordr: 3
  }, {
    code: '4',
    name: '客户服务',
    icon: PN + '/static/khfw.png',
    ordr: 4
  }, {
    code: '5',
    name: '综合实力',
    icon: PN + '/static/zhsl.png',
    ordr: 5
  }, {
    code: '6',
    name: '销售能力',
    icon: PN + '/static/xsnl.png',
    ordr: 6
  }, {
    code: '7',
    name: '日报看板',
    icon: PN + '/static/rbkb.png',
    ordr: 7
  }, {
    code: '8',
    name: '专项分析',
    icon: PN + '/static/zxfx.png',
    ordr: 8
  }]
}
export function getComMenuTable () {
  return [
    {
      comCode: '2',
      menuCode: '7',
      ordr: 5
    },
    {
      comCode: '1',
      menuCode: '1',
      ordr: 1
    },
    {
      comCode: '1',
      menuCode: '3',
      ordr: 2
    },
    {
      comCode: '1',
      menuCode: '5',
      ordr: 3
    }, {
      comCode: '2',
      menuCode: '1',
      ordr: 1
    },
    {
      comCode: '2',
      menuCode: '2',
      ordr: 2
    },
    {
      comCode: '2',
      menuCode: '3',
      ordr: 3
    },
    {
      comCode: '2',
      menuCode: '4',
      ordr: 3
    },
    {
      comCode: '2',
      menuCode: '5',
      ordr: 4
    },
    {
      comCode: '3',
      menuCode: '7',
      ordr: 6
    },
    {
      comCode: '3',
      menuCode: '1',
      ordr: 1
    },
    {
      comCode: '3',
      menuCode: '3',
      ordr: 2
    }, {
      comCode: '3',
      menuCode: '4',
      ordr: 3
    }, {
      comCode: '3',
      menuCode: '5',
      ordr: 4
    }, {
      comCode: '3',
      menuCode: '6',
      ordr: 5
    },
    {
      comCode: '3',
      menuCode: '8',
      ordr: 5
    },
    {
      comCode: '4',
      menuCode: '7',
      ordr: 6
    },
    {
      comCode: '4',
      menuCode: '1',
      ordr: 1
    },
    {
      comCode: '4',
      menuCode: '2',
      ordr: 2
    },
    {
      comCode: '4',
      menuCode: '3',
      ordr: 3
    },
    {
      comCode: '4',
      menuCode: '4',
      ordr: 4
    },
    {
      comCode: '4',
      menuCode: '5',
      ordr: 5
    },
    {
      comCode: '6',
      menuCode: '7',
      ordr: 3
    },
    {
      comCode: '6',
      menuCode: '1',
      ordr: 1
    },
    {
      comCode: '6',
      menuCode: '5',
      ordr: 2
    }
  ]
}
export function getChartTable () {
  return [{
    code: '1',
    name: '日历饼图',
    ordr: 1
  }, {
    code: '2',
    name: '饼、柱图',
    ordr: 2
  }, {
    code: '3',
    name: '嵌套饼图',
    ordr: 3
  }, {
    code: '4',
    name: '堆叠面积图',
    ordr: 4
  }, {
    code: '5',
    name: '横柱图',
    ordr: 5
  }, {
    code: '6',
    name: '折柱混图',
    ordr: 6
  }, {
    code: '7',
    name: '旭日图',
    ordr: 7
  }, {
    code: '8',
    name: '雷达图',
    ordr: 8
  }, {
    code: '9',
    name: '仪表盘',
    ordr: 9
  }, {
    code: '10',
    name: '富文本',
    ordr: 10
  }, {
    code: '11',
    name: '玫瑰图',
    ordr: 11
  }, {
    code: '12',
    name: '卡片',
    ordr: 12
  }, {
    code: '13',
    name: '折线图',
    ordr: 13
  }, {
    code: '14',
    name: '两柱一线图',
    ordr: 14
  }, {
    code: '15',
    name: '堆叠柱图',
    ordr: 15
  }, {
    code: '16',
    name: '地图',
    ordr: 16
  }, {
    code: '17',
    name: '表格',
    ordr: 17
  }, {
    code: '18',
    name: '环饼图',
    ordr: 18
  }, {
    code: '19',
    name: '复用折线图',
    ordr: 19
  }, {
    code: '20',
    name: '表格（行转列）',
    ordr: 19
  }, {
    code: '21',
    name: '环饼图-缴费方式',
    ordr: 19
  }, {
    code: '22',
    name: '表格（资产行转列）--资产',
    ordr: 19
  }, {
    code: '23',
    name: '表格 规模保费(按日) -板块',
    ordr: 19
  }, {
    code: '24',
    name: '堆叠柱图2',
    ordr: 19
  }]
}

export function getCardTable () {
  return [{
    code: 'card001',
    name: '原保险保费收入',
    unit: '亿元',
    icon: PN + '/static/icon/3.png'
  }, {
    code: 'card002',
    name: '总资产/净资产',
    unit: '亿元',
    icon: PN + '/static/icon/1.png'
  }, {
    code: 'card003',
    name: '净利润',
    unit: '亿元',
    icon: PN + '/static/icon/7.png'
  }, {
    code: 'card004',
    name: '归属于母公司净利润',
    unit: '亿元',
    icon: PN + '/static/icon/2.png'
  }, {
    code: 'card005',
    name: '综合偿付能力充足率',
    unit: '%',
    icon: PN + '/static/icon/5.png'
  }, {
    code: 'card006',
    name: '百元保费净现金流',
    unit: '元',
    icon: PN + '/static/icon/2.png'
  }, {
    code: 'card007',
    name: '同业市场份额',
    unit: '%',
    icon: PN + '/static/icon/8.png'
  }, {
    code: 'card008',
    name: '综合赔付率/费用率/成本率',
    unit: '%',
    icon: PN + '/static/icon/6.png'
  }, {
    code: 'card009',
    name: '净利润/承保利润',
    unit: '亿元',
    icon: PN + '/static/icon/4.png'
  }, {
    code: 'card010',
    name: '保费收入（收付费）',
    unit: '亿',
    icon: PN + '/static/icon/3.png'
  }, {
    code: 'card011',
    name: '新业务价值（半年）/（一年）',
    unit: '亿元',
    icon: PN + '/static/icon/8.png'
  }, {
    code: 'card012',
    name: '短期险综合成本率',
    unit: '%',
    icon: PN + '/static/icon/6.png'
  }, {
    code: 'card013',
    name: '规模保费（按日）',
    unit: '亿',
    icon: PN + '/static/icon/3.png'
  }, {
    code: 'card014',
    name: '资产管理费收入',
    unit: '亿元',
    icon: PN + '/static/icon/3.png'
  }, {
    code: 'card015',
    name: '受托资产规模合计',
    unit: '亿元',
    icon: PN + '/static/icon/1.png'
  }, {
    code: 'card016',
    name: '人均期缴产能',
    unit: '万元/人',
    icon: PN + '/static/icon/6.png'
  }, {
    code: 'card017',
    name: '原保险保费收入（按日）-计划',
    unit: '亿',
    icon: PN + '/static/icon/3.png'
  }, {
    code: 'card018',
    name: '业务口径标准保费（按日）',
    unit: '亿',
    icon: PN + '/static/icon/5.png'
  }, {
    code: 'card019',
    name: '规模人力（按日）',
    unit: '万元/人',
    icon: PN + '/static/icon/5.png'
  }, {
    code: 'card020',
    name: '',
    icon: PN + '/static/icon/5.png'
  }]
}

export function getComCardTable () {
  return [{
    chrtCode: '13',
    cardCode: 'card001',
    disguisedIndexcode: 'D_JT_00001',
    indexCode: '',
    comCode: '1',
    ordr: 1
  },
  {
    chrtCode: '4',
    cardCode: 'card002',
    disguisedIndexcode: 'D_JT_00002',
    indexCode: 'TX2010003:BenQi,TX2010004:BenQi',
    comCode: '1',
    ordr: 2
  },
  {
    chrtCode: '14',
    cardCode: 'card003',
    disguisedIndexcode: 'D_JT_00003',
    indexCode: '',
    comCode: '1',
    ordr: 3
  },
  {
    chrtCode: '14',
    cardCode: 'card004',
    disguisedIndexcode: 'D_JT_00004',
    indexCode: '',
    comCode: '1',
    ordr: 4
  },
  {
    chrtCode: '12',
    cardCode: 'card010',
    disguisedIndexcode: 'D_CX_00010',
    indexCode: '',
    comCode: '2',
    ordr: 11
  },
  {
    chrtCode: '5',
    cardCode: 'card005',
    disguisedIndexcode: 'D_CX_00001',
    indexCode: '',
    comCode: '2',
    ordr: 5
  },
  {
    chrtCode: '14',
    cardCode: 'card006',
    disguisedIndexcode: 'D_CX_00002',
    indexCode: '',
    comCode: '2',
    ordr: 6
  },
  {
    chrtCode: '18',
    cardCode: 'card007',
    disguisedIndexcode: 'D_CX_00003',
    indexCode: 'JT1010021_1:indexValue,JT1010021_2:indexValue,JT1010021_3:indexValue,JT1010021_4:indexValue,JT1010021_8:indexValue,JT1010021_9:indexValue',
    comCode: '2',
    ordr: 7
  },
  {
    chrtCode: '15',
    cardCode: 'card008',
    disguisedIndexcode: 'D_CX_00004',
    indexCode: 'CX3030016:tongQi,CX3030016:benQi,CX3030011:tongQi,CX3030011:benQi,CX2030021:tongBi',
    comCode: '2',
    ordr: 8
  },
  {
    chrtCode: '19',
    cardCode: 'card009',
    disguisedIndexcode: 'D_CX_00007',
    indexCode: 'CX2010141:benQi,TX2030005:benQi',
    comCode: '2',
    ordr: 9
  },
  {
    chrtCode: '4',
    cardCode: 'card002',
    disguisedIndexcode: 'D_CX_00009',
    indexCode: 'TX2010008:benQi,TX2010009:benQi',
    comCode: '2',
    ordr: 10
  },
  {
    chrtCode: '12',
    cardCode: 'card013',
    disguisedIndexcode: 'D_JK_00016',
    indexCode: '',
    comCode: '3',
    ordr: 17
  },
  {
    chrtCode: '4',
    cardCode: 'card002',
    disguisedIndexcode: 'D_JK_00001',
    indexCode: 'TX2010019:tongQi,TX2010020:tongQi',
    comCode: '3',
    ordr: 12
  },
  {
    chrtCode: '13',
    cardCode: 'card003',
    disguisedIndexcode: 'D_JK_00002',
    indexCode: '',
    comCode: '3',
    ordr: 13
  },
  {
    chrtCode: '5',
    cardCode: 'card005',
    disguisedIndexcode: 'D_JK_00003',
    indexCode: 'JK1050001:tongQi,JK1050001:benQi',
    comCode: '3',
    ordr: 14
  },
  {
    chrtCode: '6',
    cardCode: 'card011',
    disguisedIndexcode: 'D_JK_00004',
    indexCode: '',
    comCode: '3',
    ordr: 15
  },
  {
    chrtCode: '24',
    cardCode: 'card012',
    disguisedIndexcode: 'D_JK_00005',
    indexCode: 'JK1030010:tongQi,JK1030010:benQi,JK1030011:tongQi,JK1030011:benQi,JK1030012:tongQi,JK1030012:benQi,JK1030013:tongBi',
    comCode: '3',
    ordr: 16
  },
  {
    chrtCode: '12',
    cardCode: 'card013',
    disguisedIndexcode: 'D_SX_00001',
    indexCode: '',
    comCode: '4',
    ordr: 18
  }, {
    chrtCode: '12',
    cardCode: 'card017',
    disguisedIndexcode: 'D_SX_00007',
    indexCode: '',
    comCode: '4',
    ordr: 24
  },
  {
    chrtCode: '4',
    cardCode: 'card002',
    disguisedIndexcode: 'D_SX_00002',
    indexCode: 'TX2010036:benQi,TX2010037:benQi',
    comCode: '4',
    ordr: 19
  },
  {
    chrtCode: '13',
    cardCode: 'card003',
    disguisedIndexcode: 'D_SX_00003',
    indexCode: '',
    comCode: '4',
    ordr: 20
  },
  {
    chrtCode: '5',
    cardCode: 'card005',
    disguisedIndexcode: 'D_SX_00004',
    indexCode: '',
    comCode: '4',
    ordr: 21
  }, {
    chrtCode: '6',
    cardCode: 'card011',
    disguisedIndexcode: 'D_SX_00005',
    indexCode: '',
    comCode: '4',
    ordr: 22
  },
  {
    chrtCode: '13',
    cardCode: 'card016',
    disguisedIndexcode: 'D_SX_00006',
    indexCode: '',
    comCode: '4',
    ordr: 23
  },
  {
    chrtCode: '6',
    cardCode: 'card018',
    disguisedIndexcode: 'D_SX_00008',
    indexCode: '',
    comCode: '4',
    ordr: 25
  },
  {
    chrtCode: '6',
    cardCode: 'card019',
    disguisedIndexcode: 'D_SX_00009',
    indexCode: 'SX2010111:tongBi,SX2010111:tongQi,SX2010111:benQi',
    comCode: '4',
    ordr: 26
  },
  {
    chrtCode: '13',
    cardCode: 'card003',
    disguisedIndexcode: 'D_ZC_00001',
    indexCode: '',
    comCode: '6',
    ordr: 27
  },
  {
    chrtCode: '14',
    cardCode: 'card014',
    disguisedIndexcode: 'D_ZC_00002',
    indexCode: '',
    comCode: '6',
    ordr: 28
  },
  {
    chrtCode: '14',
    cardCode: 'card015',
    disguisedIndexcode: 'D_ZC_00003',
    indexCode: '',
    comCode: '6',
    ordr: 28
  }
  ]
}
export function getComCardDetailTable () {
  return [{
    disguisedIndexcode: 'D_JT_00001',
    indexName: '原保险保费收入',
    dimensionColumn: null,
    cardCode: 'card020',
    comCode: '1',
    menuCode: '1',
    chrtCode: '6',
    indexCode: ''
  },
  {
    disguisedIndexcode: 'D_JT_00002',
    indexName: '子公司原保险保费收入（人保财险）',
    dimensionColumn: null,
    cardCode: 'card020',
    comCode: '1',
    menuCode: '1',
    chrtCode: '6',
    indexCode: ''
  },
  {
    disguisedIndexcode: 'D_JT_00003',
    indexName: '子公司原保险保费收入（人保健康）',
    dimensionColumn: null,
    cardCode: 'card020',
    comCode: '1',
    menuCode: '1',
    chrtCode: '6',
    indexCode: ''
  },
  {
    disguisedIndexcode: 'D_JT_00004',
    indexName: '子公司原保险保费收入（人保寿险）',
    dimensionColumn: null,
    cardCode: 'card020',
    comCode: '1',
    menuCode: '1',
    chrtCode: '6',
    indexCode: ''
  },
  {
    disguisedIndexcode: 'D_JT_00005',
    indexName: '净利润',
    dimensionColumn: null,
    cardCode: 'card020',
    comCode: '1',
    menuCode: '3',
    chrtCode: '6',
    indexCode: ''
  },
  {
    disguisedIndexcode: 'D_JT_00006',
    indexName: '子公司净利润（人保财险）',
    dimensionColumn: null,
    cardCode: 'card020',
    comCode: '1',
    menuCode: '3',
    chrtCode: '6',
    indexCode: ''
  },
  {
    disguisedIndexcode: 'D_JT_00007',
    indexName: '子公司净利润（人保健康）',
    dimensionColumn: null,
    cardCode: 'card020',
    comCode: '1',
    menuCode: '3',
    chrtCode: '6',
    indexCode: ''
  },
  {
    disguisedIndexcode: 'D_JT_00008',
    indexName: '子公司净利润（人保寿险）',
    dimensionColumn: null,
    cardCode: 'card020',
    comCode: '1',
    menuCode: '3',
    chrtCode: '6',
    indexCode: ''
  },
  {
    disguisedIndexcode: 'D_JT_00009',
    indexName: '归属于母公司股东净利润',
    dimensionColumn: null,
    cardCode: 'card020',
    comCode: '1',
    menuCode: '3',
    chrtCode: '6',
    indexCode: ''
  },
  {
    disguisedIndexcode: 'D_JT_00010',
    indexName: '子公司归属于母公司股东净利润（人保财险）',
    dimensionColumn: null,
    cardCode: 'card020',
    comCode: '1',
    menuCode: '3',
    chrtCode: '6',
    indexCode: ''
  },
  {
    disguisedIndexcode: 'D_JT_00011',
    indexName: '子公司归属于母公司股东净利润（人保健康）',
    dimensionColumn: null,
    cardCode: 'card020',
    comCode: '1',
    menuCode: '3',
    chrtCode: '6',
    indexCode: ''
  },
  {
    disguisedIndexcode: 'D_JT_00012',
    indexName: '子公司归属于母公司股东净利润（人保寿险）',
    dimensionColumn: null,
    cardCode: 'card020',
    comCode: '1',
    menuCode: '3',
    chrtCode: '6',
    indexCode: ''
  },
  {
    disguisedIndexcode: 'D_JT_00013',
    indexName: '净资产收益率（ROE）',
    dimensionColumn: null,
    cardCode: 'card020',
    comCode: '1',
    menuCode: '3',
    chrtCode: '6',
    indexCode: ''
  },
  {
    disguisedIndexcode: 'D_JT_00014',
    indexName: '资产回报率（ROA）',
    dimensionColumn: null,
    cardCode: 'card020',
    comCode: '1',
    menuCode: '3',
    chrtCode: '6',
    indexCode: ''
  },
  {
    disguisedIndexcode: 'D_JT_00015',
    indexName: '投资收益（财务）',
    dimensionColumn: null,
    cardCode: 'card020',
    comCode: '1',
    menuCode: '3',
    chrtCode: '6',
    indexCode: ''
  },
  {
    disguisedIndexcode: 'D_JT_00016',
    indexName: '投资收益率（财务）',
    dimensionColumn: null,
    cardCode: 'card020',
    comCode: '1',
    menuCode: '3',
    chrtCode: '6',
    indexCode: ''
  },
  {
    disguisedIndexcode: 'D_JT_00017',
    indexName: '投资收益（业务）',
    dimensionColumn: null,
    cardCode: 'card020',
    comCode: '1',
    menuCode: '3',
    chrtCode: '6',
    indexCode: ''
  },
  {
    disguisedIndexcode: 'D_JT_00018',
    indexName: '投资收益率（业务）',
    dimensionColumn: null,
    cardCode: 'card020',
    comCode: '1',
    menuCode: '3',
    chrtCode: '6',
    indexCode: ''
  },
  {
    disguisedIndexcode: 'D_JT_00019',
    indexName: '总资产',
    dimensionColumn: null,
    cardCode: 'card020',
    comCode: '1',
    menuCode: '5',
    chrtCode: '6',
    indexCode: ''
  },
  {
    disguisedIndexcode: 'D_JT_00020',
    indexName: '子公司总资产（人保财险）',
    dimensionColumn: null,
    cardCode: 'card020',
    comCode: '1',
    menuCode: '5',
    chrtCode: '6',
    indexCode: ''
  },
  {
    disguisedIndexcode: 'D_JT_00021',
    indexName: '子公司总资产（人保健康）',
    dimensionColumn: null,
    cardCode: 'card020',
    comCode: '1',
    menuCode: '5',
    chrtCode: '6',
    indexCode: ''
  },
  {
    disguisedIndexcode: 'D_JT_00022',
    indexName: '子公司总资产（人保寿险）',
    dimensionColumn: null,
    cardCode: 'card020',
    comCode: '1',
    menuCode: '5',
    chrtCode: '6',
    indexCode: ''
  },
  {
    disguisedIndexcode: 'D_JT_00023',
    indexName: '净资产',
    dimensionColumn: null,
    cardCode: 'card020',
    comCode: '1',
    menuCode: '5',
    chrtCode: '6',
    indexCode: ''
  },
  {
    disguisedIndexcode: 'D_JT_00024',
    indexName: '子公司净资产（人保财险）',
    dimensionColumn: null,
    cardCode: 'card020',
    comCode: '1',
    menuCode: '5',
    chrtCode: '6',
    indexCode: ''
  },
  {
    disguisedIndexcode: 'D_JT_00025',
    indexName: '子公司净资产（人保健康）',
    dimensionColumn: null,
    cardCode: 'card020',
    comCode: '1',
    menuCode: '5',
    chrtCode: '6',
    indexCode: ''
  },
  {
    disguisedIndexcode: 'D_JT_00026',
    indexName: '子公司净资产（人保寿险）',
    dimensionColumn: null,
    cardCode: 'card020',
    comCode: '1',
    menuCode: '5',
    chrtCode: '6',
    indexCode: ''
  },
  {
    disguisedIndexcode: 'D_JT_00027',
    indexName: '投资资产',
    dimensionColumn: null,
    cardCode: 'card020',
    comCode: '1',
    menuCode: '5',
    chrtCode: '6',
    indexCode: ''
  },
  {
    disguisedIndexcode: 'D_JT_00028',
    indexName: '子公司投资资产（人保财险）',
    dimensionColumn: null,
    cardCode: 'card020',
    comCode: '1',
    menuCode: '5',
    chrtCode: '6',
    indexCode: ''
  },
  {
    disguisedIndexcode: 'D_JT_00029',
    indexName: '子公司投资资产（人保健康）',
    dimensionColumn: null,
    cardCode: 'card020',
    comCode: '1',
    menuCode: '5',
    chrtCode: '6',
    indexCode: ''
  },
  {
    disguisedIndexcode: 'D_JT_00030',
    indexName: '子公司投资资产（人保寿险）',
    dimensionColumn: null,
    cardCode: 'card020',
    comCode: '1',
    menuCode: '5',
    chrtCode: '6',
    indexCode: ''
  },
  {
    disguisedIndexcode: 'D_CX_00003',
    indexName: '财险行业保费增长率',
    dimensionColumn: null,
    cardCode: 'card020',
    comCode: '2',
    menuCode: '1',
    chrtCode: '6',
    indexCode: ''
  },
  {
    disguisedIndexcode: 'D_CX_00004',
    indexName: '市场主要财险公司保费增长率',
    dimensionColumn: 'TYCMPTYPE',
    cardCode: 'card020',
    comCode: '2',
    menuCode: '1',
    chrtCode: '18',
    indexCode: ''
  },
  {
    disguisedIndexcode: 'D_CX_00005',
    indexName: '保费收入与市场增速比',
    dimensionColumn: null,
    cardCode: 'card020',
    comCode: '2',
    menuCode: '1',
    chrtCode: '6',
    indexCode: ''
  },
  {
    disguisedIndexcode: 'D_CX_00006',
    indexName: '市场份额',
    dimensionColumn: null,
    cardCode: 'card020',
    comCode: '2',
    menuCode: '1',
    chrtCode: '6',
    indexCode: ''
  },
  {
    disguisedIndexcode: 'D_CX_00007',
    indexName: '增量市场份额',
    dimensionColumn: null,
    cardCode: 'card020',
    comCode: '2',
    menuCode: '1',
    chrtCode: '6',
    indexCode: ''
  },
  {
    disguisedIndexcode: 'D_CX_00008',
    indexName: '同业市场份额',
    dimensionColumn: 'TYCMPTYPE',
    cardCode: 'card020',
    comCode: '2',
    menuCode: '1',
    chrtCode: '18',
    indexCode: ''
  },
  {
    disguisedIndexcode: 'D_CX_00006',
    indexName: '市场份额-省份',
    dimensionColumn: 'BRANCHCODE',
    cardCode: 'card020',
    comCode: '2',
    menuCode: '1',
    chrtCode: '16',
    indexCode: ''
  },
  {
    disguisedIndexcode: 'D_CX_00006',
    indexName: '市场份额-中心城市',
    dimensionColumn: 'RESERVED1',
    cardCode: 'card020',
    comCode: '2',
    menuCode: '1',
    chrtCode: '5',
    indexCode: ''
  },
  {
    disguisedIndexcode: 'D_CX_00006',
    indexName: '市场份额-险种',
    dimensionColumn: 'RISKCLASS',
    cardCode: 'card020',
    comCode: '2',
    menuCode: '1',
    chrtCode: '3',
    indexCode: ''
  },
  {
    disguisedIndexcode: 'D_CX_00010',
    indexName: '保费收入',
    dimensionColumn: null,
    cardCode: 'card020',
    comCode: '2',
    menuCode: '1',
    chrtCode: '6',
    indexCode: ''
  },
  {
    disguisedIndexcode: 'D_CX_00011',
    indexName: '增量保费收入',
    dimensionColumn: null,
    cardCode: 'card020',
    comCode: '2',
    menuCode: '1',
    chrtCode: '6',
    indexCode: ''
  },
  {
    disguisedIndexcode: 'D_CX_00010',
    indexName: '分险种保费收入及增速',
    dimensionColumn: 'RISKCLASS',
    cardCode: 'card020',
    comCode: '2',
    menuCode: '1',
    chrtCode: '3',
    indexCode: ''
  },
  {
    disguisedIndexcode: 'D_CX_00010',
    indexName: '分渠道保费收入及增速',
    dimensionColumn: 'BUSICHANNEL',
    cardCode: 'card020',
    comCode: '2',
    menuCode: '1',
    chrtCode: '18',
    indexCode: ''
  },
  {
    disguisedIndexcode: 'D_CX_00010',
    indexName: '分地区保费收入及增速',
    dimensionColumn: 'BRANCHCODE',
    cardCode: 'card020',
    comCode: '2',
    menuCode: '1',
    chrtCode: '16',
    indexCode: ''
  },
  {
    disguisedIndexcode: 'D_CX_00012',
    indexName: '保险金额',
    dimensionColumn: null,
    cardCode: 'card020',
    comCode: '2',
    menuCode: '1',
    chrtCode: '6',
    indexCode: ''
  },
  {
    disguisedIndexcode: 'D_CX_00012',
    indexName: '分险种保险金额',
    dimensionColumn: 'RISKCLASS',
    cardCode: 'card020',
    comCode: '2',
    menuCode: '1',
    chrtCode: '3',
    indexCode: ''
  },
  {
    disguisedIndexcode: 'D_CX_00013',
    indexName: '综合赔付率',
    dimensionColumn: null,
    cardCode: 'card020',
    comCode: '2',
    menuCode: '3',
    chrtCode: '6',
    indexCode: ''
  },
  {
    disguisedIndexcode: 'D_CX_00014',
    indexName: '赔付成本',
    dimensionColumn: null,
    cardCode: 'card020',
    comCode: '2',
    menuCode: '3',
    chrtCode: '6',
    indexCode: ''
  },
  {
    disguisedIndexcode: 'D_CX_00013',
    indexName: '分险种综合赔付率',
    dimensionColumn: 'RISKCLASS',
    cardCode: 'card020',
    comCode: '2',
    menuCode: '3',
    chrtCode: '3',
    indexCode: ''
  },
  {
    disguisedIndexcode: 'D_CX_00013',
    indexName: '分地区综合赔付率',
    dimensionColumn: 'BRANCHCODE',
    cardCode: 'card020',
    comCode: '2',
    menuCode: '3',
    chrtCode: '16',
    indexCode: ''
  },
  {
    disguisedIndexcode: 'D_CX_00048',
    indexName: '综合费用率',
    dimensionColumn: null,
    cardCode: 'card020',
    comCode: '2',
    menuCode: '3',
    chrtCode: '6',
    indexCode: ''
  },
  {
    disguisedIndexcode: 'D_CX_00015',
    indexName: '综合费用',
    dimensionColumn: null,
    cardCode: 'card020',
    comCode: '2',
    menuCode: '3',
    chrtCode: '6',
    indexCode: ''
  },
  {
    disguisedIndexcode: 'D_CX_00048',
    indexName: '分险种综合费用率',
    dimensionColumn: 'RISKCLASS',
    cardCode: 'card020',
    comCode: '2',
    menuCode: '3',
    chrtCode: '3',
    indexCode: ''
  },
  {
    disguisedIndexcode: 'D_CX_00048',
    indexName: '分地区综合费用率',
    dimensionColumn: 'BRANCHCODE',
    cardCode: 'card020',
    comCode: '2',
    menuCode: '3',
    chrtCode: '16',
    indexCode: ''
  },
  {
    disguisedIndexcode: 'D_CX_00016',
    indexName: '综合成本率',
    dimensionColumn: null,
    cardCode: 'card020',
    comCode: '2',
    menuCode: '3',
    chrtCode: '6',
    indexCode: '6'
  },
  {
    disguisedIndexcode: 'D_CX_00016',
    indexName: '分险种综合成本率',
    dimensionColumn: 'RISKCLASS',
    cardCode: 'card020',
    comCode: '2',
    menuCode: '3',
    chrtCode: '3',
    indexCode: ''
  },
  {
    disguisedIndexcode: 'D_CX_00016',
    indexName: '分地区综合成本率',
    dimensionColumn: 'BRANCHCODE',
    cardCode: 'card020',
    comCode: '2',
    menuCode: '3',
    chrtCode: '16',
    indexCode: ''
  },
  {
    disguisedIndexcode: 'D_CX_00017',
    indexName: '承保利润',
    dimensionColumn: null,
    cardCode: 'card020',
    comCode: '2',
    menuCode: '3',
    chrtCode: '6',
    indexCode: ''
  },
  {
    disguisedIndexcode: 'D_CX_00017',
    indexName: '承保利润-省份',
    dimensionColumn: 'BRANCHCODE',
    cardCode: 'card020',
    comCode: '2',
    menuCode: '3',
    chrtCode: '16',
    indexCode: ''
  },
  {
    disguisedIndexcode: 'D_CX_00017',
    indexName: '承保利润-险种',
    dimensionColumn: 'RISKCLASS',
    cardCode: 'card020',
    comCode: '2',
    menuCode: '3',
    chrtCode: '3',
    indexCode: ''
  },
  {
    disguisedIndexcode: 'D_CX_00018',
    indexName: '净利润',
    dimensionColumn: null,
    cardCode: 'card020',
    comCode: '2',
    menuCode: '3',
    chrtCode: '6',
    indexCode: ''
  },
  {
    disguisedIndexcode: 'D_CX_00019',
    indexName: '归属于母公司股东净利润',
    dimensionColumn: null,
    cardCode: 'card020',
    comCode: '2',
    menuCode: '3',
    chrtCode: '6',
    indexCode: ''
  },
  {
    disguisedIndexcode: 'D_CX_00020',
    indexName: '投资收益（财务）',
    dimensionColumn: null,
    cardCode: 'card020',
    comCode: '2',
    menuCode: '5',
    chrtCode: '6',
    indexCode: ''
  },
  {
    disguisedIndexcode: 'D_CX_00021',
    indexName: '投资收益（业务）',
    dimensionColumn: null,
    cardCode: 'card020',
    comCode: '2',
    menuCode: '5',
    chrtCode: '6',
    indexCode: ''
  },
  {
    disguisedIndexcode: 'D_CX_00022',
    indexName: '总资产',
    dimensionColumn: null,
    cardCode: 'card020',
    comCode: '2',
    menuCode: '5',
    chrtCode: '6',
    indexCode: ''
  },
  {
    disguisedIndexcode: 'D_CX_00023',
    indexName: '净资产',
    dimensionColumn: null,
    cardCode: 'card020',
    comCode: '2',
    menuCode: '5',
    chrtCode: '6',
    indexCode: ''
  },
  {
    disguisedIndexcode: 'D_CX_00024',
    indexName: '净资产收益率（ROE）',
    dimensionColumn: null,
    cardCode: 'card020',
    comCode: '2',
    menuCode: '5',
    chrtCode: '6',
    indexCode: ''
  },
  {
    disguisedIndexcode: 'D_CX_00025',
    indexName: '资产回报率（ROA）',
    dimensionColumn: null,
    cardCode: 'card020',
    comCode: '2',
    menuCode: '5',
    chrtCode: '6',
    indexCode: ''
  },
  {
    disguisedIndexcode: 'D_CX_00026',
    indexName: '综合偿付能力充足率',
    dimensionColumn: null,
    cardCode: 'card020',
    comCode: '2',
    menuCode: '5',
    chrtCode: '6',
    indexCode: ''
  },
  {
    disguisedIndexcode: 'D_CX_00027',
    indexName: '核心偿付能力充足率',
    dimensionColumn: null,
    cardCode: 'card020',
    comCode: '2',
    menuCode: '5',
    chrtCode: '6',
    indexCode: ''
  },
  {
    disguisedIndexcode: 'D_CX_00028',
    indexName: '应收保费率',
    dimensionColumn: null,
    cardCode: 'card020',
    comCode: '2',
    menuCode: '2',
    chrtCode: '6',
    indexCode: ''
  },
  {
    disguisedIndexcode: 'D_CX_00029',
    indexName: '应收保费余额',
    dimensionColumn: null,
    cardCode: 'card020',
    comCode: '2',
    menuCode: '2',
    chrtCode: '6',
    indexCode: ''
  },
  {
    disguisedIndexcode: 'D_CX_00030',
    indexName: '百元保费净现金流',
    dimensionColumn: null,
    cardCode: 'card020',
    comCode: '2',
    menuCode: '2',
    chrtCode: '6',
    indexCode: ''
  },
  {
    disguisedIndexcode: 'D_CX_00031',
    indexName: '经营活动现金流',
    dimensionColumn: null,
    cardCode: 'card020',
    comCode: '2',
    menuCode: '2',
    chrtCode: '6',
    indexCode: ''
  },
  {
    disguisedIndexcode: 'D_CX_00032',
    indexName: '汽车车均保费',
    dimensionColumn: null,
    cardCode: 'card020',
    comCode: '2',
    menuCode: '2',
    chrtCode: '6',
    indexCode: ''
  },
  {
    disguisedIndexcode: 'D_CX_00033',
    indexName: '汽车险续保率',
    dimensionColumn: null,
    cardCode: 'card020',
    comCode: '2',
    menuCode: '2',
    chrtCode: '6',
    indexCode: ''
  },
  {
    disguisedIndexcode: 'D_CX_00034',
    indexName: '汽车险新保率',
    dimensionColumn: null,
    cardCode: 'card020',
    comCode: '2',
    menuCode: '2',
    chrtCode: '6',
    indexCode: ''
  },
  {
    disguisedIndexcode: 'D_CX_00035',
    indexName: '汽车险转保率',
    dimensionColumn: null,
    cardCode: 'card020',
    comCode: '2',
    menuCode: '2',
    chrtCode: '6',
    indexCode: ''
  },
  {
    disguisedIndexcode: 'D_CX_00036',
    indexName: '估损充足率',
    dimensionColumn: null,
    cardCode: 'card020',
    comCode: '2',
    menuCode: '2',
    chrtCode: '6',
    indexCode: ''
  },
  {
    disguisedIndexcode: 'D_CX_00037',
    indexName: '有效报案件数',
    dimensionColumn: null,
    cardCode: 'card020',
    comCode: '2',
    menuCode: '2',
    chrtCode: '6',
    indexCode: ''
  },
  {
    disguisedIndexcode: 'D_CX_00038',
    indexName: '案均赔款',
    dimensionColumn: null,
    cardCode: 'card020',
    comCode: '2',
    menuCode: '2',
    chrtCode: '6',
    indexCode: ''
  },
  {
    disguisedIndexcode: 'D_CX_00039',
    indexName: '案均报案支付周期',
    dimensionColumn: null,
    cardCode: 'card020',
    comCode: '2',
    menuCode: '4',
    chrtCode: '6',
    indexCode: ''
  },
  {
    disguisedIndexcode: 'D_CX_00040',
    indexName: '理赔获赔率',
    dimensionColumn: null,
    cardCode: 'card020',
    comCode: '2',
    menuCode: '4',
    chrtCode: '6',
    indexCode: ''
  },
  {
    disguisedIndexcode: 'D_CX_00041',
    indexName: '立案结案率',
    dimensionColumn: null,
    cardCode: 'card020',
    comCode: '2',
    menuCode: '4',
    chrtCode: '6',
    indexCode: ''
  },
  {
    disguisedIndexcode: 'D_CX_00042',
    indexName: '个人标准VIP续保率',
    dimensionColumn: null,
    cardCode: 'card020',
    comCode: '2',
    menuCode: '4',
    chrtCode: '6',
    indexCode: ''
  },
  {
    disguisedIndexcode: 'D_CX_00043',
    indexName: '单位VIP客户保费保有率',
    dimensionColumn: null,
    cardCode: 'card020',
    comCode: '2',
    menuCode: '4',
    chrtCode: '6',
    indexCode: ''
  },
  {
    disguisedIndexcode: 'D_CX_00044',
    indexName: '万元以下案件理赔周期',
    dimensionColumn: null,
    cardCode: 'card020',
    comCode: '2',
    menuCode: '4',
    chrtCode: '6',
    indexCode: ''
  },
  {
    disguisedIndexcode: 'D_CX_00045',
    indexName: '保费收入（收付费）',
    dimensionColumn: null,
    cardCode: 'card020',
    comCode: '2',
    menuCode: '7',
    chrtCode: '6',
    indexCode: ''
  },
  {
    disguisedIndexcode: 'D_CX_00045',
    indexName: '保费收入（收付费）-省份',
    dimensionColumn: 'BRANCHCODE',
    cardCode: 'card020',
    comCode: '2',
    menuCode: '7',
    chrtCode: '16',
    indexCode: ''
  },
  {
    disguisedIndexcode: 'D_CX_00045',
    indexName: '保费收入（收付费）-渠道',
    dimensionColumn: 'BUSICHANNEL',
    cardCode: 'card020',
    comCode: '2',
    menuCode: '7',
    chrtCode: '18',
    indexCode: ''
  },
  {
    disguisedIndexcode: 'D_CX_00045',
    indexName: '保费收入（收付费）-中心城市',
    dimensionColumn: 'RESERVED1',
    cardCode: 'card020',
    comCode: '2',
    menuCode: '7',
    chrtCode: '5',
    indexCode: ''
  },
  {
    disguisedIndexcode: 'D_CX_00045',
    indexName: '保费收入（收付费）-险种',
    dimensionColumn: 'RISKCLASS',
    cardCode: 'card020',
    comCode: '2',
    menuCode: '7',
    chrtCode: '3',
    indexCode: ''
  },
  {
    disguisedIndexcode: 'D_CX_00046',
    indexName: '理赔周期(3A口径) ',
    dimensionColumn: null,
    cardCode: 'card020',
    comCode: '2',
    menuCode: '7',
    chrtCode: '6',
    indexCode: ''
  },
  {
    disguisedIndexcode: 'D_CX_00046',
    indexName: '理赔周期(3A口径) -省份',
    dimensionColumn: 'BRANCHCODE',
    cardCode: 'card020',
    comCode: '2',
    menuCode: '7',
    chrtCode: '16',
    indexCode: ''
  },
  {
    disguisedIndexcode: 'D_CX_00046',
    indexName: '理赔周期(3A口径) -中心城市',
    dimensionColumn: 'RESERVED1',
    cardCode: 'card020',
    comCode: '2',
    menuCode: '7',
    chrtCode: '5',
    indexCode: ''
  },
  {
    disguisedIndexcode: 'D_CX_00046',
    indexName: '理赔周期(3A口径) -险种',
    dimensionColumn: 'RISKCLASS',
    cardCode: 'card020',
    comCode: '2',
    menuCode: '7',
    chrtCode: '3',
    indexCode: ''
  },
  {
    disguisedIndexcode: 'D_CX_00047',
    indexName: '应收保费率（按日）',
    dimensionColumn: null,
    cardCode: 'card020',
    comCode: '2',
    menuCode: '7',
    chrtCode: '6',
    indexCode: ''
  },
  {
    disguisedIndexcode: 'D_CX_00047',
    indexName: '应收保费率（按日）-分省',
    dimensionColumn: 'BRANCHCODE',
    cardCode: 'card020',
    comCode: '2',
    menuCode: '7',
    chrtCode: '16',
    indexCode: ''
  },
  {
    disguisedIndexcode: 'D_CX_00047',
    indexName: '应收保费率（按日）-险种',
    dimensionColumn: 'RISKCLASS',
    cardCode: 'card020',
    comCode: '2',
    menuCode: '7',
    chrtCode: '3',
    indexCode: ''
  }, {
    disguisedIndexcode: 'D_CX_00052',
    indexName: '行业保费收入',
    dimensionColumn: null,
    cardCode: 'card020',
    comCode: '2',
    menuCode: '1',
    chrtCode: '6',
    indexCode: ''
  },
  {
    disguisedIndexcode: 'D_CX_00052',
    indexName: '行业保费收入-省份',
    dimensionColumn: 'BRANCHCODE',
    cardCode: 'card020',
    comCode: '2',
    menuCode: '1',
    chrtCode: '16',
    indexCode: ''
  },
  {
    disguisedIndexcode: 'D_CX_00052',
    indexName: '行业保费收入-中心城市',
    dimensionColumn: 'RESERVED1',
    cardCode: 'card020',
    comCode: '2',
    menuCode: '1',
    chrtCode: '5',
    indexCode: ''
  }, {
    disguisedIndexcode: 'D_CX_00049',
    indexName: '新车保费收入（起保口径）',
    dimensionColumn: null,
    cardCode: 'card020',
    comCode: '2',
    menuCode: '1',
    chrtCode: '6',
    indexCode: ''
  },
  {
    disguisedIndexcode: 'D_CX_00050',
    indexName: '直销保费收入',
    dimensionColumn: null,
    cardCode: 'card020',
    comCode: '2',
    menuCode: '1',
    chrtCode: '6',
    indexCode: ''
  }, {
    disguisedIndexcode: 'D_CX_00051',
    indexName: '车险直销保费收入',
    dimensionColumn: null,
    cardCode: 'card020',
    comCode: '2',
    menuCode: '1',
    chrtCode: '6',
    indexCode: ''
  },
  {
    disguisedIndexcode: 'D_ZC_00002',
    indexName: '资产管理费收入',
    dimensionColumn: null,
    cardCode: 'card020',
    comCode: '6',
    menuCode: '1',
    chrtCode: '6',
    indexCode: ''
  },
  {
    disguisedIndexcode: 'D_ZC_00003',
    indexName: '受托资产规模合计',
    dimensionColumn: null,
    cardCode: 'card020',
    comCode: '6',
    menuCode: '1',
    chrtCode: '6',
    indexCode: ''
  },
  {
    disguisedIndexcode: 'D_ZC_00004',
    indexName: '管理费收入',
    dimensionColumn: null,
    cardCode: 'card020',
    comCode: '6',
    menuCode: '1',
    chrtCode: '6',
    indexCode: ''
  },
  {
    disguisedIndexcode: 'D_ZC_00005',
    indexName: '营业收入',
    dimensionColumn: null,
    cardCode: 'card020',
    comCode: '6',
    menuCode: '1',
    chrtCode: '6',
    indexCode: ''
  },
  {
    disguisedIndexcode: 'D_ZC_00006',
    indexName: '业务及管理费',
    dimensionColumn: null,
    cardCode: 'card020',
    comCode: '6',
    menuCode: '1',
    chrtCode: '6',
    indexCode: ''
  },
  {
    disguisedIndexcode: 'D_ZC_00007',
    indexName: '营业支出',
    dimensionColumn: null,
    cardCode: 'card020',
    comCode: '6',
    menuCode: '1',
    chrtCode: '6',
    indexCode: ''
  },
  {
    disguisedIndexcode: 'D_ZC_00008',
    indexName: '营业利润',
    dimensionColumn: null,
    cardCode: 'card020',
    comCode: '6',
    menuCode: '3',
    chrtCode: '6',
    indexCode: ''
  },
  {
    disguisedIndexcode: 'D_ZC_00001',
    indexName: '净利润',
    dimensionColumn: null,
    cardCode: 'card020',
    comCode: '6',
    menuCode: '3',
    chrtCode: '6',
    indexCode: ''
  },
  {
    disguisedIndexcode: 'D_ZC_00009',
    indexName: '管理资产规模',
    dimensionColumn: null,
    cardCode: 'card020',
    comCode: '6',
    menuCode: '3',
    chrtCode: '6',
    indexCode: ''
  },
  {
    disguisedIndexcode: 'D_ZC_00010',
    indexName: '营业利润率',
    dimensionColumn: null,
    cardCode: 'card020',
    comCode: '6',
    menuCode: '3',
    chrtCode: '6',
    indexCode: ''
  },
  {
    disguisedIndexcode: 'D_ZC_00011',
    indexName: '总资产',
    dimensionColumn: null,
    cardCode: 'card020',
    comCode: '6',
    menuCode: '5',
    chrtCode: '6',
    indexCode: ''
  },
  {
    disguisedIndexcode: 'D_ZC_00012',
    indexName: '净资产',
    dimensionColumn: null,
    cardCode: 'card020',
    comCode: '6',
    menuCode: '5',
    chrtCode: '6',
    indexCode: ''
  },
  {
    disguisedIndexcode: 'D_ZC_00013',
    indexName: '净资产收益率',
    dimensionColumn: null,
    cardCode: 'card020',
    comCode: '6',
    menuCode: '5',
    chrtCode: '6',
    indexCode: ''
  },
  {
    disguisedIndexcode: 'D_ZC_00014',
    indexName: '资产回报率',
    dimensionColumn: null,
    cardCode: 'card020',
    comCode: '6',
    menuCode: '5',
    chrtCode: '6',
    indexCode: ''
  },
  {
    disguisedIndexcode: 'D_ZC_00015',
    indexName: '受托资产-不含自营',
    dimensionColumn: 'RESERVED1',
    cardCode: 'card020',
    comCode: '6',
    menuCode: '7',
    chrtCode: '22',
    indexCode: ''
  }, {
    disguisedIndexcode: 'D_ZC_00016',
    indexName: '受托资产-含自营',
    dimensionColumn: 'RESERVED2',
    cardCode: 'card020',
    comCode: '6',
    menuCode: '7',
    chrtCode: '22',
    indexCode: ''
  },
  {
    disguisedIndexcode: 'D_JK_00001',
    indexName: '原保险保费收入',
    dimensionColumn: null,
    cardCode: 'card020',
    comCode: '3',
    menuCode: '1',
    chrtCode: '6',
    indexCode: ''
  },
  {
    disguisedIndexcode: 'D_JK_00002',
    indexName: '规模保费',
    dimensionColumn: null,
    cardCode: 'card020',
    comCode: '3',
    menuCode: '1',
    chrtCode: '6',
    indexCode: ''
  },
  {
    disguisedIndexcode: 'D_JK_00002',
    indexName: '规模保费-板块',
    dimensionColumn: 'BANKUAI',
    cardCode: 'card020',
    comCode: '3',
    menuCode: '1',
    chrtCode: '20',
    indexCode: ''
  },
  {
    disguisedIndexcode: 'D_JK_00003',
    indexName: '内含价值',
    dimensionColumn: null,
    cardCode: 'card020',
    comCode: '3',
    menuCode: '3',
    chrtCode: '6',
    indexCode: ''
  },
  {
    disguisedIndexcode: 'D_JK_00004',
    indexName: '净利润',
    dimensionColumn: null,
    cardCode: 'card020',
    comCode: '3',
    menuCode: '3',
    chrtCode: '6',
    indexCode: ''
  },
  {
    disguisedIndexcode: 'D_JK_00005',
    indexName: '归属于母公司股东净利润',
    dimensionColumn: null,
    cardCode: 'card020',
    comCode: '3',
    menuCode: '3',
    chrtCode: '6',
    indexCode: ''
  },
  {
    disguisedIndexcode: 'D_JK_00006',
    indexName: '投资收益（财务）',
    dimensionColumn: null,
    cardCode: 'card020',
    comCode: '3',
    menuCode: '3',
    chrtCode: '6',
    indexCode: ''
  },
  {
    disguisedIndexcode: 'D_JK_00007',
    indexName: '投资收益（业务）',
    dimensionColumn: null,
    cardCode: 'card020',
    comCode: '3',
    menuCode: '3',
    chrtCode: '6',
    indexCode: ''
  },
  {
    disguisedIndexcode: 'D_JK_00008',
    indexName: '短期险综合成本率',
    dimensionColumn: null,
    cardCode: 'card020',
    comCode: '3',
    menuCode: '3',
    chrtCode: '6',
    indexCode: ''
  },
  {
    disguisedIndexcode: 'D_JK_00009',
    indexName: '短期险综合赔付率',
    dimensionColumn: null,
    cardCode: 'card020',
    comCode: '3',
    menuCode: '3',
    chrtCode: '6',
    indexCode: ''
  },
  {
    disguisedIndexcode: 'D_JK_00010',
    indexName: '短期险综合费用率',
    dimensionColumn: null,
    cardCode: 'card020',
    comCode: '3',
    menuCode: '3',
    chrtCode: '6',
    indexCode: ''
  },
  {
    disguisedIndexcode: 'D_JK_00011',
    indexName: '短期险承保利润',
    dimensionColumn: null,
    cardCode: 'card020',
    comCode: '3',
    menuCode: '3',
    chrtCode: '6',
    indexCode: ''
  },
  {
    disguisedIndexcode: 'D_JK_00012',
    indexName: '退保率（新准则）',
    dimensionColumn: null,
    cardCode: 'card020',
    comCode: '3',
    menuCode: '3',
    chrtCode: '6',
    indexCode: ''
  },
  {
    disguisedIndexcode: 'D_JK_00013',
    indexName: '退保率（旧准则）',
    dimensionColumn: null,
    cardCode: 'card020',
    comCode: '3',
    menuCode: '3',
    chrtCode: '6',
    indexCode: ''
  },
  {
    disguisedIndexcode: 'D_JK_00014',
    indexName: '大病保险规模保费',
    dimensionColumn: null,
    cardCode: 'card020',
    comCode: '3',
    menuCode: '8',
    chrtCode: '6',
    indexCode: ''
  },
  {
    disguisedIndexcode: 'D_JK_00015',
    indexName: '大病保险覆盖地市个数',
    dimensionColumn: null,
    cardCode: 'card020',
    comCode: '3',
    menuCode: '8',
    chrtCode: '6',
    indexCode: ''
  },
  {
    disguisedIndexcode: 'D_JK_00016',
    indexName: '基本医疗保险经办规模',
    dimensionColumn: null,
    cardCode: 'card020',
    comCode: '3',
    menuCode: '8',
    chrtCode: '6',
    indexCode: ''
  },
  {
    disguisedIndexcode: 'D_JK_00017',
    indexName: '健康管理业务收入',
    dimensionColumn: null,
    cardCode: 'card020',
    comCode: '3',
    menuCode: '8',
    chrtCode: '6',
    indexCode: ''
  },
  {
    disguisedIndexcode: 'D_JK_00018',
    indexName: '合作医院数量',
    dimensionColumn: null,
    cardCode: 'card020',
    comCode: '3',
    menuCode: '8',
    chrtCode: '6',
    indexCode: ''
  },
  {
    disguisedIndexcode: 'D_JK_00019',
    indexName: '合作医生数量',
    dimensionColumn: null,
    cardCode: 'card020',
    comCode: '3',
    menuCode: '8',
    chrtCode: '6',
    indexCode: ''
  },
  {
    disguisedIndexcode: 'D_JK_00020',
    indexName: '第三方合作机构数量',
    dimensionColumn: null,
    cardCode: 'card020',
    comCode: '3',
    menuCode: '8',
    chrtCode: '6',
    indexCode: ''
  },
  {
    disguisedIndexcode: 'D_JK_00021',
    indexName: '总资产',
    dimensionColumn: null,
    cardCode: 'card020',
    comCode: '3',
    menuCode: '5',
    chrtCode: '6',
    indexCode: ''
  },
  {
    disguisedIndexcode: 'D_JK_00022',
    indexName: '净资产',
    dimensionColumn: null,
    cardCode: 'card020',
    comCode: '3',
    menuCode: '5',
    chrtCode: '6',
    indexCode: ''
  },
  {
    disguisedIndexcode: 'D_JK_00023',
    indexName: '投资资产',
    dimensionColumn: null,
    cardCode: 'card020',
    comCode: '3',
    menuCode: '5',
    chrtCode: '6',
    indexCode: ''
  },
  {
    disguisedIndexcode: 'D_JK_00024',
    indexName: '净资产收益率（ROE）',
    dimensionColumn: null,
    cardCode: 'card020',
    comCode: '3',
    menuCode: '5',
    chrtCode: '6',
    indexCode: ''
  },
  {
    disguisedIndexcode: 'D_JK_00025',
    indexName: '资产回报率（ROA）',
    dimensionColumn: null,
    cardCode: 'card020',
    comCode: '3',
    menuCode: '5',
    chrtCode: '6',
    indexCode: ''
  },
  {
    disguisedIndexcode: 'D_JK_00026',
    indexName: '综合偿付能力充足率',
    dimensionColumn: null,
    cardCode: 'card020',
    comCode: '3',
    menuCode: '5',
    chrtCode: '6',
    indexCode: ''
  },
  {
    disguisedIndexcode: 'D_JK_00027',
    indexName: '核心偿付能力充足率',
    dimensionColumn: null,
    cardCode: 'card020',
    comCode: '3',
    menuCode: '5',
    chrtCode: '6',
    indexCode: ''
  },
  {
    disguisedIndexcode: 'D_JK_00028',
    indexName: '内含价值',
    dimensionColumn: null,
    cardCode: 'card020',
    comCode: '3',
    menuCode: '5',
    chrtCode: '6',
    indexCode: ''
  },
  {
    disguisedIndexcode: 'D_JK_00029',
    indexName: '新业务价值（半年）',
    dimensionColumn: null,
    cardCode: 'card020',
    comCode: '3',
    menuCode: '5',
    chrtCode: '6',
    indexCode: ''
  },
  {
    disguisedIndexcode: 'D_JK_00030',
    indexName: '有效业务价值',
    dimensionColumn: null,
    cardCode: 'card020',
    comCode: '3',
    menuCode: '5',
    chrtCode: '6',
    indexCode: ''
  },
  {
    disguisedIndexcode: 'D_JK_00031',
    indexName: '期末人力',
    dimensionColumn: null,
    cardCode: 'card020',
    comCode: '3',
    menuCode: '6',
    chrtCode: '6',
    indexCode: ''
  },
  {
    disguisedIndexcode: 'D_JK_00032',
    indexName: '出单人力',
    dimensionColumn: null,
    cardCode: 'card020',
    comCode: '3',
    menuCode: '6',
    chrtCode: '6',
    indexCode: ''
  },
  {
    disguisedIndexcode: 'D_JK_00033',
    indexName: '申请支付时效',
    dimensionColumn: null,
    cardCode: 'card020',
    comCode: '3',
    menuCode: '4',
    chrtCode: '6',
    indexCode: ''
  },
  {
    disguisedIndexcode: 'D_JK_00034',
    indexName: '出险支付时效',
    dimensionColumn: null,
    cardCode: 'card020',
    comCode: '3',
    menuCode: '4',
    chrtCode: '6',
    indexCode: ''
  },
  {
    disguisedIndexcode: 'D_JK_00035',
    indexName: '理赔获赔率',
    dimensionColumn: null,
    cardCode: 'card020',
    comCode: '3',
    menuCode: '4',
    chrtCode: '6',
    indexCode: ''
  },
  {
    disguisedIndexcode: 'D_JK_00036',
    indexName: '保全时效',
    dimensionColumn: null,
    cardCode: 'card020',
    comCode: '3',
    menuCode: '4',
    chrtCode: '6',
    indexCode: ''
  },
  {
    disguisedIndexcode: 'D_JK_00037',
    indexName: '保单15日送达率',
    dimensionColumn: null,
    cardCode: 'card020',
    comCode: '3',
    menuCode: '4',
    chrtCode: '6',
    indexCode: ''
  },
  {
    disguisedIndexcode: 'D_JK_00038',
    indexName: '保单5日承保率',
    dimensionColumn: null,
    cardCode: 'card020',
    comCode: '3',
    menuCode: '4',
    chrtCode: '6',
    indexCode: ''
  },
  {
    disguisedIndexcode: 'D_JK_00039',
    indexName: '出险后健康险15日结案率',
    dimensionColumn: null,
    cardCode: 'card020',
    comCode: '3',
    menuCode: '4',
    chrtCode: '6',
    indexCode: ''
  },
  {
    disguisedIndexcode: 'D_JK_00040',
    indexName: '保全5日处理完成率',
    dimensionColumn: null,
    cardCode: 'card020',
    comCode: '3',
    menuCode: '4',
    chrtCode: '6',
    indexCode: ''
  },
  {
    disguisedIndexcode: 'D_JK_00041',
    indexName: '规模保费（按日）',
    dimensionColumn: null,
    cardCode: 'card020',
    comCode: '3',
    menuCode: '7',
    chrtCode: '6',
    indexCode: ''
  },
  {
    disguisedIndexcode: 'D_JK_00041',
    indexName: '规模保费（按日）-省份',
    dimensionColumn: 'BRANCHCODE',
    cardCode: 'card020',
    comCode: '3',
    menuCode: '7',
    chrtCode: '16',
    indexCode: ''
  },
  {
    disguisedIndexcode: 'D_JK_00041',
    indexName: '规模保费（按日）-板块',
    dimensionColumn: 'RESERVED2',
    cardCode: 'card020',
    comCode: '3',
    menuCode: '7',
    chrtCode: '23',
    indexCode: ''
  },
  {
    disguisedIndexcode: 'D_JK_00041',
    indexName: '规模保费（按日）-中心城市',
    dimensionColumn: 'RESERVED1',
    cardCode: 'card020',
    comCode: '3',
    menuCode: '7',
    chrtCode: '5',
    indexCode: ''
  },
  {
    disguisedIndexcode: 'D_JK_00041',
    indexName: '规模保费-分渠道',
    dimensionColumn: 'BUSICHANNEL',
    cardCode: 'card020',
    comCode: '3',
    menuCode: '7',
    chrtCode: '17',
    indexCode: ''
  },
  {
    disguisedIndexcode: 'D_SX_00001',
    indexName: '寿险行业保费增长率',
    dimensionColumn: null,
    cardCode: 'card020',
    comCode: '4',
    menuCode: '1',
    chrtCode: '6',
    indexCode: ''
  },
  {
    disguisedIndexcode: 'D_SX_00002',
    indexName: '市场主要寿险公司保费增长率',
    dimensionColumn: 'TYCMPTYPE',
    cardCode: 'card020',
    comCode: '4',
    menuCode: '1',
    chrtCode: '18',
    indexCode: ''
  },
  {
    disguisedIndexcode: 'D_SX_00003',
    indexName: '市场份额',
    dimensionColumn: null,
    cardCode: 'card020',
    comCode: '4',
    menuCode: '1',
    chrtCode: '6',
    indexCode: ''
  },
  {
    disguisedIndexcode: 'D_SX_00003',
    indexName: '同业市场份额',
    dimensionColumn: 'TYCMPTYPE',
    cardCode: 'card020',
    comCode: '4',
    menuCode: '1',
    chrtCode: '18',
    indexCode: ''
  },
  {
    disguisedIndexcode: 'D_SX_00003',
    indexName: '分地区保费收入市场份额',
    dimensionColumn: 'BRANCHCODE',
    cardCode: 'card020',
    comCode: '4',
    menuCode: '1',
    chrtCode: '16',
    indexCode: ''
  },
  {
    disguisedIndexcode: 'D_SX_00004',
    indexName: '规模保费',
    dimensionColumn: null,
    cardCode: 'card020',
    comCode: '4',
    menuCode: '1',
    chrtCode: '6',
    indexCode: ''
  },
  {
    disguisedIndexcode: 'D_SX_00004',
    indexName: '规模保费-缴费方式',
    dimensionColumn: 'PAYMODE',
    cardCode: 'card020',
    comCode: '4',
    menuCode: '1',
    chrtCode: '21',
    indexCode: ''
  },
  {
    disguisedIndexcode: 'D_SX_00004',
    indexName: '规模保费（内部管理销售渠道）',
    dimensionColumn: 'CHANNEL',
    cardCode: 'card020',
    comCode: '4',
    menuCode: '1',
    chrtCode: '18',
    indexCode: ''
  },
  {
    disguisedIndexcode: 'D_SX_00004',
    indexName: '规模保费（分险种）',
    dimensionColumn: 'RISKCLASS',
    cardCode: 'card020',
    comCode: '4',
    menuCode: '1',
    chrtCode: '3',
    indexCode: ''
  },
  {
    disguisedIndexcode: 'D_SX_00004',
    indexName: '规模保费（分地区）',
    dimensionColumn: 'BRANCHCODE',
    cardCode: 'card020',
    comCode: '4',
    menuCode: '1',
    chrtCode: '16',
    indexCode: ''
  },
  {
    disguisedIndexcode: 'D_SX_00005',
    indexName: '保费收入',
    dimensionColumn: null,
    cardCode: 'card020',
    comCode: '4',
    menuCode: '1',
    chrtCode: '6',
    indexCode: ''
  },
  {
    disguisedIndexcode: 'D_SX_00005',
    indexName: '保费收入-缴费方式',
    dimensionColumn: 'PAYMODE',
    cardCode: 'card020',
    comCode: '4',
    menuCode: '1',
    chrtCode: '21',
    indexCode: ''
  },
  {
    disguisedIndexcode: 'D_SX_00005',
    indexName: '保费收入（分内部管理渠道）',
    dimensionColumn: 'CHANNEL',
    cardCode: 'card020',
    comCode: '4',
    menuCode: '1',
    chrtCode: '18',
    indexCode: ''
  },
  {
    disguisedIndexcode: 'D_SX_00005',
    indexName: '保费收入（分险种）',
    dimensionColumn: 'RISKCLASS',
    cardCode: 'card020',
    comCode: '4',
    menuCode: '1',
    chrtCode: '3',
    indexCode: ''
  },
  {
    disguisedIndexcode: 'D_SX_00005',
    indexName: '保费收入（分地区）',
    dimensionColumn: 'BRANCHCODE',
    cardCode: 'card020',
    comCode: '4',
    menuCode: '1',
    chrtCode: '16',
    indexCode: ''
  },
  {
    disguisedIndexcode: 'D_SX_00006',
    indexName: '新单期缴规模保费',
    dimensionColumn: null,
    cardCode: 'card020',
    comCode: '4',
    menuCode: '1',
    chrtCode: '6',
    indexCode: ''
  },
  {
    disguisedIndexcode: 'D_SX_00006',
    indexName: '分期限新单期缴规模保费',
    dimensionColumn: null,
    cardCode: 'card020',
    comCode: '4',
    menuCode: '1',
    chrtCode: '18',
    indexCode: ''
  },
  {
    disguisedIndexcode: 'D_SX_00007',
    indexName: '业务口径标准保费',
    dimensionColumn: null,
    cardCode: 'card020',
    comCode: '4',
    menuCode: '1',
    chrtCode: '6',
    indexCode: ''
  },
  {
    disguisedIndexcode: 'D_SX_00008',
    indexName: '内含价值',
    dimensionColumn: null,
    cardCode: 'card020',
    comCode: '4',
    menuCode: '3',
    chrtCode: '6',
    indexCode: ''
  },
  {
    disguisedIndexcode: 'D_SX_00009',
    indexName: '净利润',
    dimensionColumn: null,
    cardCode: 'card020',
    comCode: '4',
    menuCode: '3',
    chrtCode: '6',
    indexCode: ''
  },
  {
    disguisedIndexcode: 'D_SX_00010',
    indexName: '归属于母公司股东净利润',
    dimensionColumn: null,
    cardCode: 'card020',
    comCode: '4',
    menuCode: '3',
    chrtCode: '6',
    indexCode: ''
  },
  {
    disguisedIndexcode: 'D_SX_00011',
    indexName: '投资收益（财务）',
    dimensionColumn: null,
    cardCode: 'card020',
    comCode: '4',
    menuCode: '3',
    chrtCode: '6',
    indexCode: ''
  },
  {
    disguisedIndexcode: 'D_SX_00012',
    indexName: '投资收益（业务）',
    dimensionColumn: null,
    cardCode: 'card020',
    comCode: '4',
    menuCode: '3',
    chrtCode: '6',
    indexCode: ''
  },
  {
    disguisedIndexcode: 'D_SX_00013',
    indexName: '综合创费',
    dimensionColumn: null,
    cardCode: 'card020',
    comCode: '4',
    menuCode: '3',
    chrtCode: '6',
    indexCode: ''
  },
  {
    disguisedIndexcode: 'D_SX_00014',
    indexName: '综合创费率',
    dimensionColumn: null,
    cardCode: 'card020',
    comCode: '4',
    menuCode: '3',
    chrtCode: '6',
    indexCode: ''
  },
  {
    disguisedIndexcode: 'D_SX_00015',
    indexName: '退保率（新准则）',
    dimensionColumn: null,
    cardCode: 'card020',
    comCode: '4',
    menuCode: '2',
    chrtCode: '6',
    indexCode: ''
  },
  {
    disguisedIndexcode: 'D_SX_00016',
    indexName: '退保率（旧准则）',
    dimensionColumn: null,
    cardCode: 'card020',
    comCode: '4',
    menuCode: '2',
    chrtCode: '6',
    indexCode: ''
  },
  {
    disguisedIndexcode: 'D_SX_00017',
    indexName: '经营活动现金流',
    dimensionColumn: null,
    cardCode: 'card020',
    comCode: '4',
    menuCode: '2',
    chrtCode: '6',
    indexCode: ''
  },
  {
    disguisedIndexcode: 'D_SX_00018',
    indexName: '13个月期缴保单继续率',
    dimensionColumn: null,
    cardCode: 'card020',
    comCode: '4',
    menuCode: '2',
    chrtCode: '6',
    indexCode: ''
  },
  {
    disguisedIndexcode: 'D_SX_00019',
    indexName: '25个月期缴保单继续率',
    dimensionColumn: null,
    cardCode: 'card020',
    comCode: '4',
    menuCode: '2',
    chrtCode: '6',
    indexCode: ''
  },
  {
    disguisedIndexcode: 'D_SX_00020',
    indexName: '个人寿险客户13个月保单继续率',
    dimensionColumn: null,
    cardCode: 'card020',
    comCode: '4',
    menuCode: '2',
    chrtCode: '6',
    indexCode: ''
  },
  {
    disguisedIndexcode: 'D_SX_00021',
    indexName: '个人寿险客户25个月保单继续率',
    dimensionColumn: null,
    cardCode: 'card020',
    comCode: '4',
    menuCode: '2',
    chrtCode: '6',
    indexCode: ''
  },
  {
    disguisedIndexcode: 'D_SX_00022',
    indexName: '费差损',
    dimensionColumn: null,
    cardCode: 'card020',
    comCode: '4',
    menuCode: '2',
    chrtCode: '6',
    indexCode: ''
  },
  {
    disguisedIndexcode: 'D_SX_00022',
    indexName: '费差损-省份',
    dimensionColumn: 'BRANCHCODE',
    cardCode: 'card020',
    comCode: '4',
    menuCode: '2',
    chrtCode: '16',
    indexCode: ''
  },
  {
    disguisedIndexcode: 'D_SX_00022',
    indexName: '费差损-中心城市',
    dimensionColumn: 'RESERVED2',
    cardCode: 'card020',
    comCode: '4',
    menuCode: '2',
    chrtCode: '5',
    indexCode: ''
  },
  {
    disguisedIndexcode: 'D_SX_00023',
    indexName: '产品创费',
    dimensionColumn: null,
    cardCode: 'card020',
    comCode: '4',
    menuCode: '2',
    chrtCode: '6',
    indexCode: ''
  },
  {
    disguisedIndexcode: 'D_SX_00024',
    indexName: '业务贴费',
    dimensionColumn: null,
    cardCode: 'card020',
    comCode: '4',
    menuCode: '2',
    chrtCode: '6',
    indexCode: ''
  },
  {
    disguisedIndexcode: 'D_SX_00025',
    indexName: '综合创费率',
    dimensionColumn: null,
    cardCode: 'card020',
    comCode: '4',
    menuCode: '2',
    chrtCode: '6',
    indexCode: ''
  },
  {
    disguisedIndexcode: 'D_SX_00026',
    indexName: '总资产',
    dimensionColumn: null,
    cardCode: 'card020',
    comCode: '4',
    menuCode: '5',
    chrtCode: '6',
    indexCode: ''
  },
  {
    disguisedIndexcode: 'D_SX_00027',
    indexName: '净资产',
    dimensionColumn: null,
    cardCode: 'card020',
    comCode: '4',
    menuCode: '5',
    chrtCode: '6',
    indexCode: ''
  },
  {
    disguisedIndexcode: 'D_SX_00028',
    indexName: '净资产收益率（ROE）',
    dimensionColumn: null,
    cardCode: 'card020',
    comCode: '4',
    menuCode: '5',
    chrtCode: '6',
    indexCode: ''
  },
  {
    disguisedIndexcode: 'D_SX_00029',
    indexName: '资产回报率（ROA）',
    dimensionColumn: null,
    cardCode: 'card020',
    comCode: '4',
    menuCode: '5',
    chrtCode: '6',
    indexCode: ''
  },
  {
    disguisedIndexcode: 'D_SX_00030',
    indexName: '综合偿付能力充足率',
    dimensionColumn: null,
    cardCode: 'card020',
    comCode: '4',
    menuCode: '5',
    chrtCode: '6',
    indexCode: ''
  },
  {
    disguisedIndexcode: 'D_SX_00031',
    indexName: '核心偿付能力充足率',
    dimensionColumn: null,
    cardCode: 'card020',
    comCode: '4',
    menuCode: '5',
    chrtCode: '6',
    indexCode: ''
  },
  {
    disguisedIndexcode: 'D_SX_00032',
    indexName: '内含价值',
    dimensionColumn: null,
    cardCode: 'card020',
    comCode: '4',
    menuCode: '5',
    chrtCode: '6',
    indexCode: ''
  },
  {
    disguisedIndexcode: 'D_SX_00033',
    indexName: '新业务价值（半年）',
    dimensionColumn: null,
    cardCode: 'card020',
    comCode: '4',
    menuCode: '5',
    chrtCode: '6',
    indexCode: ''
  },
  {
    disguisedIndexcode: 'D_SX_00034',
    indexName: '有效业务价值',
    dimensionColumn: null,
    cardCode: 'card020',
    comCode: '4',
    menuCode: '5',
    chrtCode: '6',
    indexCode: ''
  },
  {
    disguisedIndexcode: 'D_SX_00035',
    indexName: '申请支付时效',
    dimensionColumn: null,
    cardCode: 'card020',
    comCode: '4',
    menuCode: '4',
    chrtCode: '6',
    indexCode: ''
  },
  {
    disguisedIndexcode: 'D_SX_00036',
    indexName: '出险支付时效',
    dimensionColumn: null,
    cardCode: 'card020',
    comCode: '4',
    menuCode: '4',
    chrtCode: '6',
    indexCode: ''
  },
  {
    disguisedIndexcode: 'D_SX_00037',
    indexName: '理赔获赔率',
    dimensionColumn: null,
    cardCode: 'card020',
    comCode: '4',
    menuCode: '4',
    chrtCode: '6',
    indexCode: ''
  },
  {
    disguisedIndexcode: 'D_SX_00038',
    indexName: '犹豫期内电话回访成功率',
    dimensionColumn: null,
    cardCode: 'card020',
    comCode: '4',
    menuCode: '4',
    chrtCode: '6',
    indexCode: ''
  },
  {
    disguisedIndexcode: 'D_SX_00039',
    indexName: '电话呼入人工接通率',
    dimensionColumn: null,
    cardCode: 'card020',
    comCode: '4',
    menuCode: '4',
    chrtCode: '6',
    indexCode: ''
  },
  {
    disguisedIndexcode: 'D_SX_00040',
    indexName: '保全时效',
    dimensionColumn: null,
    cardCode: 'card020',
    comCode: '4',
    menuCode: '4',
    chrtCode: '6',
    indexCode: ''
  },
  {
    disguisedIndexcode: 'D_SX_00041',
    indexName: '保单15日送达率',
    dimensionColumn: null,
    cardCode: 'card020',
    comCode: '4',
    menuCode: '4',
    chrtCode: '6',
    indexCode: ''
  },
  {
    disguisedIndexcode: 'D_SX_00042',
    indexName: '保单5日承保率',
    dimensionColumn: null,
    cardCode: 'card020',
    comCode: '4',
    menuCode: '4',
    chrtCode: '6',
    indexCode: ''
  },
  {
    disguisedIndexcode: 'D_SX_00043',
    indexName: '出险后健康险15日结案率',
    dimensionColumn: null,
    cardCode: 'card020',
    comCode: '4',
    menuCode: '4',
    chrtCode: '6',
    indexCode: ''
  },
  {
    disguisedIndexcode: 'D_SX_00044',
    indexName: '出险后寿险15日结案率',
    dimensionColumn: null,
    cardCode: 'card020',
    comCode: '4',
    menuCode: '4',
    chrtCode: '6',
    indexCode: ''
  },
  {
    disguisedIndexcode: 'D_SX_00046',
    indexName: '原保险保费收入（按日）',
    dimensionColumn: null,
    cardCode: 'card020',
    comCode: '4',
    menuCode: '7',
    chrtCode: '6',
    indexCode: ''
  },
  {
    disguisedIndexcode: 'D_SX_00046',
    indexName: '原保险保费收入（按日）-省份',
    dimensionColumn: 'BRANCHCODE',
    cardCode: 'card020',
    comCode: '4',
    menuCode: '7',
    chrtCode: '16',
    indexCode: ''
  },
  {
    disguisedIndexcode: 'D_SX_00046',
    indexName: '原保险保费收入（按日）-渠道',
    dimensionColumn: 'CHANNEL',
    cardCode: 'card020',
    comCode: '4',
    menuCode: '7',
    chrtCode: '18',
    indexCode: ''
  },
  {
    disguisedIndexcode: 'D_SX_00046',
    indexName: '原保险保费收入（按日）-险种',
    dimensionColumn: 'RISKCLASS',
    cardCode: 'card020',
    comCode: '4',
    menuCode: '7',
    chrtCode: '3',
    indexCode: ''
  },
  {
    disguisedIndexcode: 'D_SX_00046',
    indexName: '原保险保费收入（按日）-中心城市',
    dimensionColumn: 'RESERVED2',
    cardCode: 'card020',
    comCode: '4',
    menuCode: '7',
    chrtCode: '5',
    indexCode: ''
  },
  {
    disguisedIndexcode: 'D_SX_00046',
    indexName: '原保险保费收入（按日）年累计-缴费年限',
    dimensionColumn: 'PAYMODE',
    cardCode: 'card020',
    comCode: '4',
    menuCode: '7',
    chrtCode: '18',
    indexCode: ''
  },
  {
    disguisedIndexcode: 'D_SX_00047',
    indexName: '规模保费（按日）',
    dimensionColumn: null,
    cardCode: 'card020',
    comCode: '4',
    menuCode: '7',
    chrtCode: '6',
    indexCode: ''
  },
  {
    disguisedIndexcode: 'D_SX_00047',
    indexName: '规模保费（按日）-省份',
    dimensionColumn: 'BRANCHCODE',
    cardCode: 'card020',
    comCode: '4',
    menuCode: '7',
    chrtCode: '16',
    indexCode: ''
  },
  {
    disguisedIndexcode: 'D_SX_00047',
    indexName: '规模保费（按日）-险种',
    dimensionColumn: 'RISKCLASS',
    cardCode: 'card020',
    comCode: '4',
    menuCode: '7',
    chrtCode: '3',
    indexCode: ''
  },
  {
    disguisedIndexcode: 'D_SX_00047',
    indexName: '规模保费（按日）-渠道',
    dimensionColumn: 'CHANNEL',
    cardCode: 'card020',
    comCode: '4',
    menuCode: '7',
    chrtCode: '18',
    indexCode: ''
  },
  {
    disguisedIndexcode: 'D_SX_00047',
    indexName: '规模保费（按日）-业务结构',
    dimensionColumn: 'RESERVED3',
    cardCode: 'card020',
    comCode: '4',
    menuCode: '7',
    chrtCode: '18',
    indexCode: ''
  },
  {
    disguisedIndexcode: 'D_SX_00047',
    indexName: '规模保费（按日）-中心城市',
    dimensionColumn: 'RESERVED2',
    cardCode: 'card020',
    comCode: '4',
    menuCode: '7',
    chrtCode: '5',
    indexCode: ''
  },
  {
    disguisedIndexcode: 'D_SX_00047',
    indexName: '规模保费（按日）年累计-缴费年限',
    dimensionColumn: 'PAYMODE',
    cardCode: 'card020',
    comCode: '4',
    menuCode: '7',
    chrtCode: '18',
    indexCode: ''
  },
  {
    disguisedIndexcode: 'D_SX_00048',
    indexName: '业务口径标准保费（按日）',
    dimensionColumn: null,
    cardCode: 'card020',
    comCode: '4',
    menuCode: '7',
    chrtCode: '6',
    indexCode: ''
  },
  {
    disguisedIndexcode: 'D_SX_00048',
    indexName: '业务口径标准保费（按日）-省份',
    dimensionColumn: 'BRANCHCODE',
    cardCode: 'card020',
    comCode: '4',
    menuCode: '7',
    chrtCode: '16',
    indexCode: ''
  },
  {
    disguisedIndexcode: 'D_SX_00048',
    indexName: '业务口径标准保费（按日）-渠道',
    dimensionColumn: 'CHANNEL',
    cardCode: 'card020',
    comCode: '4',
    menuCode: '7',
    chrtCode: '18',
    indexCode: ''
  },
  {
    disguisedIndexcode: 'D_SX_00048',
    indexName: '业务口径标准保费（按日）-险种',
    dimensionColumn: 'RISKCLASS',
    cardCode: 'card020',
    comCode: '4',
    menuCode: '7',
    chrtCode: '3',
    indexCode: ''
  },
  {
    disguisedIndexcode: 'D_SX_00048',
    indexName: '业务口径标准保费（按日）-业务结构',
    dimensionColumn: 'RESERVED3',
    cardCode: 'card020',
    comCode: '4',
    menuCode: '7',
    chrtCode: '18',
    indexCode: ''
  },
  {
    disguisedIndexcode: 'D_SX_00048',
    indexName: '业务口径标准保费（按日）-中心城市',
    dimensionColumn: 'RESERVED2',
    cardCode: 'card020',
    comCode: '4',
    menuCode: '7',
    chrtCode: '5',
    indexCode: ''
  },
  {
    disguisedIndexcode: 'D_SX_00049',
    indexName: '规模人力（按日）',
    dimensionColumn: null,
    cardCode: 'card020',
    comCode: '4',
    menuCode: '7',
    chrtCode: '6',
    indexCode: ''
  },
  {
    disguisedIndexcode: 'D_SX_00049',
    indexName: '规模人力（按日）-省份',
    dimensionColumn: 'BRANCHCODE',
    cardCode: 'card020',
    comCode: '4',
    menuCode: '7',
    chrtCode: '16',
    indexCode: ''
  },
  {
    disguisedIndexcode: 'D_SX_00049',
    indexName: '规模人力（按日）-渠道',
    dimensionColumn: 'CHANNEL',
    cardCode: 'card020',
    comCode: '4',
    menuCode: '7',
    chrtCode: '18',
    indexCode: ''
  },
  {
    disguisedIndexcode: 'D_SX_00050',
    indexName: '新单期缴规模保费（按日）',
    dimensionColumn: null,
    cardCode: 'card020',
    comCode: '4',
    menuCode: '7',
    chrtCode: '6',
    indexCode: ''
  },
  {
    disguisedIndexcode: 'D_SX_00050',
    indexName: '新单期缴规模保费（按日）-省份',
    dimensionColumn: 'BRANCHCODE',
    cardCode: 'card020',
    comCode: '4',
    menuCode: '7',
    chrtCode: '16',
    indexCode: ''
  },
  {
    disguisedIndexcode: 'D_SX_00050',
    indexName: '新单期缴规模保费（按日）-渠道',
    dimensionColumn: 'CHANNEL',
    cardCode: 'card020',
    comCode: '4',
    menuCode: '7',
    chrtCode: '18',
    indexCode: ''
  },
  {
    disguisedIndexcode: 'D_SX_00050',
    indexName: '新单期缴规模保费（按日）-险种',
    dimensionColumn: 'RISKCLASS',
    cardCode: 'card020',
    comCode: '4',
    menuCode: '7',
    chrtCode: '3',
    indexCode: ''
  },
  {
    disguisedIndexcode: 'D_SX_00050',
    indexName: '新单期缴规模保费（按日）-缴费年限',
    dimensionColumn: 'PAYMODE',
    cardCode: 'card020',
    comCode: '4',
    menuCode: '7',
    chrtCode: '18',
    indexCode: ''
  },
  {
    disguisedIndexcode: 'D_SX_00050',
    indexName: '新单期缴规模保费（按日）-中心城市',
    dimensionColumn: 'RESERVED2',
    cardCode: 'card020',
    comCode: '4',
    menuCode: '7',
    chrtCode: '5',
    indexCode: ''
  },
  {
    disguisedIndexcode: 'D_SX_00051',
    indexName: '大个险月均有效人力（按日）',
    dimensionColumn: null,
    cardCode: 'card020',
    comCode: '4',
    menuCode: '7',
    chrtCode: '6',
    indexCode: ''
  },
  {
    disguisedIndexcode: 'D_SX_00051',
    indexName: '大个险月均有效人力（按日）-省份',
    dimensionColumn: 'BRANCHCODE',
    cardCode: 'card020',
    comCode: '4',
    menuCode: '7',
    chrtCode: '16',
    indexCode: ''
  },
  {
    disguisedIndexcode: 'D_SX_00051',
    indexName: '大个险月均有效人力（按日）-渠道',
    dimensionColumn: 'CHANNEL',
    cardCode: 'card020',
    comCode: '4',
    menuCode: '7',
    chrtCode: '18',
    indexCode: ''
  },
  {
    disguisedIndexcode: 'D_SX_00051',
    indexName: '大个险月均有效人力（按日）-中心城市',
    dimensionColumn: 'RESERVED2',
    cardCode: 'card020',
    comCode: '4',
    menuCode: '7',
    chrtCode: '5',
    indexCode: ''
  },
  {
    disguisedIndexcode: 'D_SX_00052',
    indexName: '首年人均产能（按日）',
    dimensionColumn: null,
    cardCode: 'card020',
    comCode: '4',
    menuCode: '7',
    chrtCode: '6',
    indexCode: ''
  },
  {
    disguisedIndexcode: 'D_SX_00052',
    indexName: '首年人均产能（按日）-省份',
    dimensionColumn: 'BRANCHCODE',
    cardCode: 'card020',
    comCode: '4',
    menuCode: '7',
    chrtCode: '16',
    indexCode: ''
  },
  {
    disguisedIndexcode: 'D_SX_00052',
    indexName: '首年人均产能（按日）-渠道',
    dimensionColumn: 'CHANNEL',
    cardCode: 'card020',
    comCode: '4',
    menuCode: '7',
    chrtCode: '18',
    indexCode: ''
  }]
}
export function getSYData (code, disguisedIndexcode, chrtCode) {
  return request({
    url: '/app/listSyAll?code=' + code + '&disguisedIndexcode=' + disguisedIndexcode + '&chartType=' + chrtCode,
    method: 'post'
  })
}
export function getQueryDisguisedIndex (comCode, menuCode) {
  return request({
    url: '/app/queryDisguisedIndex?cmpCode=' + comCode + '&indexType=' + menuCode,
    method: 'post'
  })
}
export function getListXqyData (comCode1, disguisedIndexcode1, menuCode1, disguisedIndexname1, chartType1, dimensionName1) {
  return request({
    url: '/app/listXqyData?code=' + comCode1 + '&disguisedIndexCode=' + disguisedIndexcode1 + '&indexType=' + menuCode1 + '&disguisedIndexname=' + disguisedIndexname1 + '&chartType=' + chartType1 + '&dimensionName=' + dimensionName1,
    method: 'post'
  })
}
export function getLogin (username, password) {
  return request({
    url: '/app/login?username=' + username + '&password=' + password,
    method: 'post'
  })
}
