import React from "react";
import NavbarStyle1 from "@/components/Layout/Navbar/NavbarStyle1";
import PageBanner from "@/components/Common/PageBanner";
import TeamMember from "@/components/Team/TeamMember";
import Cta from "@/components/Common/Cta";
import Footer from "@/components/Layout/Footer/Footer";

export default function Team() {
  return (
    <>
      <NavbarStyle1 />

      <PageBanner title="Our Team" homeText="Home" homeUrl="/" />

      <TeamMember />

      <Cta />

      <Footer />
    </>
  );
}
