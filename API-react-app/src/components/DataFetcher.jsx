// src/components/DataFetcher.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './DataFetcher.css'; // Import the CSS file

const DataFetcher = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiKey = 'bcefc566f28c46fa97d01ab10de5d894'; // Your TMDb API key
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`
        );
        setMovies(response.data.results);
        console.log(response.data.results)
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures the effect runs once on component mount

  return (
    <div className="movie-list">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="movie-row">
          {movies.map(movie => (
            <div key={movie.id} className="movie-container">
              <h3 className="movie-title">{movie.title}</h3>
              {movie.poster_path ? (
                <img
                  src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                  alt={`${movie.title} Poster`}
                  className="poster-image"
                />
              ) : (
                <p className="no-poster-text">No Poster Available</p>
              )}
              <p className="release-date">Release Year: {movie.release_date.split('-')[0]}</p>
              {/* Update the information displayed here */}
              <p className="other-info">Other Relevant Info: {movie.vote_average}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DataFetcher;
