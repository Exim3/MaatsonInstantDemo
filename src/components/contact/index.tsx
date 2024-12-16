import React, { useState } from "react";
import { EmailIcon, PhoneIcon, TelephoneIcon } from "../icons";
import indicatorImage from "/images/indicatorImage.png";
import emailjs from "emailjs-com";
import GroupField from "../groupField";
import useToast from "../../hooks/useToast";

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobile: "",
    location: "",
    preferredContact: "",
    query: "",
  });
  const [formError, setFormError] = useState({
    fullName: "",
    email: "",
    mobile: "",
    location: "",
  });
  const { successNotify, errorNotify } = useToast();
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
    handleFieldError(name, value);
    if (name === "email") {
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      // Validate email using regex
      if (!emailRegex.test(value)) {
        setFormError((prev) => ({
          ...prev,
          email: "Please enter a valid email address",
        }));
      } else {
        setFormError((prev) => ({ ...prev, email: "" }));
      }
    }
  };
  // Function to handle clearing field error
  const handleFieldError = (name: string, value: any) => {
    if (Object.keys(formError).filter((field) => field === name)) {
      if (value) {
        setFormError((prev) => ({
          ...prev,
          [name]: "", // Clear the error message for the field
        }));
      } else {
        setFormError((prev) => ({
          ...prev,
          [name]: `please fill the ${name} `, // Clear the error message for the field
        }));
      }
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    let hasError = false;

    // Loop through form data to check for any empty fields and set errors
    Object.entries(formData).forEach(([key, value]) => {
      if (key !== "query" && !value) {
        // If the field is empty, set the error for this field
        setFormError((prev) => ({
          ...prev,
          [key]: `Please fill the ${key}`,
        }));
        hasError = true;
      }
    });

    if (formError.email) {
      hasError = true;
    }

    // If there are any errors, prevent the form submission
    if (hasError) {
      return; // Do not submit if there are errors
    }

    // Proceed with form data submission after validation
    const formDataToSend = {
      from_name: formData.fullName,
      from_email: formData.email,
      mobile: formData.mobile,
      location: formData.location,
      preferred_contact: formData.preferredContact,
      query: formData.query,
      modal_number: "nil",
      subject: "Contact Form",
    };

    const serviceId =
      import.meta.env.VITE_EMAILJS_SERVICE_ID || process.env.EMAILJS_SERVICE_ID;
    const templateId =
      import.meta.env.VITE_EMAILJS_CONTACTFORM_TEMPLATE_ID ||
      process.env.EMAILJS_CONTACTFORM_TEMPLATE_ID;
    const userId =
      import.meta.env.VITE_EMAILJS_USER_ID || process.env.EMAILJS_USER_ID;

    // Send the form data to EmailJS
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
          successNotify("Email Sent Successfully");
          // Reset form after submission
          setFormData({
            fullName: "",
            email: "",
            mobile: "",
            location: "",
            preferredContact: "",
            query: "",
          });
        },
        (error) => {
          console.error(error.text);
          errorNotify("There was an error sending your message.");
        }
      );
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
              Your Dream Home (Container) is Just a Message Away!
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
              error={formError.fullName}
            />
            <GroupField
              label={"Email"}
              name={"email"}
              value={formData.email}
              onChange={handleChange}
              placeholder={"Enter Your Email"}
              type={"email"}
              error={formError.email}
            />
            <GroupField
              label={"Mobile Number"}
              name={"mobile"}
              value={formData.mobile}
              onChange={handleChange}
              placeholder={"Enter Your Mobile Number"}
              type={"phone"}
              error={formError.mobile}
            />
            <GroupField
              label={"Location"}
              name={"location"}
              value={formData.location}
              onChange={handleChange}
              placeholder={"Enter Your Location"}
              type={"text"}
              error={formError.location}
            />
            <GroupField
              label={"Preferred for Contact"}
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
