import React from "react";
import Link from "next/link";

const TopServices = () => {
  return (
    <>
      <div className="features-area pt-100 pb-75">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-features-card">
                <div className="number">01</div>
                <h3>
                  <Link href="/service-details">
                    <a>Social Media Content</a>
                  </Link>
                </h3>
                <ul className="features-list">
                  <li>
                    <Link href="/service-details">
                      <a>Social Shit</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/service-details">
                      <a>Social Shit</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/service-details">
                      <a>Social Shit</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-features-card">
                <div className="number">02</div>
                <h3>
                  <Link href="/service-details">
                    <a>Web Design & Application Development</a>
                  </Link>
                </h3>
                <ul className="features-list">
                  <li>
                    <Link href="/service-details">
                      <a>Web Dev</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/service-details">
                      <a>Web Dev</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/service-details">
                      <a>Web Dev</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-features-card">
                <div className="number">03</div>
                <h3>
                  <Link href="/service-details">
                    <a>Video Production</a>
                  </Link>
                </h3>
                <ul className="features-list">
                  <li>
                    <Link href="/service-details">
                      <a>Video Production</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/service-details">
                      <a>Video Production</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/service-details">
                      <a>Video Production</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="features-shape-1">
          <img src="/images/features/shape-1.png" alt="image" />
        </div>
      </div>
    </>
  );
};

export default TopServices;
