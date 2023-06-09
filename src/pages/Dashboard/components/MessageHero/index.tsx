import { Container } from './styles'

interface IMessageHeroProps {
  title: string
  description: string
  footerText: string
  icon: string
}

const MessageHero: React.FC<IMessageHeroProps> = (props) => {
  const { title, description, footerText, icon } = props

  return (
    <Container>
      <header>
        <h1>
          {title} <img src={icon} alt={title} />
        </h1>
        <p>{description}</p>
      </header>

      <footer>
        <span>{footerText}</span>
      </footer>
    </Container>
  )
}

export { MessageHero }
