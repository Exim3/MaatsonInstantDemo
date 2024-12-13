import React, { useState } from "react";
import { EmailIcon, PhoneIcon, TelephoneIcon } from "../icons";
import indicatorImage from "/images/indicatorImage.png";
import emailjs from "emailjs-com";

import GroupField from "../groupField";
import { toast } from "react-toastify";

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobile: "",
    location: "",
    preferredContact: "",
    query: "",
  });
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Create FormData object to send to EmailJS
    const formDataToSend = {
      from_name: formData.fullName,
      from_email: formData.email,
      mobile: formData.mobile,
      location: formData.location,
      preferred_contact: formData.preferredContact,
      query: formData.query,
    };
    const serviceId =
      import.meta.env.VITE_EMAILJS_SERVICE_ID || process.env.EMAILJS_SERVICE_ID;
    const templateId =
      import.meta.env.VITE_EMAILJS_CONTACTFORM_TEMPLATE_ID ||
      process.env.EMAILJS_CONTACTFORM_TEMPLATE_ID;
    const userId =
      import.meta.env.VITE_EMAILJS_USER_ID || process.env.EMAILJS_USER_ID;
    // Use EmailJS to send the form data
    emailjs
      .send(
        serviceId,
        templateId, // Template ID
        formDataToSend, // Form data to send
        userId // User ID (Public Key)
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("email sent successfully");
        },
        (error) => {
          console.error(error.text);
          toast.error("There was an error sending your message.");
        }
      );

    // // Optionally, reset the form after submission
    // setFormData({
    //   fullName: "",
    //   email: "",
    //   mobile: "",
    //   location: "",
    //   preferredContact: "",
    //   query: "",
    // });
  };

  return (
    <>
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 lg:flex-row justify-between gap-16">
        <div className="flex flex-col gap-6 text-baseBlack ">
          <div className="flex flex-col gap-3">
            <p className="text-primary-700 font-semibold text-2xl   font-robotoSlab ">
              Contact Us
            </p>
            <h3 className="text-4xl md:text-5xl font-semibold ">
              Your Dream Container Home is Just a Message Away!
            </h3>
          </div>
          <p className="text-xl">
            Ready to take the next step towards your dream container home? Fill
            out the form below, and our team will assist you in turning your
            vision into reality!
          </p>{" "}
          <div className="flex-col flex gap-3">
            <div className="flex items-center gap-4">
              <div className="p-1 rounded-full bg-primary-100 w-14 h-14 flex items-center justify-center">
                <PhoneIcon />
              </div>
              <div className="flex flex-col gap-2">
                <h4 className="font-semibold text-2xl">Mobile Number</h4>
                <p className="text-xl">+91 90030 52529</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="p-1 rounded-full bg-primary-100 w-14 h-14 flex items-center justify-center">
                <TelephoneIcon />
              </div>
              <div className="flex flex-col gap-2">
                <h4 className="font-semibold text-2xl">Tel Number</h4>
                <p className="text-xl">+91 44 7965 5171</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="p-1 rounded-full bg-primary-100 w-14 h-14 flex items-center justify-center">
                <EmailIcon />
              </div>
              <div className="flex flex-col gap-2">
                <h4 className="font-semibold text-2xl">Email</h4>
                <p className="text-xl">sales@maatson.com</p>
              </div>
            </div>
          </div>
          <div className="text-center mx-auto">
            <img src={indicatorImage} alt="" />
          </div>
        </div>
        <form
          onSubmit={handleSubmit}
          className="p-4 rounded-xl shadow-primary-sd flex flex-col gap-6"
        >
          <h2 className="text-3xl font-semibold text-center">Contact Form</h2>
          <div className="flex flex-col gap-4">
            <GroupField
              label={"Full Name"}
              name={"fullName"}
              value={formData.fullName}
              onChange={handleChange}
              placeholder={"Enter Your Name"}
              type={"text"}
            />
            <GroupField
              label={"Email"}
              name={"email"}
              value={formData.email}
              onChange={handleChange}
              placeholder={"Enter Your Email"}
              type={"email"}
            />
            <GroupField
              label={"Mobile Number"}
              name={"mobile"}
              value={formData.mobile}
              onChange={handleChange}
              placeholder={"Enter Your Mobile Number"}
              type={"phone"}
            />
            <GroupField
              label={"Location"}
              name={"location"}
              value={formData.location}
              onChange={handleChange}
              placeholder={"Enter Your Location"}
              type={"text"}
            />
            <GroupField
              label={"Preferred for Contact "}
              name={"preferredContact"}
              value={formData.preferredContact}
              onChange={handleChange}
              placeholder={""}
              type={"dropdown"}
              options={[
                { label: "Email", value: "email" },
                { label: "Phone", value: "phone" },
              ]}
              selectValue={"Choose Preferred contact method"}
            />
            <GroupField
              label={"Query"}
              name={"query"}
              value={formData.query}
              onChange={handleChange}
              placeholder={"Enter Your Query"}
              type={"textArea"}
              optionalTag
            />
          </div>
          <input
            type="submit"
            value="Submit Query"
            className="btn-primary mt-auto"
          />
        </form>
      </div>
    </>
  );
};

export default ContactSection;
