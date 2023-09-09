import React from 'react';
import getStripe from '../../../lib/getStripe';
import { BiSolidDonateHeart } from 'react-icons/bi';
import Tooltip from '../Tooltip/Tooltip';
import { Link } from 'react-router-dom';

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
      successUrl: `http://localhost:1573/Stripe/Success`,
      cancelUrl: `http://localhost:3000/Stripe/Cancel`,
    });
    console.warn(error.message);
  }

  return (
    <>
      <div>
        {/* <button
        className="hover:w-70 fixed z-90 bottom-2 right-8  hover:drop-shadow-2xl  transition duration-200 hover:scale-125 bg-rose-500 text-white active:bg-rose-600 font-bold uppercase text-xs px-4 py-4 h-20 w-20 rounded-full shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        onClick={handleCheckout}
      >
        <BiSolidDonateHeart style={{ fontSize: '50px' }} />
      </button>
      <span className="absolute top-10 scale-0 transition-all rounded bg-gray-800 p-2 text-xs text-white group-hover:scale-100">✨ You hover me!</span> */}

        <Tooltip message={'Support our Instructors ✨'}>
          <Link to="https://donate.stripe.com/4gwdTxgES1eo9tm3cc">
            <button
              className="hover:w-70 fixed z-90 bottom-2 right-8  hover:drop-shadow-2xl  transition duration-200 hover:scale-125 bg-rose-500 text-white active:bg-rose-600 font-bold uppercase text-xs px-4 py-4 h-15 w-15 rounded-full shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              onClick={handleCheckout}
            >
              <BiSolidDonateHeart style={{ fontSize: '40px' }} />
            </button>
          </Link>
        </Tooltip>
      </div>
    </>
  );
};

export default Stripe;
