import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'

const App = () => {

  const greeting = "Bienvenidos a WoW Classic Market"

  return (
    <>
      <NavBar />
      <ItemListContainer greeting={greeting} />
    </>
  )
}

export default App