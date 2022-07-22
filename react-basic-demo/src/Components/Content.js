import React, { Component } from 'react'
import { HookDemo } from './HookDemo'
import { LogIn } from './LogIn'

class Content extends Component {

  constructor (props) {
    super(props)

    this.state = {
      counter: 0,
      greet: 'Hello Welcome To React Learning',
      cityList: ['Delhi', 'Mumbai', 'Kolkata', 'Chennai'],
      empList: [
        {
          empId: 101,
          empName: 'Bruce',
          empSal: 15000
        },
        {
          empId: 201,
          empName: 'Steve',
          empSal: 20000
        },
        {
          empId: 301,
          empName: 'Clarke',
          empSal: 35000
        },
        {
          empId: 401,
          empName: 'Diana',
          empSal: 85000
        }
      ]
    }
  }

  handleIncrement = () => {
    this.setState({
      counter: this.state.counter + 1
    })
  }

  handleDecrement = () => {
    this.setState({
      counter: this.state.counter - 1
    })
  }

  render () {
    
    const processedCityList = this.state.cityList.map((city, index) => (
      <li key={index}> {city} </li>
    ))

    const processedEmpList = this.state.empList.map((emp, index) => (
      <h4 key={index}>
        Employee Id: {emp.empId}, Employee Name: {emp.empName}, Employee Salary: {emp.empSal}
      </h4>
    ))

    //Inline styling 
    //--------------
    let inLineStyle = { 
      backgroundColor: 'Yellow',
      border: '2px solid red'
    }

    return (
      <div>
        <h2> {this.state.greet} </h2>

        <div>
          <h2> Counter: {this.state.counter} </h2>
          <button onClick={this.handleIncrement}> Increment </button>
          <button onClick={this.handleDecrement}> Deccrement </button>
        </div>

        <h3 style={inLineStyle}> -- List of available cities --  </h3>
        {processedCityList}
        
        <h3 style={inLineStyle}> -- Employee Details -- </h3>
        {processedEmpList}

        <LogIn />
        <HookDemo />
      </div>
    )
  }
}

export default Content
