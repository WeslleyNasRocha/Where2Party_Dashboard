import '../common/templates/dependencies';
import React, { Component } from 'react';

import Header from '../common/templates/header';
import Sidebar from '../common/templates/sidebar';
import Footer from '../common/templates/footer';

import Routes from './routes';

class App extends Component {
  render() {
    return (
      <div className='wrapper'>
        <Header />
        <Sidebar />
        <div className='content-wrapper'>
          <Routes />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
