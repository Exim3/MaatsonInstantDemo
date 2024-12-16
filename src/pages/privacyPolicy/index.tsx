import React from "react";
import Banner from "../../components/banner/Banner";
import Policy from "../../components/policy";

const PrivacyPolicy: React.FC = () => {
  return (
    <>
      <Banner title={"Privacy Policy"} content={""} imageLink={""} />
      <Policy
        headerTitle={"Privacy Policy for Maatson Instant Homes"}
        headerSubtitle={"Effective Date: [25/12/2024]"}
        headerContent={
          "Maatson Instant Homes values your privacy and is committed to protecting your personal information. This privacy policy explains how we collect, use, and manage your data."
        }
        listdata={[
          {
            title: "1. Information We Collect",
            content: [
              "Personal information: Name, email address, phone number, Location, Business, Architecture Design, Requirement  and address.",
              "Non-personal information: Website usage data for analytics and performance improvement.",
            ],
            subTitle:
              "We collect the following types of information from users:",
          },
          {
            title: "2. How We Collect Your Information",
            content: [
              "Fill out forms or contact us via email.",
              "Interact with our website.",
              "Website usage data is collected through cookies and analytics tools.",
            ],
            subTitle: "Data is collected when you:",
          },
          {
            title: "3. How We Use Your Information",
            content: [
              "Processing and responding to inquiries.",
              "Communicating relevant offers and updates.",
              "Improving our services and website performance.",
              "We do not use your data for any unauthorized purposes or share it for third-party marketing.",
            ],
            subTitle:
              "We use the information we collect solely for business requirements, including:",
          },
          {
            title: "4. Data Sharing",
            content: [
              "We do not share your data with any third parties. All collected data is used internally for business purposes only.",
            ],
          },
          {
            title: "5. Cookies and Tracking",
            content: [
              "Monitoring website performance.",
              "Tracking user interactions to improve the user experience.",
              "Currently, users cannot manage or disable cookies through our site but can adjust browser settings to limit tracking.",
            ],
            subTitle: "We use cookies for:",
          },
          {
            title: "6. Data Storage and Retention",
            content: [
              "Data received via email is stored on our internal systems.",
              "We retain data only for a few months, after which it is deleted unless required for ongoing communication.",
            ],
          },
          {
            title: "7. Security Measures",
            content: [
              "Emails are processed using encrypted systems (e.g., TLS).",
              "Access is restricted to authorized personnel within our company.",
            ],
            subTitle:
              "Although we receive data via email and do not implement advanced security measures, we ensure:",
          },
          {
            title: "8. User Rights",
            content: [
              "Users may contact us to request updates or corrections to their information.",
              "If a business request is denied, we will not retain any related data, ensuring that your information is only kept if necessary for business purposes.",
              "Data deletion requests are honored within the scope of applicable laws and business requirements.",
            ],
          },
          {
            title: "9. Hyperlinks",
            content: [
              "Hyperlinks to third-party websites may be provided on our website for your convenience. When you use these hyperlinks, you will leave our website for another location that is not under our control. Our privacy policy does not apply to these external websites. We encourage you to review the privacy policies of any third-party websites you visit, as they may differ from ours.",
            ],
          },
          {
            title: "10. Policy Updates",
            content: [
              "We may update this policy periodically to reflect changes in our practices or applicable regulations. Any updates will be posted on our website with the revised effective date.",
            ],
          },
        ]}
        contactText={"For privacy-related inquiries, please contact us at:"}
      />
    </>
  );
};

export default PrivacyPolicy;
