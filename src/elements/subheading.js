import styled from "styled-components"

export const SubHeading = styled.h2`
    font-size: 3.8rem;
    line-height: 1;
    text-align: ${props => props.textAlign || "left"};
    color: ${props =>
        props.primary ? props.theme.colors.white : props.theme.colors.black};
`
