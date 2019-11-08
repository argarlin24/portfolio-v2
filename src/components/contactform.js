import React from "react"
import styled from "styled-components"
import { Box, Flex } from "reflexbox/styled-components"

const StyledFlex = styled(Flex)`
    background: ${props => props.theme.colors.primary};
    min-height: 200px;
    padding: 100px 0;
`

const Form = styled.form``

const Hidden = styled.p`
    display: none;
`
const BlockLabel = styled.label`
    display: block;
`

const ContactForm = () => (
    <StyledFlex justifyContent="center">
        <Box width="75%" display="flex" justifyContent="center">
            <div>
                <Form
                    name="contact"
                    method="POST"
                    netlify-honeypot="bot-field"
                    data-netlify-recaptcha="true"
                    data-netlify="true"
                >
                    <Hidden>
                        <label>
                            Don’t fill this out if you're human:{" "}
                            <input name="bot-field" />
                        </label>
                    </Hidden>

                    <BlockLabel>Your Email:</BlockLabel>

                    <input type="email" name="email" />

                    <BlockLabel>Message:</BlockLabel>

                    <textarea name="message" rows="10" />

                    <div data-netlify-recaptcha="true" />

                    <button type="submit">Send</button>
                </Form>
            </div>
        </Box>
    </StyledFlex>
)

export default ContactForm
