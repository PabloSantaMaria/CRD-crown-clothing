import React from 'react';
import CustomButton from '../custom-button/custom-button';
import CartItem from '../cart-item/CartItem';

import {connect} from 'react-redux';
import {selectCartItems} from '../../redux/cart/cart.selectors'

import './CartDropdown.scss';

const CartDropdown = ({cartItems}) => (
  <div className='cart-dropdown'>
    <div className='cart-items'>
      {cartItems.map(item => 
        <CartItem className='item' key={item.id} item={item} />
      )}
    </div>
    <CustomButton>REALIZAR LA COMPRA</CustomButton>
  </div>
);

const mapStateToProps = state => ({
  cartItems: selectCartItems(state)
});

export default connect(mapStateToProps)(CartDropdown);
