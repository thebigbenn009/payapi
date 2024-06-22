import React from "react";
import socialsMobile from "@/public/about/mobile/about-socials.svg";
import contactSocials from "@/public/about/mobile/contact-socials-tab.svg";
import Image from "next/image";
const ContactSocial = () => {
  return (
    <div className="contact-social">
      <h3>Join the thousands of innovators already building with us</h3>

      <picture>
        {/* <source srcSet={desktopImg.src} media="(min-width: 1024px)" /> */}
        {/* <source srcSet={contactSocials} media="(min-width: 768px)" /> */}
        <Image
          className="about-img socials-mobile"
          src={socialsMobile}
          alt="team members"
          width={278}
          height={154}
          layout="responsive"
        />
        <Image
          className="about-img socials-tab"
          src={contactSocials}
          alt="team members"
          width={541}
          height={104}
          // layout="responsive"
        />
      </picture>
    </div>
  );
};

export default ContactSocial;
