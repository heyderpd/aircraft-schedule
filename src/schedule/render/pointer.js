import Konva from 'konva'

import { page_x_limit, box_height } from './config'
import { getNow } from './time'

var line = offset => {
  return new Konva.Line({
    points: [offset, box_height -10, offset, page_x_limit],
    stroke: 'red',
    strokeWidth: 1,
  })
}

const circle = offset => new Konva.Circle({
  x: offset,
  y: box_height -7,
  radius: 4,
  fill: 'red',
  strokeWidth: 4,
})

const pointer = (layer, data) => {
  const now = getNow(data)
  layer.add(line(now))
  layer.add(circle(now))
}

export default pointer
