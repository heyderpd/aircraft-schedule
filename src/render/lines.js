import { range } from './utils'

const box_height = 80
const line_height = 60
const colors = {
  old: '#e6c893',
  now: '#7fb261',
  future: '#74aeda',
  empty: '#457ca1',
  out: '#c4c4c4',
}

const getColor = (type, ) => {

}

const timeLine = (offset, [start, end, type], now) => {
  const color = getColor(type, now)
  return new Konva.Rect({
    x: start,
    y: box_height + (offset * line_height),
    width: end -start,
    height: line_height,
    fill: colors[type],
    strokeWidth: 1,
    draggable: false,
  })
}

const lines = (layer, data) => {
  layer.add(timeLine(2, [180, 200, 'old'], 70))
  layer.add(timeLine(2, [240, 290, 'now'], 70))
  layer.add(timeLine(2, [350, 400, 'future'], 70))
  layer.add(timeLine(2, [420, 450, 'empty'], 70))
  layer.add(timeLine(2, [500, 520, 'out'], 70))
}

export default lines
