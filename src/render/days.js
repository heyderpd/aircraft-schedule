import { range } from './utils'

const boxSize = 200

const box = offset => new Konva.Rect({
  x: 0 + (offset * boxSize),
  y: 0,
  width: boxSize,
  height: 80,
  fill: '#e2e2e2',
  stroke: 'black',
  strokeWidth: 1,
  draggable: true
})

const days = layer => {
  range(5)
    .map(box)
    .map(elm => layer.add(elm))
}

export default days
