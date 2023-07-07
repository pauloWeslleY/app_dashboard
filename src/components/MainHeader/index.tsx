import { useMemo, useState } from 'react'
import { Container, Profile, UserName, Welcome } from './styles'
import { Toggle } from '../Toggle'
import { useThemeContext } from '../../hooks/useThemeContext'

import EMOJIS from '../../utils/emojis'

export const MainHeader: React.FC = () => {
  const { theme, onHandleToggleTheme } = useThemeContext()
  const [darkTheme, setDarkTheme] = useState(() =>
    theme.title === 'dark' ? true : false
  )

  const handleChangeTheme = () => {
    setDarkTheme(!darkTheme)
    onHandleToggleTheme()
  }

  const emoji = useMemo(() => {
    const index = Math.floor(Math.random() * EMOJIS.length)
    return EMOJIS[index]
  }, [])

  return (
    <Container>
      <Toggle
        labelLeft="Light"
        labelRight="Dark"
        checked={darkTheme}
        onChange={handleChangeTheme}
      />

      <Profile>
        <Welcome>Hi, {emoji}</Welcome>
        <UserName>Weslley Lima</UserName>
      </Profile>
    </Container>
  )
}
