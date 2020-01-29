import styled from "styled-components"
import { Flex } from "reflexbox/styled-components"
import { below } from "../../utilities/breakpoints"

export const StyledFlex = styled(Flex)`
    background: ${props => props.theme.colors.white};
    min-height: 30vh;
    padding: 120px 0 140px 0;
    background: #f2f2f2;
`
export const TextArea = styled.textarea`
    border-radius: 4px;
    background-color: #fafafa;
    padding: 4px;
    margin-bottom: 20px;
    border-style: none;
    border: 1px solid rgba(0, 0, 0, 0.25);
    width: 50vw;
    ${below.med`
        width: 75vw;
  `}
`

export const Input = styled.input`
    border-radius: 4px;
    background-color: #fafafa;
    padding: 4px;
    margin-bottom: 20px;
    border-style: none;
    border: 1px solid rgba(0, 0, 0, 0.25);
    width: 50vw;
    ${below.med`
        width: 75vw;
  `}
`

export const Hidden = styled.div`
    display: none;
`
export const BlockLabel = styled.label`
    display: block;
    font-weight: bold;
    color: ${props => props.theme.colors.black};
`
