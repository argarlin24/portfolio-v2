import React from "react"
import { Box } from "reflexbox/styled-components"
import { PrimaryBtn } from "../../elements"
import { StyledFlex, TextArea, Input, Hidden, BlockLabel } from "./styles"
import { navigate } from "gatsby-link"

function encode(data) {
    return Object.keys(data)
        .map(
            key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
        )
        .join("&")
}

const ContactForm = () => {
    const [state, setState] = React.useState({
        email: "",
        message: "",
    })

    const handleChange = e => {
        setState({ ...state, [e.target.name]: e.target.value })
    }

    const handleSubmit = e => {
        e.preventDefault()
        const form = e.target
        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({
                "form-name": form.getAttribute("name"),
                ...state,
            }),
        })
            .then(() => navigate(form.getAttribute("action")))
            .catch(error => alert(error))
    }
    return (
        <StyledFlex flexDirection="column" alignItems="center">
            <Box width={"75%"} display="flex" justifyContent="center">
                <h1>CONTACT</h1>
            </Box>
            <Box width="75%" display="flex" justifyContent="center">
                <div>
                    <form
                        name="contact"
                        method="post"
                        netlify-honeypot="bot-field"
                        data-netlify="true"
                        onSubmit={handleSubmit}
                        action="/success"
                    >
                        {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
                        <Hidden>
                            <input name="form-name" value="contact" readOnly />
                        </Hidden>
                        <BlockLabel htmlFor="email">EMAIL:</BlockLabel>

                        <Input
                            type="email"
                            name="email"
                            id="email"
                            onChange={handleChange}
                        />

                        <BlockLabel htmlFor="message">MESSAGE:</BlockLabel>

                        <TextArea
                            name="message"
                            id="message"
                            rows="10"
                            onChange={handleChange}
                        />
                        <Hidden>
                            <label>Don’t fill this out if you're human:</label>
                            <input name="bot-field" onChange={handleChange} />
                        </Hidden>

                        <PrimaryBtn type="submit">SUBMIT</PrimaryBtn>
                    </form>
                </div>
            </Box>
        </StyledFlex>
    )
}

export default ContactForm
