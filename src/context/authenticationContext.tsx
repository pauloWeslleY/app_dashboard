import { ReactNode, createContext, useState } from 'react'
import { IAuthContext } from '../@types/IAuthContext'

interface IAuthProviderProps {
  children: ReactNode
}

const AuthenticationContext = createContext<IAuthContext>({} as IAuthContext)

const AuthenticationProvider: React.FC<IAuthProviderProps> = ({ children }) => {
  const [logged, setLogged] = useState<boolean>(() => {
    const isLogged = localStorage.getItem('@my_wallet:logged')

    return !!isLogged
  })

  const signIn = (email: string, password: string) => {
    if (email === 'weslleydesign13@gmail.com' && password === '123') {
      localStorage.setItem('@my_wallet:logged', 'true')
      setLogged(true)
    } else {
      alert('Senha ou usuário inválidos')
    }
  }

  const signOut = () => {
    localStorage.removeItem('@my_wallet:logged')
    setLogged(false)
  }

  return (
    <AuthenticationContext.Provider value={{ logged, signIn, signOut }}>
      {children}
    </AuthenticationContext.Provider>
  )
}

export { AuthenticationProvider, AuthenticationContext }
