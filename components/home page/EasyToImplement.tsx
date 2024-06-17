import React from "react";
import code from "@/public/home/desktop/code.svg";
import codeTab from "@/public/home/desktop/code-tab.svg";
import Image from "next/image";

const EasyToImplement = () => {
  return (
    <section className="section-easy">
      <div className="wrapper easy-container">
        <div className="easy-img">
          <Image className="code-phone" src={code} alt="code" width={300} />
          <Image className="code-tab" src={codeTab} alt="code" width={445} />
        </div>
        <div className="e">
          <div className="easy-text">
            <h2>Easy to implement</h2>
            <p>
              Our API comes with just a few lines of code. You’ll be up and
              running in no time. We built our documentation page to integrate
              payments functionality with ease.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EasyToImplement;
