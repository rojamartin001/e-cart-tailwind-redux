import { Route, Routes } from 'react-router-dom'
import './App.css'
import Cart from './pages/Cart'
import Homee from './pages/Homee'
import View from './pages/View'
import Wishlist from './pages/Wishlist'
import Pnf from './pages/Pnf'
import Footer from './components/Footer'


function App() {

  return (
    <>
    <Routes>
           <Route path='/' element={<Homee/>}/>
           <Route path='/wishlist' element={<Wishlist/>}/>
           <Route path='/cart' element={<Cart/>}/>
           <Route path='/:id/view' element={<View/>}/>
           <Route path='/*' element={<Pnf/>}/>
    </Routes>

    {/* footer */}
    <Footer/>
    </>
  )
}

export default App

