import React, { useEffect, createContext, useState, useCallback } from "react";
import Head from "next/head";

import Layout from "../layout/index";

import "bootstrap/dist/css/bootstrap.css";
import "../styles/deschool.scss";
import http from "../api";

export const UserContext = createContext();

function MyApp({ Component, pageProps }) {
  const [userDetails, setUserDetails] = useState({});
  const [cartDetails, setCartDetails] = useState(null);

  const [role, setRole] = useState("STUDENT");
  const [userModal, setUserModal] = useState("login");
  const [appliedDiscount, setAppliedDiscount] = useState(null);
  const [appliedVoucherId, setAppliedVoucherId] = useState(null);

  useEffect(() => {
    (async () => {
      const url = "/api/auth/v1/users/me";
      if (localStorage.getItem("user-access-token")) {
        const userData = await http.get(url);
        if (userData?.data) {
          setUserDetails(userData?.data);
        }
      }
    })();
  }, []);

  const fetchCart = async () => {
    const userId = userDetails.data._id || userDetails.data.id;
    if ((userDetails && userDetails.data._id) || userDetails.data.id) {
      const url = `/api/users/${userId}/cart?page=1&page_size=50`;
      const cartData = await http.get(url);
      setCartDetails(cartData.data?.data);
    }
  };

  useEffect(() => {
    if (userDetails && userDetails.data) {
      fetchCart();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userDetails]);
  return (
    <>
      <UserContext.Provider
        value={{
          userDetails,
          setUserDetails,
          cartDetails,
          setCartDetails,
          fetchCart,
          role,
          setRole,
          userModal,
          setUserModal,
          appliedDiscount,
          setAppliedDiscount,
          appliedVoucherId,
          setAppliedVoucherId,
        }}
      >
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </UserContext.Provider>
    </>
  );
}

export default MyApp;
