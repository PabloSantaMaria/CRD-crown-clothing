import React from 'react';
import './CheckoutItem.scss';

import {connect} from 'react-redux';

import {removeItem, addItem, decreaseItem} from '../../redux/cart/cart.actions';

const CheckoutItem = ({item, removeItem, addItem, decreaseItem}) => {
  const {name, price, imageUrl, quantity} = item;

  return (
  <div className='checkout-item'>
    <div className='image-container'>
      <img src={imageUrl} alt='item'/>
    </div>
    <span className='name'>{name}</span>
    <span className='quantity'>
      <div className='arrow' onClick={() => decreaseItem(item)}>&#10094;</div>
      <span className='value'>{quantity}</span>
      <div className='arrow' onClick={() => addItem(item)}>&#10095;</div>
    </span>
    <span className='price'>{price}</span>
    <span className='remove-button' onClick={() => removeItem(item)}>&#10008;</span>
  </div>
)};

const mapDispatchToProps = dispatch => ({
  removeItem: item => dispatch(removeItem(item)),
  addItem: item => dispatch(addItem(item)),
  decreaseItem: item => dispatch(decreaseItem(item))
})

export default connect(null, mapDispatchToProps)(CheckoutItem);