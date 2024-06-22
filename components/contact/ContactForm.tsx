import React from "react";

const ContactForm = () => {
  return (
    <form className="contact-form">
      <div className="form-children">
        <label htmlFor="name"></label>
        <input id="name" type="text" placeholder="Name" />
        <div className="underline underline-contact"></div>
      </div>
      <div className="form-children">
        <label htmlFor="email"></label>
        <input id="email" type="email" placeholder="Email Address" />
        <div className="underline underline-contact"></div>
      </div>
      <div className="form-children">
        <label htmlFor="companyName"></label>
        <input id="companyName" type="text" placeholder="Compamy's Name" />
        <div className="underline underline-contact"></div>
      </div>
      <div className="form-children">
        <label htmlFor="title"></label>
        <input id="title" type="text" placeholder="Title" />
        <div className="underline underline-contact"></div>
      </div>
      <div className="form-children">
        <label htmlFor="message"></label>
        <textarea
          name=""
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
