export const addItemToCart = (cartItems, itemToAdd) => {
  const existingCartItem = cartItems.find(
    cartItem => cartItem.id === itemToAdd.id
  );

  if(existingCartItem) {
    return cartItems.map(cartItem => 
      cartItem.id === itemToAdd.id ?
        {...cartItem, quantity: cartItem.quantity + 1}
      :
        cartItem
    )
  }

  return [...cartItems, {...itemToAdd, quantity: 1}];
}

export const removeItemFromCart = (cartItems, itemToRemove) => (
  cartItems.filter(item => item.id !== itemToRemove.id)
)

export const decreaseItemFromCart = (cartItems, itemToDecrease) => {
  const existingCartItem = cartItems.find(item => item.id === itemToDecrease.id);

  if(existingCartItem.quantity === 1)
    return removeItemFromCart(cartItems, itemToDecrease);

  return cartItems.map(item => 
    item.id === existingCartItem.id ?
      {...item, quantity: item.quantity - 1}
      :
      item
  )
}