import React from "react";
import NavbarStyle1 from "@/components/Layout/Navbar/NavbarStyle1";
import PageBanner from "@/components/Common/PageBanner";
import ServicesCard from "@/components/Services/ServicesCard";
import TestimonialStyle2 from "@/components/Common/TestimonialStyle2";
import Cta from "@/components/Common/Cta";
import Footer from "@/components/Layout/Footer/Footer";

export default function Services() {
  return (
    <>
       <NavbarStyle1 />

      <PageBanner title="Our Services" homeText="Home" homeUrl="/" />

      <ServicesCard />

      <TestimonialStyle2 />

      <div className="pt-100">
        <Cta />
      </div>

      <Footer />
    </>
  );
}
