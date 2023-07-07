import styled, { keyframes } from 'styled-components'

interface IContainerProps {
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

export const Container = styled.div<IContainerProps>`
  background-color: ${props => props.color};
  color: ${props => props.theme.colors.white};

  width: 32%;
  height: 157px;

  margin: 37px 0;
  padding: 21px 14px;

  border-radius: 10px;

  position: relative;
  overflow: hidden;

  animation: ${animate} 0.5s ease-in;

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

  @media (max-width: 770px) {
    width: 100%;
    margin: 10px 0;

    > span {
      font-size: 1.3rem;
    }

    > h1 {
      font-size: 30px;

      strong {
        width: auto;
        font-size: 2rem;
      }
    }
  }

  @media (max-width: 420px) {
    width: 100%;
    margin: 10px 0;

    > h1 {
      display: flex;

      strong {
        width: auto;
        margin-right: 0.2rem;
      }
    }
  }
`
