import React from "react";
import NavbarStyle1 from "@/components/Layout/Navbar/NavbarStyle1";
import PageBanner from "@/components/Common/PageBanner";
import AboutOurCompany from "@/components/About/AboutOurCompany";
import FunFactStyle3 from "@/components/Common/FunFactStyle3";
import OurExpertise from "@/components/About/OurExpertise";
import WorkingProcess from "@/components/About/WorkingProcess";
import WhyChooseUsStyle2 from "@/components/Common/WhyChooseUsStyle2";
import TestimonialStyle2 from "@/components/Common/TestimonialStyle2";
import TeamMemberStyle2 from "@/components/Common/TeamMemberStyle2";
import Faq from "@/components/Common/Faq";
import Footer from "@/components/Layout/Footer/Footer";

export default function About() {
  return (
    <>
      <NavbarStyle1 />

      <PageBanner title="About Grayling" homeText="Home" homeUrl="/" />

      <AboutOurCompany />

      <FunFactStyle3 />

      <OurExpertise />

      <WorkingProcess />

      <WhyChooseUsStyle2 />

      <TestimonialStyle2 />

      <TeamMemberStyle2 />

      <Faq />

      <Footer />
    </>
  );
}
