import React from "react";
import NavbarStyle1 from "@/components/Layout/Navbar/NavbarStyle1";
import PageBanner from "@/components/Common/PageBanner";
import TestimonialsCard from "@/components/Testimonials/TestimonialsCard";
import Cta from "@/components/Common/Cta";
import Partner from "@/components/Common/Partner";
import Footer from "@/components/Layout/Footer/Footer";

export default function Testimonials() {
  return (
    <>
      <NavbarStyle1 />

      <PageBanner title="Testimonials" homeText="Home" homeUrl="/" />

      <TestimonialsCard />

      <div className="pb-100">
        <Cta />
      </div>


      
      <Footer />
    </>
  );
}
