import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './components/Header.jsx'
import Home from './pages/Home.jsx'
import Clients from './pages/Clients.jsx'
import Community from './pages/Community.jsx'
import Pixcelgrade from './pages/Pixcelgrade.jsx'
import Helping from './pages/Helping.jsx'
import Question from './pages/Question.jsx'
import Brand from './pages/Brand.jsx'
import Marketing from './pages/Marketing.jsx'
import Footer from './pages/Footer.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <Home/>
    <Clients/>
    <Community/>
    <Pixcelgrade/>
    <Helping/>
    <Question/>
    <Brand/>
    <Marketing/>
    <Footer/>
  </StrictMode>,
)
