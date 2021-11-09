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
                <img src={logo} alt="" className='logo' />
            </div>

            <div className="shape">
                <img src={shape} alt="" className='redshape' />
            </div>

            <div className="picture" data-aos="fade-down">
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
background:url(${background});
// background-color:pink;
width:100%;
height:90vh;
margin-bottom:50em
position:relative;



@media screen and (min-width:481px) and (max-width:768px) {
    height:50vh;
}

@media (max-width: 320px) {
    height:150vh;
}

@media screen and (min-width:321px) and (max-width:375px) {
    height:120vh;
    // background-color:green;
}

@media screen and (min-width:376px) and (max-width:414px) {
    height:130vh;
}

@media screen and (min-width:415px) and (max-width:425px) {
    height:130vh;
}

@media screen and (min-width:426px) and (max-width:480px) {
    height:130vh;
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
    margin-top:-9em;

    @media (max-width: 320px) {
        height:10rem;
        width:10rem;
        margin-left:9.9em;
        margin-top:-4em;
        // margin-top:15em;

        img{
            height:100%;
            width:100%
        }
    }

    @media screen and (min-width:321px) and (max-width:375px) {
        height:12rem;
        width:12rem;
        margin-left:11.4em;
        margin-top:-3em;

        img{
            height:100%;
            width:100%
        }
    }


    @media screen and (min-width:376px) and (max-width:414px) {
        height:12rem;
        width:12rem;
        margin-left:13.97em;
        margin-top:-4em;

        img{
            height:100%;
            width:100%
        }
    }

    @media screen and (min-width:426px) and (max-width:480px) {
        height:10rem;
        width:10rem;
        margin-left:19.47em;
        // margin-top:15em;

        img{
            height:100%;
            width:100%
        }
    }

    @media screen and (min-width:415px) and (max-width:425px) {
        height:14rem;
        width:14rem;
        margin-left:12.47em;
        margin-top:-9em;
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
    margin-left:38em;
    margin-top:-2em;
    height:40em;
    width:50em;

    img{
        height:100%;
        width:100%
    }


    @media (max-width: 320px) {
        height:23em;
        max-width:30em;
        background-color:golden;
        margin-left:-9.8em;
        margin-top:20em;

        img{
            height:100%;
            width:100%
        }
    }
    
    @media screen and (min-width:321px) and (max-width:375px) {
        height:25em;
        width:32em;
        background-color:golden;
        margin-left:-9.5em;
        margin-top:20em;
        

        img{
            height:100%;
            width:100%
        }
    }

    @media screen and (min-width:376px) and (max-width:414px) {
        height:25em;
        width:32em;
        background-color:golden;
        margin-left:-6em;
        margin-top:20em;

        img{
            height:100%;
            width:100%
        }
    }

    @media screen and (min-width:415px) and (max-width:425px) {
        height:25em;
        width:32em;
        background-color:golden;
        margin-left:-6em;
        margin-top:25em;

        img{
            height:100%;
            width:100%
        }
    }

    @media screen and (min-width:426px) and (max-width:480px) {
        height:25em;
        width:32em;
        background-color:golden;
        margin-left:-6em;
        margin-top:25em;

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
    margin-left:3.3rem;

    @media (max-width: 320px) {
        margin-left:.5rem;
        height:4rem;
        width:3rem;
    }

    @media screen and (min-width:321px) and (max-width:375px) {
        margin-left:.7rem;
        height:3rem;
        width:2.3rem;       
    }


    @media screen and (min-width:376px) and (max-width:414px) {
        margin-left:.7rem;
        height:4rem;
        width:3rem;
    }

    @media screen and (min-width:415px) and (max-width:480px) {
        margin-left:1.2rem;
        margin-top:-.1rem;
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
    @media (max-width: 320px) {
        max-width:100%;
    }
    @media screen and (min-width:321px) and (max-width:375px) {
        max-width:100%;
        // display:none;
    }
    @media screen and (min-width:376px) and (max-width:414px) {
        max-width:100%;
    }
    @media screen and (min-width:416px) and (max-width:480px) {
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
            

            @media (max-width: 320px) {
                font-size:20px;
                font-family: 'Montserrat', sans-serif;
                font-weight:800;
                line-height:24.4px;
                width:18rem;
                height:auto;
                margin-left:1rem;
                margin-top:0rem;
            }

            @media screen and (min-width:321px) and (max-width:375px) {
                font-size:22px;
                font-family: 'Montserrat', sans-serif;
                font-weight:800;
                line-height:24.4px;
                width:18rem;
                height:auto;
                margin-left:1.5rem;
                margin-top:2rem;
            }

            @media screen and (min-width:376px) and (max-width:414px) {
                font-size:22px;
                font-family: 'Montserrat', sans-serif;
                font-weight:800;
                line-height:24.4px;
                // color:rgba(205, 42, 68, 1);
                width:20rem;
                height:auto;
                margin-left:1.5rem;
                margin-top:0rem;
            }

            @media screen and (min-width:415px) and (max-width:425px) {
                font-size:22px;
                font-family: 'Montserrat', sans-serif;
                font-weight:800;
                line-height:24.4px;
                // color:rgba(205, 42, 68, 1);
                width:20rem;
                height:auto;
                margin-left:2.5rem;
                margin-top:0rem;
                
            }

            @media screen and (min-width:426px) and (max-width:480px) {
                font-size:22px;
                font-family: 'Montserrat', sans-serif;
                font-weight:800;
                line-height:24.4px;
                // color:rgba(205, 42, 68, 1);
                width:28rem;
                height:auto;
                margin-left:2.5rem;
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
            // background-color:green;
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
            @media screen and (min-width:415px) and (max-width:425px) {
                margin-left:2.5rem;
                font-weight: 500;
                font-size: 18px;
                line-height: 138%;
            }
            @media screen and (min-width:376px) and (max-width:414px) {
                margin-left:1.5rem;
                font-weight: 500;
                font-size: 18px;
                line-height: 138%;
            }
            @media screen and (min-width:321px) and (max-width:375px) {
                margin-left:1.5rem;
                font-weight: 500;
                font-size: 18px;
                line-height: 138%;
            }
            @media (max-width: 320px) {
                margin-left:1rem;
                font-weight: 500;
                font-size: 18px;
                line-height: 138%;
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

                @media (max-width: 320px) {
                    max-width:11em;
                    font-size:18px;
                    height:3.5em;
                    margin:auto;
                    margin-top:-6em;
                    margin-bottom:0em;
                }

                @media screen and (min-width:321px) and (max-width:375px) {
                    max-width:11em;
                    font-size:18px;
                    height:3.5em;
                    margin:auto;
                    margin-top:-12em;
                    margin-bottom:0em;
                }
                @media screen and (min-width:376px) and (max-width:414px) {
                    max-width:11em;
                    font-size:18px;
                    height:3.5em;
                    margin:auto;
                    margin-top:-6em;
                    margin-bottom:4em;
                }
                @media screen and (min-width:415px) and (max-width:480px) {
                    max-width:10em;
                    font-size:18px;
                    height:4.5em;
                    margin:auto;
                    margin-top:-3em;
                    margin-bottom:4em;
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

