import React, { useState } from "react";
import GroupField from "../groupField";
import useToast from "../../hooks/useToast";
import emailjs from "emailjs-com";
import { statesOfIndia } from "../../data/statesData";

const DistributerContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobile: "",
    location: "",
    requirement: "",
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
      if (key !== "requirement" && !value) {
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
      preferred_contact: "nil",
      query: formData.requirement,
      modal_number: "nil",
      subject: "Distributorship Contact Form",
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
            requirement: "",
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
      <form
        onSubmit={handleSubmit}
        className="p-4 rounded-xl shadow-primary-sd flex flex-col gap-6"
      >
        <h2 className="text-3xl font-semibold text-center">
          Distributer Contact Form
        </h2>
        <div className="flex flex-col gap-4 text-sm">
          <GroupField
            label={"Full Name"}
            name={"fullName"}
            value={formData.fullName}
            placeholder={"Enter Your Name"}
            type={"text"}
            onChange={handleChange}
            error={formError.fullName}
          />
          <GroupField
            label={"Email"}
            name={"email"}
            value={formData.email}
            placeholder={"Enter Your Email"}
            type={"email"}
            onChange={handleChange}
            error={formError.email}
          />
          <GroupField
            label={"Mobile Number"}
            name={"mobile"}
            value={formData.mobile}
            placeholder={"Enter Your Mobile Number"}
            type={"phone"}
            onChange={handleChange}
            error={formError.mobile}
          />
          <GroupField
            label={"Location"}
            name={"location"}
            value={formData.location}
            type={"dropdown"}
            placeholder={""}
            selectValue={"Choose Location"}
            options={statesOfIndia}
            onChange={handleChange}
            error={formError.location}
          />

          <GroupField
            label={"Requirement"}
            name={"requirement"}
            value={formData.requirement}
            placeholder={"Enter Your Requirement"}
            type={"textArea"}
            onChange={handleChange}
            optionalTag
          />
        </div>
        <input
          type="submit"
          value="Submit Query"
          className="btn-primary mt-auto"
        />
      </form>
    </>
  );
};

export default DistributerContactForm;
