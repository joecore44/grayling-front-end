import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

const TeamMemberStyle2 = () => {
  return (
    <>
      <div className="team-area pt-100 pb-75">
        <div className="container">
          <div className="section-title">
            <span>Our Expert Team</span>
            <h2>Talented Members Ready Rip and Gript</h2>
          </div>

          <Swiper
            navigation={true}
            spaceBetween={20}
            breakpoints={{
              320: {
                slidesPerView: 1,
              },
              576: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 3,
              },
              992: {
                slidesPerView: 4,
              },
            }}
            modules={[Navigation]}
            className="mySwiper team-slides-two"
          >
            <SwiperSlide>
              <div className="single-team-item">
                <div className="team-image">
                  <img src="/images/team/team-1.jpg" alt="" />

                  <ul className="social">
                    <li>
                      <a
                        href="https://www.facebook.com/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="ri-facebook-fill"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://twitter.com/?lang=en"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="ri-twitter-fill"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.instagram.com/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="ri-instagram-line"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.linkedin.com/signup"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="ri-linkedin-line"></i>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="team-content">
                  <h3>Thomas Adison</h3>
                  <span>CEO & Founder</span>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-team-item">
                <div className="team-image">
                  <img src="/images/team/team-5.jpg" alt="Teza" />

                  <ul className="social">
                    <li>
                      <a
                        href="https://www.facebook.com/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="ri-facebook-fill"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://twitter.com/?lang=en"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="ri-twitter-fill"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.instagram.com/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="ri-instagram-line"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.linkedin.com/signup"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="ri-linkedin-line"></i>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="team-content">
                  <h3>Josh Laykin</h3>
                  <span>Manager</span>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-team-item">
                <div className="team-image">
                  <img src="/images/team/team-2.jpg" alt="" />

                  <ul className="social">
                    <li>
                      <a
                        href="https://www.facebook.com/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="ri-facebook-fill"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://twitter.com/?lang=en"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="ri-twitter-fill"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.instagram.com/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="ri-instagram-line"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.linkedin.com/signup"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="ri-linkedin-line"></i>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="team-content">
                  <h3>Christ Henry</h3>
                  <span>Marketing Director</span>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-team-item">
                <div className="team-image">
                  <img src="/images/team/team-3.jpg" alt="Teza" />

                  <ul className="social">
                    <li>
                      <a
                        href="https://www.facebook.com/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="ri-facebook-fill"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://twitter.com/?lang=en"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="ri-twitter-fill"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.instagram.com/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="ri-instagram-line"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.linkedin.com/signup"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="ri-linkedin-line"></i>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="team-content">
                  <h3>Jason Smith</h3>
                  <span>Founder</span>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-team-item">
                <div className="team-image">
                  <img src="/images/team/team-4.jpg" alt="Teza" />

                  <ul className="social">
                    <li>
                      <a
                        href="https://www.facebook.com/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="ri-facebook-fill"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://twitter.com/?lang=en"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="ri-twitter-fill"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.instagram.com/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="ri-instagram-line"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.linkedin.com/signup"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="ri-linkedin-line"></i>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="team-content">
                  <h3>Meriva Anjlin</h3>
                  <span>Designer</span>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-team-item">
                <div className="team-image">
                  <img src="/images/team/team-6.jpg" alt="Teza" />

                  <ul className="social">
                    <li>
                      <a
                        href="https://www.facebook.com/EnvyTheme"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="ri-facebook-fill"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://twitter.com/?lang=en"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="ri-twitter-fill"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.instagram.com/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="ri-instagram-line"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.linkedin.com/signup"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="ri-linkedin-line"></i>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="team-content">
                  <h3>Sean Walls</h3>
                  <span>Data Management</span>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-team-item">
                <div className="team-image">
                  <img src="/images/team/team-7.jpg" alt="Teza" />

                  <ul className="social">
                    <li>
                      <a
                        href="https://www.facebook.com/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="ri-facebook-fill"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://twitter.com/?lang=en"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="ri-twitter-fill"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.instagram.com/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="ri-instagram-line"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.linkedin.com/signup"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="ri-linkedin-line"></i>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="team-content">
                  <h3>Jaquelin Firnos</h3>
                  <span>Analytical Chick</span>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-team-item">
                <div className="team-image">
                  <img src="/images/team/team-8.jpg" alt="Teza" />

                  <ul className="social">
                    <li>
                      <a
                        href="https://www.facebook.com/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="ri-facebook-fill"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://twitter.com/?lang=en"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="ri-twitter-fill"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.instagram.com/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="ri-instagram-line"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.linkedin.com/signup"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="ri-linkedin-line"></i>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="team-content">
                  <h3>Jonthon Doe</h3>
                  <span>Marketing Director</span>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>

        <div className="team-shape-1">
          <img src="/images/team/shape-1.png" alt="Teza" />
        </div>
      </div>
    </>
  );
};

export default TeamMemberStyle2;
