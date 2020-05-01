import React, { Component } from 'react'
import main from './index'

class ScheduleComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: props.data || {},
    }
  }

  render () {
    main(this.state.data)
    return <div id="schedule_canvas"></div>
  }
}

export const render = main

export default ScheduleComponent
