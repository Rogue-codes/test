import  { useRef,useState } from 'react'
import styled from 'styled-components'
import Modal from './Modal';

const Form = () => {
    const scriptUrl = "https://script.google.com/macros/s/AKfycbxSXjrzw_lMCpy7x0zj-t-Of0lf5rqQ0CNrsmXElBxvqQ8Sp2Hu41AB4EF_g38A_s7Hmg/exec";
    const [loading, setLoading] = useState(false)
    const [active, setActive] = useState(false);
    const [values,setValues] = useState({
        name:"",
        email:"",
        phoneNumber:""
    })

    // const { name, email, phoneNumber} = values

    const handleChange = e => {
        setValues({...values, [e.target.name] : e.target.value})
    }
        
    const formRef = useRef(null)

    const handleSubmit = e => {
        e.preventDefault()
        setLoading(true)

        fetch(scriptUrl, { method: 'POST', body: new FormData(formRef.current) })
        .then(res => {
            setLoading(false)
            setActive(true)
        })
        .catch(err => console.log(err))

        // try {
        //     const response = await fetch('https://v1.nocodeapi.com/roguecodes/google_sheets/DOaTiRxmCeoXpUCF?tabId=sheet1',{
        //         method : 'POST',
        //         headers : {
        //             'content-type': 'application/json'
        //         },
        //         body: JSON.stringify([[name, email, phoneNumber]])

        //     })
        //     await response.json()
        //     setValues({...values, name:'', email:"", phoneNumber:""})
        // } catch (error) {
        //     console.log(error)
        // }
    }
        




    return (
        
        <StyledForm>
            
            <div className="formcontainer" id='reg'>
            <div className="register"><p>Join the waiting list to be among the first <br /> to be notified when the book launch</p></div>

            <form name='form' onSubmit={handleSubmit} ref={formRef}>
            <label htmlFor="" className='nameLabel'>Name</label>
            <input type="text" name='name' className='name' required  value={values.name} onChange={handleChange}/>

            <label htmlFor="" className='emailLabel'>Email</label>
            <input type="text" name='email' className='name' required value={values.email} onChange={handleChange}/>

            <label htmlFor="" className='phoneLabel'>Phone Number</label>
            <input type="text" name='phoneNumber' className='name' required value={values.phoneNumber} onChange={handleChange}/>

            <button type='submit'>{loading ? "Loading..." : "SUBMIT"}</button>

            </form>
            <Modal active={active} setActive={setActive} />
            </div>
            
        </StyledForm>
    )
}

export default Form

const StyledForm = styled.div`
.formcontainer{
    height:686px;
    background-color:rgba(205, 42, 68, 1);
    max-width:539px;
    margin:auto;
    margin-top:-1rem;

    @media (max-width: 480px) {
        max-width:90%;
        margin-top:-1rem;
    }


    
    @media screen and (min-width:481px) and (max-width:768px) {
        margin-top 2em;
    }

    @media screen and (min-width:769px) and (max-width:1024px) {
        margin-top 4em;
        max-width:90%;
    }

    @media screen and (min-width:1025px) and (max-width:1200px) {}

    .register{
        max-width:27.81em;
        margin:auto;
        height:auto;

        @media (max-width: 480px) {
            max-width:24.31em;
            height:63px;
            margin:auto;
        }



        p{
            font-family: proxima-nova, sans-serif;
            font-style: normal;
            font-weight: 600;
            padding-top:1.5rem;
            font-size: 20px;
            line-height: 106%;
            text-align: center;
            color: #FFFFFF;


            @media screen and (min-width:769px) and (max-width:1024px) {
                padding-top:1.75em;
                font-size: 16px;
                text-align:center;
                Line-height:25.6px;
                color:rgba(255, 255, 255, 1);
                font-weight:800;
                font-family: 'Montserrat', sans-serif;
            }

            @media (max-width: 480px) {
                padding-top:35px;
                font-size: 14.3px;
                Line-height:20.72px;
                color:rgba(255, 255, 255, 1);
                font-weight:600;
                font-family: 'Montserrat', sans-serif;
            }
        }

    }

    form{
        max-width:80%;
        margin: auto;
        height:auto;

        @media (max-width: 480px) {
            max-width:100%;
        }


        .nameLabel{
            font-family: proxima-nova, sans-serif;
            display:block;
            color:white;
            margin-bottom:1.3rem;
            margin-top:46px;
            margin-left:.2rem;

            @media (max-width: 480px) {
                margin-top:2.5rem;
                margin-left:1.65rem;
                font-size:15px;
            }

            @media screen and (min-width:769px) and (max-width:1024px) {
                margin-left:.9em;
            }
        }

        .emailLabel{
            font-family: proxima-nova, sans-serif;
            display:block;
            color:white;
            margin-bottom:1.3rem;
            margin-top:22px;
            margin-left:.2rem;

            @media (max-width: 480px) {
                margin-left:1.65rem;
                font-size:15px;
            }

            @media screen and (min-width:769px) and (max-width:1024px) {
                margin-left:.9em;
            }
        }

        .phoneLabel{
            font-family: proxima-nova, sans-serif;
            display:block;
            color:white;
            margin-bottom:1.3rem;
            margin-top:22px;
            margin-left:.2rem;

            @media (max-width: 480px) {
                margin-left:1.65rem;
                font-size:15px;
            }
            @media screen and (min-width:769px) and (max-width:1024px) {
                margin-left:.9em;
            }
        }


        .name{
            height:2em;
            width:28rem;
            border-radius:5px;
            background: #E0E0E0;
            border:none;
            outline:none;
            font-size:20px;
            padding-left:10px;
            font-family: 'Montserrat', sans-serif;

            @media screen and (max-width:320px) {
                margin-left:1.4rem;
                max-width:14.9rem;
                font-size:18px;
            }

            

            @media screen and (max-width:480px) {
                margin-left:1.2rem;
                width:85%;
                font-size:18px;
            }

            @media screen and (min-width:769px) and (max-width:1024px) {
                margin-left:0em;
                width:17em;
            }

            @media screen and (min-width:1025px) and (max-width:1280px) {
                margin-left:0em;
                width:20em;
            }
        }


        button{
            height:3em;
            width:28rem;
            margin-top:2em;
            margin-bottom:2em;
            border-radius:5px;
            border:none;
            background-color:rgba(10, 18, 42, 1);
            color:#ffff;
            font-size:20px;
            line-height:21px;
            font-family: proxima-nova, sans-serif;
            cursor:pointer;

            @media screen and (max-width: 480px) {
                margin-left:4.2rem;
               
                max-width:60%;
            }

            @media screen and (min-width:769px) and (max-width:1024px) {
                margin-left:2.5rem;
                width:16rem;
            }

            @media screen and (min-width:1025px) and (max-width:1280px) {
                margin-left:0em;
                width:20em;
            }

            
        }
    }
}
`
