import styled from "styled-components"
import { below } from "../utilities/breakpoints"

export const SubHeading = styled.h2`
    font-size: 3.2rem;
    line-height: 1;
    text-align: ${props => props.textAlign || "left"};
    color: ${props =>
        props.primary ? props.theme.colors.white : props.theme.colors.black};
    ${below.med`
     font-size: 2.4rem;
  `}
`
