
import styled from "styled-components"

const StyledFooter = styled.div`
background-color: #295656;
font-family: var(--font-subtitle);
height: 60px;
color: white;
display:flex;
justify-content: center;
align-items:center;
font-size: 14px;
`

function Footer()  {
    return (
        <StyledFooter>
       <p>Projet réalisé en React - Septembre 2024</p>
            </StyledFooter>
           
    )
}

export default Footer