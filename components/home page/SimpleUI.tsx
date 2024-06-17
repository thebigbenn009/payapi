import React from "react";
import twoPhones from "@/public/home/desktop/two-phones.svg";
import Image from "next/image";

const SimpleUI = () => {
  return (
    <div className="section-bg">
      <section className="section-ui wrapper">
        <div className="ui-text">
          <h2>Simple UI & UX</h2>
          <p>
            Our pre-built form is easy to integrate in your app or website’s
            checkout flow and designed to optimize conversion.
          </p>
        </div>
        <div className="ui-img">
          <Image
            className="two-phones"
            src={twoPhones}
            alt="two phones"
            width={320}
            // layout="fill"
            objectFit="cover"
          />
        </div>
      </section>
    </div>
  );
};

export default SimpleUI;
