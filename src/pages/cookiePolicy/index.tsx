import React from "react";
import Banner from "../../components/banner/Banner";
import Policy from "../../components/policy";

const CookiePolicy: React.FC = () => {
  return (
    <>
      <Banner title={"Cookie Policy"} content={""} imageLink={""} />
      <Policy
        headerTitle={"Cookie Policy for Maatson Instant Homes"}
        headerSubtitle={"Effective Date: [25/12/2024]"}
        headerContent={""}
        listdata={[
          {
            title: "What Are Cookies?",
            content: [
              "Cookies are small text files that are placed on your device when you visit a website. They are widely used to make websites work more efficiently 1  and to provide information to the website owners.",
            ],
          },
          {
            title: "How We Use Cookies",
            content: [
              "Improve user experience: Cookies help us remember your preferences and settings, making your experience on our website smoother and more efficient.",
              "Analyze website usage: We use cookies to understand how visitors interact with our website, which pages they visit most often, and what features they use. This information helps us improve our website's performance",
            ],
            subTitle: "We use cookies on our website to:",
          },
          {
            title: "Third-Party Cookies",
            content: [
              "We may use third-party services that place cookies on your device, such as Google Analytics, to help us analyze website traffic. These third-party services have their own privacy policies, which you should review for more information.",
            ],
          },
          {
            title: "Managing Cookies",
            content: [
              "You can control and manage cookies through your browser settings. You can choose to block or delete cookies. However, please note that blocking or deleting cookies may impact your user experience on our website.",
            ],
          },
          {
            title: "Changes to This Cookie Policy",
            content: [
              "We may update this Cookie Policy from time to time to reflect changes in our practices or relevant laws. We encourage you to review this policy periodically to stay informed.",
            ],
          },
        ]}
        contactText={
          "If you have any questions about this Cookie Policy, please contact us at:"
        }
      />
    </>
  );
};

export default CookiePolicy;
