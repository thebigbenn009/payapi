import About from "@/components/About";
import React from "react";
import phoneImg from "@/public/about/mobile/image-team-members.jpg";
import tabImg from "@/public/about/tablet/image-team-members.jpg";
import desktopImg from "@/public/about/desktop/image-team-members.jpg";
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

      <picture>
        <source srcSet={desktopImg.src} media="(min-width: 1200px)" />
        <source srcSet={tabImg.src} media="(min-width: 768px)" />
        <Image
          className="about-img"
          src={phoneImg}
          alt="team members"
          width={375}
          height={300}
          layout="responsive"
        />
      </picture>
    </main>
  );
};

export default AboutPage;
