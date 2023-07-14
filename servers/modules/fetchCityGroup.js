import myRequest from '../request/index'
export async function fetchCityGroup() {
  const res = await myRequest({
    url: 'http://123.207.32.32:1888/api/city/all',
  })
  const cityGroup = res.data.cityGroup.title
  return cityGroup
}