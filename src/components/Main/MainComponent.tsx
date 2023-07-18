import React from 'react';
import Main from './MainComponent/main';
import Cards from './MainComponent/Cards/cards';
import Info from './MainComponent/info';
import {Routes, Route, Link} from 'react-router-dom'





function MainComponent() {
  return (
    <div className="MainComponen">
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/cards' element={<Cards/>}/>
        <Route path='/info' element={<Info/>}/>
      </Routes>
    </div>
  );
}

export default MainComponent;