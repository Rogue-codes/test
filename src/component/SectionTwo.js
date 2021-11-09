import React from 'react'
import styled from 'styled-components'
import Form from './Form'
import book from '../assets/book2.png'

const SectionTwo = () => {
    return (
        <StyledTwo>
            {/* <div className="introductoryPrice">
            <div className="priceMobile">
            <div className="price">
                        <div className="introductoryPrice">
                            <p>INTRODUCTORY PRICE <span>for the first <strong>500 Order:</strong></span></p>
                        </div>

                        <div className="cash">
                            <h1>₦2,000</h1>
                        </div>

                        <div className="strike">
                            <strike>₦5,000</strike>
                        </div>

                        <div className="priceGoesBack">
                            <p>Price goes back to ₦5,000 after the first 500 people</p>
                        </div>
                    </div>
            </div>
            </div> */}

            <div className="contain">
                <div className="left">
                    <h1>
                        <br />
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

            <div className="container">
                <div className="left" data-aos="fade-up">
                    <div className="head">
                        <h1>
                             What you will learn from "The Blood Money in Tech"
                        </h1>
                    </div>


                    <div className="list">
                        <ul>
                            <li>The important things you need to know about the tech industry</li>
                            <li>Tech skills: what you can learn and where to find job opportunities</li>
                            <li>The biggest opportunity in the tech industry today</li>
                            <li> How to scale fast and make “Blood Money” with your skills</li>
                            <li> 7 steps to building a thriving career in the tech industry</li>
                        </ul>
                    </div>

                    <div className="head2">
                        <h1>Extra benefits of getting "The Blood Money in Tech"</h1>
                    </div>

                    <div className="list">
                        <ul>
                            <li className='banj'>A free 15 mins consultation call with the author Olabanji Ewenla regarding anything you'd like to find out about the tech industry</li>
                            <li>20% discount off the tuition fee for UIUX design training at Perxels Design School</li>
                            <li>20% discount off the tuition fee for Product Management training at Enoverlab</li>
                            <li>Direct link to an in-depth course on how to make money online as a freelancer</li>
                            <li>Direct link to a detailed course on how to get good-paying remote jobs from Nigeria</li>
                            <li>Direct link to a detailed course on how to get good-paying remote jobs from Nigeria</li>
                            <li>Direct link to get the most demanded course on Affiliate Marketing - 72IG course</li>
                        </ul>
                    </div>

                    <div className="last">
                        <h3><strong>You will receive the following benefits in your email after the purchase of the book.</strong></h3>
                    </div>

                </div>

                <div className="right" data-aos="fade-up">
                    <div className="launch">
                        <h1>BOOK IS LAUNCHING <br /><span className='date'>20TH NOVEMBER, 2021</span></h1>
                    </div>
                    <Form />
                    

                    <div className="book">
                        <img src={book} alt="" />
                    </div>

                </div>
            </div>
            
        </StyledTwo>
    )
}

