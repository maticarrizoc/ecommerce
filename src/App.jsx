import Header from './componentes/Header'
import ItemListContainer from './componentes/ItemListContainer'
import ItemDetailContainer from './componentes/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './App.css'

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path='/' element={<ItemListContainer texto="Bienvenidos a mi e-commerce" />}/>
          <Route exact path='/category/:categoryId' element={<ItemListContainer title="Category" texto="Filtro aplicado"/>}/>
          <Route exact path='/item/:id' element={<ItemDetailContainer />} />
        </Routes>

      </BrowserRouter>
    </>
  )
}

export default App
