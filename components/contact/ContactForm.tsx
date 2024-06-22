"use client";
import { log } from "console";
import React, { useState } from "react";

const ContactForm = () => {
  const [isError, setIsError] = useState(false);
  const handleSubit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const data = Object.fromEntries(formData.entries());
    const values = Object.values(data);
    const emptyFields = values.includes("");
    if (emptyFields) {
      setIsError(true);
      return;
    } else {
      setIsError(false);
    }
  };
  return (
    <form className="contact-form" onSubmit={handleSubit}>
      <div className="form-children">
        <label htmlFor="name"></label>
        <input id="name" type="text" name="name" placeholder="Name" />
        <div
          className="underline underline-contact"
          style={{ backgroundColor: i }}
        ></div>
      </div>
      <div className="form-children">
        <label htmlFor="email"></label>
        <input
          id="email"
          type="email"
          name="email"
          placeholder="Email Address"
        />
        <div className="underline underline-contact"></div>
      </div>
      <div className="form-children">
        <label htmlFor="companyName"></label>
        <input
          id="companyName"
          name="company"
          type="text"
          placeholder="Compamy's Name"
        />
        <div className="underline underline-contact"></div>
      </div>
      <div className="form-children">
        <label htmlFor="title"></label>
        <input id="title" type="text" name="title" placeholder="Title" />
        <div className="underline underline-contact"></div>
      </div>
      <div className="form-children">
        <label htmlFor="message"></label>
        <textarea
          name="message"
          id="message"
          placeholder="message"
          rows={4}
          cols={50}
        ></textarea>

        <div className="underline underline-contact"></div>
      </div>
      <div className="form-check">
        <input className="checkbox" type="checkbox" name="" id="" />
        <label htmlFor="">
          Stay up-to-date with company announcements and updates to our API
        </label>
      </div>
      <button className="btn btn-small btn-inner btn-contact">Submit</button>
    </form>
  );
};

export default ContactForm;
