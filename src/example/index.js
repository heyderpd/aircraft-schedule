import main from '../schedule/render'
import data, { schedule_now } from './data'

export const on_ready = load => {
  const on_ready = () => setTimeout(
    load,
    200,
  )

  document.readyState !== 'complete'
    ? document.addEventListener('DOMContentLoaded', load)
    : on_ready()
}

const maskDateForExample = () => {
  const timeOffset = schedule_now
  const fakeStartTime = new Date().getTime()

  Date.prototype._getTime = Date.prototype.getTime
  Date.prototype.getTime = function () {
    const now = new Date()._getTime()
    const timeDiff = (now -fakeStartTime) *3000
    return timeOffset +timeDiff
  }
}

on_ready(() => {
  maskDateForExample()
  main(data)
})
