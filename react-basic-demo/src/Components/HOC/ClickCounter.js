import React, { Component } from 'react'
import { CounterHOC } from './CounterHOC'

class ClickCounter extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <h3> Click Counter : {this.props.counter} </h3>
        <button onClick={this.props.handleIncrement}> Increment Counter </button>
      </div>
    )
  }
}

export default CounterHOC(ClickCounter, 20)