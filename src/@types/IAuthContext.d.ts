interface IAuthContext {
  logged: boolean
  signIn: (email: string, password: string) => void
  signOut: () => void
}

export { IAuthContext }
