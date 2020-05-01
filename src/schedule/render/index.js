import Konva from 'konva'

import { page_y_limit, page_x_limit } from './config'
import days from './days'
import lines from './lines'
import pointer from './pointer'

const canvasId = 'schedule_canvas'

const render = data => {
  const stage = new Konva.Stage({
    container: canvasId,
    width: page_x_limit,
    height: page_y_limit
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
