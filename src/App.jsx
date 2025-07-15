import { BrowserRouter as Router } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import About from './pages/About'
import Products from './pages/Products'
import Cart from './pages/Cart'
import './styles/main.css'

export default function App() {
  return (
    <Router>
      <Header />
      <Home />
      <About />
      <Products />
      <Cart />
    </Router>
  )
}