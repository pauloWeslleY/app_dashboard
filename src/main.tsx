import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import { ThemeProvider } from './context/themeContext'
import { AuthenticationProvider } from './context/authenticationContext'

const HTMLElement = document.getElementById('root') as HTMLElement

ReactDOM.createRoot(HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider>
      <AuthenticationProvider>
        <App />
      </AuthenticationProvider>
    </ThemeProvider>
  </React.StrictMode>
)
