import React from 'react'
import Container from '../Container'
import { Wrapper, StyledAboutText } from './styled'

const About = () => (
  <Container>
    <Wrapper>
      <StyledAboutText>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ut lacinia leo. Aliquam in ornare arcu.
          Vestibulum blandit lobortis velit vitae rhoncus. Donec vestibulum fringilla leo sed viverra.
        </p>
        <p>
          Pellentesque convallis turpis ex, id varius odio porta eget. Nullam accumsan lectus sed mattis feugiat.
          Aenean ac ligula in sem viverra ultrices. Proin feugiat nec est eu lobortis.
          Proin mollis tempus libero, vitae hendrerit mauris sodales ac.
        </p>
        <p>
          Proin sit amet quam enim. Nullam vel luctus quam, quis tincidunt odio.
          Pellentesque rhoncus ante quis neque scelerisque egestas.
        </p>
      </StyledAboutText>
    </Wrapper>
  </Container>
)

export default About
