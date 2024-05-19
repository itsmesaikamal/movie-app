import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import TopRatedPage from './pages/TopRatedPage';
import UpcomingPage from './pages/UpcomingPage';
import MovieDetailPage from './pages/MovieDetailPage';
import SearchPage from './pages/SearchPage';

import './App.css'; // Importing CSS

const App = () => {
  return (
    <Router>
      <div className="app-container"> {/* Added class name */}
        <Navbar className="navbar" /> {/* Added class name */}
        <div className="content-container"> {/* Added class name */}
          <Routes>
            <Route exact path="/" element={<HomePage className="home-page" />} /> {/* Added class name */}
            <Route path="/top-rated" element={<TopRatedPage />} />
            <Route path="/upcoming" element={<UpcomingPage />} />
            <Route path="/movie/:movie_id" element={<MovieDetailPage />} />
            <Route path="/search" element={<SearchPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
