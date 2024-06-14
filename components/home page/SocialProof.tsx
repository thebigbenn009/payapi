import { svgs } from "@/SocialSvgs";
import React from "react";

const SocialProof = () => {
  return (
    <section className="social-section">
      <div className="social-flex wrapper">
        <div className="social-text">
          <h2>Who we work with</h2>
          <p>
            Today, millions of people around the world have successfully
            connected their accounts to apps they love using our API. We provide
            developers with the tools they need to create easy and accessible
            experiences for their users.
          </p>
          <button className="btn btn-small">About us</button>
        </div>
        <div className="social-companies">
          {svgs.map((svg, index) => {
            return (
              <div className="social-icons" key={index}>
                {svg.icon}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
