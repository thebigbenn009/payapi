import { svgs } from "@/SocialSvgs";
import React from "react";
import socials from "@/public/home/desktop/socials.svg";
import socialsTab from "@/public/home/desktop/socials-tab.svg";
import Image from "next/image";
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
        <div className="socials-img">
          <Image src={socials} alt="socials" className="socials-mobile" />
          <Image src={socialsTab} alt="socials" className="socials-tab" />
        </div>
        {/* <div className="social-companies">
          {svgs.map((svg, index) => {
            return (
              <div className="social-icons" key={index}>
                {svg.icon}
              </div>
            );
          })}
        </div> */}
      </div>
    </section>
  );
};

export default SocialProof;
