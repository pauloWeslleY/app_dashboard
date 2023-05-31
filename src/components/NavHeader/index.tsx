import { ReactNode } from 'react'

import { Container, TitleWrapper, Controllers } from './styles'

interface INavHeaderProps {
  title: string
  lineColor: string
  children?: ReactNode
}

export const NavHeader: React.FC<INavHeaderProps> = ({
  title,
  lineColor,
  children,
}) => {
  return (
    <Container>
      <TitleWrapper lineColor={lineColor}>
        <h1>{title}</h1>
      </TitleWrapper>
      <Controllers>{children}</Controllers>
    </Container>
  )
}
