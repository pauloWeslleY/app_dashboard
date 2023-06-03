import React from 'react'

import {
  Container,
  Header,
  Logotipo,
  MenuHero,
  MenuHeroItems,
  Title,
} from './styles'

import { MENU_ITEMS } from './[menu_items]/[menu_items_props]'
import Logo from '../../assets/logo.svg'

export const Aside: React.FC = () => {
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
      </MenuHero>
    </Container>
  )
}
