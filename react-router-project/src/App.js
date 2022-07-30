import './App.css'
import { Routes, Route } from 'react-router-dom'
import { HomeNavBar } from './Components/Home'
import { AddEmployee } from './Components/AddEmployee'
import { UpdateEmployee } from './Components/UpdateEmployee'
import { DeleteEmployee } from './Components/DeleteEmployee'
import ShowAllEmployees from './Components/ShowAllEmployees'

function App () {
  return (
    <div className='App'>
      <HomeNavBar />
      <Routes>
        <Route path='add-employee' element={<AddEmployee />} />
        <Route path='update-employee/:id' element={<UpdateEmployee />} />
        <Route path='delete-employee/:id' element={<DeleteEmployee />} />
        <Route path='/' element={<ShowAllEmployees />} />
        <Route path='/show-all-employees' element={<ShowAllEmployees />} />
      </Routes>
    </div>
  )
}

export default App
