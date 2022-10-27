import './App.css';
import NavBar from './components/NavBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ItemListContainer from './components/ItemListContainer';
import { CartContextProvider } from './components/context/CartContext';
import Cart from './components/Cart';
import ItemDetailContainer from './components/ItemDetailContainer';
import Error404 from './components/Error404';

function App() {

  const styles = {
    border: 'solid 2px blue',
    padding: '20px'
  }

  return (
  <CartContextProvider>
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<ItemListContainer/>} />
        <Route path='/category/categoryId' element={<ItemListContainer/>} />
        <Route path='/detail/:detailId' element={<ItemDetailContainer/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='*' element={<Error404/>} />
      </Routes>
    </BrowserRouter>
  </CartContextProvider>
  );
}

export default App;
