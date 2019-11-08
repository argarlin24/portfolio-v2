import React from "react"
import PropTypes from "prop-types"
import { ThemeProvider } from "styled-components"
import GlobalStyle from "../utilities/globalstyle"
import theme from "../../config/theme"
import { ScrollingProvider } from "react-scroll-section"

import Header from "./header"
import Navigation from "./navigation"
import MobileNav from "./navigation-mobile"

const Layout = ({ children }) => (
    <ThemeProvider theme={theme}>
        <>
            <GlobalStyle />
            <ScrollingProvider>
                <Header />
                <Navigation />
                <Header />
                <main>{children}</main>
                <MobileNav />
            </ScrollingProvider>
        </>
    </ThemeProvider>
)

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout
