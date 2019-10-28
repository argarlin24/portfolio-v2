import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import styled from "styled-components"

import { Flex, Box } from "reflexbox/styled-components"
import { StyledLink } from "../elements/link"

const Wrapper = styled(Flex)`
    background: #3e66a4;
    min-height: 100vh;
    padding-bottom: 100px;
`

export default ({ data }) => {
    const post = data.markdownRemark
    return (
        <Layout>
            <Wrapper
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
            >
                <Box width={"75%"}>
                    <h1>{post.frontmatter.title}</h1>
                    <div dangerouslySetInnerHTML={{ __html: post.html }} />
                </Box>
                <StyledLink to="/projects/">Back to Posts</StyledLink>
            </Wrapper>
        </Layout>
    )
}

export const query = graphql`
    query($slug: String!) {
        markdownRemark(fields: { slug: { eq: $slug } }) {
            html
            frontmatter {
                title
            }
        }
    }
`
