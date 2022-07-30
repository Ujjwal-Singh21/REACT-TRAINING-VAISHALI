import { useState, useEffect, useLayoutEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import api from './ServiceApi/EmployeeService'
import '../table.css'

export const UpdateEmployee = () => {

  const [uid, setUid] = useState('')
  const [empId, setEmpId] = useState('')
  const [empName, setEmpName] = useState('')
  const [empSal, setEmpSal] = useState('')
  const [isMarried, setIsMarried] = useState(false)

  const { id } = useParams()
  
  const navigate = useNavigate()

  // For initial render to populate states value
  //--------------------------------------------
  useLayoutEffect(() => {

    api.get(`/emps/${id}`)
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

  // On Form Submit fn
  //-------------------
  let handleFormSubmit = (e) => {

    const updatedEmpData = { empId, empName, empSal, isMarried }

    api.put(`/emps/${id}`, updatedEmpData)
    .then((response) => {
      alert( empName.toUpperCase() + ' Record Updated successfully')
    })
    .catch((error) => {
      alert('Error in updating Employee data ')
      console.log(error )
    })
    navigate('/show-all-employees')
  }

  return (
    <>
      <h3> <marquee> -- UPDATE EMPLOYEE COMPONENT -- </marquee> </h3>

      <form onSubmit={handleFormSubmit}>

      <label > Unique Id : </label> <br />
      <input type='text' name='id' value={uid} readOnly /> <br />

      <label > Update Employee Id : </label> <br />
      <input type='text' name='empId' value={empId} onChange={(e) => setEmpId(e.target.value)} required /> <br />

      <label> Update Employee Name : </label> <br />
      <input type='text' name='empName' value={empName} onChange={(e) => setEmpName(e.target.value)} required /> <br />

      <label> Update Employee Salary : </label> <br />
      <input type='text' name='empSal' value={empSal} onChange={(e) => setEmpSal(e.target.value)} /> <br />

      <label> Update Marriage status : </label>
      <input type='checkbox'  name='isMarried' value={isMarried} checked={isMarried} 
      onChange={(e) => setIsMarried(e.target.checked)} /> <br /> <br />

      <button type='Submit' style={{color: 'red'}}> UPDATE </button> 
      <button type='Submit' onClick={() => navigate('/')} style={{color: 'blueviolet'}}> BACK TO HOME </button> <br /> <br /> 
      </form> <br />

      {/* Id: {empId}, Name: {empName}, Salary: {empSal} */}
    </>
  )
}
