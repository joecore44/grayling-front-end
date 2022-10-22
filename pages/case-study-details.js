import React from "react";
import NavbarStyle1 from "@/components/Layout/Navbar/NavbarStyle1";
import PageBanner from "@/components/Common/PageBanner";
import CaseStudyDetailsContent from "@/components/CaseStudy/CaseStudyDetailsContent";
import Cta from "@/components/Common/Cta";
import Footer from "@/components/Layout/Footer/Footer";

export default function CaseStudyDetails() {
  return (
    <>
      <NavbarStyle1 />

      <PageBanner title="Case Study Details" homeText="Home" homeUrl="/" />

      <CaseStudyDetailsContent />

      <Cta />

      <Footer />
    </>
  );
}
