// import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import ClickTracker from './components/ClickTracker';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PlatziContainer from './API/PlatziContainer';

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
        <Route path='/' element={<ClickTracker />} />
        <Route path='*' element={<PageNotFound />} />
        <Route path='/PZT' element={<PlatziContainer />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
