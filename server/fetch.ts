import { Buffer } from 'node:buffer'

export const fetchCached = defineCachedFunction(async (url: string) => {
  const r = await fetch(url, {
    redirect: 'follow',
  })
  return Buffer.from(await r.arrayBuffer())
})
