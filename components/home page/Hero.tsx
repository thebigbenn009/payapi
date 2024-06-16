import React from "react";
import ScheduleDemo from "./ScheduleDemo";
import phone from "../../public/home/desktop/group-30new.svg";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="wrapper">
        <div className="hero">
          <div className="hero-text">
            <h1>Start building with our APIs for absolutely free.</h1>
            <ScheduleDemo />
            <p className="contact-p">Have any questions? Contact Us</p>
          </div>
          <div className="hero-img">
            <Image
              className="hero-phone"
              src={phone}
              // height={290}
              alt="phone"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
