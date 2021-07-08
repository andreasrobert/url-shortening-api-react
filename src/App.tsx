import React from 'react';
import './App.css';
import styled from 'styled-components';
import Header from './components/header';
import Context from './components/context';
import Content from './components/content';
import Footer from './components/footer'


function App() {

const Headers= styled.div`
  width: 10px;
  height: 10px;
  background-color: blue;



`;


  return (
    <>
    <div>
      <Header/>
      <Context/>
      <Content/>      
      <Footer/>

    </div>

    </>
  );
}

export default App;
