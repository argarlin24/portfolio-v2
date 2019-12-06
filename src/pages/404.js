import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Flex, Box } from "reflexbox/styled-components"
import styled from "styled-components"
import FourOFour from "../images/404.svg"

const Banner = styled.img`
    display: block;
    height: auto;
    width: 100%;
`

export const ReturnBtn = styled(Link)`
    display: block;
    border-radius: 7px;
    padding: 10px 15px;
    border-style: none;
    font-weight: bold;
    background-color: ${props => props.theme.colors.secondary};
    color: #fafafa;
    cursor: pointer;
    text-decoration: none;
`

const NotFoundPage = () => (
    <Layout>
        <SEO title="404: Not found" />
        <Flex
            height="100vh"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
        >
            <Box width={"50%"} marginBottom="32px">
                <Banner src={FourOFour} alt="(404) Page Not Found"/>
            </Box>
            <ReturnBtn to="/">Return Home</ReturnBtn>
            <Box />
        </Flex>
    </Layout>
)

export default NotFoundPage
