import Konva from 'konva'

import { page_x_limit, box_marge, box_height, line_height } from './config'
import { range } from './utils'
import { getNow, getTime } from './time'

const colors_old = '#e6c893'
const colors_now = '#7fb261'
const colors = {
  normal: '#74aeda',
  empty: '#457ca1',
  out: '#c4c4c4',
}

const getColor = (now, start, end, type) => {
  const color = colors[type]
  if (color === undefined) {
    return 'red'
  }
  if (type === 'out') {
    return color
  }
  if (end < now) {
    return colors_old
  }
  if (start <= now && now <= end) {
    return colors_now
  }
  return color
}

const timeLine = (offset, now, data, [startT, endT, type]) => {
  const { start, end } = getTime(startT, endT, data)
  const color = getColor(now, start, end, type)
  return new Konva.Rect({
    x: start,
    y: box_height + (offset * line_height) +box_marge,
    width: end -start,
    height: line_height -(box_marge *2),
    fill: color,
    strokeWidth: 1,
    draggable: false,
  })
}

var line = offset => {
  const off = box_height +(line_height *offset)
  return new Konva.Line({
    points: [0, off, page_x_limit, off],
    stroke: 'gray',
    strokeWidth: 1,
  })
}

const processLine = (layer, now, data) => (items, offset) => {
  items
    .map(box => timeLine(offset, now, data, box))
    .map(elm => layer.add(elm))
}

const lines = (layer, data) => {
  const now = getNow(data)
  const { times } = data
  range(times.length)
    .map(line)
    .map(elm => layer.add(elm))
  times
    .map(processLine(layer, now, data))
}

export default lines
