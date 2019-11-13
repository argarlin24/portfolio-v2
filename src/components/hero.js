import React from "react"
import styled from "styled-components"

import Fade from "react-reveal/Fade"
import { Flex, Box } from "reflexbox/styled-components"
import { MainHeading, SubHeading, Text } from "../elements"
import pwaImg from "../images/pwa.svg"

const HeroWrapper = styled(Flex)`
    background: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.black};
    min-height: 100vh;
`

const IMG = styled.img`
    width: 100%;
    height: auto;
`

const Hero = () => (
    <HeroWrapper
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
    >
        <Box width={"90%"}>
            <Fade left cascade>
                <MainHeading primary>ADAM GARLING</MainHeading>
                <SubHeading primary>Full Stack Web Developer</SubHeading>
            </Fade>
        </Box>
        <Box width={"75%"}>
            <IMG src={pwaImg} alt="Progressive Web Application" />
        </Box>
    </HeroWrapper>
)

export default Hero
