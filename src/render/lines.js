import { range } from './utils'

const box_height = 80
const line_height = 60

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

const timeLine = (offset, now, [start, end, type]) => {
  const color = getColor(now, start, end, type)
  return new Konva.Rect({
    x: start,
    y: box_height + (offset * line_height),
    width: end -start,
    height: line_height,
    fill: color,
    strokeWidth: 1,
    draggable: false,
  })
}

const lines = (layer, { now }) => {
  layer.add(timeLine(2, now, [150, 170, 'empty']))
  layer.add(timeLine(2, now, [180, 200, 'out']))
  layer.add(timeLine(2, now, [240, 290, 'empty']))
  layer.add(timeLine(2, now, [350, 400, 'normal']))
  layer.add(timeLine(2, now, [420, 450, 'empty']))
  layer.add(timeLine(2, now, [500, 520, 'out']))
  layer.add(timeLine(2, now, [555, 600, 'zika']))
}

export default lines
