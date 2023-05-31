import { ReactNode } from 'react'
import { Container } from './styles'

interface ContentHeroProps {
  children: ReactNode
}

export const ContentHero: React.FC<ContentHeroProps> = ({ children }) => {
  return (
    <Container>
      <div>{children}</div>
    </Container>
  )
}
