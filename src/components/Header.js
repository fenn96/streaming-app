import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components'
import { auth, provider } from '../firebase';
import { signOut, signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { selectUserName, selectUserPhoto, setUserLogin, setSignOut } from "../features/user/userSlice"

function Header() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const name = useSelector(selectUserName);
    const photo = useSelector(selectUserPhoto);

    const handleSignIn = () => {
        signInWithPopup(auth, provider).then((data) => {
            let user = data.user
            dispatch(setUserLogin({
                name: user.displayName,
                email: user.email,
                photo: user.photoURL
            }))
            navigate("/")
            console.log(user)
        })
        .catch((error) => {
            console.log(error)
        })
    }

    const handleSignOut = () => {
        signOut(auth).then((data) => {
            dispatch(setSignOut(data))
            navigate("/login")
        })
        .catch((error) => {
            console.log(error)
        })
    }

    useEffect(() => {
        auth.onAuthStateChanged((user) => {
          if (user) {
            dispatch(setUserLogin({
              name: user.displayName,
              email: user.email,
              photo: user.photoURL
            }))
          } 
        })
      })

    return (
        <Nav>
            <Logo src="/images/logo.svg" />
            { !name ? (
                <LoginContainer>
                    <LoginBtn onClick={handleSignIn}>LOGIN</LoginBtn>
                </LoginContainer>
            ): 
                <>
                    <NavMenu>
                        <a href="/">
                            <img src="/images/home-icon.svg" alt="Home" />
                            <span>HOME</span>
                        </a>
                        <a href="/">
                            <img src="/images/search-icon.svg" alt="Search" />
                            <span>SEARCH</span>
                        </a>
                        <a href="/">
                            <img src="/images/watchlist-icon.svg" alt="Watch List" />
                            <span>WATCH LIST</span>
                        </a>
                        <a href="/">
                            <img src="/images/original-icon.svg" alt="Originals" />
                            <span>ORIGINALS</span>
                        </a>
                        <a href="/">
                            <img src="/images/movie-icon.svg" alt="Movies" />
                            <span>MOVIES</span>
                        </a>
                    </NavMenu>
                    <UserImg onClick={handleSignOut} src={photo} referrerPolicy='no-referrer' />
                </>
            }
        </Nav>
    )
}

export default Header

const Nav = styled.div`
    height: 70px;
    background: #090b13;
    display: flex;
    align-items: center;
    padding: 0 36px;
    overflow-x: hidden;
`

const Logo = styled.img`
    width: 80px;
    background: #090b13;
`

const NavMenu = styled.div`
    display: flex;
    flex: 1;
    margin-left: 25px;
    align-items: center;
    
    a {
        display: flex;
        text-decoration: none;
        color: white;
        align-items: center;
        padding: 0 12px;
        cursor: pointer;

        img {
            height: 20px;
        }

        span {
            font-size: 13px;
            letter-spacing: 1.42px;
            position: relative;

            &:after {
                content: "";
                height: 2px;
                background: white;
                position: absolute;
                left: 0;
                right: 0;
                bottom: -6px;
                opacity: 0;
                transform-origin: left center;
                transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
                transform: scaleX(0);
            }
        }

        &:hover {
            span:after {
                opacity: 1;
                transform: scaleX(1);
            }
        }
    }

    @media screen and (max-width: 768px) {
        visibility: hidden;
    }
`

const UserImg = styled.img`
    width: 48px;
    height: 48px;
    border-radius: 50%;
    cursor: pointer;
`

const LoginContainer = styled.div`
    display: flex;
    flex: 1;
    justify-content: flex-end;
`

const LoginBtn = styled.div`
    border: 1px solid #f9f9f9;
    padding: 8px 16px;
    border-radius: 4px;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    background-color: rgba(0, 0, 0, 0.6);
    transition: all 0.2s ease 0s;
    cursor: pointer;

    &:hover {
        background-color: #f9f9f9;
        color: #000;
        border-color: transparent;
    }
`