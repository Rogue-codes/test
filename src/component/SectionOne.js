import React from 'react'
import logo from "../assets/logo.png"
import shape from '../assets/backgroundshape.png'
import background from '../assets/background.png'
import book from '../assets/book1.png'
import styled from 'styled-components'

const SectionOne = () => {
    return (
        <Styledone>
            <div className="logo">
                <img src={logo} alt="" className='logo' />
            </div>

            <div className="shape">
                <img src={shape} alt="" className='redshape' />
            </div>

            <div className="picture">
                <img src={book} alt="" />
            </div>

            <div className="container">
                <div className="left">
                    <h1>
                        In this book, you will discover the most important insights you need to become a 
                        "bloody millionaire" in the tech industry.
                    </h1>

                    <p>
                        If you follow the instructions in this book consistently for 3 - 6 months, 
                        you will fast track your career growth in tech, increase your value, and make 
                        more money.
                    </p>
                </div>
            </div>
        </Styledone>
    )
}

export default SectionOne

const Styledone = styled.section`
background:url(${background});
// background-color:pink;
width:100%;
height:100vh;
position:relative;

@media (max-width: 480px) {}

@media screen and (min-width:481px) and (max-width:768px) {}

@media screen and (min-width:769px) and (max-width:1024px) {}

@media screen and (min-width:1025px) and (max-width:1200px) {}

@media screen and (min-width:1201px) and (max-width:1440px) {}

.shape{
    position:absolute;
    z-index:-10;
    margin-left:38em;
    margin-top:-9em;

    @media (max-width: 480px) {
        height:10em;
        width:10em;
        margin-left:13.47em;
        // margin-top:15em;

        img{
            height:100%;
            width:100%
        }
    }

    @media screen and (min-width:481px) and (max-width:768px) {}

    @media screen and (min-width:769px) and (max-width:1024px) {}

    @media screen and (min-width:1025px) and (max-width:1200px) {}

    @media screen and (min-width:1201px) and (max-width:1440px) {}
    
}

.picture{
    position:absolute;
    margin-left:38em;
    margin-top:-2em;

    @media (max-width: 480px) {
        height:15em;
        width:20em;
        background-color:golden;
        margin-left:.8em;
        margin-top:20em;

        img{
            height:100%;
            width:100%
        }
    }

    @media screen and (min-width:481px) and (max-width:768px) {}

    @media screen and (min-width:769px) and (max-width:1024px) {}

    @media screen and (min-width:1025px) and (max-width:1200px) {}

    @media screen and (min-width:1201px) and (max-width:1440px) {}
    
}

.logo{
    margin-left:2em;
}

.container{
    width:80em;
    display:flex;
    @media (max-width: 480px) {
        max-width:100%;
    }
    @media screen and (min-width:481px) and (max-width:768px) {}

    @media screen and (min-width:769px) and (max-width:1024px) {}

    @media screen and (min-width:1025px) and (max-width:1200px) {}

    @media screen and (min-width:1201px) and (max-width:1440px) {}

    .left{
        // background-color:green;

        h1{
            font-size:40px;
            font-family: 'Montserrat', sans-serif;
            font-weight:800;
            line-height:44.2px;
            color:rgba(205, 42, 68, 1);
            width:18em;
            margin-left:2em;
            @media (max-width: 480px) {
                font-size:20px;
                font-family: 'Montserrat', sans-serif;
                font-weight:800;
                line-height:24.4px;
                color:rgba(205, 42, 68, 1);
                width:16em;
                height:auto;
                margin-left:1em;
            }
            @media screen and (min-width:481px) and (max-width:768px) {}

            @media screen and (min-width:769px) and (max-width:1024px) {}
        
            @media screen and (min-width:1025px) and (max-width:1200px) {}
        
            @media screen and (min-width:1201px) and (max-width:1440px) {}
        }

        p{
            font-size:24px;
            font-family: 'Montserrat', sans-serif;
            font-weight:500;
            line-height:33.12px;
            color:rgba(10, 18, 42, 1);
            width: 28em;
            margin-left:3.2em;

            @media (max-width: 480px) {
                font-size:15px;
                font-family: 'Montserrat', sans-serif;
                line-height:21.83px;
                width:19em;
                height:auto;
                margin-left:2em;
            }
            @media screen and (min-width:481px) and (max-width:768px) {}

            @media screen and (min-width:769px) and (max-width:1024px) {}
        
            @media screen and (min-width:1025px) and (max-width:1200px) {}
        
            @media screen and (min-width:1201px) and (max-width:1440px) {}
            
        }
    }
    .right{
        // background-color:yellow;
    }
}

`

