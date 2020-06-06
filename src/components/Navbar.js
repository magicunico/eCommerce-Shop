import React from 'react'
import { Link } from 'react-router-dom';
import MyLogo from '../logo.svg'
import styled from 'styled-components'

export default class Navbar extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-expand-sm bg-primary navbar-dark px-sm-5">
                <Link to="/">
                    <img src={MyLogo} alt="store" className="navbar-brand logo" />
                </Link>
                <ul className="navbar-nav align-items-center">
                    <li className="nav-item ml-5">
                        <Link to="/" className="nav-link">
                            Products
                        </Link>
                    </li>
                </ul>
                <Link to="/cart" className="ml-auto">
                    <ButtonContainer>
                        <span className="mr-2">
                            <i className="fas fa-cart-plus" />
                        </span>
                        My cart
                        </ButtonContainer>
                </Link>
            </nav>
        )
    }
}

const ButtonContainer = styled.button`
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
&:hover{
    background:var(--lightBlue)
    color:var(--mainBlue)
}
&:focus{
    outline:none;
}
`