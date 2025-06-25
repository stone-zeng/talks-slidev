import { readdirSync } from 'fs'

const items = readdirSync('./src')
  .filter((i) => !i.startsWith('.'))
  .sort()
  .map((i) => ({ source: `/${i}/(.*)`, destination: `/${i}/index.html` }))

console.log(JSON.stringify(items, null, 2))
