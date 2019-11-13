import styled from "styled-components"

export const SubHeading = styled.h2`
    font-size: 2.4rem;
    line-height: 1;
    text-align: center;
    color: ${props =>
        props.primary ? props.theme.colors.white : props.theme.colors.black};
`
