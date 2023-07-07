import styled, { keyframes } from 'styled-components'

interface ILegendsProps {
  color: string
}

const animate = keyframes`
  0%{
    transform: translateX(100px);
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
  height: 260px;

  margin: 10px 0;

  background-color: ${props => props.theme.colors.tertiary};
  color: ${props => props.theme.colors.white};

  border-radius: 7px;

  display: flex;

  animation: ${animate} 0.5s ease-in;

  @media (max-width: 770px) {
    display: flex;
    width: 100%;
  }
`

export const LegendsContainer = styled.ul`
  list-style: none;

  max-height: 175px;
  padding-right: 15px;

  overflow-y: scroll;

  @media (max-width: 1345px) {
    display: flex;
    flex-direction: column;
  }
`

export const Legend = styled.li<ILegendsProps>`
  display: flex;
  align-items: center;

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

  @media (max-width: 115px) {
    font-size: 14px;
    margin: 3px 0;

    > div {
      height: 35px;
      width: 35px;
      line-height: 35px;
    }

    > span {
      margin-left: 7px;
    }
  }
`

export const SideLeft = styled.aside`
  padding: 30px 20px;

  > h2 {
    margin-bottom: 20px;
  }

  @media (max-width: 1345px) {
    padding: 0 15px 5px;
    margin-bottom: 7px;

    > h2 {
      margin-top: 15px;
      margin-bottom: 7px;
    }
  }

  @media (max-width: 420px) {
    padding: 15px;
    margin-bottom: 7px;
  }
`

export const SideRight = styled.main`
  display: flex;
  flex: 1;
  justify-content: center;

  @media (max-width: 1345px) {
    height: 100%;
  }
`
