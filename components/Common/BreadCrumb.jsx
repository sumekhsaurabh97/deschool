import React from "react";
import Link from "next/link";

export const BreadCrumb = ({ arr }) => {
  return (
    <>
      <nav
        className="fw-bold text-dark mx-lg-5 px-xl-5 px-lg-0 mt-5 mb-5 "
        style={{
          "--bs-breadcrumb-divider": "url('/assets/images/divider.svg')",
        }}
        aria-label="breadcrumb"
      >
        <ol className="breadcrumb align-item-center px-xl-5 mx-lg-5 ">
          {arr.map((bread) => {
            const breadcrumbTag = Object.keys(bread);
            const breadcrumbData = bread[breadcrumbTag];
            return (
              <li
                key={breadcrumbData.value}
                className={`breadcrumb-item  ${
                  breadcrumbData.isActive ? "active" : ""
                }`}
                aria-current="page"
              >
                {breadcrumbData.isActive ? (
                  <span className="pt-2">{breadcrumbData.value}</span>
                ) : (
                  <Link href={breadcrumbData.link}>
                    <a className="text-dark">{breadcrumbData.value}</a>
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
};
