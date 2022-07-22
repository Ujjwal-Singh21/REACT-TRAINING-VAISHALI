import React, { useState } from 'react'
import LifeCycleA from './LifeCycleA'

export const LogIn = () => {

  const [buttonCaption, setButtonCaption] = useState('LOGIN')
  const [text, setText] = useState('Out')
  const [isLoggedIn, setIsLoggedIn] = useState(true)

  let handleClick = () => {

    if (isLoggedIn) {
      setButtonCaption('LOGOUT')
      setText('In')
      setIsLoggedIn(!isLoggedIn)
    } else {
      setButtonCaption('LOGIN')
      setText('Out')
      setIsLoggedIn(!isLoggedIn)
    }
  }

   //Inline styling 
    //--------------
    let inLineStyle = { 
      backgroundColor: 'pink',
      border: '2px solid red'
    }

  return (
    <div>
      <h3 style={inLineStyle}> -- Welcome to LOGIN Page -- </h3>
      <h3> You are Logged {text} </h3>
      <button onClick={handleClick}> {buttonCaption} </button>

      <LifeCycleA vehicle='Tata Suzuki'/>
    </div>
  )

}
