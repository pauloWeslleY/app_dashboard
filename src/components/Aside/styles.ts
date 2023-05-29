import styled from 'styled-components'

export const Container = styled.div`
  grid-area: Aside;

  background-color: ${(props) => props.theme.colors.secondary};

  padding-left: 20px;
  border-right: 1px solid ${(props) => props.theme.colors.gray};
`

export const Header = styled.header`
  display: flex;
  align-items: center;

  height: 70px;
`

export const Title = styled.h3`
  color: ${(props) => props.theme.colors.white};
  margin-left: 10px;
`

export const Logotipo = styled.img`
  height: 40px;
  width: 40px;
`

export const MenuHero = styled.nav`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  gap: 7px;
`

export const MenuHeroItems = styled.a`
  color: ${(props) => props.theme.colors.info};
  text-decoration: none;

  display: flex;
  align-items: center;
  gap: 5px;

  transition: ease-in-out 0.3s;

  &:hover {
    opacity: 0.7;
  }

  > svg {
    font-size: 20px;
  }
`
