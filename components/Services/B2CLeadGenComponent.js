import React from "react";
import Link from "next/link";

const B2BLeadGenComponent = () => {
  return (
    <>
      <div className="services-details-area pt-100 pb-75">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <div className="services-details-content">
                <Link href="/services">
                  <a className="back-to-services">
                    <i className="ri-arrow-left-line"></i> Beck to Services
                  </a>
                </Link>

                <img src="/images/services-details.jpg" alt="Teza" />

                <h3>B2C Lead Generation Agency – Capture and Convert Qualified Leads</h3>
                <p>
                Attract the right leads with seamless B2C lead generation strategies. More than half of your target leads aren't ready to buy yet. Most businesses push their leads to purchase when their audience is still in research and discovery mode. Grayling Agency(™) approaches lead generation by codifying your offer in a way that MAKES it time sensitive and decreases the lead life cycle via omnichannel and lifecycle marketing. We connect with your audience at every touch point of the buying journey to deliver the right content at the right stages.
Grayling Agency(™) delivers personalized content based on data-driven. Our smart strategies capture high-quality traffic, strengthen customer relations, and generate repeat sales.</p>
                <h3>Grayling Agency(™) –We Focus on the Right Leads</h3>
                <p>
                We take your audience from awareness to purchase using killer content delivered at the perfect time. Grayling Agency(™) is laser-focused on finding and converting your highest-intent audience segments. 
                </p>
                <p>
                Our team creates omni-channel strategies to generate leads ready to buy your products. How do we do this? We tailor-fit our campaigns to pinpoint your target market and generate sales-ready leads.                </p>
                <p>We use continuous intelligence to build profiles and monitor how they’re changing in real time. Your business doesn’t just get a steady stream of qualified prospects, but also compelling reasons to reach out – well before they see your competition.</p>
                
                <h3>Our Process</h3>
                <p>We help you understand your sales pipeline, identify opportunities and drive customer growth. We make it easy for sales reps to close new business by serving them sales-ready leads. With real-time insights, you can build campaigns based on the actions of your ideal customers. Reach them now to achieve faster sales success. We maximize your sales effort in different lead generation channels. Our situation-based and customer-focused approach puts your brand on the map, establishes a lasting customer relationship, and encourages repeat business. From award-winning sales copy to charming social media interactions, our proven strategies can grow your business and convert your audience to loyal customers.</p>
                <h3>B2C Lead Generation Targeting Options</h3>
                <p>Customize messages so your target audience can understand your brand better. Grayling Agency understands your customer buying journey, and we send cohesive brand messaging that establishes your credibility, fosters trust, and drives your audience to purchase. We've helped these brands grow; we can do this for you too. </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default B2BLeadGenComponent;
