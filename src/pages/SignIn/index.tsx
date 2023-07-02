import { useState } from 'react'
import { Button } from '../../components/Button'
import { InputField } from '../../components/InputField'
import { Container, Logo, Form, FormTitle } from './styles'
import { useAuthenticator } from '../../hooks/useAuthenticator'
import LogoImage from '../../assets/logo.svg'

export const SignIn: React.FC = () => {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const { signIn } = useAuthenticator()

  return (
    <Container>
      <Logo>
        <img src={LogoImage} alt="Logotipo My Wallet" />
        <h2>My Wallet</h2>
      </Logo>

      <Form onSubmit={() => signIn(email, password)}>
        <FormTitle>Entrar</FormTitle>

        <InputField
          required
          type="email"
          placeholder="email"
          onChange={e => setEmail(e.target.value)}
        />
        <InputField
          required
          type="password"
          placeholder="senha"
          onChange={e => setPassword(e.target.value)}
        />

        <Button type="submit">Acessar</Button>
      </Form>
    </Container>
  )
}
