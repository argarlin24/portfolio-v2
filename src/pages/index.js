import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Section } from "react-scroll-section"
import Hero from "../components/hero"
import ContactForm from "../components/contactform"
import Projects from "../components/proj"

const IndexPage = ({ data }) => (
    <Layout>
        <SEO title="Home" />
        <Section id="home">
            <Hero />
        </Section>
        <Section id="projects">
            <Projects data={data} />
        </Section>
        <Section id="contact">
            <ContactForm />
        </Section>
    </Layout>
)

export default IndexPage

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
                        image {
                            childImageSharp {
                                fluid(maxWidth: 500) {
                                    ...GatsbyImageSharpFluid
                                }
                            }
                        }
                    }
                    fields {
                        slug
                    }
                    html
                }
            }
        }
    }
`
