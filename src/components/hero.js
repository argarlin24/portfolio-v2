import React from "react"
import styled from "styled-components"

import Fade from "react-reveal/Fade"
import { Flex, Box } from "reflexbox/styled-components"
import { MainHeading, SubHeading, Text } from "../elements"
import { below } from "../utilities/breakpoints"
import DEV from "../images/dev.svg"
import { PrimaryBtn } from "../elements"

const HeroWrapper = styled(Flex)`
    background-image: url(${DEV});
    background-repeat: no-repeat;
    background-position: 50% 100%;
    background-size: 50%;
    color: ${props => props.theme.colors.black};
    min-height: 100vh;
    padding: 200px 0;

    ${below.med`
       padding: 40px 0;
  `}
    ${below.small`
         padding-top: 10vh;
  `}
`

const HeadingBox = styled(Box)`
    border-radius: 10px;
`

const Hero = () => (
    <Box>
        <HeroWrapper alignItems="center" flexDirection="column">
            <HeadingBox width={"75%"} justifyContent={"center"}>
                <Fade left cascade>
                    <MainHeading textAlign={"center"}>ADAM GARLING</MainHeading>
                    <SubHeading textAlign={"center"}>
                        Full Stack Web Developer
                    </SubHeading>
                    <Text textAlign={"center"}>
                        There will be some little tagline here.
                    </Text>
                </Fade>
            </HeadingBox>

            <Box />
            <Box marginTop={"30px"}>
                <PrimaryBtn>PROJECTS</PrimaryBtn>
            </Box>
        </HeroWrapper>
    </Box>
)

export default Hero
