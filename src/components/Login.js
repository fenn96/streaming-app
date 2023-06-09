import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { signInWithPopup } from 'firebase/auth';
import { auth, provider } from '../firebase';
import { useNavigate } from 'react-router-dom';
import { setUserLogin, selectUserName } from "../features/user/userSlice"

function Login() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const name = useSelector(selectUserName);

    useEffect(() => {

    })

    const handleClick = () => {
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


    return (
        <Container>
            <CTA>
                <CTALogoOne src="/images/cta-logo-one.svg" />
                <SignUp onClick={handleClick}>GET IT ALL HERE</SignUp>
                <Description>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi sunt laboriosam sit officia ratione animi! Perspiciatis numquam natus quod sapiente nesciunt perferendis dolorem, necessitatibus officiis fuga ad minima, hic error?</Description>
                <CTALogoTwo src="/images/cta-logo-two.png" />
            </CTA>
        </Container>
    )
}

export default Login

const Container = styled.main`
    position: relative;
    height: calc(100vh - 70px);
    display: flex;
    align-items: top;
    justify-content: center;
    
    &:before {
        position: absolute;
        background-position: top;
        background-size: cover;
        background-repeat: no-repeat;
        content: "";
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        opacity: 0.7;
        z-index: -1;
        background-image: url("/images/login-background.jpg");
    }
`

const CTA = styled.div`
    max-width: 650px;
    padding: 80px 40px;
    width: 90%;
    display: flex;
    flex-direction: column;
    margin-top: 100px;
    align-items: center;

`

const CTALogoOne = styled.img`

`

const CTALogoTwo = styled.img`
    width: 90%;
`

const SignUp = styled.a`
    width: 100%;
    background-color: #0063e5;
    font-weight: bold;
    padding: 17px 0;
    color: #f9f9f9;
    border-radius: 4px;
    text-align: center;
    font-size: 18px;
    cursor: pointer;
    transition: all 250ms;
    letter-spacing: 1.5px;
    margin-top: 8px;
    margin-bottom: 12px;
    
    &:hover {
        background-color: #0483ee;
    }

`

const Description = styled.p`
    font-size: 11px;
    letter-spacing: 1.5px;
    text-align: center;
    line-height: 1.5;
`
