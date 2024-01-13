import moment from "moment";
import Link from "next/link";
import React, { useContext } from "react";
import http from "../../api";

import { UserContext } from "../../pages/_app";
// import CartCourse from "./CartCourse";

import styles from "./styles/index.module.scss";

const CartBox = ({ handleCloseCart }) => {
  const { userDetails, cartDetails, fetchCart } = useContext(UserContext);

  const handleRemoveLessonSlotFromMiniCart = (slotId) => {
    const userId = userDetails.data?.id;
    const lessonId = cartDetails?.lessons_with_slot?.[0]?.id;
    const url = `/api/users/${userId}/cart/${lessonId}?slot_id=${slotId}`;
    http.delete(url).then(() => fetchCart());
  };

  const handleCart = () => {
    handleCloseCart();
  };

  return (
    <>
      <div className={styles.cart}>
        {cartDetails?.lessons_with_slot &&
        cartDetails?.lessons_with_slot?.length ? (
          <div>
            {cartDetails?.lessons_with_slot?.map((item) => {
              return (
                <>
                  <div className="py-2">
                    <div className="d-flex justify-content-between">
                      <h4>{item.lesson}</h4>
                      <p className="px-2">C${item.amount}</p>
                    </div>
                    <button
                      className=" fw-bold text-danger border-0 btn p-0"
                      onClick={() =>
                        handleRemoveLessonSlotFromMiniCart(item.slot_id)
                      }
                    >
                      Remove
                    </button>
                    <span className={styles.slotIdStyle}>
                      Slot {moment(item.slot_id).format("Do MMM Y")}
                    </span>
                  </div>
                </>
              );
            })}
          </div>
        ) : (
          <h4>Cart is Empty</h4>
        )}

        {cartDetails?.lessons_with_slot?.length ? (
          <div>
            <Link href="/cart ">
              <a
                className={` ${styles.cartBtn} text-white fw-bold btn btn-lg my-3`}
                onClick={handleCart}
              >
                Go to Cart
              </a>
            </Link>
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default CartBox;
