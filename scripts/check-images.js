import https from 'https'

const urls = [
  'https://images.unsplash.com/photo-1519741498421-1cc4a5167e7a?auto=format&fit=crop&w=800&q=60',
  'https://images.unsplash.com/photo-1600180758890-2b8f4f3f2b7c?auto=format&fit=crop&w=800&q=60',
  'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=60',
  'https://images.unsplash.com/photo-1542293787938-c9e299b88059?auto=format&fit=crop&w=800&q=60',
  'https://images.unsplash.com/photo-1528701800484-4e8f6b9f6c63?auto=format&fit=crop&w=800&q=60',
  'https://images.unsplash.com/photo-1504198453319-5ce911bafcde?auto=format&fit=crop&w=800&q=60'
]

function check(url) {
  return new Promise((resolve) => {
    const req = https.get(url, { method: 'GET' }, (res) => {
      resolve({ url, status: res.statusCode })
      res.resume()
    })
    req.on('error', (err) => resolve({ url, error: err.message }))
    req.setTimeout(5000, () => {
      req.destroy()
      resolve({ url, error: 'timeout' })
    })
  })
}

;(async () => {
  console.log('Verificando', urls.length, 'URLs...')
  for (const u of urls) {
    const r = await check(u)
    if (r.error) console.log('ERROR', r.url, r.error)
    else console.log(r.status, r.url)
  }
})()
