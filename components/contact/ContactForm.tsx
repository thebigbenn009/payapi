"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";

interface IFormInput {
  name: string;
  email: string;
  company: string;
  message: string;
  title: string;
}

const ContactForm = () => {
  const { register, handleSubmit, formState, reset } = useForm<IFormInput>();
  const { errors } = formState;
  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(data);
    toast.success("Form submitted sucessfully!");
    reset();
  };
  return (
    <form className="contact-form" onSubmit={handleSubmit(onSubmit)} noValidate>
      <div className="form-children">
        <label htmlFor="name"></label>

        <input
          className={errors.name && "error-placeholder"}
          placeholder="Name"
          {...register("name", { required: "this field cannot be empty" })}
        />
        <div
          className="underline underline-contact"
          style={{ backgroundColor: errors.name ? "#FF0000" : "" }}
        ></div>
        <span>{errors.name?.message}</span>
      </div>
      <div className="form-children">
        <label htmlFor="email"></label>
        <input
          className={errors.email && "error-placeholder"}
          placeholder="Email"
          {...register("email", {
            required: "this field cannot be empty",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Please enter a valid email address",
            },
          })}
        />
        <div
          className="underline underline-contact"
          style={{ backgroundColor: errors.email ? "#FF0000" : "" }}
        ></div>
        <span>{errors.email?.message}</span>
      </div>
      <div className="form-children">
        <label htmlFor="companyName"></label>
        <input
          placeholder="Company Name"
          className={errors.company && "error-placeholder"}
          {...register("company", { required: "this field cannot be empty" })}
        />
        <div
          className="underline underline-contact"
          style={{ backgroundColor: errors.company ? "#ff0000" : "" }}
        ></div>
        <span>{errors.company?.message}</span>
      </div>
      <div className="form-children">
        <label htmlFor="title"></label>
        <input
          placeholder="Title"
          className={errors.title && "error-placeholder"}
          {...register("title", { required: "this field cannot be empty" })}
        />
        <div
          className="underline underline-contact"
          style={{ backgroundColor: errors.title ? "#ff0000" : "" }}
        ></div>
        <span>{errors.title?.message}</span>
      </div>
      <div className="form-children">
        <label htmlFor="message"></label>
        <textarea
          className={errors.message && "error-placeholder"}
          placeholder="Message"
          {...register("message", { required: "this field cannot be empty" })}
          rows={4}
          cols={50}
        ></textarea>

        <div
          className="underline underline-contact"
          style={{ backgroundColor: errors.message ? "#ff0000" : "" }}
        ></div>
        <span>{errors.message?.message}</span>
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
