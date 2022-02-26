import React from 'react';
import './App.css';
import {Header} from './components/header/Header'
import {Input} from'./components/input/Input';

function App() {
  return (
    <div className = 'container-fluid p-0'>
      <Header/>
      <Input></Input>
    </div>
  );
}

export default App;
