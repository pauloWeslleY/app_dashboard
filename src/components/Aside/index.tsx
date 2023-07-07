import { useState } from 'react'
import { MdExitToApp } from 'react-icons/md'
import { AiOutlineClose } from 'react-icons/ai'
import { HiMenu } from 'react-icons/hi'
import { useAuthenticator } from '../../hooks/useAuthenticator'
import { useThemeContext } from '../../hooks/useThemeContext'
import { MENU_ITEMS } from './[menu_items]/[menu_items_props]'
import { Toggle } from '../Toggle'
import Logo from '../../assets/logo.svg'

import {
  Title,
  Container,
  Header,
  Logotipo,
  MenuHero,
  MenuHeroItems,
  MenuHeroButton,
  ToggleMobileMenu,
  ThemeToggleFooter,
} from './styles'

export const Aside: React.FC = () => {
  const { onHandleToggleTheme, theme } = useThemeContext()
  const { signOut } = useAuthenticator()
  const [toggleMenuIsOpen, setToggleMenuIsOpen] = useState<boolean>(false)
  const [darkTheme, setDarkTheme] = useState(() =>
    theme.title === 'dark' ? true : false
  )

  const handleToggleMenu = () => {
    setToggleMenuIsOpen(!toggleMenuIsOpen)
  }

  const handleToggleTheme = () => {
    setDarkTheme(!darkTheme)
    onHandleToggleTheme()
  }

  return (
    <Container menuIsOpen={toggleMenuIsOpen}>
      <Header>
        <ToggleMobileMenu onClick={handleToggleMenu}>
          {toggleMenuIsOpen ? <AiOutlineClose /> : <HiMenu />}
        </ToggleMobileMenu>

        <Logotipo src={Logo} alt={'Logotipo do App'} />
        <Title>My Wallet</Title>
      </Header>

      <MenuHero>
        {MENU_ITEMS.map((item, i) => (
          <MenuHeroItems key={i} href={item.path}>
            {item.icon}
            {item.label}
          </MenuHeroItems>
        ))}

        <MenuHeroButton onClick={signOut}>
          <MdExitToApp />
          Sair
        </MenuHeroButton>
      </MenuHero>

      <ThemeToggleFooter menuOpen={toggleMenuIsOpen}>
        <Toggle
          labelLeft="Light"
          labelRight="Dark"
          checked={darkTheme}
          onChange={handleToggleTheme}
        />
      </ThemeToggleFooter>
    </Container>
  )
}
