import React from 'react'
import logo from "../assets/logo.png"
import shape from '../assets/backgroundshape.png'
import background from '../assets/rec.png'
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
height:90vh;
margin-bottom:50em
position:relative;



@media screen and (min-width:481px) and (max-width:768px) {
    height:50vh;
}

@media screen and (min-width:769px) and (max-width:1024px) {
    height:80vh;
}

@media screen and (min-width:1025px) and (max-width:1200px) {}

@media screen and (min-width:1441px) {
    height:100vh;
    background-repeat:no-repeat;
}

.shape{
    position:absolute;
    z-index:-10;
    margin-left:38em;
    margin-top:-9em;

    @media (max-width: 320px) {
        height:10rem;
        width:10rem;
        margin-left:10rem;
        // margin-top:15em;

        img{
            height:100%;
            width:100%
        }
    }

    @media screen and (min-width:321px) and (max-width:414px) {
        height:10rem;
        width:10rem;
        margin-left:15.97em;
        // margin-top:15em;

        img{
            height:100%;
            width:100%
        }
    }

    @media screen and (min-width:415px) and (max-width:480px) {
        height:10rem;
        width:10rem;
        margin-left:16.47em;
        // margin-top:15em;

        img{
            height:100%;
            width:100%
        }
    }

    @media screen and (min-width:481px) and (max-width:768px) {
        height:20em;
        width:20em;
        margin-left:27.47em;
        // margin-top:15em;

        img{
            height:100%;
            width:100%
        }
    }

    @media screen and (min-width:769px) and (max-width:1024px) {
        height:25em;
        width:25em;
        margin-left:38.47em;
        // margin-top:15em;

        img{
            height:100%;
            width:100%
        }
    }

    @media screen and (min-width:1025px) and (max-width:1200px) {
        height:28em;
        width:28em;
        margin-left:47em;
        // margin-top:15em;

        img{
            height:100%;
            width:100%
        }
    }


    @media screen and (min-width:1441px) {
        height:38em;
        width:38em;
        margin-left:81em;
        // margin-top:15em;

        img{
            height:100%;
            width:100%
        }
    }
    
}

.picture{
    position:absolute;
    margin-left:38em;
    margin-top:-2em;
    height:40em;
    width:50em;

    img{
        height:100%;
        width:100%
    }


    @media (max-width: 320px) {
        height:12em;
        width:16em;
        background-color:golden;
        margin-left:.6em;
        margin-top:20em;

        img{
            height:100%;
            width:100%
        }
    }
    
    
    @media screen and (min-width:321px) and (max-width:480px) {
        height:15em;
        width:19em;
        background-color:golden;
        margin-left:.6em;
        margin-top:20em;

        img{
            height:100%;
            width:100%
        }
    }

    @media screen and (min-width:481px) and (max-width:768px) {
        height:15em;
        width:20em;
        background-color:golden;
        margin-left:28em;
        margin-top:-3em;

        img{
            height:100%;
            width:100%
        }
    }

    @media screen and (min-width:769px) and (max-width:1024px) {
        height:25em;
        width:28em;
        background-color:golden;
        margin-left:35em;
        margin-top:-3em;

        img{
            height:100%;
            width:100%
        }
    }

    @media screen and (min-width:1025px) and (max-width:1200px) {
        height:27em;
        width:32em;
        background-color:golden;
        margin-left:43em;
        margin-top:-3em;

        img{
            height:100%;
            width:100%
        }
    }

    @media screen and (min-width:1201px) and (max-width:1440px) {}

    @media screen and (min-width:1441px) {
        // height:38em;
        // width:38em;
        margin-left:67em;
        // margin-top:15em;

        img{
            height:100%;
            width:100%
        }
    }
    
}

.logo{
    margin-left:2em;

    @media (max-width: 320px) {
        margin-left:.5rem;
    }

    @media screen and (min-width:321px) and (max-width:414px) {
        margin-left:.5rem;
    }

    @media screen and (min-width:415px) and (max-width:480px) {
        margin-left:.5rem;
    }
}

