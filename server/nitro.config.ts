export default defineNitroConfig({
  preset: 'netlify_edge',

  storage: {
    manifest: {
      driver: 'lru-cache',
      max: 10_000,
    },
  },

  routeRules: {
    '**': {
      cors: true,
      headers: {
        'Cache-Control': 'max-age=31536000, immutable',
        'Content-Type': 'image/png',
      },
    },
  },

  compatibilityDate: '2025-03-02',
})
