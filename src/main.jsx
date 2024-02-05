import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

//de App va découler toute notre application et on l'a passe à #root
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
