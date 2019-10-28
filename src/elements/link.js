import styled from "styled-components"
import { Link } from "gatsby"

export const StyledLink = styled(Link)`
    text-decoration: none;
    font-weight: 700;
    color: ${props => props.theme.colors.secondary};
    cursor: pointer;
`
