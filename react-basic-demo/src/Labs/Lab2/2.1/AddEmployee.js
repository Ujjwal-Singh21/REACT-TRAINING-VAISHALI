import React, { useState } from 'react'
import ShowAllEmployee from './ShowAllEmployee'

let initialEmpArray = 
[
  { empId: 1001, empName: 'Rahul', empSal: 9000, empDept: 'Java' },
  { empId: 1002, empName: 'Sachin', empSal: 19000, empDept: 'OraApps' },
  { empId: 1003, empName: 'Vikash', empSal: 29000, empDept: 'BI' }
]

let initialState = {
  empId: '',
  empName: '',
  empSal: '',
  empDept: ''
}

function AddEmployee () {

  const [empObject, setEmployeeObject] = useState(initialState)
  const [employeeArray, setEmployeeArray] = useState(initialEmpArray)

  let handleChange = (e) => {
    let {name, value} = e.target
    setEmployeeObject({ ...empObject, [name]: value })
  }

  let handleSubmit = (e) => {

    setEmployeeArray([...employeeArray, employeeArray.push(empObject)])

    const {empId, empName, empSal, empDept} = empObject
    alert(`Employee Inserted successfully with Id: ${empId} Name: ${empName} Salary: ${empSal} Dept: ${empDept}`)
    e.preventDefault()
  }

  return (
    <>

    <h3> ADD EMPLOYEE </h3>

    <form onSubmit={handleSubmit}>
      
      <label> ID </label> 
      <input type='text' name='empId' value={empObject.empId} onChange={handleChange} /> <br />

      <label> NAME </label>
      <input type='text' name='empName' value={empObject.empName} onChange={handleChange} /> <br />

      <label> SALARY </label>
      <input type='text' name='empSal' value={empObject.empSal} onChange={handleChange} /> <br />

      <label> DEPARTMENT </label>
      <input type='text' name='empDept' value={empObject.empDept} onChange={handleChange} /> <br /> <br />

      <button> ADD EMPLOYEE </button>

    </form> <br />

    <ShowAllEmployee empDataArr={employeeArray}/>
    </>
  )
}

export default React.memo(AddEmployee)



