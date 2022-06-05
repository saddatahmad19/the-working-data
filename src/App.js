import React from 'react';
import { Routes, Route } from 'react-router-dom'
import About from './routes/About';
import Home from './routes/Home';


function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>} />
      </Routes>
    </div>
    
    
  );
}

export default App;
