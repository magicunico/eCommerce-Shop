import styled from 'styled-components'

export const ButtonContainer = styled.button`
text-transform:capitalize;
font-size: 1.4rem;
background: transparent;
border: 0.2rem solid var(--yellow);
border-radius: 0.5rem;
color: var(--yellow);
padding: 0.2rem 0.5rem;
cursor: pointer;
margin: 0.2rem 0.5rem;
transition: all 0.5s ease-in-out;
&:hover {
    background:var(--yellow);
    color:var(--mainColor);
}
&:focus{
    outline:none;
}
`