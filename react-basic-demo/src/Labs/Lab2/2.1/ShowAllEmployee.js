import React, { useState } from 'react'
import UpdateEmployee from './UpdateEmployee'

let initialState = {
  empId: '',
  empName: '',
  empSal: '',
  empDept: ''
}

function ShowAllEmployee ({ empDataArr }) {

  const [updateEmpObj, setUpdateEmpObj] = useState(initialState)
  const [employeeArray, setEmployeeArray] = useState(empDataArr)

  // Delete functionality
  //---------------------
  let handleDelete = (emp) => {

    const {empId, empName} = emp

    let filteredArr = employeeArray.filter((emp) => (
      emp.empId !== empId
    ))

    setEmployeeArray(filteredArr)
    alert(`${empName} record deleted`)
  }

  // Update functionalities
  //-----------------------
  let handleUpdate = (emp) => {

    setUpdateEmpObj({

      ...updateEmpObj,
      empId: emp.empId,
      empName: emp.empName,
      empSal: emp.empSal,
      empDept: emp.empDept,
    })
  }

  let receivedUpdatedObj = (data) => {

    let resArr = employeeArray.map((emp) => {

       if(emp.empId === data.empId) {
        emp = data
      } 
      return emp
    }) 

    setEmployeeArray(resArr)

    alert(`${data.empName} record updated successfully`)
  }

  return (
    <>
    <h3> SHOW ALL EMPLOYEE </h3>

    <table border='1'>
      <thead>
        <tr>
          <th> ID </th>
          <th> NAME </th>
          <th> SALARY </th>
          <th> DEPARTMENT </th>
          <th colSpan={2}> ACTION </th>
        </tr>
      </thead>
      <tbody>
        {
          employeeArray.map((emp, index) => (
            <tr key={index}>
              <td> {emp.empId} </td>
              <td> {emp.empName} </td>
              <td> {emp.empSal} </td>
              <td> {emp.empDept} </td>
              <td onClick={() => handleUpdate(emp)}> <button> UPDATE </button>  </td>
              <td onClick={() => handleDelete(emp)}> <button> DELETE </button> </td>
            </tr>
          ))
        }
      </tbody>
    </table>

    <UpdateEmployee empData={updateEmpObj} setterFn={setUpdateEmpObj} fn={receivedUpdatedObj} />
    </>
  )
}


export default React.memo(ShowAllEmployee)