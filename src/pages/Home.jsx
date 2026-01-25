import React from "react";
import Landing from "../components/Landing";
import Banner from "../components/Banner";
import Testimonials from "../components/Testimonials";
import Download from "../components/Download";
import Features from "../components/Features";
import Choose from "../components/Choose";


const Home = () => {
  return (
    <>
      <Landing />
      <Features />
      <Banner />
      <Choose />
      <Testimonials />
      <Download />
    </>
  );
};

export default Home;
