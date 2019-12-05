import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { MainHeading } from "../elements"
import { Flex, Box } from "reflexbox/styled-components"
import styled from "styled-components"

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
            bg="#3e66a4"
        >
            <Box width={"75%"} marginBottom="32px">
                <MainHeading primary textAlign="center">
                    OOPS, PAGE NOT FOUND...
                </MainHeading>
            </Box>
            <ReturnBtn to="/">Return Home</ReturnBtn>
            <Box />
        </Flex>
    </Layout>
)

export default NotFoundPage
