import styled from 'styled-components'

interface ILegendsProps {
  color: string
}

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

  margin-left: 7px;
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
`
