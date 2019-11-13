import React from "react"
import styled from "styled-components"
import { Box, Flex } from "reflexbox/styled-components"
import { PrimaryBtn } from "../elements"
import { below } from "../utilities/breakpoints"

const StyledFlex = styled(Flex)`
    background: ${props => props.theme.colors.primary};
    min-height: 60vh;
    padding: 120px 0 140px 0;
`
const TextArea = styled.textarea`
    border-radius: 4px;
    background-color: #fafafa;
    padding: 4px;
    margin-bottom: 20px;
    border-style: none;
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
    width: 50vw;
    ${below.med`
        width: 75vw;
  `}
`

const Hidden = styled.p`
    display: none;
`
const BlockLabel = styled.label`
    display: block;
    font-weight: bold;
    color: ${props => props.theme.colors.white};
`

const ContactForm = () => (
    <StyledFlex justifyContent="center">
        <Box width="75%" display="flex" justifyContent="center">
            <div>
                <form
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

                    <BlockLabel>EMAIL:</BlockLabel>

                    <Input type="email" name="email" />

                    <BlockLabel>MESSAGE:</BlockLabel>

                    <TextArea name="message" rows="10" />

                    <div data-netlify-recaptcha="true" />

                    <PrimaryBtn type="submit">SUBMIT</PrimaryBtn>
                </form>
            </div>
        </Box>
    </StyledFlex>
)

export default ContactForm
