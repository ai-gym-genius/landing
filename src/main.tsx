import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './i18n'
import './index.css'
import App from './App.tsx'

const redirectParam = new URLSearchParams(window.location.search).get('p')
if (redirectParam) {
  const decodedPath = decodeURIComponent(redirectParam)
  window.history.replaceState(null, '', decodedPath)
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
