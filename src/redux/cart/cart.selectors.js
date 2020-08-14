import {createSelector} from 'reselect';

// input selector (devuelven un pedazo del state)
const selectCart = state => state.cart;

export const selectCartItems = createSelector(
  selectCart,
  cart => cart.cartItems
);

export const selectCartHidden = createSelector(
  selectCart,
  cart => cart.hidden
);

export const selectCartItemsCount = createSelector(
  selectCartItems,
  cartItems => cartItems.reduce(
    (accumQuantity, item) => accumQuantity + item.quantity,
    0
  )
)

export const selectCartTotal = createSelector(
  [selectCartItems],
  cartItems => cartItems.reduce(
    (accumQuantity, item) => accumQuantity + item.quantity * item.price,
    0
  )
)