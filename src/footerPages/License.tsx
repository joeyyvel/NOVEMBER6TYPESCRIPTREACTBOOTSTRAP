import React from "react";
import GoingBackPage from "./GoingBackPage";
const License = () => {
  return (
    <>
      <GoingBackPage />
      <div className="container">
        <div>
          <h1
            style={{ color: "#191970", fontSize: "2rem", fontWeight: "bolder" }}
          >
            BUSINESS REGISTRATION AND PERMITS
          </h1>
          <h5 style={{ color: "gray" }}>
            In putting up a business, there are several government agencies you
            have to register with depending on the type of your business. These
            agencies include among others the following:
          </h5>
          <hr />
        </div>
        <div>
          <h3 style={{ color: "#191970", fontWeight: "bold" }}>
            Department of Trade and Industry
          </h3>
          <p>
            It is necessary to register your single proprietorship business with
            the DTI to provide it with a legal identity and gain the rights to
            use your business name. Remember that a business name (BN)
            registration is not a license to operate a business.
          </p>
          <p>
            Registering a business name and paying the fee can be done online at
            bnrs.dti.gov.ph. You may find a step-by-step registration guide at
            <span style={{ color: "#C71585", fontSize: "15px" }}>
              {" "}
              bnrs.dti.gov.ph/resources/registration-guide.{" "}
            </span>
          </p>
          <p>
            You may also register at your nearest{" "}
            <span style={{ color: "#C71585", fontSize: "15px" }}>
              {" "}
              DTI Regional or Provincial office. Bring an accomplished business
              name registration sole proprietorship application form{" "}
            </span>{" "}
            and a valid government-issued ID. An authorized representative can
            also submit the BN application requirements as long as he/she also
            provides a valid ID and an authorization letter signed by the
            business owner.{" "}
          </p>
          <p>Additional Requirements:</p>
          <p>If Non-Philippine National</p>
          <p>
            Clear certified copy of the Alien Certificate of Registration; and
          </p>
          <p>
            Certificate of Registration for Sole Proprietorship/Certificate of
            Authority to engage in business in the Philippines
          </p>
          <h6>If Recognized Refugee or Recognized Stateless Person</h6>
          <p>
            Clear certified copy of the Certificate of Recognition issued by the
            DOJ-RSPPU or presentation of the original Certificate of Recognition
            and submission of a duplicate copy.
          </p>
          <hr />
        </div>
      </div>
    </>
  );
};

export default License;
