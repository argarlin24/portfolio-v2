import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import Fade from "react-reveal/Fade"
import { Flex, Box } from "reflexbox/styled-components"
import { Card, Text } from "../elements"

const StyledFlex = styled(Flex)`
    background: ${props => props.theme.colors.lightgray};
    min-height: 75vh;
    padding-top: 15vh;
    padding-bottom: 15vh;
`

const ProjLink = styled(Link)`
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
                            <Card key={node.id}>
                                <ProjLink to={node.fields.slug}>
                                    <h3>
                                        {node.frontmatter.title.toUpperCase()}
                                    </h3>
                                    <Text>{node.excerpt}</Text>
                                </ProjLink>
                            </Card>
                        ))}
                    </CardWrapper>
                </Fade>
            </Box>
        </StyledFlex>
    )
}

export default Projects
