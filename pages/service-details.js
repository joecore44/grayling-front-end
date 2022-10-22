import React from "react";
import NavbarStyle1 from "@/components/Layout/Navbar/NavbarStyle1";
import PageBanner from "@/components/Common/PageBanner";
import ServiceDetailsContent from "@/components/Services/ServiceDetailsContent";
import Cta from "@/components/Common/Cta";
import Footer from "@/components/Layout/Footer/Footer";

export default function ServiceDetails() {
  return (
    <>
      <NavbarStyle1 />

      <PageBanner title="Service Details" homeText="Home" homeUrl="/" />

      <ServiceDetailsContent />

      <Cta />

      <Footer />
    </>
  );
}
