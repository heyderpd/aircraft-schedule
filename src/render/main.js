import days from './days'
import lines from './lines'
import pointer from './pointer'

const main = () => {
  const data = {
    day: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday'],
    num: [4, 5, 6, 7, 8],
    mark: 1,
    times: [
      [ [150, 170, 'empty'], [180, 200, 'out'], [240, 290, 'empty'], [350, 400, 'normal'], [420, 450, 'empty'], [500, 520, 'out'], [555, 600, 'zika'], ],
      [ [100, 130, 'empty'], [140, 160, 'out'], [200, 270, 'empty'], [380, 420, 'normal'], [450, 500, 'empty'], [520, 550, 'out'], [600, 650, 'zika'], ],
      [ [150, 170, 'empty'], [180, 200, 'out'], [240, 290, 'empty'], [350, 400, 'normal'], [420, 450, 'empty'], [500, 520, 'out'], [555, 600, 'zika'], ],
      [ [100, 130, 'empty'], [140, 160, 'out'], [200, 270, 'empty'], [380, 420, 'normal'], [450, 500, 'empty'], [520, 550, 'out'], [600, 650, 'zika'], ],
      [ [150, 170, 'empty'], [180, 200, 'out'], [240, 290, 'empty'], [350, 400, 'normal'], [420, 450, 'empty'], [500, 520, 'out'], [555, 600, 'zika'], ],
    ],
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
