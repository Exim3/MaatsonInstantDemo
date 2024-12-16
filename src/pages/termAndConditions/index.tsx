import React from "react";
import Banner from "../../components/banner/Banner";
import Policy from "../../components/policy";

const TermsAndConditions: React.FC = () => {
  const data = {
    headerTitle: "Terms and Conditions for Maatson Instant Homes and Offices",
    headerSubtitle: "Last Updated: [25/12/2024]",
    headerContent:
      "Welcome to Maatson instant Homes and offices! These Terms and Conditions outline the rules and regulations for using our container-based housing and office solutions. By accessing and purchasing our products, you accept these terms in full. Please read carefully.",
    listdata: [
      {
        title: "1. Product Information and Customization",
        content: [
          "Maatson provides customizable container homes and offices based on specifications detailed on our website or agreed upon in writing.",
          "Customizations and add-on features must be requested before purchase. Post-purchase changes may incur additional fees.",
        ],
      },
      {
        title: "2. Payment Terms",
        content: [
          "Payment must follow the terms outlined in our invoice.",
          "A deposit is required upon order, with the remaining balance due before Loading from our Warehouse in Chennai.",
          "Payments are non-refundable unless otherwise stated in a specific purchase agreement.",
        ],
      },
      {
        title: "3. Delivery and Installation",
        content: [
          "Delivery timelines are estimates and vary by location and availability.",
          "Maatson provides delivery and basic installation, but customers are responsible for site preparation, permits, foundations, and other pre-installation requirements.",
          "Transporting materials (assembled-type containers) and offloading them at the buyer's site are under the buyer's responsibility. Maatson is not liable for any damage, loss, or theft during transport or offloading. The buyer assumes full responsibility.",
          "Installation and installation costs will be the buyer's responsibility. If the buyer requires Maatson's team for installation, all relevant expenses, including travel, accommodation, food, and installation costs, will also be covered by the buyer. However, Maatson will provide virtual guidance to assist with the installation process if needed",
        ],
      },
      {
        title: "4. Warranty and Maintenance",
        content: [
          "Maatson offers a limited one-year warranty covering material defects, normal wear and tear, and workmanship issues. Warranty details may vary depending on the product and level of customization.",
          "Modifications or repairs not performed by Maatson void the warranty.",
          "Maintenance is the responsibility of the purchaser, though Maatson can offer guidance.",
        ],
      },
      {
        title: "5. Permits and Compliance",
        content: [
          "Customers are responsible for ensuring Maatson Instant Homes and Offices comply with local building codes, zoning laws, and permit requirements in Chennai, Tamil Nadu, and other applicable regions.",
          "Maatson is not liable for non-compliance with local regulations.",
        ],
      },
      {
        title: "6. Usage Restrictions",
        content: [
          "Maatson’s container homes and offices are for intended use as specified in your purchase agreement. Any other use (e.g., hazardous materials storage etc.,) is prohibited without written approval.",
          "Maatson is NOT liable for damages resulting from improper use.",
          "Maatson is NOT responsible for any unlawful or unauthorized activities involving the use of our container houses. We are not liable for any actions or consequences that arise from improper use. Buyers are responsible for ensuring compliance with all local laws and regulations.",
        ],
      },
      {
        title: "7. Returns and Cancellations",
        content: [
          "Cancellations may be accepted under certain conditions before delivery and may incur fees.",
          "Products are non-returnable after delivery and installation unless a defect is covered under warranty.",
        ],
      },
      {
        title: "8. Limitation of Liability",
        content: [
          "Maatson is not responsible for any damages, including incidental, direct, indirect, or consequential losses, related to the use or inability to use container homes and offices. Additionally, events like natural disasters—earthquakes, landslides, cyclones, or other unexpected situations—are beyond Maatson's control.",
        ],
      },
      {
        title: "9. Intellectual Property Rights",
        content: [
          "All content on the Maatson website, including images, designs, and text, is the property of Maatson and protected by intellectual property laws.",
          "Reproduction, distribution, or modification of any Maatson content without permission is prohibited.",
        ],
      },
      {
        title: "10. Amendments",
        content: [
          "Maatson reserves the right to amend these Terms and Conditions at any time.",
          "Updated terms will be posted on our website, and continued use of our products indicates acceptance of the revised terms.",
        ],
      },
      {
        title: "11. Governing Law",
        content: [
          "These terms are governed by the laws of Chennai, Tamil Nadu, India, without regard to conflict of law principles.",
          "Any disputes arising from these terms shall be resolved through arbitration or in a court within the jurisdiction of Chennai, Tamil Nadu",
        ],
      },
    ],
  };
  return (
    <>
      <Banner title={"Terms And Conditions "} content={""} imageLink={""} />
      <Policy
        headerTitle={data.headerTitle}
        headerSubtitle={data.headerSubtitle}
        headerContent={data.headerContent}
        listdata={data.listdata}
        contactText={"For any questions, reach out to us at:"}
      />
    </>
  );
};

export default TermsAndConditions;
