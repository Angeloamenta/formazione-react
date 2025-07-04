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
        <Navbar/>
      <div>
      <h1 className='font-bold text-2xl mt-5 mb-5 text-center'>Formazione react</h1>
      </div>
      <div className='container-personal'>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/esercizio-1' element={<Esercizio1/>}/>
      </Routes>
      </div>
    </div>
    </BrowserRouter>
      
    
  )
}

export default App
