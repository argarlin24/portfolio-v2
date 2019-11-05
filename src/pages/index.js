import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import ContactForm from "../components/contactform"

const IndexPage = () => (
    <Layout>
        <SEO title="Home" />
        <Hero />
        <ContactForm />
    </Layout>
)

export default IndexPage
