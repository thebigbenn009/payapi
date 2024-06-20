import About from "@/components/About";
import React from "react";
import teamImage from "@/public/about/mobile/image-team-members.jpg";
import Image from "next/image";

const AboutPage = () => {
  return (
    <main className="about">
      <h1 className="about-desc">
        We empower innovators by delivering access to the financial system
      </h1>
      <About
        header="Our Vision"
        paragraph="Our main goal is to build beautiful consumer experiences along with developer-friendly infrastructure. The result is an intelligent tool that gives everyone the ability to create amazing products that solve big problems. We are deeply focused on democratizing financial services through technology. "
      />
      <About
        header="Our Business"
        paragraph="At the core of our platform is the technical infrastructure APIs that connect consumers. Our innovative product provides key insights for businesses and individuals, as well as robust reporting for traditional financial institutions and developers. "
      />
      <div className="image-container">
        <Image src={teamImage} alt="team members" objectFit="cover" fill />
      </div>
    </main>
  );
};

export default AboutPage;
