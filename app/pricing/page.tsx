import Cta from "@/components/home page/Cta";
import Plan from "@/components/pricing/Plan";
import { pricePackages } from "@/SocialSvgs";
import React from "react";

const PricingPage = () => {
  return (
    <main>
      <div className="wrapper">
        <h1 className="pricing-h2">pricing</h1>
        <div>
          {pricePackages.map((packagePlan) => {
            return <Plan key={packagePlan.plan} {...packagePlan} />;
          })}
        </div>
        <Cta />
      </div>
    </main>
  );
};

export default PricingPage;
