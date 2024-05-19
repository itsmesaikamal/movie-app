import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './css/MovieDetailPage.css';

const MovieDetailPage = () => {
  const { movie_id } = useParams();
  const [movie, setMovie] = useState(null);
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const movieResponse = await axios.get(`https://api.themoviedb.org/3/movie/${movie_id}?api_key=458f670c30b1ba1c383ee1db30cc490c&language=en-US`);
        setMovie(movieResponse.data);
      } catch (error) {
        console.error(error);
      }
    };

    const fetchCast = async () => {
      try {
        const castResponse = await axios.get(`https://api.themoviedb.org/3/movie/${movie_id}/credits?api_key=458f670c30b1ba1c383ee1db30cc490c&language=en-US`);
        setCast(castResponse.data.cast);
      } catch (error) {
        console.error(error);
      }
    };

    fetchMovie();
    fetchCast();
  }, [movie_id]);

  if (!movie) return <div>Loading...</div>;

  const imagePath = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
  const profileBasePath = `https://image.tmdb.org/t/p/w200`;

  return (
    <div className="movie-detail">
      <img src={imagePath} alt={movie.title} className="movie-poster" />
      <h1>{movie.title}</h1>
      <p>{movie.overview}</p>
      <h2>Cast</h2>
      <ul className="cast-list">
        {cast.map(actor => (
          <li key={actor.cast_id} className="cast-item">
            <img src={`${profileBasePath}${actor.profile_path}`} alt={actor.name} className="cast-image" />
            <p>{actor.name} as {actor.character}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieDetailPage;
