import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { QRProvider } from './context/QRContext'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <QRProvider>
      <App />
    </QRProvider>
  </React.StrictMode>
)
