import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import styled from "styled-components"

import { Flex, Box } from "reflexbox/styled-components"

const Wrapper = styled(Flex)`
    background: #3e66a4;
    height: 100vh;
`

export default ({ data }) => {
    const post = data.markdownRemark
    return (
        <Layout>
            <Wrapper>
                <Box>
                    <h1>{post.frontmatter.title}</h1>
                    <div dangerouslySetInnerHTML={{ __html: post.html }} />
                </Box>
                <Link to="/projects/">Back to Posts</Link>
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
