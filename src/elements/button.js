import styled from "styled-components"

export const PrimaryBtn = styled.button`
    display: block;
    border-radius: 7px;
    padding: 10px 15px;
    border-style: none;
    font-weight: bold;
    background-color: ${props => props.theme.colors.secondary};
    color: #fff;
    cursor: pointer;
`
