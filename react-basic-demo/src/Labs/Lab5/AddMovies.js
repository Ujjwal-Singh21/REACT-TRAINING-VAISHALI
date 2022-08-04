import React, { useEffect, useState } from 'react'
import MovieService from './Service'

const initialState = {
  moviesName: '',
  moviesRating: '',
  moviesGenre: ''
}

function AddMovies () {

  const [moviesObj, setMoviesObj] = useState(initialState)
  const [formErrors, setFormErrors] = useState({})
  const [isSubmit, setIsSubmit] = useState(false)

  const handleChange = (e) => {
    const {name, value} = e.target 
    setMoviesObj({...moviesObj, [name]: value})
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setFormErrors(validateForm(moviesObj))
    setIsSubmit(true)
  }

  useEffect(() => {
    console.log('Initial inside useffect:',formErrors)
    
    async function apiCall() {
      if(Object.keys(formErrors).length === 0 && isSubmit) {
        console.log('Later inside useffect:', formErrors)
          await MovieService.addMovies(moviesObj)
          .then((resp) => {
            console.log('Data from Server:', resp.data)
            alert('Movie Added Successfully')
          })
          .catch((err) => {
            console.log('Error from Server:', err)
          }) 
        }
    }

    apiCall()
  }, [formErrors])

  // Validation Logic
  //-----------------
  const validateForm = (values) => {

    const errors = {}

    // const moviesNameRegex =/^[a-z0-9]+$/i
    const moviesRatingRegex = /^[0-9.,]+$/

    if(!values.moviesName) {
      errors.movieName = 'Movie Name is required'
    } 
    // else if(!moviesNameRegex.test(values.movieName)) {
    //   errors.movieName = 'Movie Name should be only AlphaNumeric'
    // }

    if(!values.moviesRating) {
      errors.moviesRating = 'Movie Rating is required'
    } else if(!moviesRatingRegex.test(values.moviesRating)) {
      errors.moviesRating = 'Rating needs to be a number: eg 2.5, Rating is on Scale 1-5'
    }

    if(!values.moviesGenre) {
      errors.moviesGenre = 'Movie Genre is required'
    }
    return errors
  }

  return (
    <>

    <h3 style={{color: 'deeppink'}}> Add Movies Component </h3>
     <form onSubmit={handleSubmit}>
       <table>
         
        <tbody>

         <tr>
           <td> <label> Movie Name </label></td>
           <td> <input type='text' name = 'moviesName' value={moviesObj.moviesName}
            onChange={handleChange} /> </td>
            <td> <p> {formErrors.movieName ? <i style={{color: 'red'}}> {formErrors.movieName} </i> : null} </p> </td>
         </tr> 

         <tr>
           <td> <label> Give Rating </label></td>
           <td> <input type='text' name = 'moviesRating' value={moviesObj.moviesRating}
            onChange={handleChange} /> </td>
            <td> <p> {formErrors.moviesRating ? <i style={{color: 'red'}}> {formErrors.moviesRating} </i> : null} </p> </td>
         </tr> 

         <tr>
         <td> <label> Select Genre </label> </td>
          <td>
          <select name='moviesGenre' value={moviesObj.moviesGenre}
           onChange={handleChange}>
              <option> -- Select --   </option>
              <option value='Drama'> Drama </option>
              <option value='Fiction'> Fiction </option>
              <option value='Satire'> Satire </option>
          </select>
          </td>
          <td> <p> {formErrors.moviesGenre ? <i style={{color: 'red'}}> {formErrors.moviesGenre} </i> : null} 
          </p> </td>
         </tr>

         </tbody>
       </table> <br />

       <button style={{color: 'green'}}> ADD MOVIE </button>
     </form>
    </>
  )
}


export default React.memo(AddMovies)