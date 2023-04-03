import React from 'react';
import './App.css';
import FancyBorder from './components/FancyBorder';
import ImgComponent2 from './components/ImgComponent2';

function App() {
  return (
    <div className="App">
      <FancyBorder color="blue">
        <h1>Hello, props.children</h1>
        <p>이건 매우 유용한 기술입니다!</p>
        <ImgComponent2 />
      </FancyBorder>
    </div>
  );
}

export default App;
