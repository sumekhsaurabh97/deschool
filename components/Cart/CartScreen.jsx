import React, { useContext, useState } from "react";
import Link from "next/link";

import { CartCourse } from "./CartCourse";
import { UserContext } from "../../pages/_app";

import styles from "./styles/index.module.scss";

const CartScreen = (props) => {
  const { cartDetails } = useContext(UserContext);
  return (
    <>
      <div className="container">
        <div className="row  mb-5">
          <div className={`col-md-11 mx-auto ${styles.cartWrapper}`}>
            <div
              className={` ${styles.cartHead} mt-5  py-3 border-bottom border-dark `}
            >
              <h1 className="mb-5">Cart</h1>
            </div>

            <div className={` ${styles.cartTitle}  `}>
              <div
                className={`py-4 d-flex justify-content-between border-bottom border-dark `}
              >
                <h2>Courses</h2>
                <h2 className="text-end px-5">price</h2>
              </div>

              {cartDetails && cartDetails.lessons_with_slot.length ? (
                <div>
                  {cartDetails.lessons_with_slot.map((item) => {
                    return (
                      <div key={item.id} className="me-5">
                        <CartCourse
                          course={item.lesson}
                          style="px-0 mr-3"
                          price={item.amount}
                          userId={cartDetails.user_id}
                          lessonId={item.id}
                          slotId={item.slot_id}
                        />
                      </div>
                    );
                  })}
                </div>
              ) : (
                <div className={`row mt-5 `}>
                  <div className={`col-12 `}>
                    <h2 className="noResultFound">Cart is empty</h2>
                  </div>
                </div>
              )}
            </div>

            <div className="border-top border-dark">
              <Link href={cartDetails && cartDetails.lessons_with_slot.length ? "/checkout" : "/lessons"}>
                <a className={` ${styles.btnBanner} float-end mt-5 mb-5`}>
                  {cartDetails && cartDetails.lessons_with_slot.length ? "Checkout" : " Go to lessons"}
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartScreen;
