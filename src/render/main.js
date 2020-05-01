import days from './days'

const main = () => {
  const stage = new Konva.Stage({
    container: 'container',
    width: window.innerWidth,
    height: window.innerHeight
  })
  const layer = new Konva.Layer()
  stage.add(layer)

  days(layer, {
    day: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday'],
    num: [4, 5, 6, 7, 8],
    mark: 1,
  })

  layer.draw()
}

export default main
