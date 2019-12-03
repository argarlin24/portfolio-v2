import React from "react"
import styled from "styled-components"

import { SectionLink } from "react-scroll-section"

const NavWrapper = styled.div`
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 1500;
    background-color: ${props => props.theme.colors.primary};
    display: flex;
    font-family: sans-serif;
    padding: 30px 30px;
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
    color: ${props => props.theme.colors.lightgray};
    margin-right: 30px;
    font-weight: 700;
    cursor: pointer;
    border-bottom: 3px solid ${props =>
        props.selected ? props.theme.colors.secondary : "transparent"};
`

const Navigation = () => (
    <NavWrapper>
        <NavItems>
            <SectionLink section="home">
                {({ onClick, isSelected }) => (
                    <NavLink onClick={onClick} selected={isSelected}>
                        HOME
                    </NavLink>
                )}
            </SectionLink>

            <SectionLink section="projects">
                {({ onClick, isSelected }) => (
                    <NavLink onClick={onClick} selected={isSelected}>
                        PROJECTS
                    </NavLink>
                )}
            </SectionLink>

            <SectionLink section="contact">
                {({ onClick, isSelected }) => (
                    <NavLink onClick={onClick} selected={isSelected}>
                        CONTACT
                    </NavLink>
                )}
            </SectionLink>
        </NavItems>
    </NavWrapper>
)

export default Navigation
