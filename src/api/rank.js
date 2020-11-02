import request from '@/axios/index'

export function getOrgCpRank (data) {
  return request({
    url: '/index/orgCpRank',
    method: 'post',
    data: data,
    headers: {
      'Content-Type': 'application/json'
    }
  })
}

export function getOrgRank (data) {
  return request({
    url: '/index/orggRank',
    method: 'post',
    data: data,
    headers: {
      'Content-Type': 'application/json'
    }
  })
}
