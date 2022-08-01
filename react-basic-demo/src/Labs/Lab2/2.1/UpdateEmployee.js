import React from 'react'

function UpdateEmployee ({ empData, setterFn, fn }) {

  let handleChange = (e) => {
    let {name, value} = e.target
    setterFn({ ...empData, [name]: value })
  }

  let handleSubmit = (e) => {
    fn(empData)
    e.preventDefault()
  }

  return (
    <>

    <h3> UPDATE EMPLOYEE </h3>

    <form onSubmit={handleSubmit}>
      
      <label> ID </label> 
      <input type='text' name='empId' value={empData.empId} onChange={handleChange} readOnly /> <br />

      <label> NAME </label>
      <input type='text' name='empName' value={empData.empName} onChange={handleChange} /> <br />

      <label> SALARY </label>
      <input type='text' name='empSal' value={empData.empSal} onChange={handleChange} /> <br />

      <label> DEPARTMENT </label>
      <input type='text' name='empDept' value={empData.empDept} onChange={handleChange} /> <br /> <br />

      <button> UPDATE EMPLOYEE </button>
    </form>

    <br />
    </>
  )
}

export default React.memo(UpdateEmployee)