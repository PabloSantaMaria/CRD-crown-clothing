import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';

import Header from './components/header/header';

import HomePage from './pages/homepage/homepage';
import ShopPage from './pages/shop/shop';
import SignPage from './pages/sign/sign';
import Checkout from './pages/checkout/Checkout';

import { auth, createUserProfile } from './firebase/firebase.utils';
import {connect} from 'react-redux'
import {setCurrentUser} from './redux/user/user.actions';
import {selectCurrentUser} from './redux/user/user.selectors';
import { createStructuredSelector } from 'reselect';

import './App.css';

class App extends React.Component {

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userProfileRef = await createUserProfile(userAuth);

        userProfileRef.onSnapshot(snapShot => {
          this.props.setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      }
      else {
        this.props.setCurrentUser(userAuth);
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
      <Header />
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/checkout' component={Checkout} />
          <Route exact path='/signin' render={() =>
            this.props.currentUser ? 
              (<Redirect to='/' />) :
              (<SignPage />)
          } />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
