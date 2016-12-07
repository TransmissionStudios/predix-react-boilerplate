import React from 'react';
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Home from './components/Home'
import Footer from './components/Footer'

class app extends React.Component {
  render() {
    return (
      <div>
        <Header/>
        <Sidebar/>
        <Home/>
        <Footer/>
      </div>
    );
  }
}

export default app;
