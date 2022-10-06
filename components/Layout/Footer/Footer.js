import React from "react";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <footer className="footer-area pt-100">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-3 col-md-6">
              <div className="single-footer-widget">
                <div className="widget-logo">
                  <Link href="/">
                    <a>
                      <img src="/images/grayling-logo-white.png" alt="Grayling Agency" />
                    </a>
                  </Link>
                </div>
                <p>
                We specialize in one thing. Creating and optimizing high-value Facebook & Instagram Ad Funnels that generate a scaleable ROAS for your company.
                </p>
                <ul className="widget-social">
                  <li>
                    <a
                      href="https://www.facebook.com/grayling-agency"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="ri-facebook-fill"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/graylingagency"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="ri-instagram-line"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/graylingagency"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="ri-linkedin-line"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="single-footer-widget ps-5">
                <h3>Useful Link</h3>

                <ul className="quick-links">
                  <li>
                    <Link href="/about">
                      <a>About Grayling</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/team">
                      <a>Our Team</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/services">
                      <a>Services</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/case-study">
                      <a>Case Study</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog">
                      <a>Blog</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="single-footer-widget ps-5">
                <h3>Our Services</h3>

                <ul className="quick-links">
                  <li>
                    <Link href="/service-details">
                      <a>Social Media</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/service-details">
                      <a>Web Development</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/service-details">
                      <a>Lead Generation</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/service-details">
                      <a>Digital Marketing</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="single-footer-widget ps-3">
                <h3>Contact Info</h3>

                <ul className="footer-information">
                  <li>
                    <i className="ri-map-pin-line"></i>
                    6350 E State Rte 69 Unit A, Prescott Valley, AZ 86314
                  </li>
                  <li>
                    <i className="ri-phone-fill"></i>
                    <a href="tel:1800800800">1 (800) 800-800</a>
                  </li>
                  <li>
                    <i className="ri-mail-line"></i>
                    <a href="mailto:hello@tgraylingagency.com">hello@graylingagency.com</a>
                  </li>
                  <li>
                    <i className="ri-mail-line"></i>
                    <a href="mailto:contact@teza.com">contact@graylingagency.com</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright-area">
          <div className="container">
            <div className="copyright-area-content">
              <p>
                Copyright {currentYear} Grayling Agency All Rights Reserved
  
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
