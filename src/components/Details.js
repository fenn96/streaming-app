import React, { useEffect, useState } from 'react';
import ReactPlayer from 'react-player/lazy';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components'
import { useParams } from 'react-router-dom';
import { setMovieDetails, selectMovieDetails } from "../features/movies/movieDetailsSlice";

function Details() {
    const { id } = useParams();
    const movie = useSelector(selectMovieDetails);
    const dispatch = useDispatch();
    const BASE_URL = "https://image.tmdb.org/t/p/original/";
    const YOUTUBE_BASE_URL = "https://www.youtube.com/watch?v=";
    console.log(movie)
    const [loading, setLoading] = useState(true);
    const [showVideo, setShowVideo] = useState(false);

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&append_to_response=videos`)
            .then(response => response.json())
            .then((data) => {
                let movieDetails = data;
                dispatch(setMovieDetails(movieDetails));
                console.log(movieDetails);
                setLoading(false);
            })
            .catch((error) => {
                console.error(error);
                setLoading(true);
        });
    }, []);

    if (loading) {
        return <div></div>;
    } 

    return (
        <Container>
                <Background>
                    <img src={BASE_URL + movie.backdrop_path} alt="" />
                </Background>
                <Title>
                    {movie.title}
                </Title>
                <Controls>
                    <PlayButton>
                        <img src="/images/play-icon-black.png" alt="Play" />
                        <span>Play</span>
                    </PlayButton>
                    <TrailerButton onClick={() => setShowVideo(true)}>
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
                    {movie.release_date.split('-')[0]} • {Math.floor(movie.runtime / 60)}h {movie.runtime % 60}m • {movie.genres.map((genre => genre.name + " "))}
                </SubTitle>
                <Description>
                    {movie.overview}
                </Description>
                {showVideo &&
                    <VideoContainer>
                        <XButton onClick={() => setShowVideo(false)}>
                            <span>X</span>
                        </XButton>
                        <ReactPlayer 
                            url={YOUTUBE_BASE_URL + movie.videos.results.find((video) => video.type === "Trailer").key} 
                            style={{ position: 'absolute', padding: '150px 200px', right: '0', top: '0' }}
                            width="100%"
                            height="100%"
                        />
                    </VideoContainer>
                }
        </Container>
    )
}

export default Details

const Container = styled.main`
    min-height: calc(100vh - 70px);
    padding: 0 calc(3.5vw + 5px);
    position: relative;
`

const VideoContainer = styled.div`
    display: flex;
`

const Title = styled.h1`
    margin-top: 0px;
    padding-top: 20vh;
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

const XButton = styled(AddButton)`
    position: absolute;
    margin-top: 100px;
    margin-right: 150px;
    top: 0;
    right: 0;
    z-index: 2;
    transition: all 200ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

    span {
        font-size: 20px;
    }

    &:hover {
        transform: scale(1.05);
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