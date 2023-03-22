import React from 'react'
import styled from'styled-components';
import { selectPopularMovies, selectTrendingMovies } from '../features/movies/moviesSlice';
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";

function Movies() {
    const trendingMovies = useSelector(selectTrendingMovies);
    const popularMovies = useSelector(selectPopularMovies);
    const BASE_URL = "https://image.tmdb.org/t/p/w500/";
    console.log(popularMovies)

    return (
        <Container>
            <h4>Trending Movies</h4>
            <Content>
                { trendingMovies && 
                    trendingMovies.map((movie) => (
                            <Wrap key={movie.id}>
                                <Link to={"/details/" + movie.id}>
                                    <img src={BASE_URL + movie.backdrop_path} alt={movie.title} />
                                </Link>
                            </Wrap>
                    ))
                }
            </Content>
            <h4>Popular Movies</h4>
            <Content>
                { popularMovies && 
                    popularMovies.map((movie) => (
                            <Wrap key={movie.id}>
                                <Link to={"/details/" + movie.id}>
                                    <img src={BASE_URL + movie.backdrop_path} alt={movie.title} />
                                </Link>
                            </Wrap>
                    ))
                }
            </Content>
        </Container>
    )
}

export default Movies

const Container = styled.div`

`

const Content = styled.div`
    display: grid;
    grid-gap: 25px;
    grid-template-columns: repeat(1, minmax(0, 1fr));
    padding-bottom: 15px;

    @media screen and (min-width: 768px) {
        grid-template-columns: repeat(2, minmax(0, 0.5fr));
    }

    @media screen and (min-width: 1024px) {
        grid-template-columns: repeat(4, minmax(0, 0.5fr));
    }
`

const Wrap = styled.div`
    border-radius: 10px;
    cursor: pointer;
    overflow: hidden;
    border: 3px solid rgba(249, 249, 249, 0.1);
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
        rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        overflow: hidden;
    }

    &:hover {
        transform: scale(1.05);
        box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
            rgb(0 0 0 / 72%) 0px 30px 22px -10px;
        border-color: (rgba, 249, 249, 249, 0.8);
    }
`