import About from "@/components/about/About";
import React from "react";
import phoneImg from "@/public/about/mobile/image-team-members.jpg";
import tabImg from "@/public/about/tablet/image-team-members.jpg";
import desktopImg from "@/public/about/desktop/image-team-members.jpg";
import Image from "next/image";
import Numbers from "@/components/about/Numbers";
import ScheduleDemo from "@/components/home page/ScheduleDemo";

const AboutPage = () => {
  return (
    <main className="about">
      <div className="wrapper">
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
      </div>
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
      <Numbers />
      <div className="wrapper">
        <About
          header="The Culture"
          paragraph="We strongly believe there's always an opportunity to learn from each other outside of day-to-day work, whether it's company-wide offsites, internal hackathons, or co-worker meetups. We always value cross-team collaboration and diversity of thought, no matter the job title."
        />
        <About
          header="The People"
          paragraph=" We're all passionate about building a more efficient and inclusive financial infrastructure together. At PayAPI, we have diverse backgrounds and skills."
        />
        <ScheduleDemo />
      </div>
    </main>
  );
};

export default AboutPage;
