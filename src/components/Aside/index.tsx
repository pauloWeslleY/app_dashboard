import { MdExitToApp } from 'react-icons/md'
import { useAuthenticator } from '../../hooks/useAuthenticator'
import { MENU_ITEMS } from './[menu_items]/[menu_items_props]'
import Logo from '../../assets/logo.svg'

import {
  Title,
  Container,
  Header,
  Logotipo,
  MenuHero,
  MenuHeroItems,
  MenuHeroButton,
} from './styles'

export const Aside: React.FC = () => {
  const { signOut } = useAuthenticator()

  return (
    <Container>
      <Header>
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
    </Container>
  )
}
