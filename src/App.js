import React from 'react'
import './styles/App.css';
import Home from './components/home';
import Products from './components/Products';
import CheckOut from './components/checkout';

import { BrowserRouter, Routes, Route} from 'react-router-dom';

const App = () =>(
  <BrowserRouter>
        <Routes>
          <Route exact path='/' Component={Home}></Route>
          <Route exact path='/products' Component={Products}></Route>
          <Route exact path='/checkout' Component={CheckOut}></Route>
        </Routes>
      </BrowserRouter>
)
  
        
  


export default App;