import React from "react";
import Head from "next/head";

import Hero from "../components/HeroSection/index";
import LearnToday from "../components/LearnToday/index";
import HowWorks from "../components/HowWorks/index";
import Discover from "../components/Discover/index";
import Teachers from "../components/Teachers/index";
import WhyDeschool from "../components/WhyDeschool/index";

export default function Dashboard({ carouselData, teacherCarouselData }) {
  return (
    <div>
      <Head>
        <title>Deschool</title>
      </Head>
      <Hero
        title="Real skills, taught by real experts."
        description="Hello learners! We're here to unite your passions and education. Learn what you love, the way you want, where you want."
        buttonTitle="Explore Lessons"
        buttonLink="/lessons"
        imageSrc="/assets/images/kid_fly.jpg"
        imgWidth={640}
        imgHeight={720}
        altImage="kid-fly"
        heroStyle={{
          backgroundColor: "#F17C72",
          paddingBottom: "0",
        }}
        heroContentStyle={{ maxWidth: "475px", textAlign: "left" }}
        buttonStyle={{
          color: "#F17C72",
          borderRadius: "8px",
          backgroundColor: "#fff",
          fontSize: "16px",
          padding: "12px 24px",
        }}
      />

      <LearnToday
        mainTitle="What would you like to explore next?"
        mainDescription="You can thank us later for bringing expertise and skills from across the globe to your screens. Strengthen your skills and passions. Learn to play the piano or drums. Take a className in iPhone photography or Learn Spanish. Bring an empty canvas, and we'll help you fill it with everything you love."
        linkText="See All Course"
        linkRef="/lessons"
        carouselData={carouselData.data}
      />

      <HowWorks />

      <Discover
        title="What will you discover?"
        description="A happy place that allows you to learn, explore your interests, get inspired and enjoy to the fullest. Enter this beautiful, engaging and forever evolving world of learning."
        buttonLink="/lessons"
        buttonTitle="Explore Lessons"
        buttonStyle={{
          color: "#FFF",
          borderRadius: "8px",
          backgroundColor: "#F17C72",
          fontSize: "16px",
          padding: "12px 24px",
        }}
        heroContentStyle={{ maxWidth: "425px", margin: "0" }}
      />

      <Teachers
        mainTitle="Meet our teaching champions"
        mainDescription="This is our team of maestros, geniuses, industry icons and real life champions. You will love learning with them, just as much as they love what they teach!"
        carouselData={teacherCarouselData.data}
      />

      <WhyDeschool heading="What makes Deschool unique?" />
    </div>
  );
}

export async function getServerSideProps() {
  const coursesUrl = `${process.env.NEXT_PUBLIC_BACKEND_ENDPOINT}lessons?page_num=1&page_size=10000&lesson_status=active`;
  const teacherUrl = `${process.env.NEXT_PUBLIC_BACKEND_ENDPOINT}teachers`;
  const [data, responseTeacher] = await Promise.all([
    fetch(coursesUrl),
    fetch(teacherUrl),
  ]);

  const [carouselData, teacherCarouselData] = await Promise.all([
    data.json(),
    responseTeacher.json(),
  ]);
  return { props: { carouselData, teacherCarouselData } };
}
