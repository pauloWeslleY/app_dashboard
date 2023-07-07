import styled, { css } from 'styled-components'

interface IContainerProps {
  menuIsOpen: boolean
}

interface IThemeToggleFooterProps {
  menuOpen: boolean
}

export const Container = styled.div<IContainerProps>`
  grid-area: Aside;

  background-color: ${props => props.theme.colors.secondary};

  padding-left: 20px;
  border-right: 1px solid ${props => props.theme.colors.gray};

  position: relative;

  @media (max-width: 600px) {
    padding-left: 7px;

    overflow: hidden;
    position: fixed;
    z-index: 2;

    width: 200px;

    height: ${props => (props.menuIsOpen ? '100vh' : '70px')};
    ${props =>
      !props.menuIsOpen &&
      css`
        border: none;
        border-bottom: 1px solid ${props => props.theme.colors.gray};
      `};
  }
`

export const Header = styled.header`
  display: flex;
  align-items: center;

  height: 70px;
`

export const Title = styled.h3`
  color: ${props => props.theme.colors.white};
  margin-left: 10px;

  @media (max-width: 600px) {
    display: none;
  }
`

export const Logotipo = styled.img`
  height: 40px;
  width: 40px;

  @media (max-width: 600px) {
    display: none;
  }
`

export const MenuHero = styled.nav`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  gap: 28px;
`

export const MenuHeroItems = styled.a`
  color: ${props => props.theme.colors.info};
  text-decoration: none;

  font-size: 1.1rem;

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

export const MenuHeroButton = styled.button`
  color: ${props => props.theme.colors.info};

  border: none;
  background-color: transparent;
  font-size: 1.1rem;

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

export const ToggleMobileMenu = styled.button`
  width: 40px;
  height: 40px;

  border-radius: 5px;
  font-size: 22px;

  background-color: ${props => props.theme.colors.warning};
  color: ${props => props.theme.colors.white};

  display: none;

  transition: opacity 0.3s ease-in-out;

  &:hover {
    opacity: 0.7;
  }

  @media (max-width: 600px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`

export const ThemeToggleFooter = styled.footer<IThemeToggleFooterProps>`
  display: none;

  position: absolute;
  bottom: 3rem;

  @media (max-width: 470px) {
    display: ${props => (props.menuOpen ? 'flex' : 'none')};
  }
`
