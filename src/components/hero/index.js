import React from "react"

import Fade from "react-reveal/Fade"
import { Box } from "reflexbox/styled-components"
import { MainHeading, SubHeading, Text, PrimaryBtn } from "../../elements"
import { SectionLink } from "react-scroll-section"
import { HeroWrapper, HeadingBox } from "./styles"

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
