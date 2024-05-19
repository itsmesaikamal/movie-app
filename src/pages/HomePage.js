import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MovieList from '../components/MovieList';
import './css/HomePage.css'; // Importing CSS file

const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=458f670c30b1ba1c383ee1db30cc490c&language=en-US&page=1`)
      .then(response => setMovies(response.data.results))
      .catch(error => console.log(error));
  }, []);

  return (
    <div className="home-page-container"> {/* Added class name */}
      <h1 className="home-page-title">Popular Movies</h1> {/* Added class name */}
      <MovieList movies={movies} />
    </div>
  );
};

export default HomePage;
