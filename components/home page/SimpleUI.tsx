import React from "react";
import twoPhones from "@/public/home/desktop/two-phones.svg";
import simpleUIPhone1 from "@/public/home/desktop/simple-ui-phone-1.svg";
import simpleUIPhone2 from "@/public/home/desktop/simple-ui-phone-2.svg";
import Image from "next/image";

const SimpleUI = () => {
  return (
    <div className="">
      <section className="section-ui wrapper section-bg">
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
            width={230}
            // layout="fill"
            objectFit="cover"
          />
          <Image
            className="desktop-phones phone-1"
            src={simpleUIPhone1}
            alt="two phones"
            objectFit="cover"
            // width={500}
            height={500}
          />
          <Image
            className="desktop-phones"
            src={simpleUIPhone2}
            alt="two phones"
            objectFit="cover"
            // width={500}
            height={500}
          />
        </div>
      </section>
    </div>
  );
};

export default SimpleUI;
