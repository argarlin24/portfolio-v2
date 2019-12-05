import React from "react"
import styled from "styled-components"
import { Box, Flex } from "reflexbox/styled-components"
import { PrimaryBtn } from "../elements"
import { below } from "../utilities/breakpoints"
import { navigate } from "gatsby-link"

const StyledFlex = styled(Flex)`
    background: ${props => props.theme.colors.white};
    min-height: 30vh;
    padding: 120px 0 140px 0;
`
const TextArea = styled.textarea`
    border-radius: 4px;
    background-color: #fafafa;
    padding: 4px;
    margin-bottom: 20px;
    border-style: none;
    border: 1px solid rgba(0, 0, 0, 0.25);
    width: 50vw;
    ${below.med`
        width: 75vw;
  `}
`

const Input = styled.input`
    border-radius: 4px;
    background-color: #fafafa;
    padding: 4px;
    margin-bottom: 20px;
    border-style: none;
    border: 1px solid rgba(0, 0, 0, 0.25);
    width: 50vw;
    ${below.med`
        width: 75vw;
  `}
`

const Hidden = styled.div`
    display: none;
`
const BlockLabel = styled.label`
    display: block;
    font-weight: bold;
    color: ${props => props.theme.colors.black};
`
function encode(data) {
    return Object.keys(data)
        .map(
            key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
        )
        .join("&")
}

const ContactForm = () => {
    const [state, setState] = React.useState({})

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
            .then(setState({}))
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
                        action="/"
                    >
                        {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
                        <Hidden>
                            <input name="form-name" value="contact" />
                        </Hidden>
                        <BlockLabel>EMAIL:</BlockLabel>

                        <Input
                            type="email"
                            name="email"
                            onChange={handleChange}
                        />

                        <BlockLabel>MESSAGE:</BlockLabel>

                        <TextArea
                            name="message"
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
