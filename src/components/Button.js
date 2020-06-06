import styled from 'styled-components'

export const ButtonContainer = styled.button`
text-transform:capitalize;
font-size: 1.4rem;

background: ${props=>props.productBtn?"var(--mainColor)":"var(--mainColor)"};
border: 0.2rem solid;
border-color:${props=>props.productBtn?"var(--mainColorAccent)":"var(--mainAccent)"};
color:${props=>props.productBtn?"var(--mainColorAccent)":"var(--mainAccent)"};
border-radius: 0.5rem;
padding: 0.2rem 0.5rem;
cursor: pointer;
margin: 0.2rem 0.5rem;
transition: all 0.5s ease-in-out;
&:hover {
    
    background:${props=>props.productBtn?"var(--mainColorAccent)":"var(--mainAccent)"};
    color:var(--mainColor);
    border-color:var(--mainColor);
}
&:focus{
    outline:none;
}
`

