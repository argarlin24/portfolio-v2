import styled from "styled-components"
import { Flex, Box } from "reflexbox/styled-components"
import { above, below } from "../../utilities/breakpoints"
import DEV from "../../images/dev.svg"

export const HeroWrapper = styled(Flex)`
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

export const HeadingBox = styled(Box)`
    border-radius: 10px;
`
