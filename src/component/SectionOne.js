import {useEffect, useRef, useState} from 'react'
import logo from "../assets/logo.png"
import shape from '../assets/backgroundshape.png'
import background from '../assets/rec.png'
import book from '../assets/book1.png'
import styled from 'styled-components'
import Aos from 'aos';
import "aos/dist/aos.css"

const SectionOne = () => {
    const [hours, setHours] = useState ('00')
    const [mins, setMins] = useState ('00')
    const [secs, setSecs] = useState ('00')

    let interval = useRef()

    const startTimer = () => {
        const countDownTime = new Date('November 5, 2021 00:00:00').getTime()

        interval = setInterval(()=>{
            const now = new Date().getTime()
            const distance = countDownTime - now

            const hrs = Math.floor( (distance % (1000 * 60 * 60 *24)/(1000*60*60)) )
            const min = Math.floor( ((distance % (1000 * 60 * 60)/(1000*60))))
            const sec = Math.floor( (distance % (1000 * 60)) /1000)

            if (distance < 0){
                //end timer
                clearInterval(interval.current)
            }else{
                //update timer
                setHours(hrs)
                setMins(min)
                setSecs(sec)
            }
        }, 1000)

    }

    useEffect(()=>{
        startTimer()
        return () => {
            // clearInterval(interval.current)
        }
    })

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
                        Be among the first 500 people to pre-order this book and get 60% off. Pay N2,000 instead of N5,000
                    </h1>

                    <section>
                        <div className="offer">
                            <p>Offer closes in</p> 
                         </div>
                         <div className="time">
                         <span className='hr'>{hours}</span>
                         <span className='unit'><small>hrs</small></span> 
                         <span className='col'>:</span>
                         <span className='min'>{mins}</span>
                         <span className='unit'><small>mins</small></span> 
                         <span className='col'>:</span>
                         <span className='sec'>{secs}</span>
                         <span className='unit'><small>secs</small></span>
                         </div>
                    </section>
                    <div class="stage">
                    <button className='box bounce-7'>Register here</button>
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
    height:70vh;
}

@media (max-width: 320px) {
    height:150vh;
}

@media screen and (min-width:321px) and (max-width:375px) {
    height:120vh;
}

@media screen and (min-width:321px) and (max-width:414px) {
    height:130vh;
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

    @media screen and (min-width:321px) and (max-width:375px) {
        height:10rem;
        width:10rem;
        margin-left:12.97em;
        // margin-top:15em;

        img{
            height:100%;
            width:100%
        }
    }


    @media screen and (min-width:376px) and (max-width:414px) {
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
        height:23em;
        max-width:30em;
        background-color:golden;
        margin-left:-9.8em;
        margin-top:25em;

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
        margin-top:25em;

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
    margin-left:2em;

    @media (max-width: 320px) {
        margin-left:.5rem;
        height:4rem;
        width:3rem;
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

            @media screen and (min-width:321px) and (max-width:375px) {
                font-size:20px;
                font-family: 'Montserrat', sans-serif;
                font-weight:800;
                line-height:24.4px;
                color:rgba(205, 42, 68, 1);
                width:22rem;
                height:auto;
                margin-left:1rem;
            }

            @media screen and (min-width:376px) and (max-width:414px) {
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

        section{
            display:flex;
            align-items:center;

            @media (max-width: 320px) {
                width: 13em;
                flex-direction:column;
            }

            @media screen and (min-width:321px) and (max-width:414px) {
                width: 13em;
                flex-direction:column;
            }

            .offer{
                
                width: 33em;
                margin-left:2.3em;
                margin-bottom:1rem;

                p{
                    text-align:center;
                }

                @media (max-width: 320px) {
                    width: 1em;
                    // flex-direction:column;
                    margin-left:-14em;
                    // margin:auto;
                    // display:none;
                }

                @media screen and (min-width:321px) and (max-width:375px) {
                    width: 16em;
                padding-bottom:.5rem;
                margin-left:.3em;
                }

                @media screen and (min-width:376px) and (max-width:414px) {
                width: 16em;
                padding-bottom:.5rem;
                margin-left:2.3em;
            }

            }

            .hr{
            font-family: 'Montserrat', sans-serif;
            font-weight:800;
            font-size:44px;
            line-height:33.12px;
            color:rgba(10, 18, 42, 1);
            margin-left:3.2em;

            @media (max-width: 320px) {
                margin-left:5em;
                font-size:22px;
            }

            @media screen and (min-width:321px) and (max-width:414px) {
                margin-left:9em;
                font-size:22px;
            }
            }

            .min{
            font-size:44px;
            font-family: 'Montserrat', sans-serif;
            font-weight:800;
            line-height:33.12px;
            color:rgba(10, 18, 42, 1);
            margin-left:.2em;

            @media (max-width: 320px) {
                // margin-left:.12em;
                font-size:22px;
            }

            @media screen and (min-width:321px) and (max-width:414px) {
                // margin-left:9em;
                font-size:22px;
            }

            }

            .sec{
            font-size:44px;
            font-family: 'Montserrat', sans-serif;
            font-weight:800;
            line-height:33.12px;
            color:rgba(10, 18, 42, 1);
            margin-left:.2em;

            @media (max-width: 320px) {
                // margin-left:.12em;
                font-size:22px;
            }

            @media screen and (min-width:321px) and (max-width:414px) {
                // margin-left:9em;
                font-size:22px;
            }

            }

            .col{
                font-size: 30px;
                font-weight:bolder;
                margin-left:1rem;
                @media screen and (min-width:321px) and (max-width:414px) {
                    margin-left:.2em;
                    font-size: 20px;
                }

                @media (max-width: 320px) {
                    margin-left:.2em;
                    font-size: 20px;
                }
            }

            .unit{
                font-size: 30px;
                font-weight:bolder;
                margin-left:.1rem;

                @media (max-width: 320px) {
                    // margin-left:.12em;
                    font-size:18px;
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
                width:14em;
                margin-left:4em;
                margin-top:2em;
                margin-bottom:2em;
                border-radius:5px;
                border:none;
                background-color:rgba(205, 42, 68, 1);
                color:rgba(255, 255, 255, 1);
                font-size:20px;
                line-height:21.2px;
                font-family: 'Montserrat', sans-serif;
                font-weight:600;
                cursor:pointer;

                @media screen and (min-width:481px) and (max-width:768px) {
                    width:10em;
                    font-size:16px;
                    height:2.5em;
                    margin-left:2em;
                    margin-top:12em;
                }

                @media (max-width: 320px) {
                    max-width:10em;
                    font-size:14px;
                    height:2.5em;
                    margin:auto;
                    margin-top:10em;
                    margin-bottom:10em;
                }

                @media screen and (min-width:321px) and (max-width:414px) {
                    max-width:10em;
                    font-size:14px;
                    height:2.5em;
                    margin:auto;
                    margin-top:5em;
                    margin-bottom:8em;
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

