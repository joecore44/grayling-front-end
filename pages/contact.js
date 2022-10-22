import React from "react";
import NavbarStyle1 from "@/components/Layout/Navbar/NavbarStyle1";
import PageBanner from "@/components/Common/PageBanner";
import ContactInfo from "@/components/Contact/ContactInfo";
import ContactForm from "@/components/Contact/ContactForm";
import Footer from "@/components/Layout/Footer/Footer";

export default function Contact() {
  return (
    <>
      <NavbarStyle1 />

      <PageBanner title="Contact Grayling" homeText="Home" homeUrl="/" />

      <ContactInfo />

      <ContactForm />

      <Footer />
    </>
  );
}
