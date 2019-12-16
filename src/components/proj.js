import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"

import Fade from "react-reveal/Fade"
import { Flex, Box } from "reflexbox/styled-components"

import { Card, StyledLink } from "../elements"

const StyledFlex = styled(Flex)`
    background: ${props => props.theme.colors.white};
    min-height: 75vh;
    padding-top: 120px;
    padding-bottom: 120px;
`

const ProjInfo = styled(Box)`
    text-decoration: none;
    color: ${props => props.theme.colors.black};
`

const CardWrapper = styled.div`
    display: flex;
    flex-direction: column;
`

const Projects = ({ data }) => {
    return (
        <StyledFlex
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
        >
            <Box width={"75%"} display="flex" justifyContent="center">
                <h1>PROJECTS</h1>
            </Box>
            <Box width={["75%", "75%", "50%", "50%"]}>
                <Fade left cascade>
                    <CardWrapper>
                        {data.allMarkdownRemark.edges.map(({ node }) => (
                            <Card key={node.id} flexDirection="column">
                                <Box width={"66%"}>
                                    <Img
                                        fluid={
                                            node.frontmatter.image
                                                .childImageSharp.fluid
                                        }
                                    />
                                </Box>

                                <Box marginTop="30px">
                                    <ProjInfo>
                                        <h3>
                                            {node.frontmatter.title.toUpperCase()}
                                        </h3>
                                        <div>{node.excerpt}</div>
                                    </ProjInfo>
                                </Box>
                                <Box marginTop="30px">
                                    <StyledLink to={`${node.fields.slug}`}>
                                        Learn More
                                    </StyledLink>
                                </Box>
                            </Card>
                        ))}
                    </CardWrapper>
                </Fade>
            </Box>
        </StyledFlex>
    )
}

export default Projects
