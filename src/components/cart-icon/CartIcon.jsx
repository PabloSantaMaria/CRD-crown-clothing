import React from 'react';
import {ReactComponent as ShoppingBagIcon} from '../../assets/shopping-bag.svg';
import {connect} from 'react-redux';
import {toggleCartHidden} from '../../redux/cart/cart.actions';
import {selectCartItemsCount} from '../../redux/cart/cart.selectors'

import './CartIcon.scss';

const CartIcon = ({toggleCartHidden, itemCount}) => (
  <div className='cart-icon' onClick={toggleCartHidden}>
    <ShoppingBagIcon className='shopping-bag-icon' />
    <span className='item-count'>{itemCount}</span>
  </div>
);

// const mapStateToProps = state => ({
//   itemCount: state.cart.cartItems.reduce((accumQuantity, item) => 
//     accumQuantity + item.quantity,
//     0
//   )
// });

const mapStateToProps = state => ({
  itemCount: selectCartItemsCount(state)
});

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
