import React from "react"
import styled from "styled-components"

import { Flex, Box } from "reflexbox/styled-components"
import { below } from "../utilities/breakpoints"
import heroImage from "../images/dev-ing.svg"

const HeroWrapper = styled(Flex)`
    background-color: #3e66a4;
    /* background-image: url(${heroImage}); */
    background-repeat: no-repeat;
    background-position: 115% 100%;
    background-size: 60% auto;
    height: 100vh;
    width: 100%;
    color: #333333;

    ${below.med`
      background-size: 100% auto;
      background-position: 50% 50%;
    }
  `}
`

const BoxOne = styled(Box)`
    padding-top: 100px;
    padding-left: 60px;
    
    ${below.med`
     padding 0 0; 
     text-align: left;
  `}
`

export const MainHeading = styled.h1`
    font-size: 64px;

    ${below.med`
      font-size: 36px; 
    }
  `}
`

const SubHeading = styled.h2`
    font-size: 36px;
`

const HeroImage = styled.img`
    height: auto;
    width: 100%;
`

const Hero = () => (
    <HeroWrapper flexWrap="wrap">
        <BoxOne width={["100%", "100%", "50%", "50%"]}>
            <MainHeading>ADAM GARLING</MainHeading>
            <SubHeading>WEB DEVELOPER</SubHeading>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore.
            </p>
        </BoxOne>
        <Box alignItems="flex-end" width={["100%", "100%", "50%", "50%"]} justifyContent="center">
            <HeroImage src={heroImage} alt="developer" />
        </Box>
    </HeroWrapper>
)

export default Hero
