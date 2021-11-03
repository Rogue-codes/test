import React from 'react'
import styled from 'styled-components'


const Footer = () => {
    return (
        <StyledFooter>
            <div className="foot">
                <p>Copyright @thebloodmoneyintech 2021</p>
            </div>

        </StyledFooter>
    )
}

export default Footer

const StyledFooter = styled.footer`
margin-top:30vh;
.foot{
    max-width:323px;
    margin:auto;

    p{
        font-family: Montserrat;
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 106%;
        color: #767676;
    }
}

`