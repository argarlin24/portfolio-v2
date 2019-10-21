import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const NavWrapper = styled.div`
    background-color: ${props => props.theme.brand.primary};
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
        color: ${props => props.theme.colors.black};
        cursor: pointer;
        font-weight: 700;
    }
`

const Navigation = () => (
    <NavWrapper>
        <NavItems>
            <NavLink>
                <Link to="/">Home</Link>
            </NavLink>
            <NavLink>
                <Link to="/projects/">Projects</Link>
            </NavLink>
            <NavLink>
                <Link to="/contact/">Contact</Link>
            </NavLink>
        </NavItems>
    </NavWrapper>
)

export default Navigation
