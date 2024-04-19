import React, { FormEvent, useState } from 'react';
import Nav from './Components/Nav/Nav';
import Main from './Components/Main/Main';
import "./App.scss";
import beers from './Data/beers';



const App = () => { 

  return (
    <div className='display'>
      <Nav/>
      <Main beers={beers}/>
    </div>
  )
}

export default App

