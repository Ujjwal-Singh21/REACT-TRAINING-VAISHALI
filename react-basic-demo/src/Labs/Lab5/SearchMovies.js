import React, { useState } from 'react'
import MovieService from './Service'

function SearchMovies () {

  const [moviesGenre, setMoviesGenre] = useState('')
  const [moviesArray, setMoviesArray] = useState([])
  const [dataArrived, setDataArrived] = useState(false)

  const handleChange = (e) => {
    setMoviesGenre(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    async function apiCallFn() {
      await MovieService.showMoviesByGenre(moviesGenre)
      .then((response) => {
        console.log(response.data)
        setMoviesArray(response.data)
        setDataArrived(true)
      })
      .catch((error) => {
        console.log(error)
      })
    }

    apiCallFn()
  }

  return (
    <>
    <br /> <br />
      <form onSubmit={handleSubmit}>
        <label style={{color: 'red'}}> Search Movie </label>
          <select name='moviesGenre' value={moviesGenre} onChange={handleChange}>
              <option> -- Select --   </option>
              <option value='Drama'> Drama </option>
              <option value='Fiction'> Fiction </option>
              <option value='Satire'> Satire </option>
          </select>

          <br /> <br />

          <button style={{color: 'dodgerblue'}}> SEARCH MOVIE </button>
      </form> 

      <br /> <br />

      {
        dataArrived &&

        <table border='1'>
          <thead>
            <tr>
              <th> Movie Name </th>
              <th> Movie Rating</th>
              <th> Genre</th>
            </tr>
          </thead>
          <tbody>
            {
              moviesArray.map((movie, index) => (
                <tr key={index}>
                  <td> {movie.moviesName} </td>
                  <td> {movie.moviesRating} </td>
                  <td> {movie.moviesGenre} </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      }

    </>
  )
}

export default React.memo(SearchMovies)