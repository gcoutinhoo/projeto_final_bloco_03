import { BrowserRouter, Route, Routes } from 'react-router'
import './App.css'
import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'
import Home from './pages/home/Home'
import Categoria from './pages/categoria/Categoria'
import Sobre from './pages/sobre/Sobre'
import Cadastrar from './pages/cadastrarCategoria/Cadastrar'

function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar />
        <div className='min-h-80vh'>
          <Routes>
            <Route path ='/' element={<Home />}/>
            <Route path ='/home' element={<Home />}/>
            <Route path ='/categoria' element={<Categoria />}/>
            <Route path ='/cadastrar' element={<Cadastrar/>}/>
            <Route path="/editarCategoria/:id" element={<Cadastrar />}/>
            <Route path ='/sobre' element={<Sobre />}/>
          </Routes>
        </div>
      <Footer />
    </BrowserRouter>
    </>
  )
}

export default App