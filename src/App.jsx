import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './Components/Layout'
import Home from './Pages/Home'
import OurStore from './Pages/OurStore'
import Contact from './Pages/Contact'
import Blogs from './Pages/Blogs'
import CompareProducts from './Pages/CompareProducts'
import Wishlist from './Pages/Wishlist'
import CartPage from './Pages/CartPage'
import Login from './Pages/Login'
import SingleProduct from './Pages/SingleProduct'
import Register from './Pages/Register'
function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='contact' element={<Contact />} />
            <Route path='store' element={<OurStore />} />
            <Route path='product/:id' element={<SingleProduct />} />
            <Route path='blogs' element={<Blogs />} />
            <Route path='compare' element={<CompareProducts />} />
            <Route path='wishlist' element={<Wishlist />} />
            <Route path='cart' element={<CartPage />} />
            <Route path='login' element={<Login />} />
            <Route path='reg' element={<Register />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
