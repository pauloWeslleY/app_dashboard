import styled from 'styled-components'

interface IContainerProps {
  color: string
}

export const Container = styled.div<IContainerProps>`
  background-color: ${(props) => props.color};
  color: ${(props) => props.theme.colors.white};

  width: 30%;
  height: 157px;

  margin: 27px 0;
  padding: 21px 14px;

  border-radius: 10px;

  position: relative;
  overflow: hidden;

  > img {
    position: absolute;
    top: -10px;
    right: -15px;

    height: 110%;

    opacity: 0.3;
  }

  > span {
    font-size: 20px;
    font-weight: 700;
  }

  > small {
    position: absolute;
    bottom: 10px;

    font-size: 12px;
  }
`
