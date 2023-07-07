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
  width: 100%;
  height: 340px;

  display: flex;
  flex-direction: column;

  margin-block: 10px;
  padding: 30px 20px;

  background-color: ${props => props.theme.colors.tertiary};
  color: ${props => props.theme.colors.white};
  border-radius: 10px;

  animation: ${animate} 0.5s ease-in;
`

export const ChartGraphicContainer = styled.div`
  flex: 1;
`

export const Header = styled.header`
  display: flex;
  justify-content: space-between;

  > h2 {
    margin-bottom: 20px;
    padding-left: 18px;
  }

  @media (max-width: 1200px) {
    flex-direction: column;
  }
`

export const LegendContainer = styled.ul`
  list-style: none;

  display: flex;
  align-items: center;

  padding-right: 18px;
`

export const Legend = styled.li<ILegendsProps>`
  display: flex;
  align-items: center;

  margin-left: 16px;
  margin-bottom: 7px;
  font-size: 18px;

  > div {
    background-color: ${props => props.color};

    width: 40px;
    height: 40px;
    border-radius: 7px;

    font-size: 14px;
    line-height: 40px;
    text-align: center;
  }

  > span {
    margin-left: 5px;
  }

  @media (max-width: 1200px) {
    > div {
      width: 30px;
      height: 30px;
    }
  }
`
