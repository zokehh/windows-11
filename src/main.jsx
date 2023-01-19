import React from 'react'
import ReactDOM from 'react-dom/client'
import AuthContextProvider from '../store/taskbar-auth'
import App from './App'
import Layout from './components/Layout/Layout'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthContextProvider>
      <Layout>
        <App />
      </Layout>
    </AuthContextProvider>
  </React.StrictMode>,
)
