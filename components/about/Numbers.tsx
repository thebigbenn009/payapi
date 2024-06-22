import { numbers } from "@/SocialSvgs";
import React from "react";

const Numbers = () => {
  return (
    <div className=" wrapper numbers">
      <div className="underline mobile-underline"></div>
      <div className="num-wrapper">
        {numbers.map((number) => {
          return (
            <div className="num">
              <div className="underline"></div>
              <p className="num-p">{number.label}</p>
              <h1 className="num-h1">{number.number}</h1>
              <div className="underline"></div>
            </div>
          );
        })}
      </div>
      <div className="underline mobile-underline"></div>
    </div>
  );
};

export default Numbers;
