import React from "react";
import GoingBackPage from "./GoingBackPage";
const PrivacyPolicy = () => {
  return (
    <>
      <GoingBackPage />
      <div className="container">
        <div className="head-container" style={{ marginTop: "5%" }}>
          <h1 style={{ textShadow: "0 0 3px #FF0000" }}>PRIVACY NOTICE</h1>
          <p>Last update _________</p>
        </div>
        <div>
          <p style={{ textShadow: "2px 2px 2px orange" }}>
            This Privacy notice for ___________(`we`, `us`, or `our`), describes
            how and why we might collect, store, use, and/or share (`Process`)
            your information when you use our services (`Services`), such as
            when you: Questions or concerns ? Reading this privacy notice will
            help understand your privacy rights and choices. if you do not agree
            with our policies and practices, please do not use our Services.
          </p>
        </div>
        <div>
          <h1>What is privacy Policy?</h1>
          <p>
            A privacy policy on your website is a legal document informing users
            about how you collect and handle their personal data, who you share
            it with, if you sell it, and any other relevant details.{" "}
          </p>

          <p>
            We’ll dive into further details later on in our required privacy
            policy clauses section, but a simple privacy policy outlines the
            following:
          </p>
        </div>
        <div>
          <h1>Why You Need a Privacy Policy</h1>
          <p>
            Almost every business that collects data through a website, mobile
            app, or desktop app must publish a privacy policy due to one or all
            of the following:
          </p>
          <p>1. Data privacy laws</p>
          <p>2. Third-party service requirements</p>
          <p>
            3. Maintaining trust and transparency between your business and
            customers
          </p>
          <p>Let’s examine these three requirements in more detail:</p>
        </div>
        <div>
          <h1>Privacy Policies are Required by Law</h1>
          <p>
            Privacy laws vary around the globe, and your website or app must
            abide by the regulations based on the location of your business,
            your targeted audience, and where you conduct business.
          </p>
          <p>
            As data collection and processing becomes more ubiquitous across the
            internet, data privacy laws in the US and around the world set
            strict requirements for privacy policies.
          </p>
          <p>
            The following laws impact if and when you legally need a privacy
            policy page for your website or app:
          </p>
        </div>
        <div>
          <h4>The General Data Privacy Regulation (GDPR)</h4>
          <p>
            The GDPR regulates privacy policy requirements for entities
            targeting users in the European Union (EU) and the European Economic
            Area (EEA), regardless of the company’s physical location.
          </p>
          <p>
            Your business must comply with the GDPR if it targets EU consumers
            and meets one of the following thresholds:
          </p>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicy;
