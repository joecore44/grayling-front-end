import React from "react";

const ContactInfo = () => {
  return (
    <>
      <div className="contact-information-area pt-100 pb-75">
        <div className="container">
          <div className="section-title">
            <span>Contact Information</span>
            <h2>Alone We Can Do So Little Together We Can Do So Much</h2>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-3 col-md-6">
              <div className="contact-information-card">
                <div className="icon">
                  <i className="ri-map-pin-line"></i>
                </div>
                <h3>Location</h3>
                <p>6350 E State Rte 69 Unit A, Prescott Valley, AZ 86314</p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="contact-information-card">
                <div className="icon">
                  <i className="ri-mail-line"></i>
                </div>
                <h3>Email Address</h3>
                <p>
                  <a href="mailto:yo@graylingagency.com">yo@graylingagency.com</a> <br />{" "}
                  <a href="mailto:yo@graylingagency.com">yo@graylingagency.com</a>
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="contact-information-card">
                <div className="icon">
                  <i className="ri-phone-line"></i>
                </div>
                <h3>Phone Number</h3>
                <p>
                  <a href="tel:91298765436543">(800) 469-5804</a> <br />{" "}
                  <a href="tel:91298765436766">(800) 469-5804</a>
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="contact-information-card">
                <div className="icon">
                  <i className="ri-time-line"></i>
                </div>
                <h3>Working Hours</h3>
                <p>
                  Open Sunday To Thursday <br /> From 10.00 AM to 07.00 PM
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactInfo;
