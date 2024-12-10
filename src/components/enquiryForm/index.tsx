import React from "react";
import GroupField from "../groupField";

const EnquiryForm: React.FC = () => {
  return (
    <>
      <form
        action=""
        className="p-4 rounded-xl shadow-primary-sd flex flex-col gap-6"
      >
        <h2 className="text-3xl font-semibold text-center">
          Distributorship form
        </h2>
        <div className="flex flex-col gap-4">
          <GroupField
            label={"Full Name"}
            name={"fullName"}
            value={""}
            placeholder={"Enter Your Name"}
            type={"text"}
          />
          <GroupField
            label={"Email"}
            name={"email"}
            value={""}
            placeholder={"Enter Your Email"}
            type={"email"}
          />
          <GroupField
            label={"Mobile Number"}
            name={"mobile"}
            value={""}
            placeholder={"Enter Your Mobile Number"}
            type={"phone"}
          />
          <GroupField
            label={"Location"}
            name={"location"}
            value={""}
            placeholder={"Enter Your Location"}
            type={"text"}
          />
          <GroupField
            label={"Modal Number "}
            name={"modalNumber"}
            value={""}
            placeholder={""}
            type={"dropdown"}
            optionalTag
            options={[{ label: "", value: "" }]}
            selectValue={"Choose Modal Number"}
          />
          <GroupField
            label={"Requirement"}
            name={"requirement"}
            value={""}
            placeholder={"Enter Your Requirement"}
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
    </>
  );
};

export default EnquiryForm;
