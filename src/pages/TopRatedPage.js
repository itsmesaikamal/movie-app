import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MovieList from '../components/MovieList';
import './css/TopRatedPage.css';

const TopRatedPage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=458f670c30b1ba1c383ee1db30cc490c&language=en-US&page=1`)
      .then(response => setMovies(response.data.results))
      .catch(error => console.log(error));
  }, []);

  return (
    <div className="top">
      <h1>Top Rated Movies</h1>
      <MovieList movies={movies} />
    </div>
  );
};

export default TopRatedPage;
