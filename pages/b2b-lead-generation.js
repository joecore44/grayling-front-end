import React from "react";
import NavbarStyle1 from "@/components/Layout/Navbar/NavbarStyle1";
import PageBanner from "@/components/Common/PageBanner";
import ServiceDetailsContent from "@/components/Services/ServiceDetailsContent";
import Cta from "@/components/Common/Cta";
import Footer from "@/components/Layout/Footer/Footer";
import B2BLeadGenComponent from "../components/Services/B2BLeadGenComponent";

export default function ServiceDetails() {
  return (
    <>
      <NavbarStyle1 />

      <PageBanner title="B2B Lead Generation" homeText="Home" homeUrl="/" />

      <B2BLeadGenComponent />

      <Cta />

      <Footer />
    </>
  );
}
