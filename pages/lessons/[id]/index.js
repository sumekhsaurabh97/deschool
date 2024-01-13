import Head from "next/head";

import SingleLesson from "../../../components/FindLesson/SingleLesson/index";

const Course = ({ singleCourseData }) => {
  return (
    <>
      <Head>
        <title>
          Deschool |{singleCourseData && singleCourseData.meta_title}
        </title>
        <meta
          name="keywords"
          content={singleCourseData && singleCourseData.meta_keyword}
        ></meta>
        <meta
          id="meta-description"
          name="description"
          content={singleCourseData && singleCourseData.meta_description}
        />
        <meta
          id="og-title"
          property="og:title"
          content={singleCourseData && singleCourseData.meta_title}
        />
        <meta
          id="og-image"
          property="og:image"
          content={
            singleCourseData && singleCourseData.banner
              ? singleCourseData.banner
              : "/assets/images/music_class.jpg"
          }
        />
      </Head>
      <SingleLesson data={singleCourseData} />
    </>
  );
};

export const getServerSideProps = async (context) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_ENDPOINT}lessons/${context.params.id}`
  );
  const singleCourseData = await res.json();

  return {
    props: {
      singleCourseData,
    },
  };
};

export default Course;
