import { Router, useRouter } from "next/router";
import React, { useContext, useEffect } from "react";
import Head from "next/head";

import { CheckoutForm } from "../../components/Checkout/CheckoutForm";
import { UserContext } from "../_app";

const Cart = () => {
  const { cartDetails } = useContext(UserContext);
  Router = useRouter();

  // useEffect(() => {
  //   if ( cartDetails && cartDetails.lessons_with_slot.length) {
  //     Router.push("/checkout");
  //   } else {
  //     Router.push("/lessons");
  //   }
  // }, []);

  return (
    <>
      <Head>
        <title>Deschool | Checkout</title>
      </Head>
      <CheckoutForm />
    </>
  );
};

export default Cart;
