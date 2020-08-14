import React from 'react';
import './CartDropdown.scss';
import CustomButton from '../custom-button/custom-button';
import CartItem from '../cart-item/CartItem';

import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import { createStructuredSelector } from 'reselect';

import {selectCartItems} from '../../redux/cart/cart.selectors';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

const CartDropdown = ({cartItems, history, dispatch}) => {
  return (
  <div className='cart-dropdown'>
    <div className='cart-items'>
      {cartItems.length === 0 ?
        <span className='empty-message'>Su carrito está vacío</span>
        :
        cartItems.map(item => 
        <CartItem className='item' key={item.id} item={item} />
      )}
    </div>
    <CustomButton onClick={() => {
      history.push('/checkout');
      dispatch(toggleCartHidden())
      }}>REALIZAR LA COMPRA</CustomButton>
  </div>
)};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
