import React, { Component } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Logo from "../images/logo.png"
//import hamburger from "../img/hamburger.svg"

const NavWrapper = styled.div`
  display: flex;
  font-family: sans-serif;
  padding: 15px 30px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.25);
  align-content: center;
  justify-content: space-between; 
  background-color: #3e66a4;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 15px;
  }
`

const NavItems = styled.nav`
  display: flex;
  /* align-items: center; */

  @media (max-width: 768px) {
    flex-direction: column;
    /* justify-content: flex-start;
    align-items: flex-start; */
    display: ${props => (props.toggled ? "flex" : "none")};
    margin-top: 10px;
    padding-top: 10px;
  }
`

const NavLink = styled.div`
  padding-right: 30px;

  & a {
    display: block;
    text-decoration: none;
    color: #353535;
    font-weight: bold;
  }

  &.innerLink {
    @media (max-width: 768px) {
      padding: 10px;
      /* border-bottom: 1px solid black; */

      :hover,
      :active {
        background: #f1f3f5;
      }
    }
  }
`

const Toggle = styled.button`
  background: none;
  border: none;
  display: none;

  @media (max-width: 768px) {
    align-self: flex-end;
    display: initial;
    position: absolute;
    cursor: pointer;
  }
`

const StyledLogo = styled.img`
  width: 60%;
  height: auto; 
`; 

class Nav extends Component {
  constructor(props) {
    super(props)
    this.state = {
      toggled: false,
      isTop: true,
    }
  }

  toggleBtn = () => {
    this.setState(state => ({
      toggled: !this.state.toggled,
    }))
  }

  render() {
    return (
      <NavWrapper>
        <NavLink href="#">
          <Link to="/">
            HOME
          </Link>
        </NavLink>
        <Toggle onClick={this.toggleBtn}>
          TOGGLE
          {/* <img src={hamburger} /> */}
        </Toggle>
        <NavItems toggled={this.state.toggled}>
          <NavLink className="innerLink">
            <Link to="/page-2/" href="#">
              PROJECTS
            </Link>
          </NavLink>
          <NavLink className="innerLink">
            <Link to="#" href="#">
              CONTACT
            </Link>
          </NavLink>
        </NavItems>
      </NavWrapper>
    )
  }
}

export default Nav
