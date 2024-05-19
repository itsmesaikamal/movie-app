import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import MovieList from '../components/MovieList';

const SearchPage = () => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();
  const query = new URLSearchParams(location.search).get('query');

  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/search/movie?api_key=458f670c30b1ba1c383ee1db30cc490c&language=en-US&query=${query}&page=1`)
      .then(response => setMovies(response.data.results))
      .catch(error => console.log(error));
  }, [query]);

  return (
    <div>
      <h1>Search Results</h1>
      <MovieList movies={movies} />
    </div>
  );
};

export default SearchPage;
