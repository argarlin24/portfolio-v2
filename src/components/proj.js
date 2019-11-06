import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import Fade from "react-reveal/Fade"
import { Flex, Box } from "reflexbox/styled-components"

const StyledFlex = styled(Flex)`
    background: ${props => props.theme.colors.white};
    min-height: 100vh;
`

const ProjLink = styled(Link)`
    text-decoration: none;
    color: ${props => props.theme.colors.black};
`

const Projects = ({ data }) => {
    return (
        <StyledFlex
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
        >
            <Box width={"75%"}>
                <h1>PROJECTS</h1>
            </Box>
            <Box width={"75%"}>
                <Fade left cascade>
                    <div>
                        {data.allMarkdownRemark.edges.map(({ node }) => (
                            <div key={node.id}>
                                <ProjLink to={node.fields.slug}>
                                    <h3>{node.frontmatter.title} </h3>
                                    <p>{node.excerpt}</p>
                                </ProjLink>
                            </div>
                        ))}
                    </div>
                </Fade>
            </Box>
        </StyledFlex>
    )
}

export default Projects
