import styled, { keyframes } from 'styled-components'

interface ILegendsProps {
  color: string
}

const animate = keyframes`
  0%{
    transform: translateX(-100px);
    opacity: 0;
  }
  50%{
    opacity: .3;
  }
  100%{
    transform: translateX(0px);
    opacity: 1;
  }
`

export const Container = styled.div`
  width: 48%;
  min-height: 260px;
  margin: 10px 0;
  padding-right: 45px;

  display: flex;

  background-color: ${props => props.theme.colors.tertiary};
  color: ${props => props.theme.colors.white};

  border-radius: 10px;

  animation: ${animate} 0.5s ease-in;

  @media (max-width: 1200px) {
    display: flex;
    flex-direction: column;

    width: 100%;
    height: 25rem;
  }
`

export const SideLeft = styled.aside`
  padding: 30px 20px;

  > h2 {
    padding-left: 16px;
    margin-bottom: 10px;
  }
`

export const SideRight = styled.main`
  flex: 1;
  width: 100%;
  height: 250px;
`

export const LegendsContainer = styled.ul`
  list-style: none;

  height: 175px;
  padding-right: 15px;

  overflow-y: scroll;

  @media (max-width: 1200px) {
    height: auto;
  }
`

export const Legend = styled.li<ILegendsProps>`
  display: flex;
  align-items: center;

  padding-left: 16px;
  margin-bottom: 7px;
  font-size: 18px;

  > div {
    width: 45%;
    height: 45%;

    font-weight: 700;
    font-size: 17px;

    text-align: center;
    line-height: 45px;
    padding-inline: 8px;

    background-color: ${props => props.color};
    border-radius: 7px;
  }

  > span {
    margin-left: 7px;
  }
`
