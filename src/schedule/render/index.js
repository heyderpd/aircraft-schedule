import days from './days'
import lines from './lines'
import pointer from './pointer'

const render = data => {
  const canvas = document.getElementById('canvas')
  const stage = new Konva.Stage({
    container: 'canvas',
    width: canvas.offsetWidth,
    height: canvas.offsetHeight
  })
  const layer = new Konva.Layer()
  stage.add(layer)

  lines(layer, data)
  days(layer, data)
  pointer(layer, data)

  layer.draw()
}

const main = data => {
  render(data)
  setInterval(() => render(data), 1000)
}

export default main
