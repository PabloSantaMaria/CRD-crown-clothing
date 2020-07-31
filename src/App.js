import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Header from './components/header/header';
import HomePage from './pages/homepage/homepage';
import ShopPage from './pages/shop/shop';
import SignPage from './pages/sign/sign';
import { auth, createUserProfile } from './firebase/firebase.utils';

import './App.css';

class App extends React.Component {
  constructor() {
    super();

    this.unsubscribeFromAuth = null;

    this.state = {
      currentUser: null
    };
  }

  // unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userProfileRef = await createUserProfile(userAuth);

        userProfileRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });
        });
      }
      else {
        this.setState({currentUser: userAuth});
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
      <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={SignPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
