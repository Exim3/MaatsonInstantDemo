import React, { useState } from "react";
import { EmailIcon, PhoneIcon, TelephoneIcon } from "../icons";
import GroupField from "../groupField";
import useToast from "../../hooks/useToast";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";

const DistributorShip: React.FC = () => {
  const [isOwnBusiness, setOwnBusiness] = useState<boolean>(true);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobile: "",
    location: "",
    professionalStatus: isOwnBusiness ? "business" : "working",
    businessType: "",
    companyName: "",
    profession: "",
  });
  const [formError, setFormError] = useState({
    fullName: "",
    email: "",
    mobile: "",
    location: "",
    businessType: "",
    companyName: "",
    profession: "",
  });
  const { successNotify } = useToast();
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

    let hasError = false; // Flag to track if there are any errors

    // Function to set errors for a field
    const setFieldError = (key: string) => {
      setFormError((prev) => ({
        ...prev,
        [key]: `Please fill the ${key}`,
      }));
      hasError = true;
    };

    // Loop through formData to validate required fields based on isOwnBusiness
    Object.entries(formData).forEach(([key, value]) => {
      if (isOwnBusiness) {
        // Validate companyName and businessType for own business
        if ((key === "companyName" || key === "businessType") && !value) {
          setFieldError(key);
        }
      } else {
        // Validate profession for non-own business
        if (key === "profession" && !value) {
          setFieldError(key);
        }
      }

      // Validate other fields (fullName, mobile, email, location) always
      if (
        !value &&
        key !== "companyName" &&
        key !== "businessType" &&
        key !== "profession"
      ) {
        setFieldError(key);
      }
    });

    if (formError.email) {
      hasError = true;
    }

    // If there's any error, stop form submission
    if (hasError) {
      return;
    }

    // Proceed with form submission if no errors
    const formDataToSend = {
      from_name: formData.fullName || "nil",
      from_email: formData.email || "nil",
      mobile: formData.mobile || "nil",
      location: formData.location,
      professional_status: formData.professionalStatus || "nil",
      company_name: (isOwnBusiness && formData.companyName) || "nil",
      business_type: (isOwnBusiness && formData.businessType) || "nil",
      profession: (!isOwnBusiness && formData.profession) || "nil",
      subject: "Distributorship Form",
    };

    const serviceId =
      import.meta.env.VITE_EMAILJS_SERVICE_ID || process.env.EMAILJS_SERVICE_ID;
    const templateId =
      import.meta.env.VITE_EMAILJS_DISTRIBUTORSHIP_TEMPLATE_ID ||
      process.env.EMAILJS_DISTRIBUTORSHIP_TEMPLATE_ID;
    const userId =
      import.meta.env.VITE_EMAILJS_USER_ID || process.env.EMAILJS_USER_ID;

    // Use EmailJS to send the form data
    emailjs.send(serviceId, templateId, formDataToSend, userId).then(
      (result) => {
        console.log(result.text);
        successNotify("Email Sent Successfully");
        // Optionally, reset the form after submission
        setFormData({
          fullName: "",
          email: "",
          mobile: "",
          location: "",
          professionalStatus: isOwnBusiness ? "business" : "working",
          businessType: "",
          companyName: "",
          profession: "",
        });
      },
      (error) => {
        console.error(error.text);
        toast.error("There was an error sending your message.");
      }
    );
  };

  return (
    <>
      <div
        id="distributorDetails"
        className=" container mx-auto grid grid-cols-1 lg:grid-cols-2 lg:flex-row justify-between gap-16"
      >
        <div className="flex flex-col gap-6 text-baseBlack ">
          <div className="flex flex-col gap-3">
            <p className="text-primary-700 font-semibold text-2xl   font-robotoSlab ">
              Contact Us
            </p>
            <h3 className="text-4xl md:text-5xl font-semibold ">
              Become a Distributor of Maatson Instant Homes and Offices{" "}
            </h3>
          </div>
          <p className="text-xl">
            Join us in delivering innovative and sustainable living and working
            solutions to your community.
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
        </div>
        <form
          onSubmit={handleSubmit}
          className="p-4 rounded-xl shadow-primary-sd flex flex-col gap-6"
        >
          <h2 className="text-3xl font-semibold text-center">
            Distributorship form
          </h2>
          <div className="flex flex-col gap-4">
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
              label={"City, State"}
              name={"location"}
              value={formData.location}
              placeholder={"Enter Your Location"}
              type={"text"}
              onChange={handleChange}
              error={formError.location}
            />
            <div className={`flex flex-col gap-4 `}>
              <label htmlFor="">Select Your Professional Status</label>
              <div className="flex items-center gap-4">
                <span
                  className={`px-3 py-2 rounded-md border-2 ${
                    isOwnBusiness
                      ? "text-primary border-primary"
                      : " border-neutral-200"
                  }`}
                  onClick={() => setOwnBusiness((prev) => !prev)}
                >
                  Business owner
                </span>
                <span
                  className={`px-3 py-2 rounded-md border-2  ${
                    isOwnBusiness
                      ? "border-neutral-200 "
                      : "text-primary border-primary"
                  }`}
                  onClick={() => setOwnBusiness((prev) => !prev)}
                >
                  Working Profession
                </span>
              </div>
            </div>
            {isOwnBusiness ? (
              <>
                <GroupField
                  label={
                    "Business type (Please select the kind of business you operate)"
                  }
                  name={"businessType"}
                  value={formData.businessType}
                  placeholder={" Enter Your Business type "}
                  type={"text"}
                  onChange={handleChange}
                  error={formError.businessType}
                />
                <GroupField
                  label={"Company Name"}
                  name={"companyName"}
                  value={formData.companyName}
                  placeholder={" Enter Your Company Name"}
                  type={"text"}
                  onChange={handleChange}
                  error={formError.companyName}
                />
              </>
            ) : (
              <GroupField
                label={"Tell Us About Your Profession"}
                name={"profession"}
                value={formData.profession}
                placeholder={" Enter Your Profession"}
                type={"text"}
                onChange={handleChange}
                error={formError.profession}
              />
            )}
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

export default DistributorShip;
