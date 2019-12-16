import styled from "styled-components"
import { Link } from "gatsby"

export const StyledLink = styled(Link)`
    text-decoration: none;
    font-weight: 700;
    background: ${props => props.theme.colors.secondary};
    color: ${props => props.theme.colors.white};
    cursor: pointer;
    border-radius: 7px;
    padding: 10px 15px;
    &:hover {
        background: #0e7a70;
    }
`
