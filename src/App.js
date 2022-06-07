import React from 'react';
import { Routes, Route } from 'react-router-dom'
import Services from './routes/Services';
import About from './routes/About';
import Contact from './routes/Contact';
import Home from './routes/Home';
import Blog from './routes/Blog';


function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>} />
        <Route path='/services' element={<Services/>}/>
        <Route path='/contact' element={<Contact/>} />
        <Route path='/blog' element={<Blog/>} />
      </Routes>
    </div>
    
    
  );
}

export default App;
