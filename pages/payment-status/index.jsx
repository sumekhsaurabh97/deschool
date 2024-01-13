import React, { useEffect, useState } from "react";
import PaymentStatus from "../../components/PaymentStatus/index";
import http from "../../api/index";
import { useRouter } from "next/router";


const PaymentSuccess = () => {
  const [isSucceeded, setIsSucceeded] = useState(false);
  const [orderDetails, setOrderDetails] = useState(null);
  const router = useRouter();
  useEffect(() => {
    // const params = router.pathname;
    const params = new Proxy(new URLSearchParams(window.location.search), {
      get: (searchParams, prop) => searchParams.get(prop),
    });
    if (params.redirect_status === "succeeded") {
      setIsSucceeded(true)
    } else {
      setIsSucceeded(true)
    }
    let paymentIntent = params.payment_intent;
    if (paymentIntent) {
      const url = `/api/payment-status?transaction_id=${paymentIntent}`;
      http.post(url).then((res) => setOrderDetails(res.data));
    }
  }, []);
  return (
    <div>
      <PaymentStatus isSucceeded={isSucceeded} orderDetails={orderDetails} />
    </div>
  );
};

export default PaymentSuccess;
