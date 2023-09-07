import React from 'react'
import getStripe from '../../../lib/getStripe';

const Stripe = () => {
    async function handleCheckout() {
        const stripe = await getStripe();
        const { error } = await stripe.redirectToCheckout({
          lineItems: [
            {
              price: import.meta.env.VITE_NEXT_PUBLIC_STRIPE_PRICE_ID,
              quantity: 1,
            },
          ],
          mode: 'payment',
          successUrl: `http://localhost:3000/success`,
          cancelUrl: `http://localhost:3000/cancel`,
        });
        console.warn(error.message);
      }
      return <button onClick={handleCheckout}>Checkout</button>;
}

export default Stripe