import './App.css'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'

//pages
import Esercizio1 from './pages/Esercizio1'
import Home from './pages/Home'
import Navbar from './components/Navbar'

//components



function App() {


  return (
    <BrowserRouter>
    <div>
      <h1>Formazione react</h1>
      <div>
        <Navbar/>
      </div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/esercizio-1' element={<Esercizio1/>}/>
      </Routes>
    </div>
    </BrowserRouter>
      
    
  )
}

export default App
