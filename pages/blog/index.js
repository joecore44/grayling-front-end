import React from "react";
import NavbarStyle1 from "@/components/Layout/Navbar/NavbarStyle1";
import PageBanner from "@/components/Common/PageBanner";
import BlogWithRightSidebar from "@/components/Blog/BlogWithRightSidebar";
import Footer from "@/components/Layout/Footer/Footer";

const BlogRightSidebar = () => {
  return (
    <>
      <NavbarStyle1 />

      <PageBanner title="Blog" homeText="Home" homeUrl="/" />

      <BlogWithRightSidebar />

      <Footer />
    </>
  );
};

export default BlogRightSidebar;
