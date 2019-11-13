import React from "react"
import styled from "styled-components"

import Fade from "react-reveal/Fade"
import { Flex, Box } from "reflexbox/styled-components"
import { MainHeading, SubHeading } from "../elements"
import pwaImg from "../images/pwa-colors.svg"

const HeroWrapper = styled(Flex)`
    background: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)),
        url(${pwaImg});
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    color: ${props => props.theme.colors.black};
    min-height: 100vh;
    padding-top: 15vh;
`

const HeadingBox = styled(Box)`
    border-radius: 10px;
`

const Hero = () => (
    <HeroWrapper
        flexDirection="column"
        alignItems="center"
        justifyContent="start"
    >
        <HeadingBox
            width={["75%", "75%", "50%", "50%"]}
            bg="rgba(0,0,0,.5)"
            padding="75px 0"
        >
            <Fade left cascade>
                <MainHeading primary>ADAM GARLING</MainHeading>
                <SubHeading primary>Full Stack Web Developer</SubHeading>
            </Fade>
        </HeadingBox>
    </HeroWrapper>
)

export default Hero
