import { useContext } from 'react'
import { IAuthContext } from '../@types/IAuthContext'
import { AuthenticationContext } from '../context/authenticationContext'

export const useAuthenticator = (): IAuthContext => {
  const context = useContext(AuthenticationContext)

  return context
}
