import { createLines } from '@zline/core'

const lines = createLines({
  el: '#container', 
  width: 600, 
  height: 600
})

lines.printer.setData([[200, 300], [200, 500], [500, 800]])
lines.printer.run()