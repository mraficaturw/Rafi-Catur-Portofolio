import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import PreLoader from './components/PreLoader.jsx'
import "animate.css"
// AOS is initialized in App.jsx with optimized settings

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PreLoader />
    <div className="container mx-auto px-6">
      <Navbar />
      <App />
      <Footer />
    </div>
  </StrictMode>,
)
