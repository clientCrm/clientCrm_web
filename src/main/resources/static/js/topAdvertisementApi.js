import HttpKit from '@/utils/http-kit'

export default {
  /**
   * 功能描述：查询精选6个广告位
   * @param name
   */
  topsix () {
    return HttpKit.get(`http://www.clientest.com/customerController/customer`).then(
      res => res.data
    )
  },
  sixoffer () {
    return HttpKit.get(`/api/sixoffer`).then(
      res => res.data
    )
  }
}
