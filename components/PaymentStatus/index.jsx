import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import moment from "moment/moment";

import styles from "./styles/payment.module.scss";

const PaymentStatus = ({ isSucceeded, orderDetails }) => {
  const [success, setSuccess] = useState(false);
  useEffect(() => {
    if (isSucceeded === true) {
      setSuccess(true);
    }
  }, [isSucceeded]);

  const statusHeadingColor = success
    ? `${styles.headClr}`
    : `${styles.headClrFail}`;

  return (
    <div className="container mt-5 mb-5 ">
      <div className="row">
        <div className="col-md-6 mt-5 m-auto">
          <div className={` mt-5 ${styles.payment}`}>
            <div className={`d-flex align-items-center`}>
              <Image
                src={
                  isSucceeded === true
                    ? "/assets/images/payment-success.svg"
                    : "/assets/images/payment-failure.svg"
                }
                width={80}
                height={80}
                alt="success"
              />
              <div className="px-4">
                <h1
                  className={
                    `${styles.commonHeadColor}` + " " + `${statusHeadingColor}`
                  }
                >
                  {isSucceeded === true
                    ? "Payment Successful"
                    : "Payment Failed"}
                </h1>
                <p className="fw-semibold">
                  {isSucceeded === true
                    ? "Your payment has been processed! Details of the transactions are included below"
                    : "Transaction could not be processed"}
                </p>
              </div>
            </div>
            <hr className="border-2 opacity-100"></hr>
            <div className="d-flex ">
              <div className="fw-bold">
                <p>Amount</p>
                <p>Order Id</p>
                <p>{isSucceeded === true ? "Payment Type" : ""}</p>
                <p>Transaction Time</p>
              </div>
              <div className="mx-auto fw-semibold">
                <p>{orderDetails?.amount}</p>
                <p>{orderDetails?.transaction_id}</p>
                <p>
                  {isSucceeded === true ? orderDetails?.payment_status : ""}
                </p>
                {orderDetails?.transaction_time && (
                  <p>
                    {moment(orderDetails?.transaction_time).format(
                      "MMMM Do YYYY, h:mm:ss a"
                    )}
                  </p>
                )}
              </div>
            </div>
            <hr className="border-2 opacity-100"></hr>
            <Link href={isSucceeded === true ? "/lessons" : "/payment"}>
              <a className={`${styles.formButton} mt-2 float-end mb-5  `}>
                {isSucceeded === true ? "Back to Lessons" : "Try Again"}
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentStatus;
