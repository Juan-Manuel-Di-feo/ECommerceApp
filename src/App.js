import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import { Switch, Route } from 'react-router-dom'
import ShopPage from './pages/shop-page/shop-page.component';
import Header from './components/header-component/header.component';
import AuthPage from './pages/auth-page/auth-page';
import { auth } from './firebase/firebase.utils'

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      currentUser: null
    }
  }

  unsuscribeFromAuth = null;
  
  componentDidMount(){
    this.unsuscribeFromAuth = auth.onAuthStateChanged(user =>  {
      this.setState({currentUser: user})
    })
  }

  componentWillUnmount(){
    this.unsuscribeFromAuth()
  }

  render() {

    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/shop' component={ShopPage} />
          <Route exact path='/auth' component={AuthPage} />
        </Switch>
      </div >
    );

  }
}
//
export default App;
