import styled from "styled-components"

export const MainHeading = styled.h1`
    font-size: 4.4rem;
    line-height: 1;
    text-align: ${props => props.textAlign || "left"};
    color: ${props =>
        props.primary ? props.theme.colors.white : props.theme.colors.black};
`
