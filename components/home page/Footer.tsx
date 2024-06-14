import React from "react";
import NavLeft from "./NavLeft";
import { icons } from "@/SocialSvgs";
import FooterNav from "./FooterNav";

const Footer = () => {
  return (
    <footer>
      <div className="wrapper footer-container">
        <FooterNav />
        <div className="footer-icons">
          {icons.map((icon, index) => {
            return <span key={index}>{icon.icon}</span>;
          })}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
