import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import API from "../../utils/API";
import { useSelector } from "react-redux";

import CheckoutForm from "../../components/checkoutForm/CheckoutForm";

// Make sure to call loadStripe outside of a component’s render to avoid
// recreating the Stripe object on every render.
// This is your test publishable API key.
const stripePromise = loadStripe(
  "pk_test_51NbiaAKa4YIXTCTTacOIjHYc3JpmW3JbPGUAMRmuZGcDQa0v48rGsUwlrFreM4z5oXCShWeo8RpqjKtJ4xUjLYHV00vhtoykSL"
);

export default function Payment() {
  const [clientSecret, setClientSecret] = useState("");
  const paymentAmount = useSelector((store) => store.cart.paymentAmount);

  const { createStripePayment } = new API();

  const fetchingClient = async () => {
    const secret = await createStripePayment(paymentAmount);
    setClientSecret(secret);
  };

  useEffect(() => {
    fetchingClient();
  }, []);

  const appearance = {
    theme: "stripe",
  };
  const options = {
    clientSecret,
    appearance,
  };

  return (
    <div className="Payment">
      {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      )}
    </div>
  );
}
