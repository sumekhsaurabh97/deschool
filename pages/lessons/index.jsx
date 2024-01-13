import Head from "next/head";
import http from "../../api";

import FindLesson from "../../components/FindLesson";

export default function Courses({ courses, categoriesData }) {
  return (
    <>
      <Head>
        <title>Deschool | Find Lesson</title>
      </Head>
      <FindLesson courses={courses} category={categoriesData} />
    </>
  );
}

export async function getServerSideProps() {
  let coursesUrl = `${process.env.NEXT_PUBLIC_BACKEND_ENDPOINT}lessons?page_num=1&page_size=3&lesson_status=active`;
  let categoriesUrl = `${process.env.NEXT_PUBLIC_BACKEND_ENDPOINT}categories?page_num=1&page_size=10`;
  const [data, categories] = await Promise.all([
    fetch(coursesUrl),
    fetch(categoriesUrl),
  ]);
  const [courseData, categoriesData] = await Promise.all([
    data.json(),
    categories.json(),
  ]);
  return { props: { courses: courseData, categoriesData } };
}
