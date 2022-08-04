import { useState, useEffect } from 'react'

export const FormValidation = () => {

  const initialValues = {
    userName: '',
    email: '',
    password: ''
  }

  const [formValues, setFormValues] = useState(initialValues)
  const [formErrors, setFormErrors] = useState({})
  const [isSubmit, setIsSubmit] = useState(false)

  const handleChange = (e) => {
    const {name, value} = e.target
    setFormValues({...formValues, [name]: value})
  }

  const handleSubmit =(e) => {
    e.preventDefault()
    setFormErrors(validateForm(formValues))
    setIsSubmit(true)
  }

  useEffect(() => {

    console.log('Inside useEffect initial check', formErrors)

      if(Object.keys(formErrors).length === 0 && isSubmit) {
      console.log('Inside useEffect final check', formErrors)
      console.log(formValues)
      }
  }, [formErrors])

  // Validation Logic
  //-----------------
  const validateForm = (values) => {

    const errors = {}
    const emailregex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i

    if(!values.userName) {
      errors.userName = 'UserName is required'
    }

    if(!values.email) {
      errors.email = 'Email is required'
    }
    else if(!emailregex.test(values.email)) {
      errors.email = 'Incorred email format'
    }

    if(!values.password) {
      errors.password = 'Password is required'
    }
    else if (values.password.length < 4){
      errors.password = 'Password must be more than 4 characters'
    }
    else if (values.password.length > 10){
      errors.password = 'Password cannot exceed more than 10 characters'
    }

    return errors

  }

  return (
    <>
    <form onSubmit={handleSubmit}>

      {
        Object.keys(formErrors).length === 0 && isSubmit ?
        <> <br /> <br /> <strong> Signed in SuccessFull! </strong>  <br /> <br /> </> :
        <pre> {JSON.stringify(formValues, undefined, 2)} </pre>
      }

      <label> UserName </label> <br />
      <input type='text' name='userName' value={formValues.userName} onChange={handleChange} />
      <p> {formErrors.userName ? <i style={{color: 'red'}}> {formErrors.userName} </i> : null} </p>

      <label> Email </label> <br />
      <input type='text' name='email' value={formValues.email} onChange={handleChange} />
      <p> {formErrors.email ? <i style={{color: 'red'}}> {formErrors.email} </i> : null} </p>

      <label> Password </label> <br />
      <input type='password' name='password' value={formValues.password} onChange={handleChange} />
      <p> {formErrors.password ? <i style={{color: 'red'}}> {formErrors.password} </i> : null} </p>

      <button> Submit Form </button>

    </form>
    </>
  )
}
