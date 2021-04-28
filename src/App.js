import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Homepage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Route exact path='/' component={Homepage}></Route>
        <Route exact path='/shop' component={ShopPage}></Route>
      </div>
    );
  }
}


export default App;