export default SectionTwo
const StyledTwo = styled.section`
width:100%;
height:auto;
position:relative;
// background-color:skyblue;

@media (max-width: 480px) {}

@media screen and (min-width:481px) and (max-width:768px) {}

@media screen and (min-width:769px) and (max-width:1024px) {}

@media screen and (min-width:1025px) and (max-width:1200px) {}

@media screen and (min-width:1201px) and (max-width:1440px) {}


.contain{
    max-width:100%;
    margin:auto;
    padding-bottom: 7.4rem;

    @media (max-width: 320px) {
        padding-bottom: 2rem;
    }

    @media screen and (min-width:321px) and (max-width:375px) {
        padding-bottom: 2rem;
    }

    @media screen and (min-width:376px) and (max-width:414px) {
        padding-bottom: 2rem;
    }
    @media screen and (min-width:415px) and (max-width:425px) {
        padding-bottom: 2rem;
    }
    @media screen and (min-width:426px) and (max-width:480px) {
        padding-bottom: 2rem;
    }
    @media screen and (min-width:1025px) and (max-width:1200px) {
        padding-bottom: 2rem;
    }
    @media screen and (min-width:769px) and (max-width:1024px) {
        padding-bottom: 2rem;
    }
    @media screen and (min-width:481px) and (max-width:768px) {
        padding-bottom: 1rem;
    }

    

    .left{
        max-width:100%;
        h1{
            font-weight: 600;
            font-size: 36px;
            font-family: 'Montserrat', sans-serif;
            line-height:48px;
            color:rgba(205, 42, 68, 1);
            width:35em;
            margin-left:6.3rem;

            @media screen and (min-width:481px) and (max-width:768px) {
                width:45rem;
                line-height:44.2px;
                font-size:20px;
                margin-left:2.5rem;
            }

            @media (max-width: 320px) {
                width:19rem;
                line-height:34.2px;
                font-size:18px;
                margin-left:1rem;
            }

            @media screen and (min-width:321px) and (max-width:375px) {
                width:21rem;
                line-height:34.2px;
                font-size:18px;
                margin-left:1rem;
            }

            @media screen and (min-width:376px) and (max-width:414px) {
                width:24rem;
                line-height:34.2px;
                font-size:18px;
                margin-left:1rem;
            }

            @media screen and (min-width:415px) and (max-width:425px) {
                width:22rem;
                line-height:34.2px;
                font-size:18px;
                margin-left:2.5rem;
            }

            @media screen and (min-width:769px) and (max-width:1024px) {
                width:61rem;
                line-height:44.2px;
                font-size:30px;
                margin-left:2.5rem;
            }
            @media screen and (min-width:1025px) and (max-width:1200px) {
                width:65rem;
                line-height:44.2px;
                font-size:30px;
                margin-left:2.5rem;
            }
            @media screen and (min-width:1441px){
                width:85rem;
                line-height:44.2px;
                font-size:40px;
            }
        }

        p{
            font-size:22px;
            font-family: 'Montserrat', sans-serif;
            font-weight:500;
            line-height: 133.5%;
            color: #0A122A;
            width: 42em;
            margin-left:6.3rem;
            margin-top:-1.12rem;

            @media screen and (min-width:481px) and (max-width:768px) {
                width:45rem;
                line-height:44.2px;
                font-size:20px;
                margin-left:2.5rem;
                font-size:18px;
            }

            @media screen and (min-width:1441px){
                width:85rem;
                line-height:44.2px;
                font-size:30px;
            }

            @media screen and (min-width:769px) and (max-width:1024px) {
                width:55rem;
                line-height:44.2px;
                font-size:20px;
                margin-left:2.5rem;
            }

            @media screen and (min-width:1025px) and (max-width:1200px) {
                width:65rem;
                line-height:44.2px;
                font-size:20px;
                margin-left:2.5rem;
            }

            @media (max-width: 320px) {
                width:19rem;
                line-height:34.2px;
                font-size:16px;
                margin-left:1rem;
            }

            @media screen and (min-width:321px) and (max-width:375px) {
                width:21rem;
                line-height:34.2px;
                font-size:16px;
                margin-left:1rem;
            }

            @media screen and (min-width:376px) and (max-width:414px) {
                width:24rem;
                line-height:34.2px;
                font-size:16px;
                margin-left:1rem;
            }

            @media screen and (min-width:415px) and (max-width:425px) {
                width:22rem;
                line-height:34.2px;
                font-size:16px;
                margin-left:2.5rem;
            }

            
        }
    }
}
.container{
    display:flex;
    justify-conter:center;
    align-item:center;
    flex-flow:row wrap;

    @media (max-width: 480px) {
        display:flex;
        justify-conter:center;
        align-item:center;
        flex-direction:column;
    }

    @media screen and (min-width:481px) and (max-width:768px) {}

    @media screen and (min-width:769px) and (max-width:1024px) {}

    @media screen and (min-width:1025px) and (max-width:1200px) {}

    @media screen and (min-width:1201px) and (max-width:1440px) {}
}
.left{
    // background-color:red;
    flex:6;
    justify-content:center;
    @media (max-width: 480px) {
        max-width:100%;
    }

    @media screen and (min-width:481px) and (max-width:768px) {}

    @media screen and (min-width:769px) and (max-width:1024px) {
        flex:6
    }

    @media screen and (min-width:1025px) and (max-width:1200px) {}

    @media screen and (min-width:1201px) and (max-width:1440px) {}

    .head{
        width:28em;
        height:4.25em;
        margin-left:6.3rem;
        margin-top: -3.1em;
        // background-color:green;

        @media (max-width: 320px) {
            width:18rem;
            height:2.25em;
            margin-left:1.15em;
            margin-top: 3.1em;
        }

        @media screen and (min-width:321px) and (max-width:375px) {
            width:20rem;
            height:2.25em;
            margin-left:1.15em;
            margin-top: 2.1em;
            margin-bottom: 3.6em;
        }

        @media screen and (min-width:376px) and (max-width:414px) {
            width:24.2rem;
            height:2.25em;
            margin-left:1.15em;
            margin-top: 1.1em;
        }

        // @media screen and (min-width:415px) and (max-width:425px) {
        //     width:24.2rem;
        //     height:2.25em;
        //     margin-left:1.15em;
        //     margin-top: .7em;
        // }

        @media screen and (min-width:415px) and (max-width:480px) {
            width:22.2rem;
            height:2.25em;
            margin-left:2.5em;
            margin-top: 1.1em;
        }

        @media screen and (min-width:481px) and (max-width:768px) {
            width:40em;
            height:2.25em;
            margin-left:2.5rem;
            margin-top: 1.1em;
        }

        @media screen and (min-width:769px) and (max-width:1024px) {
            width:30em;
            height:2.25em;
            margin-left:1.15em;
            margin-top: 3.1em;
        }

        @media screen and (min-width:1025px) and (max-width:1200px) {
            margin-top: -2.1em;
            margin-left:2.5rem;
        }

        @media screen and (min-width:1441px) {
            width:30em;
            height:4.25em;
            margin-left:2.5em;
            margin-top: 1.1em;
        }

        h1{
            font-family: Montserrat;
            font-style: normal;
            font-weight: bold;
            font-size: 30px;
            line-height: 37px;
            color: rgba(10, 18, 42, 1);

            @media (max-width: 320px) {
                font-size: 20px;
            }

            @media screen and (min-width:321px) and (max-width:375px) {
                font-size: 24px;
                line-height: 27px;
            }

            @media screen and (min-width:376px) and (max-width:414px) {
                font-size: 24px;
                line-height: 27px;
            }

            @media screen and (min-width:415px) and (max-width:480px) {
                font-size: 24px;
                line-height: 27px;
            }
            @media screen and (min-width:1441px){
                font-size: 34px;
            }

            
        }


        

        @media screen and (min-width:481px) and (max-width:768px) {}

        @media screen and (min-width:769px) and (max-width:1024px) {}

        @media screen and (min-width:1025px) and (max-width:1200px) {}

        @media screen and (min-width:1201px) and (max-width:1440px) {} 
        @media screen and (min-width:1441px) {
            font-size: 40px;
        } 
    }

    .head2{
        width:28em;
        height:4.25em;
        margin-left:6.3rem;
        margin-top: 1.4rem;

        @media (max-width: 320px) {
            width:18rem;
            height:2.25em;
            margin-left:1.15em;
            margin-top: 3.1em;
        }

        @media screen and (min-width:321px) and (max-width:375px) {
            width:20rem;
            height:3.75rem;
            margin-left:1.15em;
            margin-top: 2.1em;
        }

        @media screen and (min-width:376px) and (max-width:414px) {
            width:24.2rem;
            height:2.25em;
            margin-left:1.15em;
            margin-top: 1.1em;
        }

        // @media screen and (min-width:415px) and (max-width:425px) {
        //     width:24.2rem;
        //     height:2.25em;
        //     margin-left:1.15em;
        //     margin-top: .7em;
        // }

        @media screen and (min-width:415px) and (max-width:480px) {
            width:22.2rem;
            height:2.25em;
            margin-left:2.5em;
            margin-top: 1.1em;
        }

        @media screen and (min-width:481px) and (max-width:768px) {
            width:40em;
            height:2.25em;
            margin-left:2.5rem;
            margin-top: 1.1em;
        }

        @media screen and (min-width:769px) and (max-width:1024px) {
            width:30em;
            height:2.25em;
            margin-left:1.15em;
            margin-top: 3.1em;
        }

        @media screen and (min-width:1025px) and (max-width:1200px) {
            margin-top: .5rem;
            margin-left:2.5rem;
        }

        @media screen and (min-width:1441px) {
            width:30em;
            height:4.25em;
            margin-left:2.5em;
            margin-top: 1.1em;
        }

        h1{
            font-family: Montserrat;
            font-style: normal;
            font-weight: bold;
            font-size: 30px;
            line-height: 37px;
            color: rgba(10, 18, 42, 1);

            @media (max-width: 320px) {
                font-size: 20px;
            }

            @media screen and (min-width:321px) and (max-width:375px) {
                font-size: 24px;
                line-height: 30px;
            }

            @media screen and (min-width:376px) and (max-width:414px) {
                font-size: 24px;
                line-height: 27px;
            }

            @media screen and (min-width:415px) and (max-width:480px) {
                font-size: 24px;
                line-height: 27px;
            }
            @media screen and (min-width:1441px){
                font-size: 34px;
            }

            
        }


        

        @media screen and (min-width:481px) and (max-width:768px) {}

        @media screen and (min-width:769px) and (max-width:1024px) {}

        @media screen and (min-width:1025px) and (max-width:1200px) {}

        @media screen and (min-width:1201px) and (max-width:1440px) {} 
        @media screen and (min-width:1441px) {
            font-size: 40px;
        } 
    }

    .list{
        height:auto;
        width:35.62em;
        margin-left:10.3rem;
        margin-top:1.12rem;

        @media (max-width: 320px) {
            width:20rem;
            height:auto;
            margin-left:-1rem;
            margin-top: 1.1em;

        }

        @media screen and (min-width:321px) and (max-width:375px) {
            width:21rem;
            height:auto;
            margin-left:-1rem;
            margin-top: 1.1em;
        }

        @media screen and (min-width:376px) and (max-width:414px) {
            width:25rem;
            height:auto;
            margin-left:-1rem;
            margin-top: 2.1em;
            // display:none;
        }

        @media screen and (min-width:415px) and (max-width:480px) {
            width:24rem;
            height:auto;
            margin-left:-.3rem;
            margin-top: 3.1em;
        }

        @media screen and (min-width:481px) and (max-width:768px) {
            width:40em;
            margin-left:1.15em;
            margin-top: 3.15em;
        }

        @media screen and (min-width:769px) and (max-width:1024px) {
            width:30em;
            margin-left: .15em;
            margin-top: 3.1em;
        }

        @media screen and (min-width:1025px) and (max-width:1200px) {
            margin-left: 1.15em;
            margin-top:1.8em;
        }

        @media screen and (min-width:1441px) {
            margin-top:-4em;
            width:50em;
        }

        ul{
            list-style: none;
            

            li{
                font-family: Montserrat;
                font-style: normal;
                font-weight: normal;
                font-size: 18px;
                line-height: 22px;
                color: #524C4C;
                height:4.43em;

                @media (max-width: 320px) {
                    font-family: Montserrat;
                    font-style: normal;
                    font-weight: normal;
                    font-size: 17px;
                    line-height: 25.5px;
                    height:5.06rem;
                    padding-top:2em;
        
                }
                @media screen and (min-width:321px) and (max-width:375px) {
                    font-size: 17px;
                    height:5.06rem;
                }
                @media screen and (min-width:376px) and (max-width:414px) {
                    font-size: 17px;
                    height:5.06rem;
                }
                @media screen and (min-width:415px) and (max-width:425px) {
                    font-size: 17px;
                    height:5.06rem;
                }
            }
        }
        .banj{
            @media (max-width: 480px) {
                padding-bottom:40px;
                padding-top:20px;
            }
        }
        li::before {
            content: "• ";
            font-size:40px;
            color: rgba(205, 42, 68, 1);
            padding-right:.0em;
          }
    }

    .last{
        width:22.68em;
        margin-left:12.3rem;
        height:auto;

        @media (max-width: 320px) {
            width:19rem;
            height:auto;
            margin-left:1em;
            margin-top: 6.1em;

        }

        @media screen and (min-width:321px) and (max-width:414px) {
            width:20rem;
            height:auto;
            margin-left:1.5em;
            margin-top: 3.1em;
        }

        @media screen and (min-width:415px) and (max-width:480px) {
            width:23rem;
            height:auto;
            margin-left:1.5em;
            margin-top: 3.1em;
        }

        @media screen and (min-width:481px) and (max-width:768px) {
            width:40em;
            margin-left:2.5rem;
            margin-top: 3.1em;
        }

        @media screen and (min-width:769px) and (max-width:1024px) {
            width:30em;
            margin-left: 1.15em;
            margin-top: 3.1em;
        }

        @media screen and (min-width:1025px) and (max-width:1200px) {
            width:30em;
            margin-left: 2.15rem;
            margin-top: 3.1em;
        }

        @media screen and (min-width:1441px) {
            width:50em;
        }
        h3{
            font-family: Montserrat;
            font-style: normal;
            font-weight: 900;
            font-size: 16px;
            line-height: 150%;
            color: #524C4C;

            @media (max-width: 480px) {
                font-family: Montserrat;
                font-style: normal;
                font-weight: 800;
                font-size: 14px;
                line-height: 21px;
                color: #524C4C;
    
            }
        }
    }
}
.right{
    flex:6;
    margin-left:6.25rem;

    @media screen and (min-width:321px){
        margin-left:0rem;
    }
    @media screen and (min-width:1025px) and (max-width:1280px) {
        margin-left:3.13rem;
    }
    @media screen and (min-width:769px) and (max-width:1024px) {
        margin-left:0rem;  
    }
    @media screen and (min-width:415px) and (max-width:425px) {
        margin-left:0rem;  
    }
    @media screen and (min-width:376px) and (max-width:414px) {
        margin-left:0rem;  
    }
    @media screen and (min-width:321px) and (max-width:375px) {
        margin-left:0rem;  
    }
    @media screen and (max-width:320px){
        margin-left:0rem;  
    }

    .launch{
        padding-top:1rem;
        padding-bottom:2.6rem;
        max-width:22.5rem;
        margin:auto;
        height:4.3rem;
        @media (max-width: 320px) {
            padding-top:4rem;
            padding-bottom:1rem;
        }
        @media screen and (min-width:321px) and (max-width:375px) {
            padding-top:4rem;
            padding-bottom:1rem;
        }
        h1{
            font-family: Montserrat;
            font-style: normal;
            font-weight: bold;
            font-size: 30px;
            line-height: 123.5%;
            text-align: center;
            color: #0A122A;
            @media (max-width: 320px) {
                font-size: 20px;
                line-height: 123.5%;
            }
            @media screen and (min-width:321px) and (max-width:375px) {
                font-size: 18px;
                line-height: 123.5%;
            }
            @media screen and (min-width:376px) and (max-width:414px) {
                font-size: 18px;
                line-height: 123.5%;
            }
            @media screen and (min-width:415px) and (max-width:425px) {
                font-size: 18px;
                line-height: 123.5%;
            }
            @media screen and (min-width:426px) and (max-width:480px) {
                font-size: 18px;
                line-height: 123.5%;
            }
            

            .date{
                color:#f58598;
            }
        }
    }
    .book{
        position:absolute;
        margin-left:16em;
        margin-top:-5.5em;
        height:21.87em;
        width:18.12em;
    
        img{
            height:100%;
            width:100%
        }
    
        @media (max-width: 320px) {
            background-color:golden;
            margin-left: .1em;
            margin-top:-6em;
    
            img{
                height:100%;
                width:100%
            }
        }

        @media screen and (min-width:321px) and (max-width:414px) {
            background-color:golden;
            margin-left: 5rem;
            margin-top:-6em;
    
            img{
                height:100%;
                width:100%
            }
        }

        @media screen and (min-width:415px) and (max-width:480px) {
            background-color:golden;
            margin-left: 5rem;
            margin-top:-6em;
    
            img{
                height:100%;
                width:100%
            }
        }
    
        @media screen and (min-width:481px) and (max-width:768px) {
            background-color:golden;
            margin-left:18em;
            margin-top:-6em;
    
            img{
                height:100%;
                width:100%
            }
        }
    
        @media screen and (min-width:769px) and (max-width:1024px) {
            background-color:golden;
            margin-left:6em;
            margin-top:-8em;
    
            img{
                height:100%;
                width:100%
            }
        }
    
        @media screen and (min-width:1025px) and (max-width:1280px) {

            background-color:golden;
            margin-left:10em;
            margin-top:-6em;
    
            img{
                height:100%;
                width:100%
            }
        }

        @media screen and (min-width:1441px) {
            margin-top:-8em;
        }
    
        @media screen and (min-width:1201px) and (max-width:1440px) {}
        
    }
}
`