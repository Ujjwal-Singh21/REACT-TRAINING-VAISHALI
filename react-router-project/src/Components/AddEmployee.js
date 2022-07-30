import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import api from './ServiceApi/EmployeeService'
import '../table.css'


let initialState = {
  empId: '',
  empName: '',
  empSal: '',
  isMarried: false,
}

export const AddEmployee = () => {

  const [empObj, setEmpObj] = useState(initialState)
  const navigate = useNavigate()

  let handleChange = (e) => {

    let { name, value, type, checked } = e.target

    if(type === 'text') {
      setEmpObj({...empObj, [name]: value})
    } else {
      setEmpObj({...empObj, [name]: checked})
    }
   
  }

  let handleFormSubmit = (e) => {

    api.post('/emps', empObj)
    .then((response) => {
      alert('Employee Added successfully into DataBase')
      console.log(response.data)
    })
    .catch((error) => {
      alert('Error in adding Employee data ')
      console.log(error)
    })

    navigate('/show-all-employees')
  }

  return(
    
    <>
    <h3> <marquee> -- ADD EMPLOYEE COMPONENT -- </marquee> </h3>

    <form onSubmit={handleFormSubmit}>

      <label > Enter Employee Id : </label> <br />
      <input type='text' name='empId'  onChange={handleChange} required /> <br />

      <label> Enter Employee Name : </label> <br />
      <input type='text' name='empName' onChange={handleChange} required /> <br />

      <label> Enter Employee Salary : </label> <br />
      <input type='text' name='empSal' onChange={handleChange} /> <br /> <br />

      <label> Select Marriage status : </label> 
      <input type='checkbox'  name='isMarried' checked={empObj.isMarried} onChange={handleChange} /> <br /> <br />

      <button type='Submit' style={{color: 'red'}}> ADD EMPLOYEE </button> 
      <button type='Submit' onClick={() => navigate('/')} style={{color: 'blueviolet'}}> BACK TO HOME </button> <br /> <br />

    </form>

    {/* Id: {empObj.empId}, Name: {empObj.empName}, Salary: {empObj.empSal} */}
   </>
  )
}

