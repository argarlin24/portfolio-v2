import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const NavWrapper = styled.div`
    background-color: #3e66a4;
    display: flex;
    font-family: sans-serif;
    padding: 15px 30px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.25);
    align-content: center;

    @media (max-width: 770px) {
        display: none;
    }
`

const NavItems = styled.nav`
    display: flex;
    align-items: center;
`

const NavLink = styled.div`
    padding-right: 30px;

    & a {
        display: block;
        text-decoration: none;
        color: #000;
    }
`

const Navigation = () => (
    <NavWrapper>
        <NavItems>
            <NavLink className="innerLink">
                <Link to="/">Home</Link>
            </NavLink>
            <NavLink className="innerLink">
                <Link to="/projects/">Projects</Link>
            </NavLink>
            <NavLink className="innerLink">
                <Link to="/contact/">Contact</Link>
            </NavLink>
        </NavItems>
    </NavWrapper>
)

export default Navigation
