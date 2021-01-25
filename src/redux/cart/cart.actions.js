import { CartActionTypes } from "./cart.types";

export const toggleCartHidden = () => ({
  type: CartActionTypes.TOGGLE_CART_HIDDEN,
  // payload es opcional
  // si se ejecuta esta accion, el estado va a ser lo que diga en el reducer
  // en este caso es cambiar el valor de hidden a !hidden
});

export const addItem = (item) => ({
  type: CartActionTypes.ADD_ITEM,
  payload: item, //payload puede ser cualquier cosa que yo quiera
});

export const removeItem = (item) => ({
  type: CartActionTypes.REMOVE_ITEM,
  payload: item,
});

export const decreaseItem = (item) => ({
  type: CartActionTypes.DECREASE_ITEM,
  payload: item,
});

export const clearCart = () => ({
  type: CartActionTypes.CLEAR_CART,
});
