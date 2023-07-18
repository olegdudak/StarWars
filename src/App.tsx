import React from 'react';
import './App.css';
import Header from './components/Header/header';
import Footer from './components/Footer/footer';
import MainComponent from './components/Main/MainComponent';



function App() {
  
  return (
      <div className="app_container bg-black">
          <div className="App flex flex-col min-h-screen">
            <div className="header">
              <Header/>
            </div>
            <div className="main">
              <MainComponent/>
            </div>
            <div className="footer mt-auto">
              <Footer/>
            </div>
          </div>
      </div>
       
  );
}

export default App;
