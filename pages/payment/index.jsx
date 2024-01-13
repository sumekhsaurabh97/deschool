import React, { useState, useEffect, useContext } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { SpinnerCircular } from "spinners-react";

import CheckoutForm from "../../components/Checkout/checkoutFormPayment";
import styles from "./styles/paymentPage.module.scss";
import { UserContext } from "../_app";
import { useRouter } from "next/router";

// Make sure to call loadStripe outside of a component’s render to avoid
// recreating the Stripe object on every render.
// This is your test publishable API key.

const stripePromise = loadStripe(
  `${process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY}`
);

export default function Payment() {
  const router = useRouter();
  const [clientSecret, setClientSecret] = useState("");
  const { cartDetails, appliedDiscount, appliedVoucherId } =
    useContext(UserContext);
  const [isSpinnerLoading, setIsSpinnerLoading] = useState(false);

  useEffect(() => {
    setIsSpinnerLoading(true);
  }, []);

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    if (cartDetails) {
      const tokenValue = localStorage.getItem("token");

      let cartOrderDetails = [];

      cartDetails?.lessons_with_slot?.forEach((item) => {
        cartOrderDetails.push({
          lesson: item.id,
          slot_id: item.slot_id,
        });
      });
      var paymentIntentPayload = {};
      if (appliedVoucherId) {
        paymentIntentPayload = {
          order: appliedVoucherId,
          lesson_detail: cartOrderDetails,
          amount:
            appliedDiscount > 0
              ? cartDetails.amount - appliedDiscount
              : cartDetails.amount,
          currency: "cad",
        };
      } else {
        paymentIntentPayload = {
          lesson_detail: cartOrderDetails,
          amount:
            appliedDiscount > 0
              ? cartDetails.amount - appliedDiscount
              : cartDetails.amount,
          currency: "cad",
        };
      }

      fetch("/api/payment-intent", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + tokenValue,
        },
        body: JSON.stringify(paymentIntentPayload),
      })
        .then((res) => res.json())
        .then(
          (data) => setClientSecret(data.clientSecret),
          setIsSpinnerLoading(false)
        )
        .catch(() => router.push("/checkout"));
    }
  }, [cartDetails]);

  const appearance = {
    theme: "stripe",
  };
  const options = {
    clientSecret,
    appearance,
  };

  return (
    <div className={styles.paymentIntegration}>
      <div className={styles.App}>
        {clientSecret && !isSpinnerLoading ? (
          <Elements options={options} stripe={stripePromise}>
            <CheckoutForm />
          </Elements>
        ) : (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              margin: "70px",
            }}
          >
            <SpinnerCircular color="#f17c72" secondaryColor="#fee448" />
          </div>
        )}
      </div>
    </div>
  );
}
