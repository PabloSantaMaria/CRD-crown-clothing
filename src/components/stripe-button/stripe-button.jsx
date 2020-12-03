import StripeCheckout from "react-stripe-checkout";

export const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_51HtXaoIuALXVVM7YzHNjugA00fQtE1xpt18KVO4QXMxd17j6w35sBK83lA7nI5kBghB7KMon6MiSwxZaMy5tlQNB00gmLSmvGH';

  const onToken = token => {
    console.log(token);
    alert('Pago exitoso');
  }

  return (
    <StripeCheckout 
      label='Comprar ahora'
      name='Crown Clothing'
      billingAddress
      shippingAddress
      image='https://sendeyo.com/up/d/f3eb2117da'
      description={`Su total el $${price}`}
      amount={priceForStripe}
      panelLabel='Comprar ahora'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};
