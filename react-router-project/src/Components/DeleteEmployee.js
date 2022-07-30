import { useState, useEffect, useLayoutEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import api from './ServiceApi/EmployeeService'
import '../table.css'
import axios from 'axios'

export const DeleteEmployee = () => {

  const [uid, setUid] = useState('')
  const [empId, setEmpId] = useState('')
  const [empName, setEmpName] = useState('')
  const [empSal, setEmpSal] = useState('')
  const [isMarried, setIsMarried] = useState(false)

  const { id: uniqueId } = useParams()
  
  const navigate = useNavigate()

  // Initial render
  //---------------
  useLayoutEffect(() => {

    api.get(`/emps/${uniqueId}`)
    .then((resp) => {
     setEmpId(resp.data.empId)
     setEmpName(resp.data.empName)
     setEmpSal(resp.data.empSal)
     setIsMarried(resp.data.isMarried)
     setUid(resp.data.id)
    })
    .catch((err) => {
      console.log('Error', err)
    })
  }, [])

  
  // Delete functionality
  //---------------------
  let handleDelete = (id) => {

    axios.delete(`http://localhost:3000/emps/${id}`)
    .then((resp) => {
      alert('Employee Deleted Successfully')
      // console.log(resp.data)
      navigate('/')
    })
    .catch((err) => {
      alert('Error while Deleting Employee Data')
      console.log(err)
    })
  }

  return (
    <>
       <h3> <marquee> -- DELETE EMPLOYEE COMPONENT -- </marquee> </h3>

       <hr color='red' size='5' width='50%' /> 

       <h2> {empName.toUpperCase()} DETAILS FROM DATABASE </h2>

       <hr color='red' size='5' width='50%' /> <br />

       <table>
         <thead>
          <tr>
            <th> UNIQUE_ID </th>
            <th> EMPLOYEE_ID </th>
            <th> EMPLOYEE_NAME </th>
            <th> EMPLOYEE_SALARY </th>
            <th> MARTIAL_STATUS </th>
          </tr>
         </thead>
         <tbody>
          <tr>
            <td> {uid} </td>
            <td> {empId} </td>
            <td> {empName} </td>
            <td> {empSal} </td>
            <td> {isMarried ? 'Married' : 'UnMarried'} </td>
          </tr>
         </tbody>
       </table> 

       <br />

       <button onClick={() => handleDelete(uid)} style={{color: 'red'}}> DELETE </button>

       <button onClick={() => navigate('/')} style={{color: 'blue'} }> BACK TO HOME </button>
    </>
  )
}

