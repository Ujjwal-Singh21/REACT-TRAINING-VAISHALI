import React, { Component } from 'react'

class LifeCycleA extends Component {

  constructor(props) {
    super(props)
  
    console.log('LifeCycle A constructor executed')
    this.state = {
       UserName: 'Bruce Wayne'
    }
  }

  static getDerivedStateFromProps(props, state) {
    console.log('LifeCycle A getDerivedStateFromProps executed')
    console.log('Where Props value: ' + props.vehicle + ', State value: ' + state.UserName)
    return null
  }

  shouldComponentUpdate() {
    console.log('LifeCycle A shouldComponentUpdate executed')
    return true
  }

  handlelclick = () => {
    this.setState({
      UserName: 'Clarke Kent'
    })
  }

  render() {

     //Inline styling 
    //--------------
    let inLineStyle = { 
      backgroundColor: 'cyan',
      border: '2px solid red'
    }

    console.log('Lifecycle A render method executed')

    return (
      <div>
        <h3 style={inLineStyle}> -- Welcome to LifeCycleA component -- </h3>
        <h4> Props value: {this.props.vehicle} </h4>
        <h4> State value: {this.state.UserName} </h4>

        <button onClick={this.handlelclick}> Change UserName </button>
      </div>
    )
  }

  componentDidMount() {
    console.log('LifeCycle A componentDidMount executed')
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('LifeCycle A getSnapshotBeforeUpdate executed')
    console.log('Prev Props Value: ' + prevProps.vehicle + ', Prev State Value: ' + prevState.UserName)
    return null
  }

  componentDidUpdate() {
    console.log('LifeCycle A componentDidUpdate executed')
  }
}

export default LifeCycleA