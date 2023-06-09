import styled from 'styled-components'

interface ILegendsProps {
  color: string
}

export const Container = styled.div`
  width: 48%;
  height: 260px;

  margin: 10px 0;

  background-color: ${(props) => props.theme.colors.tertiary};
  color: ${(props) => props.theme.colors.white};

  border-radius: 7px;

  display: flex;
`

export const LegendsContainer = styled.ul`
  list-style: none;

  max-height: 175px;
  padding-right: 15px;

  overflow-y: scroll;
`

export const Legend = styled.li<ILegendsProps>`
  display: flex;
  align-items: center;

  margin-bottom: 7px;
  font-size: 18px;

  > div {
    width: 45px;
    height: 45px;

    font-weight: 700;
    font-size: 17px;

    text-align: center;
    line-height: 45px;

    background-color: ${(props) => props.color};
    border-radius: 7px;
  }

  > span {
    margin-left: 7px;
  }
`

export const SideLeft = styled.aside`
  padding: 30px 20px;

  > h2 {
    margin-bottom: 20px;
  }
`

export const SideRight = styled.main``
