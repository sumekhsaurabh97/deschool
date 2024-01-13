import React from "react";

import { BreadCrumb } from "../Common/BreadCrumb";
import { CustomerInfo } from "./CustomerInfo";
import { BillingForm } from "./BillingForm";

import styles from "../Checkout/styles/checkoutScreen.module.scss";
import { BillOverview } from "./BillOverview";

export const CheckoutForm = () => {
  const breadcrumbArr = [
    { order: { isActive: false, value: "Checkout", link: "/cart" } },
    { checkout: { isActive: true, value: "Payment" } },
  ];

  return (
    <>
      <div className="container-fluid">
        <div className={`row ${styles.heightLayout}`}>
          <div className="col-lg-7  mt-5 pb-lg-5 mb-lg-5">
            <BreadCrumb
              // seperatorCenter={`breadcrumb-item active  ${styles.seperatorCenter}`}
              arr={breadcrumbArr}
            />
            <div className="mx-lg-5 px-xl-5">
              <CustomerInfo />
            </div>

            {/* <div className="mx-lg-5 px-xl-5">
              <BillingForm />
            </div> */}
          </div>

          <div className={`col-lg-5  mt-lg-1 ${styles.bgColor}`}>
            <BillOverview />
          </div>
        </div>
      </div>
    </>
  );
};
