import React, { Component } from 'react'
import { CounterHOC } from './CounterHOC'

class HoverCounter extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <h3> Hover Counter : {this.props.counter} </h3>
        <h3 onMouseOver={this.props.handleIncrement}> Hover Counter </h3>
      </div>
    )
  }
}

export default CounterHOC(HoverCounter, 30)