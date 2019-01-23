import React from 'react'
import Social from '../Social'
import { Wrapper, Name, Intro, SocialWrap } from './styled'

const Header = () => (
  <Wrapper>
    <Name>Steve Person</Name>
    <Intro>developer</Intro>
    <SocialWrap>
      <Social />
    </SocialWrap>
  </Wrapper>
)

export default Header
