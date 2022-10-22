import React from "react";
import Link from "next/link";

const Cta = () => {
  return (
    <>
      <div className="container">
        <div className="cta-area ptb-100">
          <div className="cta-content">
            <h3>Let's <strong>Grow Your Business!</strong></h3>
            <span>Let's Chat</span>
          </div>

          <div className="cta-btn-box">
            <Link href="/contact">
              <a className="default-btn">Contact Us Now</a>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cta;
