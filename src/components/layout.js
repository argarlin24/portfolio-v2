import React from "react"
import PropTypes from "prop-types"
import { ThemeProvider } from "styled-components"
import GlobalStyle from "../utilities/globalstyle"
import theme from "../../config/theme"
import { ScrollingProvider } from "react-scroll-section"

const Layout = ({ children }) => (
    <ThemeProvider theme={theme}>
        <>
            <GlobalStyle />
            <ScrollingProvider scrollBehavior="smooth">
                <main>{children}</main>
            </ScrollingProvider>
        </>
    </ThemeProvider>
)

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout
