import Link from "next/link";
import React, { useCallback, useContext, useEffect, useState } from "react";
import http from "../../api";
import Image from "next/image";
import { SpinnerCircular } from "spinners-react";

import { cartData } from "../../Data/cartData";
import { UserContext } from "../../pages/_app";
import { CartCourse } from "../Cart/CartCourse";

import styles from "../Checkout/styles/checkoutScreen.module.scss";

export const BillOverview = () => {
  const {
    cartDetails,
    setAppliedDiscount,
    appliedDiscount,
    setAppliedVoucherId,
  } = useContext(UserContext);

  const [voucherCode, setVoucherCode] = useState("");
  const [totalAmount, setTotalAmount] = useState(0);
  const [voucherUse, setVoucherUse] = useState(false);

  const [isSpinnerLoading, setIsSpinnerLoading] = useState(false);

  const handleVoucherSubmit = async () => {
    const url = "/api/orders";
    let lessonSlotVoucherDetails;
    if (voucherCode.length > 0) {
      lessonSlotVoucherDetails = {
        voucher: voucherCode,
      };
      setIsSpinnerLoading(true);
      await http
        .post(url, lessonSlotVoucherDetails)
        .then((res) => {
          setTotalAmount(res.data.data.total_amount);
          setAppliedDiscount(res.data.data.discount_amount);
          setIsSpinnerLoading(false);
          setVoucherUse(true);
          setAppliedVoucherId(res.data.data.id);
        })
        .catch(() => {
          setVoucherUse(false);
          setIsSpinnerLoading(false);
        });
    }
  };
  const onRemove = () => {
    setVoucherUse(false);
    setTotalAmount(cartDetails.amount);
    setAppliedDiscount(null);
    setVoucherCode("");
    setAppliedVoucherId(null);
  };

  useEffect(() => {
    handleVoucherSubmit();
  }, [cartDetails]);

  return (
    <>
      <div className="row mt-5">
        <div className="col-lg-9 mx-auto mt-3 mx-lg-4 ">
          <div>
            {cartDetails && cartDetails?.lessons_with_slot.length ? (
              cartDetails.lessons_with_slot.map((item) => {
                if (item.id > "0")
                  return (
                    <div key={item.id}>
                      <div className="">
                        <CartCourse
                          headStyle="fs-5 w-75  fw-bold"
                          course={item.lesson}
                          style="mt-2 px-2 "
                          amountStyle="fw-semibold"
                          price={item.amount}
                          slotId={item.slot_id}
                        />
                      </div>
                      <hr className="w-100 mb-0 mx-auto" />
                    </div>
                  );
              })
            ) : (
              <div className={`row mt-5`}>
                <div className={`col-lg-12`}>
                  <h2 className="fw-bold">Cart is empty</h2>
                </div>
              </div>
            )}
          </div>
          {isSpinnerLoading ? (
            <div className="text-center">
              <SpinnerCircular color="#f17c72" secondaryColor="#fee448" />
            </div>
          ) : (
            <>
              {voucherUse ? (
                <>
                  <div
                    className={`py-2 my-4 rounded-2 ${styles.onVoucherSuccess} d-flex justify-content-between`}
                  >
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="d-flex align-items-center ps-2 pe-1">
                        <Image
                          src="/assets/images/voucherApplied.svg"
                          width={20}
                          height={20}
                          alt="success"
                        />
                        <span className="ps-2 fw-semibold">{voucherCode}</span>
                      </div>
                      <span>Applied</span>
                    </div>
                    <div className={` ${styles.voucherRemove}`}>
                      <button
                        className={`btn text-danger mx-4 ${styles.removeVoucher}`}
                        onClick={onRemove}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="d-flex justify-content-between align-items-center py-4 border-dark">
                    <div className={`${styles.inputField}`}>
                      <input
                        type="text"
                        placeholder="Discount Code"
                        aria-label="Discount Code"
                        className={`${styles.billingInput} `}
                        onChange={(e) => setVoucherCode(e.target.value)}
                      />
                    </div>

                    <div className="">
                      <button
                        className={`${styles.discountBtn} btn`}
                        type="submit"
                        onClick={(e) => handleVoucherSubmit(e)}
                        disabled={!voucherCode}
                      >
                        Apply
                      </button>
                    </div>
                  </div>
                  {/* <SpinnerCircular color="#f17c72" secondaryColor="#fee448" /> */}
                </>
              )}
            </>
          )}

          <div className="d-flex align-items-center justify-content-between pb-3 pt-4 border-bottom border-top border-dark">
            <div className="fs-5 pb-0 ">
              <p className=" fw-bold ">Subtotal</p>
              <p className=" fw-bold ">Discount</p>
            </div>

            <div className="fw-semibold pb-0">
              <p className="">C$ {cartDetails && cartDetails?.amount - 0}</p>
              <p className="">
                C${" "}
                {appliedDiscount > 0
                  ? appliedDiscount
                  : totalAmount > 0
                  ? cartDetails?.amount - totalAmount
                  : 0}
              </p>
            </div>
          </div>

          <div className="d-flex justify-content-between py-3 pe-2 mx-0">
            <div className="">
              <h5 className=" fw-bold">Total</h5>
            </div>
            <div className="">
              <p className="mt-2 fw-bold">
                C$ {totalAmount > 0 ? totalAmount : cartDetails?.amount}
              </p>
            </div>
          </div>
          <div>
            <Link
              href={
                cartDetails && cartDetails.lessons_with_slot.length
                  ? "/payment"
                  : "/lessons"
              }
            >
              <a className={`${styles.formButton} mt-2 float-end mb-5`}>
                {cartDetails && cartDetails.lessons_with_slot.length
                  ? "Continue to payment"
                  : "Go to Lessons"}
              </a>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
