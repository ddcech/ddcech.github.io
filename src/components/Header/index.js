import React from 'react'
import Social from '../Social'
import { Wrapper, Name, Intro, SocialWrap } from './styled'

const Header = ({ title, intro, social }) => (
  <Wrapper>
    <Name>{title && title}</Name>
    <Intro>{intro && intro }</Intro>

    {social &&
      <SocialWrap>
        <Social networks={social} />
      </SocialWrap>
    }

  </Wrapper>
)

export default Header
