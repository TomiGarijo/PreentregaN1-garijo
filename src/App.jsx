import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <>
    <BrowserRouter>
      <NavBar />

      <Routes>
        {/*<ItemListContainer/>*/}
        {/*<ItemDetailContainer/>*/}

        <Route exact path='/' element={<ItemListContainer/>}/>
        <Route exact path='/item/:id' element={<ItemDetailContainer/>}/>
        <Route exact path='/category/:id' element={<ItemListContainer/>}/>
      </Routes>

    </BrowserRouter>
    </>
  )
}

export default App