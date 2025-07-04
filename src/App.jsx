import './App.css'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'

//pages
import Home from './pages/Home'
import Esercizio1 from './pages/Esercizio1'
import Esercizio2 from './pages/Esercizio2'
import Esercizio3 from './pages/Esercizio3'


//components
import Navbar from './components/Navbar'
import react from './assets/react.svg'



function App() {


  return (
    <BrowserRouter>
    <div>
        <Navbar/>
      <div className='flex justify-center gap-3'>
      <h1 className='font-bold text-2xl mt-5 mb-5 text-center'>Formazione react</h1>
      <img src={react} alt=""/>
      </div>
      <div className='container-personal'>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/esercizio-1' element={<Esercizio1/>}/>
        <Route path='/esercizio-2' element={<Esercizio2/>}/>
        <Route path='/esercizio-3' element={<Esercizio3/>}/>

      </Routes>
      </div>
    </div>
    </BrowserRouter>
      
    
  )
}

export default App
