import React from 'react'
import Social from '../Social'
import { Wrapper, Name, Intro, SocialWrap } from './styled'

const Header = ({ title, intro }) => (
  <Wrapper>
    <Name>{title && title}</Name>
    <Intro>{intro && intro }</Intro>
    <SocialWrap>
      <Social />
    </SocialWrap>
  </Wrapper>
)

export default Header
