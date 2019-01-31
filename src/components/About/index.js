import React from 'react'
import ReactMarkdown from 'react-markdown'
import Container from '../Container'
import { Wrapper, StyledAboutText } from './styled'

const About = ({ text }) => (
  <Container>
    <Wrapper>
      <StyledAboutText>{text && <ReactMarkdown source={text} />}</StyledAboutText>
    </Wrapper>
  </Container>
)

export default About
