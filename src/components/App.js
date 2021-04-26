import React from 'react';
import Header from '../components/Header';
import Look from '../components/Look';
import Order from '../components/Order';
import Location from '../components/Location';
import Download from '../components/Download';
import Footer from '../components/Footer';

class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Look />
        <Order />
        <Location />
        <Download />
        <Footer />
      </>
    );
  }
}

export default App;
