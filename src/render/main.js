const main = () => {
  const stage = new Konva.Stage({
      container: 'container',
      width: window.innerWidth,
      height: window.innerHeight
  })

  const layer = new Konva.Layer()
  stage.add(layer)

  const box = new Konva.Rect({
      x: 0,
      y: 0,
      width: 200,
      height: 80,
      fill: '#e2e2e2',
      stroke: 'black',
      strokeWidth: 1,
      draggable: true
  })
  const box2 = new Konva.Rect({
      x: 200,
      y: 0,
      width: 200,
      height: 80,
      fill: '#e2e2e2',
      stroke: 'black',
      strokeWidth: 1,
      draggable: true
  })
  layer.add(box)
  layer.add(box2)

  layer.draw()

  box.on('mouseover', function() {
      document.body.style.cursor = 'pointer'
  })

  box.on('mouseout', function() {
      document.body.style.cursor = 'default'
  })
}

export default main
