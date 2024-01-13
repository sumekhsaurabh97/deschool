import React, { useEffect, useState, useContext } from "react";

import Modal from "../../Common/Modal/index";
import { UserContext } from "../../../pages/_app";

import styles from "./styles/UserModal.module.scss";
import http from "../../../api";


const UserModal = (props) => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [statusLogin, setStatusLogin] = useState("");
  const [statusSignup, setStatusSignup] = useState("");
  const [statusForgot, setStatusForgot] = useState("");
  // const [nameError, setNameError] = useState("");
  const [successSignUp, setSuccessSignUp] = useState(false);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [fNameError, setFNameError] = useState("");
  const [lNameError, setLNameError] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [successForgot, setSuccessForgot] = useState(false);
  const [forgotSuccessMessage, setForgotSuccessMessage] = useState("");
  const { setUserDetails, userModal, setUserModal } = useContext(UserContext);

  useEffect(() => {
    if (
      password &&
      confirmPassword &&
      (password !== confirmPassword || confirmPassword.trim().length == 0)
    ) {
      setConfirmPasswordError("Confirm password does not match");
    } else setConfirmPasswordError("");
  }, [password, confirmPassword]);

  function onMailChange(event) {
    setEmail(event.target.value);
    setStatusLogin("");
    setStatusSignup("");
    setStatusForgot("");
    if (event.target.value.trim().length !== 0) {
      if (!checkEmailValidation()) setEmailError("");
    } else {
      setEmailError("Please enter email");
    }
  }

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
    setStatusSignup("");
  }

  function onPasswordChange(event) {
    setPassword(event.target.value?.trim() || "");
    setStatusLogin("");
    setStatusSignup("");
    if (event.target.value.trim().length == 0) {
      setPasswordError("Please enter password");
    } else {
      setPasswordError("");
    }
  }

  function onConfirmPasswordChange(event) {
    setConfirmPassword(event.target.value?.trim() || "");
    if (password !== confirmPassword || event.target.value.trim().length == 0) {
      setConfirmPasswordError("Confirm password does not match");
    } else setConfirmPasswordError("");
  }

  const checkEmailValidation = () => {
    if (email !== "") {
      let regexforEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
      if (!regexforEmail.test(email.trim())) {
        setEmailError("Invalid email");
        return false;
      }
    } else if (email.trim().length == 0) {
      setEmailError("Please enter email");
      return false;
    }
    setEmailError("");
    return true;
  };

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

  const checkPassWordValidation = () => {
    if (password.trim().length == 0) {
      setPasswordError("Please enter password");
      return false;
    }
    setPasswordError("");
    return true;
  };

  const handleLoginSubmit = async (event) => {
    event.preventDefault();
    let isEmailValid = checkEmailValidation();
    let isPasswordValid = checkPassWordValidation();

    if (isEmailValid && isPasswordValid) {
      const loginDetails = {
        email: event.target.loginEmail.value,
        password: event.target.loginPassword.value,
      };
      const url = "/api/auth/v1/users/login";
      await http
        .post(url, loginDetails)
        .then((resp) => {
          if (resp.data.data.access_token) {
            window.localStorage.setItem("user-access-token", resp.data.data.access_token);
            setUserDetails(resp.data);
            document.getElementById("userLoginForm").reset();
            document.querySelectorAll("#loginModalClose")[0].click();
          }
        })
        .catch((err) => {
          console.log("err simple catch", err);
          if (err.response.data.detail === 400) {
            setStatusLogin(err.response.data.detail);
            setTimeout(
              function () {
                setStatusLogin("");
              }.bind(this),
              4000
            );
          } else {
            console.log("err else of catch", err);
            setStatusLogin(err.response.data.detail);
            setTimeout(
              function () {
                setStatusLogin("");
              }.bind(this),
              4000
            );
          }
        });
    }
  };
  const handleSignUpSubmit = async (event) => {
    event.preventDefault();
    let isEmailValid = checkEmailValidation();
    let isPasswordValid = checkPassWordValidation();
    let IsNameValid = checkNameValidation();

    if (isEmailValid && isPasswordValid && IsNameValid) {
      const signupDetails = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
        passwordConfirm: confirmPassword,
        role: props.role,
      };
      const url = "/api/auth/v1/users/signup";
      await http
        .post(url, signupDetails)
        .then((resp) => {
          if (resp.status === 201) {
            setUserModal((userModal) => "signUpSuccess");
            setTimeout(
              function () {
                setUserModal((userModal) => "login");
                document.querySelectorAll("#loginModalClose")[0].click();
              }.bind(this),
              5000
            );
          }
        })
        .catch((err) => {
          if (err.status === 400) {
            setStatusSignup(err.response.data.detail);
            setTimeout(
              function () {
                setStatusSignup("");
              }.bind(this),
              4000
            );
          } else {
            setStatusSignup(err.response.data.detail);
            setTimeout(
              function () {
                setStatusSignup("");
              }.bind(this),
              4000
            );
          }
        });
    }
  };

  const handleForgotPasswordSubmit = async (event) => {
    event.preventDefault();
    let isEmailValid = checkEmailValidation();
    if (isEmailValid) {
      const forgotPasswordInput = {
        email: event.target.forgotEmail.value,
      };
      const url = "/api/auth/v1/users/forgot-password";
      await http
        .post(url, forgotPasswordInput)
        .then((resp) => {
          console.log(resp, "response");
          if (resp.status === 200) {
            setForgotSuccessMessage(resp.data.message);
            setSuccessForgot(true);
            setTimeout(
              function () {
                setUserModal((userModal) => "login");
                document.querySelectorAll("#loginModalClose")[0].click();
                document.getElementById("forgotUserPasswordForm").reset();
                setSuccessForgot(false);
              }.bind(this),
              5000
            );
          }
        })
        .catch((err) => {
          if (err.status_code === 400) {
            setStatusForgot(err.response.data.detail);
            setTimeout(
              function () {
                setStatusForgot("");
              }.bind(this),
              4000
            );
          } else {
            console.log("err", err);
            setStatusForgot(err.response.data.message);
            setTimeout(
              function () {
                setStatusForgot("");
              }.bind(this),
              4000
            );
          }
        });
    }
  };

  return (
    <div>
      <Modal
        modalState={showLoginModal}
        modalId="loginModal"
        modalHeaderStyle={{
          border: "none",
        }}
        modalBodyStyle={{
          margin: 0,
          padding: 0,
        }}
        modalFooterStyle={{
          border: "none",
        }}
      >
        <section className={styles.userModal}>
          <div className="container-fluid">
            <div className="row">
              <div className="col-12 d-md-none d-sm-block">
                <div className={styles.userModalClose}>
                  <button
                    type="button"
                    className="btn-close text-right m-auto"
                    id="loginModalClose"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
              </div>
            </div>
            <div className="container">
              <div className="row">
                <div
                  className={`col-md-4 ${
                    userModal !== "signUpSuccess" && "m-auto"
                  }`}
                >
                  <div className={styles.contentWrapper}>
                    <div className={styles.content}>
                      <h3>Welcome back to DeSchool!</h3>
                      <p>
                        Deschool is an online learning community for all your
                        favourite skills! Let&apos;s get you started!
                      </p>
                    </div>
                  </div>
                </div>

                <div
                  className={`col-md-8 ${
                    userModal == "signUpSuccess" && "m-auto"
                  }`}
                >
                  <div className={styles.loginSignupWrapper}>
                    {userModal === "login" ? (
                      <>
                        <form
                          className="loginForm"
                          id="userLoginForm"
                          onSubmit={handleLoginSubmit}
                        >
                          <div className="mb-3">
                            <label htmlFor="loginEmail" className="form-label">
                              Email address
                            </label>
                            <input
                              type="email"
                              className="form-control"
                              id="loginEmail"
                              aria-describedby="loginEmailHelp"
                              placeholder="Enter your email address"
                              onChange={onMailChange}
                            />
                            <span className="text-danger font-12">
                              {emailError}
                            </span>
                            <div
                              id="loginEmailHelp"
                              className="form-text"
                            ></div>
                          </div>

                          <div className="mb-3">
                            <label
                              htmlFor="loginPassword"
                              className="form-label"
                            >
                              Password
                            </label>
                            <input
                              type="password"
                              className="form-control"
                              id="loginPassword"
                              placeholder="Enter your password"
                              onChange={onPasswordChange}
                            />
                            <span className="text-danger  font-12">
                              {passwordError}
                            </span>
                            <div id="loginPassword" className="form-text"></div>
                          </div>

                          <div
                            className={`mb-3 d-flex justify-content-between  ${styles.forgotPasswordBtn}`}
                          >
                            <p
                              className="order-1"
                              onClick={() =>
                                setUserModal((userModal) => "forgotAccount")
                              }
                            >
                              Forgot Password
                            </p>
                            <p className="text-danger fw-normal ">
                              {statusLogin}
                            </p>
                          </div>

                          <button
                            type="submit"
                            className={`btn btn-primary ${styles.submitBtn}`}
                          >
                            Sign in
                          </button>
                        </form>
                        <div className={`mt-4 ${styles.createAccountWrapper}`}>
                          <p>
                            Don’t have an account yet?{" "}
                            <span
                              onClick={() =>
                                setUserModal((userModal) => "signup")
                              }
                            >
                              Sign Up
                            </span>
                          </p>
                        </div>
                      </>
                    ) : userModal === "signup" ? (
                      <>
                        {successSignUp && (
                          <>
                            <p className="text-success">
                              User registered successfully.
                            </p>
                            <p className="text-success">
                              Please check your mail for verification
                            </p>
                          </>
                        )}
                        <form
                          className="signUpForm"
                          id="userSignUpForm"
                          onSubmit={handleSignUpSubmit}
                        >
                          <div className="mb-3 row justify-content-between">
                            <div className="col-sm-6">
                              <label
                                htmlFor="signUpFirstName"
                                className="form-label"
                              >
                                First Name
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="signUpFirstName"
                                aria-describedby="signUpFirstNameHelp"
                                placeholder="Enter your first name"
                                onChange={(e) => onNameChange(e)}
                              />
                              <span className="text-danger font-12 text-nowrap">
                                {fNameError}
                              </span>
                              <div
                                id="signUpFirstNameHelp"
                                className="form-text"
                              ></div>
                            </div>

                            <div className="col-sm-6">
                              <label
                                htmlFor="signUpLastName"
                                className="form-label"
                              >
                                Last Name
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="signUpLastName"
                                aria-describedby="signUpLastNameHelp"
                                placeholder="Enter your last name"
                                onChange={(e) => onNameChange(e, "lastName")}
                              />
                              <span className="text-danger font-12">
                                {lNameError}
                              </span>
                              <div
                                id="signUpLastNameHelp"
                                className="form-text"
                              ></div>
                            </div>
                          </div>

                          <div className="mb-3">
                            <label htmlFor="signUpEmail" className="form-label">
                              Email address
                            </label>
                            <input
                              type="email"
                              className="form-control"
                              id="signUpEmail"
                              aria-describedby="signUpEmailHelp"
                              placeholder="Enter your email address"
                              onChange={onMailChange}
                            />
                            <span className="text-danger font-12">
                              {emailError}
                            </span>
                            <div
                              id="signUpEmailHelp"
                              className="form-text"
                            ></div>
                          </div>

                          <div className="mb-3">
                            <label
                              htmlFor="signUpCreatePassword"
                              className="form-label"
                            >
                              Create Password
                            </label>
                            <input
                              type="password"
                              className="form-control"
                              id="signUpCreatePassword"
                              placeholder="Create your password"
                              onChange={onPasswordChange}
                            />
                            <span className="text-danger font-12">
                              {passwordError}
                            </span>
                            <div
                              id="signUpCreatePassword"
                              className="form-text"
                            ></div>
                          </div>

                          {/* Confirm Password */}

                          <div className="mb-3">
                            <label
                              htmlFor="signUpConfirmPassword"
                              className="form-label"
                            >
                              Confirm Password
                            </label>
                            <input
                              type="password"
                              className="form-control"
                              id="signUpConfirmPassword"
                              placeholder="Confirm password"
                              onChange={onConfirmPasswordChange}
                            />
                            <span className="text-danger font-12">
                              {confirmPasswordError}
                            </span>
                            <div
                              id="signUpConfirmPassword"
                              className="form-text"
                            ></div>
                          </div>

                          {/* <div className={`mb-3 ${styles.forgotPasswordBtn}`}>
                          <p onClick={() => setUserModal(userModal => 'forgotAccount')}>Forgot Password</p>
                        </div> */}
                          <span className="text-danger font-12">
                            {statusSignup}
                          </span>
                          <button
                            type="submit"
                            className={`btn btn-primary ${styles.submitBtn}`}
                          >
                            Sign up
                          </button>
                        </form>
                        <div className={`mt-4 ${styles.createAccountWrapper}`}>
                          <p>
                            Already a member?{" "}
                            <span
                              onClick={() =>
                                setUserModal((userModal) => "login")
                              }
                            >
                              Sign In
                            </span>
                          </p>
                        </div>
                      </>
                    ) : userModal === "signUpSuccess" ? (
                      <>
                        <div className={`${styles.signUpSuccessWrapper}`}>
                          <div className={styles.signUpSuccessContent}>
                            <h4>Thanks for signing up with us!</h4>
                            <p>
                              Please visit your registered email ID for more
                              information.
                            </p>
                          </div>
                        </div>
                      </>
                    ) : (
                      <>
                        <form
                          className="forgotPasswordForm"
                          id="forgotUserPasswordForm"
                          onSubmit={handleForgotPasswordSubmit}
                        >
                          <div className="mb-3">
                            <label htmlFor="forgotEmail" className="form-label">
                              Email address
                            </label>
                            <input
                              type="email"
                              className="form-control"
                              id="forgotEmail"
                              aria-describedby="forgotEmailHelp"
                              placeholder="Enter your email address"
                              onChange={onMailChange}
                            />
                            <span className="text-danger font-12">
                              {emailError}
                            </span>
                            <div
                              id="forgotEmailHelp"
                              className="form-text"
                            ></div>
                          </div>

                          {successForgot && (
                            <p className="text-success">
                              {forgotSuccessMessage ||
                                "Please check your email."}
                            </p>
                          )}
                          <span className="text-danger font-12">
                            {statusForgot}
                          </span>
                          <button
                            type="submit"
                            className={`btn btn-primary ${styles.submitBtn}`}
                          >
                            Forgot Password
                          </button>
                        </form>
                        <div className={`mt-4 ${styles.createAccountWrapper}`}>
                          <p>
                            Don’t have an account yet?{" "}
                            <span
                              onClick={() =>
                                setUserModal((userModal) => "signup")
                              }
                            >
                              Sign Up
                            </span>
                          </p>
                        </div>

                        <div className={`mt-3 ${styles.createAccountWrapper}`}>
                          <p>
                            Already a member?{" "}
                            <span
                              onClick={() =>
                                setUserModal((userModal) => "login")
                              }
                            >
                              Sign In
                            </span>
                          </p>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Modal>
    </div>
  );
};

export default UserModal;
