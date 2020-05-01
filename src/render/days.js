import { range } from './utils'

const page_limit = 380
const box_width = 200
const box_height = 80

const box = offset => new Konva.Rect({
  x: (offset * box_width),
  y: 0,
  width: box_width,
  height: box_height,
  fill: '#e2e2e2',
  stroke: 'black',
  strokeWidth: 1,
  draggable: false,
})

const text = (offset, text, move_width=0) => {
  const elm = new Konva.Text({
    x: (box_width /2) + (offset *box_width),
    y: box_height/2 +move_width,
    text: text,
    fontSize: 25,
    fontFamily: 'Calibri',
    fill: 'black',
    align: 'center'
  })
  elm.offsetX(elm.width() /2)
  elm.offsetY(elm.height() /2)
  return elm
}

const circle = offset => new Konva.Circle({
  x: (box_width /2) + (offset *box_width),
  y: box_height/2 +10,
  radius: box_height /6,
  stroke: 'gray',
  strokeWidth: 4,
})

var line = offset => {
  const off = (offset * box_width)
  return new Konva.Line({
    points: [off, 0, off, page_limit],
    stroke: 'gray',
    strokeWidth: 1,
  })
}

const days = (layer, { day, num, mark }) => {
  range(6)
    .map(line)
    .map(elm => layer.add(elm))
  range(5)
    .map(box)
    .map(elm => layer.add(elm))
  layer.add(circle(mark))
  range(5)
    .map(offset => text(offset, day[offset], -10))
    .map(elm => layer.add(elm))
  range(5)
    .map(offset => text(offset, num[offset], 10))
    .map(elm => layer.add(elm))
}

export default days
