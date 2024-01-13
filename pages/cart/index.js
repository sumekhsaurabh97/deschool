import React from "react";
import Head from "next/head";

import CartScreen from "../../components/Cart/CartScreen.jsx";

const CartPage = ({ cartCourse }) => {
  return (
    <>
     <Head>
        <title>Deschool | Cart</title>
      </Head>
      <div className="container mt-5">
        <CartScreen cartCourse={cartCourse} />
      </div>
    </>
  );
};

export default CartPage;
