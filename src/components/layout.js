import React from "react"
import PropTypes from "prop-types"
import { ThemeProvider } from "styled-components"
import GlobalStyle from "../utilities/globalstyle"
import theme from "../../config/theme"

import Header from "./header"
import Navigation from "./navigation"
import MobileNav from "./navigation-mobile"

const Layout = ({ children }) => (
    <ThemeProvider theme={theme}>
        <>
            <GlobalStyle />
            <Header />
            <Navigation />
            <Header />
            <main>{children}</main>
            <MobileNav />
        </>
    </ThemeProvider>
)

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout
