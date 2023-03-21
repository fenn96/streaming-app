import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import styled from 'styled-components'
import { useNavigate, useParams } from 'react-router-dom';
import { selectUserName } from "../features/user/userSlice";
import { selectMovies } from "../features/movies/moviesSlice";

function Details() {
    const { id } = useParams();
    const movies = useSelector(selectMovies);
    const movie = movies.find(movie => movie.id.toString() === id);
    const BASE_URL = "https://image.tmdb.org/t/p/original/";

    useEffect(() => {

    })

    return (
        <Container>
            <Background>
                <img src={BASE_URL + movie.backdrop_path} alt="" />
            </Background>
            <h1>{movie.title}</h1>
            <Controls>
                <PlayButton>
                    <img src="/images/play-icon-black.png" alt="Play" />
                    <span>Play</span>
                </PlayButton>
                <TrailerButton>
                    <img src="/images/play-icon-white.png" alt="Trailer" />
                    <span>Trailer</span>
                </TrailerButton>
                <AddButton>
                    <span>+</span>
                </AddButton>
                <GroupWatchButton>
                    <img src="/images/group-icon.png" alt="Group Watch" />
                </GroupWatchButton>
            </Controls>
            <SubTitle>
                {movie.release_date.split('-')[0]} - 7m
            </SubTitle>
            <Description>
                {movie.overview}
            </Description>
        </Container>
    )
}

export default Details

const Container = styled.main`
    min-height: calc(100vh - 70px);
    padding: 0 calc(3.5vw + 5px);
    position: relative;
`

const Background = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
    opacity: 0.8;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`

const ImgTitle = styled.div`
    height: 30vh;
    min-height: 170px;
    width: 35vw;
    min-width: 200px;

    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
`

const Controls = styled.div`
    display: flex;
    align-items: center;
`

const PlayButton = styled.button`
    border-radius: 4px;
    font-size: 15px;
    padding: 0px 24px;
    margin-right: 22px;
    display: flex;
    align-items: center;
    height: 56px;
    background-color: rgb(249, 249, 249);
    border: none;
    letter-spacing: 1.8px;
    text-transform: uppercase;
    cursor: pointer;

    &:hover {
        background: rgb(198, 198, 198);
    }
`

const TrailerButton = styled(PlayButton)`
    background: rgba(0, 0, 0, 0.3);
    border: 1px solid rgb(249, 249, 249);
    color: rgb(249, 249, 249);
`

const AddButton = styled.button`
    margin-right: 16px;
    width: 44px;
    height: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    border: 2px solid white;
    background-color: rgba(0, 0, 0, 0.6);
    cursor: pointer;

    span {
        font-size: 30px;
        color: white;
    }
`

const GroupWatchButton = styled(AddButton)`
    background: rgb(0, 0, 0);
`

const SubTitle = styled.div`
    color: rgb(249, 249, 249);
    font-size: 15px;
    min-height: 20px;
    margin-top: 26px;
`

const Description = styled.div`
    line-height: 1.4;
    font-size: 20px;
    margin-top: 16px;
    color: rgb(249, 249, 249);
    max-width: 760px;
`