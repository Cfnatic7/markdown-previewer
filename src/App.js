import React from 'react';
import './App.css';
import {Header} from './components/header/Header'
import {Input} from'./components/input/Input';
import {Previewer} from './components/previewer/Previewer';
import {useSelector} from 'react-redux';

function App() {
  let inputEnlargement = useSelector( state => state.input.isInputEnlarged);
  let previewEnlargement = useSelector( state => state.input.isPreviewEnlarged);
  return (
    <div className = 'container-fluid p-0'>
      <Header/>
      {!previewEnlargement && <Input></Input>}
      {!inputEnlargement && <Previewer/>}
    </div>
  );
}

export default App;