.container{
    width:80em;
    display:flex;
    @media (max-width: 480px) {
        max-width:100%;
    }
    @media screen and (min-width:481px) and (max-width:768px) {
        max-width:100%;
    }

    @media screen and (min-width:769px) and (max-width:1024px) {
        max-width:100%;
    }

    @media screen and (min-width:1025px) and (max-width:1200px) {
        max-width:100%;
    }

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

            @media (max-width: 320px) {
                font-size:20px;
                font-family: 'Montserrat', sans-serif;
                font-weight:800;
                line-height:24.4px;
                color:rgba(205, 42, 68, 1);
                width:18rem;
                height:auto;
                margin-left:1rem;
            }


            @media screen and (min-width:321px) and (max-width:414px) {
                font-size:20px;
                font-family: 'Montserrat', sans-serif;
                font-weight:800;
                line-height:24.4px;
                color:rgba(205, 42, 68, 1);
                width:24rem;
                height:auto;
                margin-left:1rem;
            }

            @media screen and (min-width:415px) and (max-width:480px) {
                font-size:20px;
                font-family: 'Montserrat', sans-serif;
                font-weight:800;
                line-height:24.4px;
                color:rgba(205, 42, 68, 1);
                width:24rem;
                height:auto;
                margin-left:1rem;
            }

            @media screen and (min-width:481px) and (max-width:768px) {
                font-size:22px;
                font-family: 'Montserrat', sans-serif;
                font-weight:800;
                line-height:24.4px;
                color:rgba(205, 42, 68, 1);
                width:22em;
                height:auto;
                margin-left:1em;
            }

            @media screen and (min-width:769px) and (max-width:1024px) {
                font-size:25px;
                font-family: 'Montserrat', sans-serif;
                font-weight:800;
                line-height:24.4px;
                color:rgba(205, 42, 68, 1);
                width:28em;
                height:auto;
                margin-left:1em;
            }
        
            @media screen and (min-width:1025px) and (max-width:1200px) {
                font-size:28px;
                font-family: 'Montserrat', sans-serif;
                font-weight:800;
                line-height:44.4px;
                color:rgba(205, 42, 68, 1);
                width:30em;
                height:auto;
                margin-left:1em;
            }
        
            @media screen and (min-width:1441px) { 
            font-size:50px;
            font-family: 'Montserrat', sans-serif;
            font-weight:800;
            line-height:64.2px;
            color:rgba(205, 42, 68, 1);
            width:20em;
            margin-left:2em;
            }
        }

        p{
            font-size:24px;
            font-family: 'Montserrat', sans-serif;
            font-weight:500;
            line-height:33.12px;
            color:rgba(10, 18, 42, 1);
            width: 28em;
            margin-left:3.2em;

            @media (max-width: 320px) {
                font-size:15px;
                font-family: 'Montserrat', sans-serif;
                line-height:21.83px;
                width:16rem;
                height:auto;
                margin-left:2em;
            }

            @media screen and (min-width:321px) and (max-width:414px) {
                font-size:15px;
                font-family: 'Montserrat', sans-serif;
                line-height:21.83px;
                width:24rem;
                height:auto;
                margin-left:1rem;
            }

            @media screen and (min-width:415px) and (max-width:480px) {
                font-size:15px;
                font-family: 'Montserrat', sans-serif;
                line-height:21.83px;
                width:24rem;
                height:auto;
                margin-left:1rem;
            }

            @media screen and (min-width:481px) and (max-width:768px) {
                font-size:18px;
                font-family: 'Montserrat', sans-serif;
                font-weight:500;
                line-height:24.4px;
                width:24em;
                height:auto;
                margin-left:1em;
            }

            @media screen and (min-width:769px) and (max-width:1024px) {
                font-size:20px;
                font-family: 'Montserrat', sans-serif;
                font-weight:500;
                line-height:24.4px;
                width:32em;
                height:auto;
                margin-left:1em;
            }
        
            @media screen and (min-width:1025px) and (max-width:1200px) {
                font-size:24px;
                font-family: 'Montserrat', sans-serif;
                font-weight:500;
                line-height:28.4px;
                width:33em;
                height:auto;
                margin-left:1em;
            }
        
            @media screen and (min-width:1441px) { 
                font-size:34px;
                line-height:38.4px;
            }
            
        }
    }
    .right{
        // background-color:yellow;
    }
}

`

