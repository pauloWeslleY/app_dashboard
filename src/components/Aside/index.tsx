import React from 'react'
import {
  MdDashboard,
  MdArrowDownward,
  MdArrowUpward,
  MdExitToApp,
} from 'react-icons/md'
import {
  Container,
  Header,
  Logotipo,
  MenuHero,
  MenuHeroItems,
  Title,
} from './styles'

import Logo from '../../assets/logo.svg'

export const Aside: React.FC = () => {
  return (
    <Container>
      <Header>
        <Logotipo src={Logo} alt={'Logotipo do App'} />
        <Title>My Wallet</Title>
      </Header>

      <MenuHero>
        <MenuHeroItems href="#">
          <MdDashboard />
          Dashboard
        </MenuHeroItems>
        <MenuHeroItems href="#">
          <MdArrowDownward /> Entradas
        </MenuHeroItems>
        <MenuHeroItems href="#">
          <MdArrowUpward />
          Saídas
        </MenuHeroItems>
        <MenuHeroItems href="#">
          <MdExitToApp />
          Sair
        </MenuHeroItems>
      </MenuHero>
    </Container>
  )
}
