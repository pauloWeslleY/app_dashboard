import styled from 'styled-components'

interface ITagCardProps {
  color: string
}

export const Container = styled.li`
  background-color: ${(props) => props.theme.colors.tertiary};

  list-style: none;
  border-radius: 5px;
  margin: 10px 0;
  padding: 12px 10px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  cursor: pointer;
  transition: all 0.3s ease-in-out;
  position: relative;

  &:hover {
    opacity: 0.7;
    transform: translateX(10px);
  }

  > div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-left: 9px;
  }
`

export const TagCard = styled.div<ITagCardProps>`
  position: absolute;
  left: 0;

  width: 10px;
  height: 60%;

  background-color: ${(props) => props.color};
`
