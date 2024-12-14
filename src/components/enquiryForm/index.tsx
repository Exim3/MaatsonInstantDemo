import React, { useEffect, useState } from "react";
import GroupField from "../groupField";
import emailjs from "emailjs-com";
import useToast from "../../hooks/useToast";
import { useLocation } from "react-router-dom";

const EnquiryForm: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobile: "",
    location: "",
    modalNumber: "",
    requirement: "",
  });
  const [formError, setFormError] = useState({
    fullName: "",
    email: "",
    mobile: "",
    location: "",
  });

  const { successNotify, errorNotify } = useToast();
  const location = useLocation();

  // Use URLSearchParams to get query parameters
  const queryParams = new URLSearchParams(location.search);
  const modalNumberQuery = queryParams.get("query"); // "3010"
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
      if (key !== "requirement" && key !== "modalNumber" && !value) {
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
      query: formData.requirement || "nil",
      modal_number: formData.modalNumber || "nil",
      subject: "Enquiry Form",
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
            modalNumber: "",
            requirement: "",
          });
        },
        (error) => {
          console.error(error.text);
          errorNotify("There was an error sending your message.");
        }
      );
  };
  useEffect(() => {
    if (modalNumberQuery)
      setFormData((prev) => ({ ...prev, modalNumber: modalNumberQuery }));
  }, [modalNumberQuery]);
  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="p-4 rounded-xl shadow-primary-sd flex flex-col gap-6"
      >
        <h2 className="text-3xl font-semibold text-center">Enquiry form</h2>
        <div className="flex flex-col gap-4">
          <GroupField
            label={"Full Name"}
            name={"fullName"}
            placeholder={"Enter Your Name"}
            type={"text"}
            onChange={handleChange}
            value={formData.fullName}
            error={formError.fullName}
          />
          <GroupField
            label={"Email"}
            name={"email"}
            placeholder={"Enter Your Email"}
            type={"email"}
            onChange={handleChange}
            value={formData.email}
            error={formError.email}
          />
          <GroupField
            label={"Mobile Number"}
            name={"mobile"}
            placeholder={"Enter Your Mobile Number"}
            type={"phone"}
            onChange={handleChange}
            value={formData.mobile}
            error={formError.mobile}
          />
          <GroupField
            label={"Location"}
            name={"location"}
            placeholder={"Enter Your Location"}
            type={"text"}
            onChange={handleChange}
            value={formData.location}
            error={formError.location}
          />
          <GroupField
            label={"Modal Number "}
            name={"modalNumber"}
            value={formData.modalNumber}
            placeholder={""}
            type={"dropdown"}
            optionalTag
            options={[
              { label: "Modal-3010", value: "Modal-3010" },
              { label: "Modal-3020", value: "Modal-3020" },
              { label: "Modal-3030", value: "Modal-3030" },
              { label: "Modal-3040", value: "Modal-3040" },
              { label: "Modal-3050", value: "Modal-3050" },
              { label: "Modal-3060", value: "Modal-3060" },
              { label: "Modal-3070", value: "Modal-3070" },
              { label: "Modal-3080", value: "Modal-3080" },
              { label: "Modal-3090", value: "Modal-3090" },
              { label: "Modal-4010", value: "Modal-4010" },
              { label: "Modal-4020", value: "Modal-4020" },
              { label: "Modal-4030", value: "Modal-4030" },
              { label: "Modal-4040", value: "Modal-4040" },
              { label: "Modal-4050", value: "Modal-4050" },
              { label: "Modal-4060", value: "Modal-4060" },
              { label: "Modal-4070", value: "Modal-4070" },
            ]}
            selectValue={"Choose Modal Number"}
            onChange={handleChange}
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

export default EnquiryForm;
