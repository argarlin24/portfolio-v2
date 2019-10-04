import React from "react"
import { Link, graphql } from "gatsby"
import styled from "styled-components"

import { Flex, Box } from "reflexbox/styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"

const StyledFlex = styled(Flex)`
    background: #3e66a4;
    height: 100vh;
`

const ProjLink = styled(Link)`
    text-decoration: none;
    color: #000;
`

const ProjectsPage = ({ data }) => {
    console.log(data)
    return (
        <Layout>
            <SEO title="Home" />
            <StyledFlex flexWrap="wrap">
                <h1>Projects</h1>
                <Box>
                    {data.allMarkdownRemark.edges.map(({ node }) => (
                        <div key={node.id}>
                            <ProjLink to={node.fields.slug}>
                                <h3>{node.frontmatter.title} </h3>
                                <p>{node.excerpt}</p>
                            </ProjLink>
                        </div>
                    ))}
                </Box>
            </StyledFlex>
        </Layout>
    )
}

export default ProjectsPage

export const query = graphql`
    query {
        allMarkdownRemark(
            sort: { fields: [frontmatter___position], order: ASC }
        ) {
            totalCount
            edges {
                node {
                    id
                    frontmatter {
                        title
                        date(formatString: "DD MMMM, YYYY")
                    }
                    fields {
                        slug
                    }
                    excerpt
                }
            }
        }
    }
`
