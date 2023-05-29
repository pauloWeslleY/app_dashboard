import React, { useMemo } from 'react'
import { Container, Profile, UserName, Welcome } from './styles'
import { Toggle } from '../Toggle'

import EMOJIS from '../../utils/emojis'

export const MainHeader: React.FC = () => {
  const emoji = useMemo(() => {
    const index = Math.floor(Math.random() * EMOJIS.length)
    return EMOJIS[index]
  }, [])

  return (
    <Container>
      <Toggle />

      <Profile>
        <Welcome>Hi, {emoji}</Welcome>
        <UserName>Weslley Lima</UserName>
      </Profile>
    </Container>
  )
}
