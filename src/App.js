import React from 'react';
import Header from './components/Header';
import './App.css'
import Scrollback from './components/Scrollbackbutton'


function App() {

  return (
    <div className="bg-gray-200 w-screen h-screen">
      <div className='container w-[1252px] h-screen bg-gray-300 m-auto'>
        <Header />
      </div>
    </div>
  );
}



export default App;
