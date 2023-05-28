import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App.tsx'
import './global.css'

const HTMLElement = document.getElementById('root') as HTMLElement

ReactDOM.createRoot(HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
