import React from "react";
import NavbarStyle1 from "@/components/Layout/Navbar/NavbarStyle1";
import PageBanner from "@/components/Common/PageBanner";
import CaseStudyCard from "@/components/CaseStudy/CaseStudyCard";
import TestimonialStyle2 from "@/components/Common/TestimonialStyle2";
import OurExpertise from "@/components/About/OurExpertise";
import Cta from '@/components/Common/Cta';
import Footer from "@/components/Layout/Footer/Footer";

export default function CaseStudy() {
  return (
    <>
      <NavbarStyle1 />

      <PageBanner title="Case Studies" homeText="Home" homeUrl="/" />

       <CaseStudyCard />

       <TestimonialStyle2 />

       <OurExpertise />

       <Cta />

      <Footer />
    </>
  );
}
