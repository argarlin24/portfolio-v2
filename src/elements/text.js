import styled from "styled-components"

export const Text = styled.p`
    font-size: 1.6rem;
    text-align: ${props => props.textAlign || "left"};
`
