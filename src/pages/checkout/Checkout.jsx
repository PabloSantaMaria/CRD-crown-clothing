import React from 'react';
import CheckoutItem from "../../components/checkout-item/CheckoutItem";
import { StripeCheckoutButton } from '../../components/stripe-button/stripe-button';

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
    <div className='test-warning'>
      *Usar la siguiente tarjeta para testear el pago*
      <br/>
      VISA 4242 4242 4242 4242 - Exp: 01/29 - CVV: 123
    </div>
    <StripeCheckoutButton price={total} />
  </div>
)

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal
})

export default connect(mapStateToProps)(Checkout);