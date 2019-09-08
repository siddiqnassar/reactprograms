import React from 'react';
import logo from './logo.svg';
import './App.css';

export const add=(x,y)=>{
  return x+y;
}
export const Button = ({ name, handleClick }) => {
  return (
    <input className="button" type="button" value={name} onClick={handleClick} />
  );
}

function mockFn(){
  return (
    <div>Hii</div>
  )
}
function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
      <button className="btn" onClick={()=>this.mockFn()}>Click here</button>
    </div>
  );
}
export default App;
