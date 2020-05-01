import { page_y_limit } from './config'

export const getNow = data => {
  // change to: new Date().getTime()
  const now = 1588435200005 //2020-05-02T16:00:00.005Z
  return convertTimeToSchedule(now, data)
}

export const convertTimeToSchedule = (time, { schedule_start, schedule_end }) => {
  if (time < schedule_start) {
    return -50
  }
  if (schedule_end < time) {
    return page_y_limit +50
  }
  const schedule = schedule_end -schedule_start
  return (time -schedule_start) /schedule *page_y_limit
}

export const getTime = (startT, endT, data) => {
  return {
    start: convertTimeToSchedule(startT, data),
    end: convertTimeToSchedule(endT, data),
  }
}
