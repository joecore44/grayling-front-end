import React from "react";
import NavbarStyle1 from "@/components/Layout/Navbar/NavbarStyle1";
import PageBanner from "@/components/Common/PageBanner";
import Pricing from "@/components/PricingPlan/Pricing";
import Faq from '@/components/Common/Faq';
import Footer from "@/components/Layout/Footer/Footer";

export default function PricingPage() {
  return (
    <>
      <NavbarStyle1 />

      <PageBanner title="Our Pricing" homeText="Home" homeUrl="/" />

      <Pricing />

      <Faq />
      
      <Footer />
    </>
  );
}
