import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

// Aplicamos los temas de inmediato para evitar flicks
const color = localStorage.getItem('data-color') || 'morado';
const theme = localStorage.getItem('data-theme') || 'oscuro';
const font = localStorage.getItem('data-font') || 'sans';

document.documentElement.setAttribute('data-color', color)
document.documentElement.setAttribute('data-theme', theme)
document.documentElement.setAttribute('data-font', font)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
