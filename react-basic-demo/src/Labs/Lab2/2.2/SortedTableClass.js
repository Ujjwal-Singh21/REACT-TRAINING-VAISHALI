import { Component } from 'react'
import '../../table.css'

class SortedTableClass extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       stateValue: 'DOJ'
    }
  }

  // Sorting Logic
  //--------------
  sortedEmployeeFn = () => {
    
    if(this.state.stateValue === 'ID') {
      this.props.employeeArr.sort((a, b) => (a.empId > b.empId ? 1 : -1)) 
    } else if (this.state.stateValue === 'Name') {
      this.props.employeeArr.sort((a, b) => (a.empName > b.empName ? 1 : -1)) 
    } else if (this.state.stateValue === 'Salary') {
      this.props.employeeArr.sort((a, b) => (a.empSal > b.empSal ? 1 : -1)) 
    } else if (this.state.stateValue === 'Department') {
      this.props.employeeArr.sort((a, b) => (a.empDep > b.empDep ? 1 : -1)) 
    } else if (this.state.stateValue === 'DOJ') {
      this.props.employeeArr.sort((a, b) => (a.empjoiningdate > b.empjoiningdate ? 1 : -1)) 
    } 
  }

  render() {

    const { employeeArr } = this.props 

    return (
      <div>
        
        <h3> -- Sorting Employee Class Component -- </h3>
        
         {this.sortedEmployeeFn()}
      <table>
        <thead>
          <tr>
            <th onClick={(e) => {
              this.setState({ stateValue: e.target.outerText})}
            }> ID </th>
            <th onClick={(e) => {
              this.setState({ stateValue: e.target.outerText})}
            }> Name </th>
            <th onClick={(e) => {
              this.setState({ stateValue: e.target.outerText})}
            }> Salary </th>
            <th onClick={(e) => {
              this.setState({ stateValue: e.target.outerText})}
            }> Department </th>
            <th onClick={(e) => {
              this.setState({ stateValue: e.target.outerText})}
            }> DOJ </th>
          </tr>
        </thead>
        <tbody>
          {
            employeeArr.map((emp) => (
              <tr key={emp.empId}>
                <td> {emp.empId} </td>
                <td> {emp.empName} </td>
                <td> {emp.empSal} </td>
                <td> {emp.empDep} </td>
                <td> {emp.empjoiningdate} </td>
              </tr>
            ))
          }
        </tbody>
      </table>
      </div>
    )
  }
}

export default SortedTableClass