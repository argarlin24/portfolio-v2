import React from "react"
import { SectionLink } from "react-scroll-section"
import { Wrapper, MobileItems, MobileLink, Icons } from "./styles"

import HomeIcon from "../../images/home-solid.svg"
import ProjIcon from "../../images/file-code-solid.svg"
import MailIcon from "../../images/envelope-solid.svg"

const MobileNav = props => (
    <Wrapper>
        <MobileItems>
            <SectionLink section="home">
                {({ onClick, isSelected }) => (
                    <MobileLink onClick={onClick} selected={isSelected}>
                        <Icons src={HomeIcon} alt="Home" />
                        <span>HOME</span>
                    </MobileLink>
                )}
            </SectionLink>
            <SectionLink section="projects">
                {({ onClick, isSelected }) => (
                    <MobileLink onClick={onClick} selected={isSelected}>
                        <Icons src={ProjIcon} alt="Projects" />
                        <span>PROJECTS</span>
                    </MobileLink>
                )}
            </SectionLink>
            <SectionLink section="contact">
                {({ onClick, isSelected }) => (
                    <MobileLink onClick={onClick} selected={isSelected}>
                        <Icons src={MailIcon} alt="Contact" />
                        <span>CONTACT</span>
                    </MobileLink>
                )}
            </SectionLink>
        </MobileItems>
    </Wrapper>
)

export default MobileNav
