import React from 'react'

export const CounterHOC = (OriginalComponent, value) => {
  
  class NewComponent extends React.Component {

    constructor(props) {
      super(props)
    
      this.state = {
         counter: 5
      }
    }

    handleIncrement = () => {
      this.setState({
        counter: this.state.counter + value
      })
    }

    render() {
      return (
        <div>
          <OriginalComponent counter={this.state.counter} handleIncrement={this.handleIncrement}/>
        </div>
      )
    }
  }

  return NewComponent
  
}
