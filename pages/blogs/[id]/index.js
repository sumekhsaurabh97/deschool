import { useRouter } from "next/router";
import Head from "next/head";

import BlogDetail from "../../../components/BlogSections/BlogDetail";

const Blogdetail = ({ blog }) => {
  const router = useRouter();
  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <>
     <Head>
        <title>Deschool | Blog Detail</title>
      </Head>
      <BlogDetail blog={blog.data} />
    </>
  );
};

export const getServerSideProps = async (context) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_ENDPOINT}blogs/${context.params.id}?next=false&previous=false
    `
  );
  const blog = await res.json();

  return {
    props: {
      blog,
    },
    // revalidate : 10,
  };
};

export default Blogdetail;
