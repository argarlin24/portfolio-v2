import styled from "styled-components"

export const Wrapper = styled.div`
    background: ${props => props.theme.colors.primary};
    position: fixed;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: 1030;
    display: flex;
    height: 75px;
    font-family: sans-serif;
    border-top: 1px solid rgba(0, 0, 0, 0.25);
    align-content: center;
    justify-content: center;
    @media (min-width: 769px) {
        display: none;
    }
`

export const MobileItems = styled.nav`
    display: flex;
    align-items: center;
`

export const MobileLink = styled.div`
    padding: 15px 30px;
    display: block;
    text-decoration: none;
    color: ${props => props.theme.colors.white};
    cursor: pointer;
    & span {
        display: block;
        font-size: 12px;
        font-weight: bold;
    }
`

export const Icons = styled.img`
    width: 35px;
    height: 35px;
    margin: 0 auto;
    display: block;
    color: ${props => props.theme.colors.white};
`
