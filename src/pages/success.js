import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Flex, Box } from "reflexbox/styled-components"
import styled from "styled-components"
import { MainHeading } from "../elements"

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

const SuccessPage = () => (
    <Layout>
        <SEO title="404: Not found" />
        <Flex
            height="100vh"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            bg="#3e66a4"
        >
            <Box width="90%" marginBottom="32px">
                <MainHeading primary textAlign="center">
                    Thanks for getting in touch!
                </MainHeading>
            </Box>
            <Box>
                <ReturnBtn to="/">Return Home</ReturnBtn>
            </Box>
        </Flex>
    </Layout>
)

export default SuccessPage
