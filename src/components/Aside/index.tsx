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
        <MenuHeroItems href="/dashboard">
          <MdDashboard />
          Dashboard
        </MenuHeroItems>
        <MenuHeroItems href="/list/entry-balance">
          <MdArrowDownward /> Entradas
        </MenuHeroItems>
        <MenuHeroItems href="/list/out-balance">
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
