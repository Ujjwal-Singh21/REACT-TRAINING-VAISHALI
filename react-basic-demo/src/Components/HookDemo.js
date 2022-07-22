import { useState, useEffect } from 'react'

export const HookDemo = () => {

  const [count, setCount] = useState(0)
  const [fullName, setFullName] = useState({
    firstname: '',
    lastName: ''
  })
  const [items, setItems] = useState([])

  useEffect(() => {
   console.log('Use effect was executed')
  }, [fullName])
  

  let increment = () => {
    setCount(count => count + 5)
  }

  let decrement = () => {
    setCount(count => count - 5)
  }

  let reset = () => {
    setCount(0)
  }

  let handleChange = (event) => {

    const {name, value} = event.target

    name === 'fname' ? setFullName({...fullName, firstname: value}) 
                     : setFullName({...fullName, lastName: value}) 
  }

  let generateRandonNumFn = () => {
    setItems([...items, {
      id: items.length,
      value: Math.random() * 10,
    }])
  }

  return (
    <div>

      <h3 className='hookDemo'> -- HookDemo -- </h3>

      <div>
        {
          items.map((num, index) => (
            <li key={index}> Id: {num.id}, Value: {num.value} </li>
          ))
        } <br />
        <button onClick={generateRandonNumFn}> Generate Random Number </button>
      </div>

      <div>
        <h3> FirstName: {fullName.firstname} </h3>
        <h3> LastName: {fullName.lastName} </h3>

        <label> Enter First Name: </label>
        <input
          type='text'
          value={fullName.firstname}
          name='fname'
          onChange={handleChange}
        />

        <label> Enter Last Name: </label>
        <input
          type='text'
          value={fullName.lastName}
          name='lname'
          onChange={handleChange}
        />
      </div> <br/>

      <div>
        Counter : {count} <br/>
        <button onClick={increment}> Increment 5 </button>
        <button onClick={decrement}> Decrement 5 </button>
        <button onClick={reset}> Reset </button>
      </div>

    </div>
  )
}
