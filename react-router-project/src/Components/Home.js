import React from 'react'
import { NavLink } from 'react-router-dom'

export const HomeNavBar = () => {

  const navLinkStyler = ({ isActive }) => {
    return {
      fontWeight: isActive ? 'bold' : 'normal',
      textDecoration: isActive ? 'none' : 'underlined'
    }
  }

  return (
    <nav className='primary-nav'>
      <NavLink to='/add-employee' style={navLinkStyler}> ADD NEW EMPLOYEE </NavLink> <br /> 
      {/* <NavLink to='/update-employee' style={navLinkStyler}> UPDATE EMPLOYEE</NavLink> <br />
      <NavLink to='/delete-employee' style={navLinkStyler}> DELETE EMPLOYEE </NavLink> <br /> */}
      <NavLink to='/show-all-employees' style={navLinkStyler}> SHOW ALL EMPLOYEES </NavLink>
    </nav>
  )
}
