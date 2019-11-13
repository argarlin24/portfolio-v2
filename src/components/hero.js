import React from "react"
import styled from "styled-components"

import Fade from "react-reveal/Fade"
import { Flex, Box } from "reflexbox/styled-components"
import { MainHeading, SubHeading } from "../elements"
import { below } from "../utilities/breakpoints"
import pwaImg from "../images/pwa-transparent.svg"

const HeroWrapper = styled(Flex)`
    background: url(${pwaImg});
    background-position: center;
    background-repeat: no-repeat;
    background-size: 50%;
    background-position: 50% 75%;
    color: ${props => props.theme.colors.black};
    min-height: 100vh;
    padding-top: 15vh;
    ${below.med`
         background-size: 75%;
  `}
    ${below.small`
         padding-top: 10vh;
  `}
`

const HeadingBox = styled(Box)`
    border-radius: 10px;
`

const Hero = () => (
    <Box bg="#3e66a4">
        <HeroWrapper
            flexDirection="column"
            alignItems="center"
            justifyContent="start"
        >
            <HeadingBox
                width={["75%", "75%", "50%", "50%"]}
                // bg="rgba(0,0,0,.5)"
                padding="75px 0"
            >
                <Fade left cascade>
                    <MainHeading primary>ADAM GARLING</MainHeading>
                    <SubHeading primary>Full Stack Web Developer</SubHeading>
                </Fade>
            </HeadingBox>
        </HeroWrapper>
    </Box>
)

export default Hero
