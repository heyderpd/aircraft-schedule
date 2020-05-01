import days from './days'

const main = () => {
  const stage = new Konva.Stage({
    container: 'container',
    width: window.innerWidth,
    height: window.innerHeight
  })
  const layer = new Konva.Layer()
  stage.add(layer)

  days(layer)

  layer.draw()
}

export default main
