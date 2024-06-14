import EasyToImplement from "@/components/home page/EasyToImplement";
import Goals from "@/components/home page/Goals";
import Hero from "@/components/home page/Hero";
import SimpleUI from "@/components/home page/SimpleUI";
import SocialProof from "@/components/home page/SocialProof";
import React from "react";

const Page = () => {
  return (
    <div className="home-page">
      <Hero />
      <SocialProof />
      <EasyToImplement />
      <SimpleUI />
      <Goals />
    </div>
  );
};

export default Page;
