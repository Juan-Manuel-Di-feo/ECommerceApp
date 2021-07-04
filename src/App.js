import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import {Switch, Route} from 'react-router-dom'
import ShopPage from './pages/shop-page/shop-page.component';
import Header from './components/header-component/header.component';
import AuthPage from './pages/auth-page/auth-page';

function App() {
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route exact path='/shop' component={ShopPage}/>
        <Route exact path='/auth' component={AuthPage}/>
      </Switch>
    </div>
  );
}
//
export default App;
