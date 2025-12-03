import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'
// import './index.css'
// import App from './App.jsx'
// import Counter from './Counter.jsx'
// import Product from './pages/Product.jsx'
// import RickAndMorty from './pages/RickAndMorty'
import Router  from './Router'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
        <Router/>
    </BrowserRouter>
  </StrictMode>,
)
