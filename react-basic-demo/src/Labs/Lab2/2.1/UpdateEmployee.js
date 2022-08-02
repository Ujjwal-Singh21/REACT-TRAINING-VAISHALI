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
    <table> 

      <tr>
        <td> <label> ID </label> </td> 
        <td> <input type='text' name='empId' value={empData.empId} onChange={handleChange} readOnly /></td> 
      </tr>

      <tr>
        <td> <label> NAME </label> </td>
        <td> <input type='text' name='empName' value={empData.empName} onChange={handleChange} /> </td> 
      </tr>

      <tr>
       <td> <label> SALARY </label> </td>
       <td> <input type='text' name='empSal' value={empData.empSal} onChange={handleChange} /> </td> 
      </tr>

      <tr>
       <td>  <label> DEPARTMENT </label> </td>
       <td> <input type='text' name='empDept' value={empData.empDept} onChange={handleChange} /></td> 
      </tr>
      <br /> 

    </table>

      <button> UPDATE EMPLOYEE </button>
      
    </form>

    <br />
    </>
  )
}

export default React.memo(UpdateEmployee)