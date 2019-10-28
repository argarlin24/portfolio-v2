import React from "react"
import { Link, graphql } from "gatsby"
import styled from "styled-components"

import { Flex, Box } from "reflexbox/styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"

const StyledFlex = styled(Flex)`
    background: ${props => props.theme.colors.primary};
    min-height: 100vh;
`

const ProjLink = styled(Link)`
    text-decoration: none;
    color: ${props => props.theme.colors.black};
`

const ProjectsPage = ({ data }) => {
    console.log(data)
    return (
        <Layout>
            <SEO title="Home" />
            <StyledFlex
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
            >
                <Box width={"75%"}>
                    <h1>Projects</h1>
                </Box>
                <Box width={"75%"}>
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
