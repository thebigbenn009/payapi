import React from "react";
import ScheduleDemo from "./ScheduleDemo";
import phone from "../../public/home/desktop/group-30new.svg";
import phoneTab from "../../public/home/desktop/phone-tab-version.svg";
import phoneDesktop from "../../public/home/desktop/phone-desktop.svg";

import Image from "next/image";

const Hero = () => {
  return (
    <section className="hero-section wrapper">
      <div className="">
        <div className="hero">
          <div className="hero-text">
            <h1>Start building with our APIs for absolutely free.</h1>
            {/* <ScheduleDemo /> */}
            <form className="demo-form cta-form hero-form">
              <input
                className="demo-input"
                type="email"
                placeholder="Enter email address"
              />
              <button className="btn-input demo-btn btn-large ">
                Schedule a Demo
              </button>
            </form>
            <p className="contact-p">Have any questions? Contact Us</p>
          </div>
          <div className="hero-img">
            <Image className="hero-phone" src={phone} alt="phone" />
            <Image className="phone-tab" src={phoneTab} alt="phone" />
            <Image
              className="phone-desktop"
              src={phoneDesktop}
              width={263}
              // height={600}
              alt="phone"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
