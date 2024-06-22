import InnerHeader from "@/components/about/InnerHeader";
import ContactForm from "@/components/contact/ContactForm";
import ContactSocial from "@/components/contact/ContactSocial";
import Cta from "@/components/home page/Cta";
import React from "react";

const ContactPage = () => {
  return (
    <main>
      <div className="wrapper">
        <InnerHeader
          desc={
            <span>
              Submit a help request <br /> and we’ll get in touch shortly.
            </span>
          }
        />
        <div className="contact-container">
          <ContactForm />
          <ContactSocial />
        </div>
        <Cta />
      </div>
    </main>
  );
};

export default ContactPage;
