import { page_x_limit } from './config'

export const getNow = data => {
  const now = new Date().getTime()
  return convertTimeToSchedule(now, data)
}

export const convertTimeToSchedule = (time, { schedule_start, schedule_end }) => {
  if (time < schedule_start) {
    return -50
  }
  if (schedule_end < time) {
    return page_x_limit +50
  }
  const schedule = schedule_end -schedule_start
  return (time -schedule_start) /schedule *page_x_limit
}

export const getTime = (startT, endT, data) => {
  return {
    start: convertTimeToSchedule(startT, data),
    end: convertTimeToSchedule(endT, data),
  }
}
