import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Cart from './components/Cart'

const App = () => {
  return (
    <>
    <BrowserRouter>
      <NavBar />

      <Routes>
        {/*<ItemListContainer/>*/}
        {/*<ItemDetailContainer/>*/}

        <Route exact path='/' element={<ItemListContainer/>}/>
        <Route exact path='/cart' element={<Cart/>}/>
        <Route exact path='/category/:categoryId' element={<ItemListContainer/>}/>
      </Routes>

    </BrowserRouter>
    </>
  )
}

export default App