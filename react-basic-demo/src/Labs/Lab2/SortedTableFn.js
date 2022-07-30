import { useState } from 'react'
import '../table.css'

export const SortedTableFn = ({ employeeArr }) => {

  let localArr = employeeArr;

  const [state, setState] = useState('DOJ')

  // Sorting Logic
  //--------------
  const sortedEmployeeFn = () => {
    
    if(state === 'ID') {
      localArr.sort((a, b) => (a.empId > b.empId ? 1 : -1)) 
    } else if (state === 'Name') {
      localArr.sort((a, b) => (a.empName > b.empName ? 1 : -1)) 
    } else if (state === 'Salary') {
      localArr.sort((a, b) => (a.empSal > b.empSal ? 1 : -1)) 
    } else if (state === 'Department') {
      localArr.sort((a, b) => (a.empDep > b.empDep ? 1 : -1)) 
    } else if (state === 'DOJ') {
      localArr.sort((a, b) => (a.empjoiningdate > b.empjoiningdate ? 1 : -1)) 
    } 
  }

  return (
    <div>
      {sortedEmployeeFn()}
      <table>
        <thead>
          <tr>
            <th onClick={(e) => setState(e.target.outerText)}> ID </th>
            <th onClick={(e) => setState(e.target.outerText)}> Name </th>
            <th onClick={(e) => setState(e.target.outerText)}> Salary </th>
            <th onClick={(e) => setState(e.target.outerText)}> Department </th>
            <th onClick={(e) => setState(e.target.outerText)}> DOJ </th>
          </tr>
        </thead>
        <tbody>
          {
            localArr.map((emp) => (
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
