import React, { useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Details from './components/Details';
import Login from './components/Login';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setMovies } from "./features/movies/moviesSlice";


function App() {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies);

  useEffect(() => {

    if(movies.length === 0) {
      fetch(`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${process.env.REACT_APP_TMDB_API_KEY}&page=1`)
        .then(response => response.json())
        .then((data) => {
          let movies = data.results;
          dispatch(setMovies(movies));
          console.log(movies)
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, []);

  return (
    <div className="App">
      <Router>
        <Header />
        { movies.length > 0 ? (
          <Routes>
            <Route path="login" element={<Login />} />
            <Route path="/details/:id" element={<Details />} />
            <Route path="/" element={<Home />} />
        </Routes>
        ) : (
          <div>Loading..</div>
        )}
      </Router>
    </div>
  );
}

export default App;
