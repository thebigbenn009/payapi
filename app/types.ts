import { ReactElement } from "react";

export type Goal = {
  icon: ReactElement;
  label: string;
  text: string;
};
export type LinkType = {
  href: string;
  label: string;
};
export type Icons = {
  icon: ReactElement;
};

export type PricingPlanType = {
  plan: "free plan" | "basic plan" | "premium plan";
  price: number;
  packages: string[];
  availablePackages: string[];
  description?: string;

  icon: ReactElement;
};
export type PricingPackages = PricingPlanType[];
