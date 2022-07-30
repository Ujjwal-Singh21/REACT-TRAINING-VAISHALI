import { useState } from 'react'

const employeeData = {
  Id: '',
  Name: '',
  Salary: '',
  Department: ''
}

export const EmployeeForm = () => {

  const [empData, setEmpData] = useState(employeeData)

  let handleChange = (e) => {

    if(e.target.name === 'Id') {
      setEmpData({...empData, Id: e.target.value})
    } else if ( e.target.name === 'Name') {
      setEmpData({...empData, Name: e.target.value})
    } else if ( e.target.name === 'Salary') {
      setEmpData({...empData, Salary: e.target.value})
    } else if ( e.target.name === 'Department') {
    setEmpData({...empData, Department: e.target.value}) 
    }
  }

  let handleSubmit = (e) => {
    alert(` ${empData.Id} ${empData.Name} ${empData.Salary} ${empData.Department}`)
    e.prevenetDefault()
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label> ID : </label>
        <input type='text' name='Id' value={empData.Id} onChange={handleChange}/> <br />

        <label> NAME : </label>
        <input type='text' name='Name' value={empData.Name} onChange={handleChange}/> <br />

        <label> SALARY : </label>
        <input type='text' name='Salary' value={empData.Salary} onChange={handleChange}/> <br />

        <label> DEPARTMENT : </label>
        <input type='text' name='Department' value={empData.Department} onChange={handleChange}/> <br />

        <button> Add Employee </button>
      </form>

      <h3> {empData.Id} {empData.Name} {empData.Salary} {empData.Department} </h3>
    </div>
  )
}
