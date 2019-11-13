import styled from "styled-components"

export const PrimaryBtn = styled.button`
    border-radius: 7px;
    padding: 10px 15px;
    border-style: none;
    font-weight: bold;
    background-color: ${props => props.theme.colors.secondary};
    color: #444444;
    cursor: pointer;
`
