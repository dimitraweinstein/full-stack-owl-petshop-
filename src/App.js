import React, { Component } from 'react';
import './reset.css';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import CreatePage from './CreatePage.js';
import DetailPage from './DetailPage.js';
import ListPage from './ListPage.js';
import Header from './Header.js';
import Home from './Home.js';

export default class App extends Component {
  render() {
      return (
        <div>
          
          <BrowserRouter>
            <Header />
            <Switch>

              <Route path="/" exact component={Home} />
              <Route path="/createpage" component={CreatePage} />
              <Route path="/listpage" component={ListPage} />
              <Route path="/owls/:id" component={DetailPage} />
              
            </Switch>
          </BrowserRouter>  
        </div>
      );
    }
}