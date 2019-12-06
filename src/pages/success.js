import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Flex, Box } from "reflexbox/styled-components"
import styled from "styled-components"
import { MainHeading } from "../elements"
import Sent from "../images/sent.svg"

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
const Banner = styled.img`
    display: block;
    height: auto;
    width: 100%;
`

const SuccessPage = () => (
    <Layout>
        <SEO title="Success, Message Sent" />
        <Flex
            height="100vh"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
        >
            <Box width="40%" marginBottom="32px"> 
            <Banner src={Sent} alt="Message Sent"/>
            </Box>
            <Box marginBottom="32px">
            <MainHeading textAlign="center">
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
