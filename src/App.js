import { Component } from 'react';
import './reset.css';
import './App.css';
import Header from './Header.js';
import Body from './Body.js';
import Footer from './Footer.js';

export default class App extends Component {
  render() {
      return (
        <div className="App">
          <Header />
          <Body />
          <Footer />
        </div>
      );
    }
}