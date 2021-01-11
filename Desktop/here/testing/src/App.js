import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import Contact from './ContactCard/Contact';
import IncreDecre from './Incre-Decre/IncDec';
import FormEdit from './FormEdit/FormEdit';


class App extends Component{
  
  render()
  {
    return (
      <div className = "App">
      <Contact name = {'Sam'} mn = {'203-200-3806'} wp = {'203-200-6301'} email = {'rsss@gmail.com'} />
      <Contact name = {'Kevin'} mn = {'203-200-2419'} wp = {'203-200-0062'} email = {'rss2s@gmail.com'} />
      <Contact name = {'Michael'} mn = {'203-200-0475'} wp = {'203-200-3048'} email = {'rss4s@gmail.com'} />
      <IncreDecre number = {"5"}/>
      <FormEdit/>
      </div>
    );
  }
}

export default App;
