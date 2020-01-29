import styled from "styled-components"
import { Flex, Box } from "reflexbox/styled-components"

export const StyledFlex = styled(Flex)`
    background: ${props => props.theme.colors.white};
    min-height: 75vh;
    padding-top: 120px;
    padding-bottom: 120px;
`

export const ProjInfo = styled(Box)`
    text-decoration: none;
    color: ${props => props.theme.colors.black};
`

export const CardWrapper = styled.div`
    display: flex;
    flex-direction: column;
`
