import myRequest from '../request/index'
export async function fetchHouseList(currentPage) {
  const res = await myRequest({
    url: 'http://123.207.32.32:1888/api/home/houselist',
    data: { page: currentPage }
  })
  const houseList = res.data
  const newHouseList = []
  houseList.forEach((item, index) => {
    newHouseList.push(item.data)
    newHouseList[index]['discoveryContentType'] = item.discoveryContentType
  })
  return newHouseList
}