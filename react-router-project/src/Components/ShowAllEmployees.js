import { Component } from 'react'
import { Link } from 'react-router-dom'
import api from'./ServiceApi/EmployeeService'
import '../table.css'

class ShowAllEmployees extends Component {

  constructor (props) {
    super(props)

    this.state = {
      allEmployeeArr: []
    }
  }

  getAllEmployee = () => {
    api
    .get('/emps')
    .then((response) => {
      this.setState({
        allEmployeeArr: response.data
      })
    })
    .catch((error) => {
      console.log(error)
    })
  }

  componentDidMount = () => {
    this.getAllEmployee()
  }

  render () {

    const empArr = this.state.allEmployeeArr

    return (
      <>
      <h3> <marquee> -- SHOW ALL EMPLOYEES COMPONENT -- </marquee> </h3>
      
        <table border='1'>
          <thead>
            <tr>
              <th> UNIQUE_ID </th>
              <th> EMPLOYEE_ID </th>
              <th> EMPLOYEE_NAME </th>
              <th> EMPLOYEE_SALARY </th>
              <th> IS_MARRIED? </th>
              <th> LOOKING_FOR_UPDATE? </th>
              <th> DELETE_RECORD? </th>
            </tr>
          </thead>
          <tbody>
            {
              empArr.map((emp, index) => (
                <tr key={index}>
                   <td> {emp.id} </td>
                   <td> {emp.empId} </td>
                   <td> {emp.empName} </td>
                   <td> {emp.empSal} </td>
                   <td> {emp.isMarried ? 'Married' : 'Un-married'} </td>
                   <td> 
                     <Link to={`/update-employee/${emp.id}`} style={{color: 'green'}}> Update </Link> 
                   </td>
                   <td>
                      <Link to={`/delete-employee/${emp.id}`} style={{color: 'red'}}> DELETE </Link> 
                   </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </>
    )
  }
}

export default ShowAllEmployees

