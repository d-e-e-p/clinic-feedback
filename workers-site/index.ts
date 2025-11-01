/// <reference types="@cloudflare/workers-types" />
import { getAssetFromKV, mapRequestToAsset } from '@cloudflare/kv-asset-handler'

addEventListener('fetch', (event) => {
  event.respondWith(handleEvent(event))
})

async function handleEvent(event: FetchEvent) {
  try {
    // Modified asset handling for nested paths
    return await getAssetFromKV(event, {
      mapRequestToAsset: req => {
        // Normalize the URL path for asset lookup
        const url = new URL(req.url)
        // Remove leading slash for KV asset lookup
        url.pathname = url.pathname.replace(/^\//, '')
        return new Request(url.toString(), req)
      }
    })
  } catch (e) {
    return new Response('Page not found', { status: 404 })
  }
}
