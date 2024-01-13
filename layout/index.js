import Image from "next/image";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.css";

import Header from "../components/Header/index";
import Footer from "../components/Footer/index";

import styles from "./styles/Layout.module.scss";
import { useRouter } from "next/router";
import Link from "next/link";

const Layout = ({ children }) => {
  const router = useRouter();

  return (
    <>
      {router.pathname === "/payment" || router.pathname === "/checkout" ? (
        <div
          style={{
            background: "#fff",
            boxShadow: '0 2px 4px rgb(0 0 0 / 8%)',
          }}
        >
          <div className="container p-4 d-flex justify-content-between  align-items-center">
            <Image
              src="/assets/images/logo_footer.svg"
              alt="Logo"
              width={220}
              height={43}
            />
            <Link href="/cart">
              <a className={styles.cancelLinkColor}> Cancel </a>
            </Link>
          </div>
        </div>
      ) : (
        <Header />
      )}
      <div
        className={
          router.pathname === "/payment" || router.pathname === "/checkout"
            ? ""
            : styles.paddingTop_7
        }
      >
        {children}
      </div>
      {router.pathname === "/payment" || router.pathname === "/checkout" ? (
        ""
      ) : (
        <Footer />
      )}
    </>
  );
};

export default Layout;
