import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import { App } from './App'

import GlobalStyles from './styles/GlobalStyles'
import THEME_DARK from './styles/themes/dark'

const HTMLElement = document.getElementById('root') as HTMLElement

ReactDOM.createRoot(HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={THEME_DARK}>
      <GlobalStyles />
      <App />
    </ThemeProvider>
  </React.StrictMode>
)
