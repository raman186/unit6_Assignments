import './App.css';
import { Navbar } from './Components/Navbar.jsx';
import { Home } from './Components/Home.jsx';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux'

function App() {
  const val=useSelector((state)=>state)
  //console.log(val)

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>}></Route>
      </Routes>
       
      
    </div>
  );
}

export default App;
