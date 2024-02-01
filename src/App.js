import React from 'react'
import './styles/App.css';
import Home from './components/home';
import Products from './components/Products';


import { BrowserRouter, Routes, Route} from 'react-router-dom';

const App = () =>(
  <BrowserRouter>
        <Routes>
          <Route exact path='/' Component={Home}></Route>
          <Route exact path='/products' Component={Products}></Route>
        </Routes>
      </BrowserRouter>
)
  
        
  


export default App;