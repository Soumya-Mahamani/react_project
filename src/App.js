import React, { Component, Fragment } from 'react';
import {BrowserRouter, Route, Redirect } from 'react-router-dom';
import portfolioListing from './components/portfolioListing/portfolio';
import Navlink from './components/Navlink'
import constituents from './components/portfolioConstituents/MainTable'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Fragment>
            <Route  path='/' component={Navlink} />
            <Route exact path='/portfolioListing' component={portfolioListing} />
            <Route exact path='/constituents' component={constituents} />
        </Fragment>
      </BrowserRouter>
    );

  }
}

export default App;
