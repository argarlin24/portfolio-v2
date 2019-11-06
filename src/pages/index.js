import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import ContactForm from "../components/contactform"
import Projects from "../components/proj"

const IndexPage = ({ data }) => (
    <Layout>
        <SEO title="Home" />
        <Hero />
        <Projects data={data} />
        <ContactForm />
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
