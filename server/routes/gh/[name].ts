import { Buffer } from 'node:buffer'
import { fetchCached } from '~/fetch'

export default eventHandler(async (event) => {
  const name = getRouterParam(event, 'name')
  return Buffer.from(await fetchCached(`https://github.com/${name}.png?size=256`))
})
