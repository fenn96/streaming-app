import React from 'react'
import styled from 'styled-components'

function Viewers() {
    return (
        <Container>
            <Wrap>
                <img src="/images/viewers-disney.png" alt="Disney" />
                <video autoPlay loop playsInline muted>
                    <source src="/videos/disney.mp4" />
                </video>
            </Wrap>
            <Wrap>
                <img src="/images/viewers-pixar.png" alt="Pixar" />
                <video autoPlay loop playsInline muted>
                    <source src="/videos/pixar.mp4" />
                </video>
            </Wrap>
            <Wrap>
                <img src="/images/viewers-marvel.png" alt="Marvel" />
                <video autoPlay loop playsInline muted>
                    <source src="/videos/marvel.mp4" />
                </video>
            </Wrap>
            <Wrap>
                <img src="/images/viewers-starwars.png" alt="Star Wars" />
                <video autoPlay loop playsInline muted>
                    <source src="/videos/star-wars.mp4" />
                </video>
            </Wrap>
            <Wrap>
                <img src="/images/viewers-national.png" alt="National Geographic" />
                <video autoPlay loop playsInline muted>
                    <source src="/videos/national-geographic.mp4" />
                </video>
            </Wrap>
        </Container>
    )
}

export default Viewers

const Container = styled.div`
    margin-top: 30px;
    display: grid;
    padding: 30px 0px 26px;
    grid-gap: 25px;
    grid-template-columns: repeat(5, minmax(0, 1fr));

`

const Wrap = styled.div`
    border-radius: 10px;
    cursor: pointer;
    border: 3px solid rgba(249, 249, 249, 0.1);
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
        rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
    position: relative;
    z-index: 0;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        position: absolute;
        z-index: 1;
    }

    video {
        position: relative;
        width: 100%;
        height: 100%;
        z-index: -1;
        object-fit: fill;
        visibility: hidden;
        border-radius: 6px;
    }

    &:hover {
        box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
            rgb(0 0 0 / 72%) 0px 30px 22px -10px;
        transform: scale(1.05);
        border-color: rgba(249, 249, 249, 0.8);

        video {
            visibility: visible;
        }
    }
`