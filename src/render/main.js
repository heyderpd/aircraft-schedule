import days from './days'
import lines from './lines'
import pointer from './pointer'

const main = () => {
  const data = {
    day: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday'],
    num: [4, 5, 6, 7, 8],
    times: [
      [ [1588334400005, 1588356000005, 'normal'], [1588399200005, 1588420800005, 'normal'], [1588464000005, 1588485600005, 'normal'], ],
      [ [1588334400005, 1588356000005, 'empty'], [1588442400005, 1588485600005, 'normal'], [1588528800005, 1588550400005, 'empty'], [1588593600005, 1588636800005, 'normal'], ],
      [ [1588312800005, 1588334400005, 'normal'], [1588507200005, 1588572000005, 'normal'], ],
      [ [1588464000005, 1588485600005, 'normal'], [1588420800005, 1588442400005, 'empty'], [1588528800005, 1588550400005, 'empty'], [1588680000005, 1588701600005, 'empty'], ],
      [ [1588291200005, 1588377600005, 'out'], [1588377600005, 1588399200005, 'normal'], [1588399200005, 1588723200005, 'out'], ],
    ],
    schedule_start: 1588291200005, //2020-05-01T00:00:00.005Z
    schedule_end: 1588723200005, //2020-05-06T00:00:00.005Z
  }

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

export default main
