import styled, { keyframes } from 'styled-components'

interface ITagCardProps {
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

export const Container = styled.li`
  background-color: ${props => props.theme.colors.tertiary};

  list-style: none;
  border-radius: 10px;
  margin: 10px 0;
  padding: 12px 10px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  cursor: pointer;
  transition: all 0.3s ease-in-out;
  position: relative;

  animation: ${animate} 0.5s ease-in;

  &:hover {
    opacity: 0.7;
    transform: translateX(10px);
  }

  h3 {
    font-weight: 700;
    font-size: 24px;
  }

  > div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-left: 9px;
  }

  > div span {
    font-weight: 700;
    font-size: 20px;
    line-height: 23px;
  }

  > div small {
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
  }
`

export const TagCard = styled.div<ITagCardProps>`
  position: absolute;
  left: 0;

  width: 14px;
  height: 60%;

  background-color: ${props => props.color};
`
