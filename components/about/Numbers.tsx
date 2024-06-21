import { numbers } from "@/SocialSvgs";
import React from "react";

const Numbers = () => {
  return (
    <div className=" wrapper numbers">
      <div className="underline"></div>
      <div className="num-wrapper">
        {numbers.map((number) => {
          return (
            <div className="num">
              <p className="num-p">{number.label}</p>
              <h1 className="num-h1">{number.number}</h1>
            </div>
          );
        })}
      </div>
      <div className="underline"></div>
    </div>
  );
};

export default Numbers;
