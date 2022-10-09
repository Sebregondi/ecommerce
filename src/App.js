import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PlatziContainer from './API/PlatziContainer';
import ItemCount from './components/ItemCount';
import ItemList from './components/ItemList';
import ItemDetail from './components/ItemDetail';
import ItemListContainer from './components/ItemListContainer';
import ItemCard from './components/ItemCard';

function PageNotFound() {
  return (
    <div>
      <h1>404 Page not found</h1>
    </div>
  );
}

function App() {

  const styles = {
    border: 'solid 2px blue',
    padding: '20px'
  }

  return (
    <>
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<ItemListContainer />} />
        <Route path='/item' element={<ItemCard />} />
        <Route path='/item/:id' element={<ItemDetail />} />
        <Route path='/list' element={<ItemList />} />
        <Route path='/count' element={<ItemCount />} />
        <Route path='*' element={<PageNotFound />} />
        {/* <Route path='/PZT' element={<PlatziContainer />} /> */}
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
