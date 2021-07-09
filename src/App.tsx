import React, { useState } from 'react';
import './App.css';
import Header from './components/header';
import Context from './components/context';
import Content from './components/content';
import Footer from './components/footer';
import PopUp from './components/popUp';


function App() {

  const[popUp, setPopUp] = useState(false);

    const handlePopUp = () =>{
        setPopUp(prev => !prev);
    };


  return (
    <>
    <div>
      <Header handlePopUp={handlePopUp}/>
      <Context/>
      <Content/>      
      <Footer handlePopUp={handlePopUp}/>
      <PopUp popUp={popUp} handlePopUp={handlePopUp}/>

    </div>

    </>
  );
}

export default App;
