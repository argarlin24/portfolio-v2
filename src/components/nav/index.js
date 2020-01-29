import React from "react"
import { NavWrapper, NavItems, NavLink } from "./styles"
import { SectionLink } from "react-scroll-section"

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
