import { page_y_limit } from './config'

const fakeStartTime = new Date().getTime()
export const getNow = data => {
  const now = new Date().getTime()
  /* //change to
  return convertTimeToSchedule(now, data)
  */

  const timeDiff = (now -fakeStartTime) *3000
  const fakeNow = 1588435200005 //2020-05-02T16:00:00.005Z
  return convertTimeToSchedule(fakeNow +timeDiff, data)
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
