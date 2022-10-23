import React from "react";
import NavbarStyle1 from "@/components/Layout/Navbar/NavbarStyle1";
import PageBanner from "@/components/Common/PageBanner";
import BlogDetailsContent from "@/components/Blog/BlogDetailsContent";
import LatestArticles from "@/components/Common/LatestArticles";
import Footer from "@/components/Layout/Footer/Footer";

const BlogDetails = () => {
  return (
    <>
      <NavbarStyle1 />

      <PageBanner title="Blog Details" homeText="Home" homeUrl="/" />

      <BlogDetailsContent />

      <Footer />
    </>
  );
};

export default BlogDetails;
