import React from "react"
import styled from "styled-components"

import Fade from "react-reveal/Fade"
import { Flex, Box } from "reflexbox/styled-components"
import { MainHeading, SubHeading, Text } from "../elements"
import { below } from "../utilities/breakpoints"

const HeroWrapper = styled(Flex)`
    background: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.black};
    min-height: 100vh;
`

const BoxOne = styled(Box)`
    padding-top: 100px;
    padding-left: 60px;

    ${below.med`
     padding 50px 30px; 
     text-align: left;
  `}
`

const Hero = () => (
    <HeroWrapper flexDirection="column">
        <BoxOne width={"90%"}>
            <Fade left cascade>
                <MainHeading>ADAM GARLING</MainHeading>
                <SubHeading>Full Stack Web Developer</SubHeading>
            </Fade>
            <Text textAlign={"center"}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Text>
        </BoxOne>
    </HeroWrapper>
)

export default Hero
