import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ItemCount from './components/ItemCount';
import ItemList from './components/ItemList';
import ItemDetail from './components/ItemDetail';
import ItemListContainer from './components/ItemListContainer';
import { CartContextProvider } from './components/context/CartContext';
import Cart from './components/Cart';

function PageNotFound() {
  return (
    <div>
      <h1>404 Page not found </h1>
    </div>
  );
}

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
        <Route path='/category/:id' element={<ItemList/>} />
        <Route path='/category/category/:id' element={<ItemList/>} />
        <Route path='/item/:id' element={<ItemDetail/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/count' element={<ItemCount/>} />
        <Route path='*' element={<PageNotFound/>} />
      </Routes>
    </BrowserRouter>
  </CartContextProvider>
  );
}

export default App;
