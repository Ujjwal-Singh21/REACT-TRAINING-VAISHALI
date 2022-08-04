import axios from "axios";

const baseurl = 'http://localhost:9191/api/movies/'

class MovieService {

   addMovies(movie) {

    return  axios.post(baseurl + 'add-movies', movie)
  }

   showMoviesByGenre(moviesGenre) {

    return axios.get(baseurl + 'show-movies-by-genre' + '/' + moviesGenre)
  }
}

export default new MovieService()