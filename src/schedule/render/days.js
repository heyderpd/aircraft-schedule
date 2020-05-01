import Konva from 'konva'

import { page_y_limit, box_width, box_height } from './config'
import { range } from './utils'
import { getNow } from './time'

const box = layer => offset => {
  layer.add(new Konva.Rect({
    x: (offset * box_width),
    y: 0,
    width: box_width,
    height: box_height,
    fill: '#e2e2e2',
    stroke: 'black',
    strokeWidth: 1,
    draggable: false,
  }))

  const elms = [0, 6, 12, 18]
    .map((_t, _po) => {
      const off = (box_width /4 *_po) - box_width /2
      return text(offset, _t, 12, off, 35)
    })
  elms.map(elm => layer.add(elm))
}

const getDay = now => {
  if (now === null) {
    return -1
  }
  return (now -(now %box_width)) /box_width
}

const text = (offset, text, size=20, move_x=0, move_y=0, bold=false, now=null) => {
  const off = getDay(now)
  const color = offset == off ? 'white' : 'black'
  const elm = new Konva.Text({
    x: (box_width /2) +(offset *box_width) +move_x,
    y: box_height/2 +move_y,
    text: text,
    fontSize: size,
    fontFamily: 'Calibri',
    fill: color,
    align: 'center',
    fontStyle: bold ? 'bold' : '',
  })
  elm.offsetX(elm.width() /2)
  elm.offsetY(elm.height() /2)
  return elm
}

const circle = now => {
  const offset = getDay(now)
  return new Konva.Circle({
    x: (box_width /2) + (offset *box_width),
    y: box_height/2 +12,
    radius: box_height /6,
    fill: 'black',
  })
}

var line = offset => {
  const off = (offset * box_width)
  return new Konva.Line({
    points: [off, 0, off, page_y_limit],
    stroke: 'gray',
    strokeWidth: 1,
  })
}

const days = (layer, data) => {
  const { day, num } = data
  const now = getNow(data)

  range(6)
    .map(line)
    .map(elm => layer.add(elm))
  range(5)
    .map(box(layer))
  layer.add(circle(now))
  range(5)
    .map(offset => text(offset, day[offset], 20, 0, -15))
    .map(elm => layer.add(elm))
  range(5)
    .map(offset => text(offset, num[offset], 20, 0, 15, true, now))
    .map(elm => layer.add(elm))
}

export default days
