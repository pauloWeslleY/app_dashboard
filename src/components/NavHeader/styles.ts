import styled from 'styled-components'

interface ITitleWrapperProps {
  lineColor: string
}

export const Container = styled.nav`
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 25px;
`

export const TitleWrapper = styled.div<ITitleWrapperProps>`
  > h1 {
    color: ${(props) => props.theme.colors.white};

    &::after {
      content: '';
      display: block;
      width: 55px;
      border-bottom: 10px solid ${(props) => props.lineColor};
    }
  }
`

export const Controllers = styled.div`
  display: flex;
  gap: 5px;
`
