import React from "react"
import styled from "styled-components"

import { Flex, Box } from "@rebass/grid"
import { below } from "../utilities/breakpoints"
import heroImage from "../images/dev-ing.svg"

const BoxOne = styled(Box)`
  padding-top: 100px;
  padding-left: 60px;
`

const HeroWrapper = styled(Flex)`
  background-color: #3e66a4;
  background-image: url(${heroImage});
  background-repeat: no-repeat;
  background-position: 115% 100%;
  background-size: 60% auto;
  height: 95vh;
  width: 100%;
  color: #333333;

  ${below.med`
      
    }
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

const Hero = () => (
  <HeroWrapper>
    <BoxOne width={[1, 1 / 2]}>
      <MainHeading>ADAM GARLING</MainHeading>
      <SubHeading>WEB DEVELOPER</SubHeading>
      <p>I am based in San Diego, California. I am passionate about Full-Stack Development, surfing & doing good.</p>
    </BoxOne>
  </HeroWrapper>
)

export default Hero
