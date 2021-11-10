import {useEffect} from 'react'
import logo from "../assets/logo.png"
import shape from '../assets/backgroundshape.png'
import background from '../assets/rec.png'
import book from '../assets/book1.png'
import styled from 'styled-components'
import Aos from 'aos';
import "aos/dist/aos.css"

const SectionOne = () => {
    useEffect(()=>{
        Aos.init({duration : 2000})
    },[])
    return (
        <Styledone>
            <div className="logo">
                <img src={logo} alt="" className='log' />
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
                        Be among the first <span id='red'>500 people</span>  to pre-order this book and get <span id='red'>60% off</span>.
                    </h1>

                    <div className="pay">
                        <p>Pay <span className='Two'>₦2,000</span>  instead of <strike>₦5000</strike> </p>
                    </div>

                    <div class="stage">
                    <button className='box bounce-7'><a href="#reg">Pre-order Now</a> </button>
                    </div>
                </div>
            </div>
        </Styledone>
    )
}

export default SectionOne

const Styledone = styled.section`
background:url(${background}) no-repeat center center;
-webkit-background-size: cover;
-moz-background-size: cover;
-o-background-size: cover;
background-size: cover;
width:100%;
height:90vh;
margin-bottom:50em
position:relative;



@media screen and (min-width:481px) and (max-width:768px) {
    height:50vh;
}

@media (max-width: 480px) {
    height:150vh;
}


@media screen and (min-width:769px) and (max-width:1024px) {
    height:100vh;
}

@media screen and (min-width:1025px) and (max-width:1280px) {
    height:120vh;
}

@media screen and (min-width:1440px) {
    height:120vh;
    background-repeat:no-repeat;
}

.shape{
    position:absolute;
    z-index:-10;
    margin-left:38em;
    margin-top:-10em;

    @media screen and (max-width: 480px) {
        height:14rem;
        max-width:19rem;
        margin-left:8rem;
        margin-top:-7.5rem;
        // margin-top:15em;

        img{
            height:100%;
            width:100%
        }
    }



    @media screen and (min-width:481px) and (max-width:768px) {
        height:20em;
        width:20em;
        margin-left:28.47em;
        // margin-top:15em;

        img{
            height:100%;
            width:100%
        }
    }

    @media screen and (min-width:769px) and (max-width:1024px) {
        height:25em;
        width:25em;
        margin-left:39em;
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
    height:40rem;
    width:50rem;
    margin-left:38rem;
    // background-color:red;

    img{
        height:100%;
        width:100%
        object-fit:cover;
    }

    @media screen and (max-width:320px) {
        width:22rem;
        height:20rem;
        margin-left:-12%;
        margin-top:25.2rem;

        img{
            height:100%;
            width:100%
        }
    }
 

    @media screen and (max-width:480px) {
        max-width:25rem;
        height:22rem;
        margin-left:-12%;
        margin-top:25.2rem;

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
        margin-left:67em;

        img{
            height:100%;
            width:100%
        }
    }
    
}

.logo{
    margin-left:3.3rem;
    padding-top:2rem;
    height:7.87rem;
    width:5.6rem;
    img{
        height:100%;
        width:100%;
        object-fit:cover;
    }

    @media (max-width: 480px) {
        margin-left:2rem;
        height:98px;
        width:69px;
        padding-top:1rem;

        img{
            height:100%;
            width:100%;
            object-fit:cover;
        }
        
    }

    @media screen and (min-width:481px) and (max-width:768px) {
        margin-left:1rem;
    }
    @media screen and (min-width:769px) and (max-width:1024px) {
        margin-left:1.4rem;
    }
    @media screen and (min-width:1025px) and (max-width:1200px) {
        margin-left:1.5rem;
    }
    @media screen and (min-width:1441px){
        margin-left:1.5rem;
    }
}

.container{
    width:100%;
    @media (max-width: 480px) {
        max-width:100%;
        margin-top:4.5rem;
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
            font-size:35px;
            font-family: 'Montserrat', sans-serif;
            font-weight:800;
            line-height:44.2px;
            color:#282828;
            width:20em;
            margin-left:6.3rem;
            margin-top:10.3rem;

            #red{
                color:rgba(205, 42, 68, 1);
            }
            

            @media (max-width: 480px) {
                font-size:20px;
                font-family: 'Montserrat', sans-serif;
                font-weight:800;
                line-height:32.4px;
                width:18rem;
                height:auto;
                margin-left:2rem;
                margin-top:0rem;
            }

            @media screen and (min-width:481px) and (max-width:768px) {
                font-size:22px;
                font-family: 'Montserrat', sans-serif;
                font-weight:800;
                line-height:24.4px;
                width:22em;
                height:auto;
                margin-left:2.5rem;
                margin-top:2rem;
            }

            @media screen and (min-width:769px) and (max-width:1024px) {
                font-size:25px;
                font-family: 'Montserrat', sans-serif;
                font-weight:800;
                line-height:44.4px;
                width:25em;
                height:auto;
                margin-left:2.5rem;
                margin-top:3.3rem;
            }
        
            @media screen and (min-width:1025px) and (max-width:1200px) {
                font-size:28px;
                font-family: 'Montserrat', sans-serif;
                font-weight:800;
                line-height:44.4px;
                margin-top:3.3rem;
                width:30em;
                height:auto;
                margin-left:2.5rem;
            }
        
            @media screen and (min-width:1441px) { 
            font-size:50px;
            font-family: 'Montserrat', sans-serif;
            font-weight:800;
            line-height:64.2px;
            width:20em;
            margin-left:1em;
            }
        }

        .pay{
            margin-left:6.3rem;
            max-width:50rem;
            font-family: Montserrat;
            font-style: normal;
            font-weight:500;
            font-size: 30px;
            line-height: 138%;
            color: black;
            margin-bottom:86px;

            .Two{
                background-color:#ffe8ec;
                color:rgba(205, 42, 68, 1);
                font-weight:800;
            }
            @media screen and (min-width:1441px){
                margin-left:2.7rem;
            }
            @media screen and (min-width:1025px) and (max-width:1200px) {
                margin-left:2.5rem;
            }
            @media screen and (min-width:769px) and (max-width:1024px) {
                margin-left:2.5rem;
            }
            @media screen and (min-width:481px) and (max-width:768px) {
                margin-left:2.5rem;
                font-size: 18px;
            }

            @media (max-width: 480px) {
                margin-left:2rem;
                font-weight: 500;
                font-size: 18px;
                line-height: 35px;
            }
        }

    .stage{
        display: flex;
        height: 220px;
        width: 100%;

        @media screen and (min-width:481px) and (max-width:768px) {
            height: 120px;
        }

        @media (max-width: 320px) {
            height: 120px;
        }

            .box{
                align-self: center;
                animation-duration: 2s;
                animation-iteration-count: infinite;
                transform-origin: bottom;
                height:3em;
                width:19rem;
                margin-left:4.7em;
                margin-top:-8em;
                margin-bottom:2em;
                border-radius:5px;
                border:none;
                background-color:rgba(205, 42, 68, 1);
                font-size:20px;
                line-height:21.2px;
                font-family: 'Montserrat', sans-serif;
                font-weight:600;
                // cursor:pointer;

                a{
                    color:rgba(255, 255, 255, 1);
                    text-decoration:none;
                }

                @media screen and (min-width:481px) and (max-width:768px) {
                    width:10em;
                    font-size:16px;
                    height:2.5em;
                    margin-left:2em;
                    margin-top:-8em;
                }

                @media (max-width: 480px) {
                    max-width:11em;
                    font-size:18px;
                    height:3.5em;
                    margin-left:2rem;
                    margin-top:-12rem;
                    margin-bottom:0em;
                }
                @media screen and (min-width:769px) and (max-width:1024px) {
                    margin-left:2.5rem;
                }
                @media screen and (min-width:1025px) and (max-width:1200px) {
                    margin-left:2.5rem;
                }
                @media (min-width: 1441px) {
                    margin-left:3.2rem;
                    margin-top:1em;
                }
                
            }
            .bounce-7 {
                animation-name: bounce-7;
                animation-timing-function: cubic-bezier(1.280, 1.840, 1.420, 1);

                @keyframes bounce-7 {
                    0%   { transform: scale(1,1)      translateY(0); }
                    10%  { transform: scale(1.1,.9)   translateY(0); }
                    30%  { transform: scale(.9,1.1)   translateY(-10px); }
                    50%  { transform: scale(1.05,.95) translateY(0); }
                    57%  { transform: scale(1,1)      translateY(-7px); }
                    64%  { transform: scale(1,1)      translateY(0); }
                    100% { transform: scale(1,1)      translateY(0); }
                }
            }
        }
        
    .right{
        // background-color:yellow;
    }
}

`

