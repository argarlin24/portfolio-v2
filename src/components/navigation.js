import React from "react"
import styled from "styled-components"

import { SectionLink } from "react-scroll-section"

const NavWrapper = styled.div`
    background-color: ${props => props.theme.colors.primary};
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
    font-weight: 700;
    cursor: pointer;

    /* & a {
        display: block;
        text-decoration: none;
        color: ${props => props.theme.colors.black};
        cursor: pointer;
        font-weight: 700;
    } */
`

const Navigation = () => (
    <NavWrapper>
        <NavItems>
            <SectionLink section="home">
                {({ onClick, isSelected }) => (
                    <NavLink onClick={onClick} selected={isSelected}>
                        Home
                    </NavLink>
                )}
            </SectionLink>

            <SectionLink section="projects">
                {({ onClick, isSelected }) => (
                    <NavLink onClick={onClick} selected={isSelected}>
                        Projects
                    </NavLink>
                )}
            </SectionLink>

            <SectionLink section="contact">
                {({ onClick, isSelected }) => (
                    <NavLink onClick={onClick} selected={isSelected}>
                        Contacts
                    </NavLink>
                )}
            </SectionLink>
        </NavItems>
    </NavWrapper>
)

export default Navigation
