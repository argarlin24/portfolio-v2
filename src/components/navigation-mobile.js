import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import HomeIcon from "../images/home-solid.svg"
import ProjIcon from "../images/file-code-solid.svg"
import MailIcon from "../images/envelope-solid.svg"

const Wrapper = styled.div`
    background: ${props => props.theme.colors.primary};
    position: fixed;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: 1030;
    display: flex;
    height: 75px;
    font-family: sans-serif;
    border-top: 1px solid rgba(0, 0, 0, 0.25);
    align-content: center;
    justify-content: center;
    @media (min-width: 769px) {
        display: none;
    }
`

const MobileItems = styled.nav`
    display: flex;
    align-items: center;
`

const MobileLink = styled.div`
    padding: 15px 30px;
    & a {
        display: block;
        text-decoration: none;
        color: ${props => props.theme.colors.white};
    }
    & span {
        display: block;
        font-size: 12px;
        font-weight: bold;
    }
`

const Icons = styled.img`
    width: 35px;
    height: 35px;
    margin: 0 auto;
    display: block;
    color: ${props => props.theme.colors.white};
`

const MobileNav = props => (
    <Wrapper>
        <MobileItems>
            <MobileLink className="innerLink">
                <Link to="/">
                    <Icons src={HomeIcon} alt="Home" />
                    <span>Home</span>
                </Link>
            </MobileLink>
            <MobileLink className="innerLink">
                <Link to="/projects/">
                    <Icons src={ProjIcon} alt="Projects" />
                    <span>Projects</span>
                </Link>
            </MobileLink>
            <MobileLink className="innerLink">
                <Link to="/contact/">
                    <Icons src={MailIcon} alt="Contact" />
                    <span>Contact</span>
                </Link>
            </MobileLink>
        </MobileItems>
    </Wrapper>
)

export default MobileNav
