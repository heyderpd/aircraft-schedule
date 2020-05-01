const page_limit = 380
const box_height = 80

var line = offset => {
  return new Konva.Line({
    points: [offset, box_height -10, offset, page_limit],
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

const pointer = (layer, position) => {
  layer.add(line(position))
  layer.add(circle(position))
}

export default pointer
