import request from '@/utils/request'

export function menus() {
    return request({
      url: '/sys/menus',
      method: 'get',
    })
  }
