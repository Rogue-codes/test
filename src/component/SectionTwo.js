import React from 'react'
import styled from 'styled-components'

const SectionTwo = () => {
    return (
        <StyledTwo>

            <div className="container">
                <div className="left">
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

                    <div className="head">
                        <h1>Extra benefits of getting "The Blood Money in Tech"</h1>
                    </div>

                    <div className="list">
                        <ul>
                            <li>A free 15 mins consultation call with the author Olabanji Ewenla regarding anything you'd like to find out about the tech industry</li>
                            <li>20% discount off the tuition fee for UIUX design training at Perxels Design School</li>
                            <li>20% discount off the tuition fee for Product Management training at Enoverlab</li>
                            <li>Direct link to an in-depth course on how to make money online as a freelancer</li>
                            <li>Direct link to a detailed course on how to get good-paying remote jobs from Nigeria</li>
                            <li>Direct link to a detailed course on how to get good-paying remote jobs from Nigeria</li>
                            <li>Direct link to get the most demanded course on Affiliate Marketing - 72IG course</li>
                        </ul>
                    </div>

                    <div className="last">
                        <h3>You will receive the following benefits in your email after the purchase of the book.</h3>
                    </div>

                </div>

                <div className="right">
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

    @media screen and (min-width:769px) and (max-width:1024px) {}

    @media screen and (min-width:1025px) and (max-width:1200px) {}

    @media screen and (min-width:1201px) and (max-width:1440px) {}

    .head{
        width:30em;
        height:4.25em;
        margin-left:2.25em;
        margin-top: 6.1em;

        @media (max-width: 480px) {
            width:20em;
            height:2.25em;
            margin-left:1.15em;
            margin-top: 6.1em;

        }
        h1{
            font-family: Montserrat;
            font-style: normal;
            font-weight: bold;
            font-size: 30px;
            line-height: 37px;
            color: rgba(10, 18, 42, 1);
        }


        @media (max-width: 480px) {}

        @media screen and (min-width:481px) and (max-width:768px) {}

        @media screen and (min-width:769px) and (max-width:1024px) {}

        @media screen and (min-width:1025px) and (max-width:1200px) {}

        @media screen and (min-width:1201px) and (max-width:1440px) {}  
    }

    .list{
        height:auto;
        width:32.62em;
        margin-left:5.3em;
        margin-top:6.8em;

        @media (max-width: 480px) {
            width:25em;
            height:auto;
            margin-left:.1em;
            margin-top: 6.1em;

        }

        ul{
            list-style: none;
            

            li{
                font-family: Montserrat;
                font-style: normal;
                font-weight: normal;
                font-size: 18px;
                line-height: 22px;
                height:4.43em;

                @media (max-width: 480px) {
                    font-family: Montserrat;
                    font-style: normal;
                    font-weight: normal;
                    font-size: 17px;
                    line-height: 25.5px;
                    height:4.43em;
                    padding-top:2em;
        
                }
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
        width:23.68em;
        margin-left:5em;
        height:auto;

        @media (max-width: 480px) {
            width:21em;
            height:auto;
            margin-left:1.5em;
            margin-top: 6.1em;

        }
        h3{
            font-family: Montserrat;
            font-style: normal;
            font-weight: 800;
            font-size: 16px;
            line-height: 150%;
            color: #524C4C;

            @media (max-width: 480px) {
                font-family: Montserrat;
                font-style: normal;
                font-weight: 800;
                font-size: 14px;
                line-height: 150%;
                color: #524C4C;
    
            }
        }
    }
}
.right{
    background-color:pink;
    flex:6;
    
    .price{
        max-width:20.18em;
            height:11.8em;
            background-color:rgba(255, 231, 235, 1);
            margin:auto;

            .introductoryPrice{
                max-width:13.25em;
                margin:auto;
                height:2.68em;

                p{
                    font-size:16px;
                    font-family: 'Montserrat', sans-serif;
                    line-height:26.64px;
                    font-weight:700;
                    color:rgba(246, 147, 164, 1);

                    span{
                        font-size: .75em;
                        text-align:right;
                        padding-left:2em
                        
                    }
                }
            }

            .cash{
                max-width:7.25em;
                margin:auto;
                height:2.75em;

                h1{
                    font-size:30px;
                    font-family: 'Montserrat', sans-serif;
                    line-height:44.4px;
                    font-weight:800;
                    color:rgba(200, 42, 69, 1);
                }
            }

            .strike{
                max-width:4.81em;
                margin:auto;
                height:1.68em;
                font-size:18px;
                font-family: 'Montserrat', sans-serif;
                line-height:26.64px;
                font-weight:800;
                color:rgba(0, 0, 0, 1);
            }

            .priceGoesBack{
                max-width:11.06em;
                margin:auto;
                height:2.12em;
                
                p{
                    font-size:12px;
                    font-family: 'Montserrat', sans-serif;
                    line-height:16.62px;
                    font-weight:700;
                    color:rgba(0, 0, 0, 1);
                }
            }
        }

    }
}
`