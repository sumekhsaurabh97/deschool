import React, { useContext, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { DebounceInput } from "react-debounce-input";

import CartBox from "../Cart/CartBox";
import { UserContext } from "../../pages/_app";
import http from "../../api";
import UserModal from "./UserModal";
import styles from "../Header/styles/Header.module.scss";
import { UniversalSearch } from "./UniversalSearch";

const Header = (props) => {
  const [searchValue, setSearchValue] = useState("");
  const [courseData, setCourseData] = useState(null);
  const [searchItem, setSearchItem] = useState(false);
  const [showCart, setShowCart] = useState(false);

  const {
    userDetails,
    setUserDetails,
    cartDetails,
    setCartDetails,
    role,
    setRole,
    setUserModal,
  } = useContext(UserContext);

  const [isTrue, setIsTrue] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const Router = useRouter();

  const router = useRouter();

  const handleSearch = (e) => {
    if (e.target.value.trim().length > 0) {
      setSearchValue(e.target.value);
      search(e.target.value);
    } else {
      setSearchItem(false);
    }
    // setSearchValue((prev) => e.target.value);
  };
  const search = async (value) => {
    const url = `/api/lessons?page_num=1&page_size=1000&title=${value}&lesson_status=active`;
    const resultant = await http.get(url);
    if (resultant) {
      setSearchItem(true);
      setCourseData(resultant.data.data);
    }
  };
  const handleSearchClick = () => {
    setSearchItem(false);
  };
  const handleCart = () => {
    setIsTrue(!isTrue);
    setIsActive(!isActive);
  };

  const handleCartResp = () => {
    setisAvtive(!isActive);
  };

  const handleLogout = () => {
    localStorage.removeItem("user-access-token");
    setShowCart(false);
    setUserDetails({});
    setCartDetails(null);
    Router.push("/");
  };
  const handleShowCart = () => {
    setShowCart(!showCart);
  };

  return (
    <>
      <nav
        className={`navbar py-4 container-fluid navbar-expand-lg fixed-top ${styles.container_background} `}
      >
        <div className={`container`}>
          <div className={`${styles.navIcon}`}>
            <Link className="navbar-brand active" href="/">
              <Image
                src="/assets/images/image.svg"
                alt="logo"
                width={220}
                // layout = "responsive"
                height={43}
                className={`${styles.imageLogo} img-fluid `}
              />
            </Link>
          </div>
          <div className="position-relative">
            <form
              autoComplete="off"
              className={`form-inline 	 d-lg-none d-md-block d-none ${styles.searchBar}`}
            >
              <DebounceInput
                minLength={3}
                debounceTimeout={500}
                type="text"
                name="search"
                value={searchValue}
                onChange={handleSearch}
                placeholder="Search"
                className={`mr-sm-3 ${styles.styles_search} ${styles.landing_form}`}
              />
            </form>
            {searchItem ? (
              <div
                className={`${styles.searchResult} d-lg-none d-md-block d-none`}
              >
                {courseData &&
                  courseData.map((item) => {
                    return (
                      <>
                        <UniversalSearch
                          handleUniversalSearchClick={handleSearchClick}
                          UniversalSearchStyle={styles.UniversalSearchStyle}
                          lessonLink={`/lessons/${item._id}`}
                          imageSrc={item.banner}
                          imageStyle={styles.UniversalSearchImage}
                          lessonName={item.name}
                        />
                      </>
                    );
                  })}
              </div>
            ) : (
              ""
            )}
          </div>
          {userDetails.data ? (
            <div className=" d-md-block ${styles.cartImageResp} position-relative d-lg-none nav-item">
              <div className="d-flex align-items-center gap-1">
                <Image
                  onClick={handleCart}
                  src="/assets/images/cart_icon.svg"
                  alt="cart-image"
                  width={30}
                  height={30}
                />
                <span
                  className={`${styles.style_navigation_item} ${styles.cartLength} text-white text-nowrap pb-0 fw-bold`}
                >
                  {(cartDetails && cartDetails.lessons_with_slot?.length) || 0}
                </span>
              </div>
              {isActive ? (
                <>
                  <div className={styles.respTooltip}></div>
                  <div className={` ${styles.cartImage2}`}>
                    <CartBox handleCloseCart={handleCart} />
                  </div>
                </>
              ) : (
                ""
              )}
            </div>
          ) : (
            ""
          )}

          <button
            className={` ${styles.navButton} border-0 navbar-toggler    `}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo03"
            aria-controls="navbarTogglerDemo03"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className={`${styles.navbarIcon} navbar-toggler-icon`}></span>
            {/* <span className="close">X</span> */}
          </button>

          <div
            className={`collapse navbar-collapse  ${styles.navCollapse}`}
            id="navbarTogglerDemo03"
          >
            <ul
              className={`  d-lg-flex justify-content-between list-unstyled  me-lg-auto mb-2 mb-lg-0 ${styles.navColor}`}
            >
              <li className=" nav-item py-md-0 pt-md-3  py-lg-0 px-lg-0 ps-3  pt-lg-3 pt-3 pt-xl-3  ">
                <Link href="/lessons">
                  <a
                    className={`text-nowrap ps-lg-2 pe-lg-1 mt-5  fw-bold text-decoration-none ${
                      styles.styles_searchTitle
                    } ${styles.style_navigation_item}  ${
                      router.pathname == "/lessons" ? styles.active : ""
                    }`}
                  >
                    Explore Our Lessons
                  </a>
                </Link>
              </li>
              <li
                className={`  px-xl-3 pt-xl-1 ${styles.styles_searchInputWrapper}`}
              >
                <div className="position-relative">
                  <form
                    autoComplete="off"
                    className={`form-inline   ${styles.searchBar}`}
                  >
                    <DebounceInput
                      minLength={3}
                      debounceTimeout={500}
                      type="text"
                      name="search"
                      value={searchValue}
                      onChange={handleSearch}
                      placeholder="Search"
                      className={`mr-sm-3 ${styles.styles_search} ${styles.landing_form}`}
                    />
                  </form>
                  {searchItem ? (
                    <div className={`${styles.searchResult}`}>
                      {courseData &&
                        courseData.map((item) => {
                          return (
                            <>
                              <UniversalSearch
                                handleUniversalSearchClick={handleSearchClick}
                                UniversalSearchStyle={
                                  styles.UniversalSearchStyle
                                }
                                lessonLink={`/lessons/${item._id}`}
                                imageSrc={item.banner}
                                imageStyle={styles.UniversalSearchImage}
                                lessonName={item.name}
                              />
                            </>
                          );
                        })}
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              </li>

              <li
                className={
                  userDetails.data
                    ? `py-lg-3  ${styles.navListLogged}`
                    : ` py-lg-3 ${styles.navListTwo}`
                }
              >
                <ul className="list-unstyled  d-lg-flex ">
                  <li className="nav-item">
                    <Link href="https://dashboard.deschoolonline.com/login">
                      <a
                        className={`${
                          styles.style_navigation_item
                        } nav-link text-nowrap  pb-0 ps-lg-2 ps-3 pe-xl-3 pe-lg-2  fw-bold ${
                          router.pathname ==
                          "https://dashboard.deschoolonline.com/login"
                            ? styles.active
                            : ""
                        }`}
                      >
                        Dashboard
                      </a>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link href="/teach-with-us">
                      <a
                        className={`${
                          styles.style_navigation_item
                        } nav-link text-nowrap  pb-0 ps-lg-2 ps-3 pe-xl-3 pe-lg-2 fw-bold ${
                          router.pathname == "/teach-with-us"
                            ? styles.active
                            : ""
                        }`}
                      >
                        Teach with us
                      </a>
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link href="/about-us">
                      <a
                        className={`${
                          styles.style_navigation_item
                        } nav-link text-nowrap  pb-0 ps-lg-2 ps-3 pe-xl-3 pe-lg-2 fw-bold ${
                          router.pathname == "/about-us" ? styles.active : " "
                        }`}
                      >
                        About Us
                      </a>
                    </Link>
                  </li>

                  {userDetails.data ? (
                    <>
                      <li className="nav-item">
                        <a
                          className={`${styles.style_navigation_item} nav-link text-nowrap  pb-0 ps-lg-2 ps-3 pe-xl-3 pe-lg-2  fw-bold`}
                          onClick={handleLogout}
                        >
                          Log Out
                        </a>
                      </li>
                    </>
                  ) : (
                    <li className="nav-item">
                      <a
                        className={`${styles.style_navigation_item} nav-link text-nowrap  pb-0 ps-lg-2 ps-3 pe-xl-3 pe-lg-2  fw-bold`}
                        data-bs-toggle="modal"
                        data-bs-target="#loginModal"
                        onClick={() => {
                          setUserModal("login");
                          setRole("STUDENT");
                        }}
                      >
                        Log In
                      </a>
                    </li>
                  )}
                  {userDetails.data ? (
                    <>
                      <li
                        className={` ${styles.cartImage} d-md-none nav-item d-lg-block`}
                      >
                        <Image
                          onClick={handleCart}
                          src="/assets/images/cart_icon.svg"
                          alt="cart-image"
                          width={20}
                          height={20}
                        />
                        {isTrue ? (
                          <>
                            <div className={styles.tooltip}></div>
                            <div className={`${styles.dropdown}`}>
                              <CartBox handleCloseCart={handleCart} />
                            </div>
                          </>
                        ) : (
                          ""
                        )}
                      </li>
                      <li
                        className={`${styles.style_navigation_item}  d-none  d-lg-block nav-link text-nowrap pb-0 fw-bold `}
                      >
                        {(cartDetails &&
                          cartDetails?.lessons_with_slot.length) ||
                          0}
                      </li>
                    </>
                  ) : (
                    ""
                  )}
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <UserModal role={role} />
    </>
  );
};

export default Header;
