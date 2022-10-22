import React from "react";
import NavbarStyle1 from "@/components/Layout/Navbar/NavbarStyle1";
import PageBanner from "@/components/Common/PageBanner";
import FaqContent from "@/components/FaqContent/FaqContent";
import Partner from "@/components/Common/Partner";
import Footer from "@/components/Layout/Footer/Footer";

export default function Faq() {
  return (
    <>
      <NavbarStyle1 />

      <PageBanner title="Faq" homeText="Home" homeUrl="/" />

      <FaqContent />

      <Partner />

      <Footer />
    </>
  );
}
