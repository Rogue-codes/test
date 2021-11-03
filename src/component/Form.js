import React from 'react'
import styled from 'styled-components'

const Form = () => {
    return (
        <StyledForm>
            <div className="formcontainer">
            <div className="register"><h1>Register to be among the first to be notified when the book launches</h1></div>

            <form action="">
            <label htmlFor="" className='nameLabel'>Name</label>
            <input type="text" name='name' className='name' required />

            <label htmlFor="" className='emailLabel'>Email</label>
            <input type="text" name='email' className='name' required/>

            <label htmlFor="" className='phoneLabel'>Phone Number</label>
            <input type="text" name='phoneNumber' className='name' required  />

            <button>SUBMIT</button>

            </form>
            </div>
        </StyledForm>
    )
}

export default Form

const StyledForm = styled.div`
// background-color:grey;
.formcontainer{
    height:686px;
    background-color:rgba(205, 42, 68, 1);
    max-width:539px;
    margin:auto;

    @media (max-width: 480px) {
        max-width:90%;
        margin-top 4em;
    }
    
    @media screen and (min-width:481px) and (max-width:768px) {
        margin-top 2em;
    }

    @media screen and (min-width:769px) and (max-width:1024px) {
        margin-top 4em;
    }

    @media screen and (min-width:1025px) and (max-width:1200px) {}

    .register{
        max-width:24.31em;
        margin:auto;
        height:auto;

        @media (max-width: 480px) {
            max-width:24.31em;
            height:63px;
            margin:auto;
        }



        h1{
            padding-top:1.75em;
            font-size: 20px;
            Line height:25.6px;
            color:rgba(255, 255, 255, 1);
            font-weight:800;
            font-family: 'Montserrat', sans-serif;

            @media screen and (min-width:769px) and (max-width:1024px) {
                padding-top:1.75em;
                font-size: 14px;
                text-align:center;
                Line height:25.6px;
                color:rgba(255, 255, 255, 1);
                font-weight:800;
                font-family: 'Montserrat', sans-serif;
            }
        }

        @media (max-width: 480px) {
            padding-top:10px;
            font-size: 14px;
            Line height:20.72px;
            color:rgba(255, 255, 255, 1);
            font-weight:600;
            font-family: 'Montserrat', sans-serif;
        }
    }

    form{
        max-width:80%;
        // background-color:orange;
        margin: auto;
        height:auto;

        @media (max-width: 480px) {
            max-width:100%;
        }


        .nameLabel{
            font-family: 'Poppins', sans-serif;
            display:block;
            color:white;
            margin-bottom:.5em;
            margin-top:46px;
            margin-left:39px;

            @media (max-width: 480px) {
                margin-left:20px;
                margin-top:70px;
            }

            @media screen and (min-width:769px) and (max-width:1024px) {
                margin-left:.9em;
            }
        }

        .emailLabel{
            font-family: 'Poppins', sans-serif;
            display:block;
            color:white;
            margin-bottom:.5em;
            margin-top:22px;
            margin-left:39px;

            @media (max-width: 480px) {
                margin-left:20px;
            }

            @media screen and (min-width:769px) and (max-width:1024px) {
                margin-left:.9em;
            }
        }

        .phoneLabel{
            font-family: 'Poppins', sans-serif;
            display:block;
            color:white;
            margin-bottom:.5em;
            margin-top:22px;
            margin-left:39px;

            @media (max-width: 480px) {
                margin-left:20px;
            }
            @media screen and (min-width:769px) and (max-width:1024px) {
                margin-left:.9em;
            }
        }


        .name{
            height:2em;
            width:18em;
            margin-left:1.5em;
            border-radius:5px;
            border:none;
            outline:none;
            font-size:20px;
            padding-left:10px;
            font-family: 'Montserrat', sans-serif;

            @media (max-width: 480px) {
                margin-left:.5em;
                width:16em;
            }

            @media screen and (min-width:769px) and (max-width:1024px) {
                margin-left:.5em;
                width:18em;
            }
        }


        button{
            height:3em;
            width:14em;
            margin-left:4em;
            margin-top:2em;
            margin-bottom:2em;
            border-radius:5px;
            border:none;
            background-color:rgba(10, 18, 42, 1);
            color:rgba(255, 255, 255, 1);
            font-size:20px;
            line-height:21.2px;
            font-family: 'Montserrat', sans-serif;
            font-weight:600;
            cursor:pointer;

            @media (max-width: 480px) {
                margin-left:2em;
            }

            @media screen and (min-width:769px) and (max-width:1024px) {
                margin-left:2.5em;
            }

            
        }
    }
}
`
