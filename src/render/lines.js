import { range } from './utils'

const box_height = 80
const line_height = 60

const timeLine = (offset, start, end, color) => new Konva.Rect({
  x: start,
  y: box_height + (offset * line_height),
  width: end,
  height: line_height,
  fill: color,
  strokeWidth: 1,
  draggable: false,
})

const lines = (layer, data) => {
  layer.add(timeLine(1, 50, 100, 'red'))
}

export default lines
