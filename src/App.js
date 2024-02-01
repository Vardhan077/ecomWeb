import React from 'react'
import './styles/App.css';
import Home from './components/home';
import Products from './components/Products';
import CheckOut from './components/checkout';

import { BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <main>
        <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/products' element={<Products></Products>}></Route>
          <Route path='/checkout' element={<CheckOut></CheckOut>}></Route>
        </Routes>
        </BrowserRouter>
    </main>
  );
}

export default App;