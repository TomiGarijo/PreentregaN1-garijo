import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import { BrowserRouter, Form, Route, Routes } from 'react-router-dom'
import CartProvider from './context/CartContext'
import Cart from './components/Cart'
import GetForm from './components/GetForm'

const App = () => {
  return (
    <>
    <CartProvider>
      <BrowserRouter>
        <NavBar />

        <Routes>
          <Route exact path='/' element={<ItemListContainer/>}/>
          <Route exact path='/item/:id' element={<ItemDetailContainer/>}/>
          <Route exact path='/category/:id' element={<ItemListContainer/>}/>
          <Route exact path='/cart' element={<Cart/>}/>
          <Route exact path='/order' element={<GetForm/>}/>
        </Routes>

      </BrowserRouter>
    </CartProvider>
    </>
  )
}

export default App