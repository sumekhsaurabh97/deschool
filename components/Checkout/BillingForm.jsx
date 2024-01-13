import React, { useState } from "react";

import styles from "./styles/checkoutScreen.module.scss";

export const BillingForm = () => {
  const [firstName, setFirstName] = useState("");
  const [fNameError, setFNameError] = useState("");
  const [lastName, setLastName] = useState("");
  const [lNameError, setLNameError] = useState("");
  const [address, setAddress] = useState("");
  const [apartment, setApartment] = useState("");
  const [addError, setAddError] = useState("");
  const [city, setCity] = useState("");
  const [cityErr, setCityErr] = useState("");
  const [country, setCountry] = useState("");
  const [countryErr, setCountryErr] = useState("");
  const [state, setState] = useState("");
  const [stateErr, setStateErr] = useState("");
  const [pincode, setPincode] = useState("");
  const [pincodeErr, setPincodeErr] = useState("");

  function onNameChange(event, typeOfName) {
    if (typeOfName === "lastName") {
      setLastName(event.target.value);
      if (event.target.value.trim().length !== 0) {
        setLNameError("");
      } else {
        setLNameError("Please enter your last name");
      }
    } else {
      setFirstName(event.target.value);
      if (event.target.value.trim().length !== 0) {
        setFNameError("");
      } else {
        setFNameError("Please enter your first name");
      }
    }
  }

  function onAddressChange(event) {
    setAddress(event.target.value);
    setApartment(event.target.value);
    if (event.target.value.trim().length !== 0) {
      setAddError("");
    } else {
      setAddError("Please enter your Address");
    }
  }

  function onCityChange(event) {
    setCity(event.target.value);

    if (event.target.value.trim().length !== 0) {
      setCityErr("");
    } else {
      setCityErr("Please enter the field ");
    }
  }

  function onCountryChange(event) {
    setCountry(event.target.value);
    if (event.target.value.trim().length !== 0) {
      setCountryErr("");
    } else {
      setCountry("Please enter the field ");
    }
  }

  function onStateChange(event) {
    setState(event.target.value);

    if (event.target.value.trim().length !== 0) {
      setStateErr("");
    } else {
      setStateErr("Please enter the field ");
    }
  }

  function onPincode(event) {
    setPincode(event.target.value);

    if (event.target.value.trim().length !== 0) {
      setPincodeErr("");
    } else {
      setPincodeErr("Please enter the field ");
    }
  }

  const checkNameValidation = () => {
    if (firstName.trim().length == 0) {
      setFNameError("Please enter name");
      return false;
    }
    if (lastName.trim().length == 0) {
      setLNameError("Please enter last name");
      return false;
    }
    setLNameError("");
    return true;
  };

  const checkAddressValidation = () => {
    if (address.trim().length == 0) {
      setAddError("Please enter your address ");
      return false;
    }

    setAddError("");
    return true;
  };

  const checkCityValidation = () => {
    if (city.trim().length == 0) {
      setCityErr("Please enter the field");
      return false;
    }

    if (state.trim().length == 0) {
      setStateErr("Please enter the field");
      return false;
    }
    if (pincode.trim().length == 0) {
      setPincodeErr("Please enter the field");
      return false;
    }
    setCityErr("");

    setStateErr("");
    setPincodeErr("");
    return true;
  };

  const checkCountryValidation = () => {
    if (country.trim().length == 0) {
      setCountryErr("Please enter the field");
      return false;
    }
    setCountryErr("");
    return true;
  };

  const checkStateValidation = () => {
    if (state.trim().length == 0) {
      setStateErr("Please enter the field");
      return false;
    }
    setStateErr("");
    return true;
  };

  const checkPincodeValidation = () => {
    if (pincode.trim().length == 0) {
      setPincodeErr("Please enter the field");
      return false;
    }
    setPincodeErr("");
    return true;
  };

  const handleCheckoutSubmit = (event) => {
    event.preventDefault();
    let IsNameValid = checkNameValidation();
    let IsAddressValid = checkAddressValidation();
    let IsCityValid = checkCityValidation();
    let IsCountryValid = checkCountryValidation();
    let IsStateValid = checkStateValidation();
    let IsPincodeValid = checkPincodeValidation();

    if (
      IsNameValid &&
      IsAddressValid &&
      IsCityValid &&
      IsCountryValid &&
      IsStateValid &&
      IsPincodeValid
    ) {
      const Details = {
        firstName: firstName,
        lastName: lastName,
        address: address,
        apartment: apartment,
        city: city,
        country: country,
        state: state,
        pincode: pincode,
      };
      console.log(Details);
    }
  };

  return (
    <>
      {/* <div className={`mt-5 mb-5 mx-lg-5 px-xl-5  ${styles.billingFormMargin}`}>
        <div>
          <h3 className="fw-bold">Billing Details</h3>
        </div>

        <form
          className="BillForm mt-4"
          id="customerBillForm"
          onSubmit={handleCheckoutSubmit}
        >
          <div className="row mb-3">
            <div className="col-lg-6 mt-2">
              <label className="form-label">
                <h5>First Name</h5>
              </label>
              <input
                type="text"
                id="checkoutFirstName"
                placeholder="First name"
                aria-label="First name"
                className={styles.billingInput}
                onChange={(e) => onNameChange(e)}
              />
              <span className="text-danger font-12 text-nowrap">
                {fNameError}
              </span>
            </div>

            <div className="col-lg-6 mt-2">
              <label className="form-label">
                <h5>Last Name</h5>
              </label>
              <input
                type="text"
                id="checkoutLastName"
                aria-label="Last name"
                className={` ${styles.billingInput}`}
                placeholder="Enter your last name"
                onChange={(e) => onNameChange(e, "lastName")}
              />
              <span className="text-danger font-12">{lNameError}</span>
            </div>
          </div>

          <div className="mb-3 row">
            <div className="col-lg-12 mt-2 ">
              <label className="form-label">
                <h5>Address</h5>
              </label>
              <input
                type="text"
                className={`mt-2 ${styles.billingInput} mt-2`}
                placeholder="Enter your  address"
                onChange={(e) => onAddressChange(e)}
              />
              <span className="text-danger font-12 text-nowrap">
                {addError}
              </span>
            </div>
          </div>

          <div className="mb-3 row">
            <div className="col-lg-12 mt-2 ">
              <label className="form-label">
                <h5>Apartment, suite, etc</h5>
              </label>
              <input
                type="text"
                className={`mt-2 ${styles.billingInput} mt-2`}
                placeholder="Enter Apartment, suite, etc"
                onChange={(e) => onAddressChange(e)}
              />
              <span className="text-danger font-12 text-nowrap">
                {addError}
              </span>
            </div>
          </div>

          <div className="mb-3 row">
            <div className="col-lg-12 mt-2">
              <label className="form-label">
                <h5>City</h5>
              </label>
              <input
                type="text"
                className={`mt-2 ${styles.billingInput}`}
                placeholder="Enter your City"
                onChange={(e) => onCityChange(e)}
              />
              <span className="text-danger font-12 text-nowrap">{cityErr}</span>
            </div>
          </div>

          <div className="row mb-5">
            <div className="col-lg-4 mt-2">
              <label className="form-label">
                <h5>Country</h5>
              </label>
              <input
                type="text"
                className={`mt-2 ${styles.billingInput}`}
                placeholder="Country"
                onChange={(e) => onCountryChange(e)}
              />
              <span className="text-danger font-12 text-nowrap">
                {countryErr}
              </span>
            </div>

            <div className="col-lg-4 mt-2 ">
              <label className="form-label">
                <h5>State</h5>
              </label>
              <input
                type="text"
                className={`mt-2 ${styles.billingInput}`}
                placeholder="State"
                onChange={(e) => onStateChange(e)}
              />
              <span className="text-danger font-12 text-nowrap">
                {stateErr}
              </span>
            </div>

            <div className="col-lg-4 mt-2">
              <label className="form-label">
                <h5>Pincode</h5>
              </label>
              <input
                type="number"
                className={`mt-2 ${styles.billingInput}`}
                placeholder="Pincode"
                onChange={(e) => onPincode(e)}
              />
              <span className="text-danger font-12 text-nowrap">
                {pincodeErr}
              </span>
            </div>
          </div>
        </form>
      </div> */}
    </>
  );
};
