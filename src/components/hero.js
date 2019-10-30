import React from "react"
import styled from "styled-components"

import Fade from "react-reveal/Fade"
import { Flex, Box } from "reflexbox/styled-components"
import { below } from "../utilities/breakpoints"
import heroImage from "../images/dev-ing.svg"

const HeroWrapper = styled(Flex)`
    background: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.black};
    min-height: 100%;
    padding-bottom: 100px;

    /* ${below.med`
      background-size: 100% auto;
      background-position: 50% 50%;
      height: calc(100vh - 75px);
    }
  `} */
`

const BoxOne = styled(Box)`
    padding-top: 100px;
    padding-left: 60px;

    ${below.med`
     padding 50px 30px; 
     text-align: left;
  `}
`

export const MainHeading = styled.h1`
    font-size: 64px;
    line-height: 1;

    ${below.med`
      font-size: 36px; 
    }
  `}
`

const SubHeading = styled.h2`
    font-size: 36px;
    line-height: 1;
`

const HeroImage = styled.img`
    height: auto;
    width: 100%;
`
const DIV = styled.div`
    height: 1px;
    width: 1px;
`

const Hero = () => (
    <HeroWrapper flexDirection="column">
        <BoxOne width={["75%", "75%", "50%", "50%"]}>
            <Fade left>
                <MainHeading>ADAM GARLING</MainHeading>
                <SubHeading>WEB DEVELOPER</SubHeading>
            </Fade>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore.
            </p>
        </BoxOne>
        <Box width={["50%", "50%", "75%", "75%"]} alignSelf="flex-end">
            <HeroImage src={heroImage} alt="developer" />
        </Box>
        <DIV />
    </HeroWrapper>
)

export default Hero
