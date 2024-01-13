import React, { useContext } from "react";
import { UserContext } from "../../pages/_app";

export const CustomerInfo = () => {
  const { userDetails } = useContext(UserContext);
  let fullName = userDetails.data
    ? userDetails.data.name
      ? userDetails.data.name
      : userDetails.data.firstName + " " + userDetails.data.lastName
    : "";
  return (
    <div>
      <div className=" mx-lg-5 px-xl-4">
        <div className="mx-xl-4">
          <h3 className="fw-bold mb-3">Customer Information</h3>
          <p className="fw-bold fs-5">{fullName}</p>
          <p className="fw-bold ">{userDetails.data?.email || ""}</p>
        </div>
      </div>
    </div>
  );
};
