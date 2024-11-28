import Header from './componentes/Header'
import ItemListContainer from './componentes/ItemListContainer'
import ItemDetailContainer from './componentes/ItemDetailContainer'
import Cart from './componentes/Cart'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartProvider } from './context/CartContext'

import './App.css'


function App() {
  return (
    <>
      <CartProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route exact path='/' element={<ItemListContainer texto="Bienvenidos a mi e-commerce" />} />
            <Route exact path='/category/:categoryId' element={<ItemListContainer title="Category" texto="Filtro aplicado" />} />
            <Route exact path='/item/:id' element={<ItemDetailContainer />} />
            <Route exact path='/cart' element={<Cart />} />
          </Routes>

        </BrowserRouter>
      </CartProvider>
    </>
  )
}

export default App
