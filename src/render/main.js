import days from './days'
import lines from './lines'
import pointer from './pointer'

const main = () => {
  const data = {
    day: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday'],
    num: [4, 5, 6, 7, 8],
    mark: 1,
    times: [],
    now: 280,
  }

  const canvas = document.getElementById('canvas')
  const stage = new Konva.Stage({
    container: 'canvas',
    width: canvas.offsetWidth,
    height: canvas.offsetHeight
  })
  const layer = new Konva.Layer()
  stage.add(layer)

  days(layer, data)
  lines(layer, data)
  pointer(layer, data)

  layer.draw()
}

export default main
