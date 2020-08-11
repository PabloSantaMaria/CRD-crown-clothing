import React from 'react';
import CustomButton from '../custom-button/custom-button';

import './CartDropdown.scss';

const CartDropdown = () => (
  <div className='cart-dropdown'>
    <div className='cart-items'>

    </div>
    <CustomButton>REALIZAR LA COMPRA</CustomButton>
  </div>
);

export default CartDropdown;
