import { PricingPlanType } from "@/app/types";
import React from "react";

const Plan = (pricingPlan: PricingPlanType) => {
  const { plan, price, packages, availablePackages, icon, description } =
    pricingPlan;
  return (
    <article className="pricing-plan">
      <h3 className="plan">{plan}</h3>
      <p className="pricing-description">{description}</p>
      <h1>${price}.00</h1>
      <div className="underline"></div>
      <ul className="pricing-packages">
        {packages.map((pkg) => {
          if (availablePackages.includes(pkg)) {
            return (
              <li className="available">
                <span>{icon}</span> <span> {pkg}</span>
              </li>
            );
          }

          return <li className="unavailable">{pkg}</li>;
        })}
      </ul>
      <div className="underline"></div>
      <button className="btn btn-small btn-inner">Request Access</button>
    </article>
  );
};

export default Plan;
