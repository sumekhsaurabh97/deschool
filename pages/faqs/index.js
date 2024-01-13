import React from "react";
import Head from "next/head";

import FaqPage from "../../components/Faq/Faqs";

export default function Faq() {
  
  return (
    <>
     <Head>
        <title>Deschool | Faqs</title>
      </Head>
      <FaqPage />
    </>
  );
}
