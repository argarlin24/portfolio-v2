import React from "react"
import styled from "styled-components"

import Fade from "react-reveal/Fade"
import { Flex, Box } from "reflexbox/styled-components"
import { MainHeading, SubHeading, Text } from "../elements"
import { above, below } from "../utilities/breakpoints"
import DEV from "../images/dev.svg"
import { PrimaryBtn } from "../elements"
import { SectionLink } from "react-scroll-section"

const HeroWrapper = styled(Flex)`
    background-image: url(${DEV});
    background-repeat: no-repeat;
    background-position: 50% 100%;
    background-size: 50%;
    color: ${props => props.theme.colors.black};
    min-height: 90vh;
    padding: 250px 0 0 0;

    ${above.large`
     background-size: 45%;
     padding: 200px 0 0 0;
     min-height: 100vh;
  `}

    ${below.large`
     min-height: 80vh;
     padding: 140px 0 0 0;
  `}
    ${below.small`
     min-height: 80vh;
       padding: 40px 0 0 0;
  `}
`

const HeadingBox = styled(Box)`
    border-radius: 10px;
`

const Hero = () => (
    <Box bg="#f2f2f2">
        <HeroWrapper alignItems="center" flexDirection="column">
            <HeadingBox width={"75%"} justifyContent={"center"}>
                <Fade left cascade>
                    <MainHeading textAlign={"center"}>ADAM GARLING</MainHeading>
                    <SubHeading textAlign={"center"}>Web Developer</SubHeading>
                    <Text textAlign={"center"}>
                        I'm a web developer in San Diego, California with a
                        passion for exlporation and continual learning.
                    </Text>
                </Fade>
            </HeadingBox>

            <Box />
            <Box marginTop={"30px"}>
                <SectionLink section="projects">
                    {({ onClick }) => (
                        <PrimaryBtn onClick={onClick}>VIEW PROJECTS</PrimaryBtn>
                    )}
                </SectionLink>
            </Box>
        </HeroWrapper>
    </Box>
)

export default Hero
