import React from 'react';
import {ReactComponent as Logo} from '../../assets/crown.svg';
import { auth } from '../../firebase/firebase.utils';
import {connect} from 'react-redux';
import {selectCartHidden} from '../../redux/cart/cart.selectors';
import {selectCurrentUser} from '../../redux/user/user.selectors';
import { createStructuredSelector } from 'reselect';

import CartIcon from '../cart-icon/CartIcon';
import CartDropdown from '../cart-dropdown/CartDropdown';

import { HeaderContainer, LogoContainer, OptionsContainer, OptionLink } from "./header.styles";

const Header = ({currentUser, hidden}) => (
  <HeaderContainer>
    <LogoContainer to='/'>
      <Logo />
    </LogoContainer>
    
    <OptionsContainer>
      <OptionLink to='/shop'>SHOP</OptionLink>
      <OptionLink to='/contact'>CONTACTO</OptionLink>
      {currentUser ?
        <OptionLink as='div' onClick={() => auth.signOut()}>
          SALIR
        </OptionLink>
        :
        <OptionLink to='/signin'>INGRESAR</OptionLink>}
      <CartIcon />
    </OptionsContainer>
    {hidden ? null : <CartDropdown />}
  </HeaderContainer>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});
  
export default connect(mapStateToProps)(Header);
    