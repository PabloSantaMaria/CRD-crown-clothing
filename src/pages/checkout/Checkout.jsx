import React from 'react';
import CheckoutItem from "../../components/checkout-item/CheckoutItem";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCartItems, selectCartTotal } from "../../redux/cart/cart.selectors";

import './Checkout.scss';

const Checkout = ({cartItems, total}) => (
  <div className='checkout'>
    <div className='checkout-header'>
      <div className='header-block'>
        <span>Producto</span>
      </div>
      <div className='header-block'>
        <span>Descripción</span>
      </div>
      <div className='header-block'>
        <span>Cantidad</span>
      </div>
      <div className='header-block'>
        <span>Precio</span>
      </div>
      <div className='header-block'>
        <span>Quitar</span>
      </div>
    </div>

    {
      cartItems.map(item => <CheckoutItem key={item.id} item={item} />)
    }

    <div className='total'>
      <span>TOTAL: $ {total}</span>
    </div>
  </div>
)

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal
})

export default connect(mapStateToProps)(Checkout);