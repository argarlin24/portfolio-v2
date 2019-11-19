import React from "react"
import styled from "styled-components"

import Fade from "react-reveal/Fade"
import { Flex, Box } from "reflexbox/styled-components"
import { MainHeading, SubHeading, Text } from "../elements"
import { below } from "../utilities/breakpoints"
import pwaImg from "../images/pwa-transparent.svg"

const HeroWrapper = styled(Flex)`
    color: ${props => props.theme.colors.black};
    min-height: 100vh;
    padding: 100px 100px 100px 100px;
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

const ImgBox = styled(Box)`
    background: rgba(0, 0, 0, 0.1);
    padding: 30px;
    border-radius: 50%;
`

const Img = styled.img`
    height: auto;
    width: 100%;
`

const Hero = () => (
    <Box bg="#3e66a4">
        <HeroWrapper justifyContent="space-evenly">
            <HeadingBox width={"40%"} padding="75px 0">
                <Fade left cascade>
                    <MainHeading primary>ADAM GARLING</MainHeading>
                    <SubHeading primary>Full Stack Web Developer</SubHeading>
                    <Text primary>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit
                        anim id est laborum.
                    </Text>
                    <p>Icon</p>
                    <p>Icon</p>
                </Fade>
            </HeadingBox>
            <Box />
            <ImgBox width="40%" alignSelf="flex-end">
                <Img src={pwaImg} />
            </ImgBox>
        </HeroWrapper>
    </Box>
)

export default Hero
