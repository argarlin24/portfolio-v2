import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

import { Flex, Box } from "reflexbox/styled-components"
import Layout from "../components/layout"
import { StyledLink } from "../elements"
import { below } from "../utilities/breakpoints"

const Wrapper = styled(Flex)`
    background: #f8f8f8;
    min-height: 100vh;
    padding: 150px 0;
    ${below.large`
      padding: 80px 0; 
  `}
`

export default ({ data }) => {
    const post = data.markdownRemark
    return (
        <Layout>
            <Wrapper flexDirection="column" alignItems="center">
                <Box width={["50%", "50%", "50%", "25%"]}>
                    <Img fluid={post.frontmatter.image.childImageSharp.fluid} />
                </Box>
                <Box width={["75%", "75%", "50%", "50%"]} mt="60px">
                    <h1>{post.frontmatter.title}</h1>
                    <div dangerouslySetInnerHTML={{ __html: post.html }} />
                </Box>
                <Box mt="30px">
                    <StyledLink to="/">HOME</StyledLink>
                </Box>
            </Wrapper>
        </Layout>
    )
}

export const query = graphql`
    query($slug: String!) {
        markdownRemark(fields: { slug: { eq: $slug } }) {
            frontmatter {
                title
                image {
                    childImageSharp {
                        fluid(maxWidth: 500) {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
            }
            html
        }
    }
`
