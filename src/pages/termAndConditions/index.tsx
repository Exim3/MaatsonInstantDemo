import React from "react";
import Banner from "../../components/banner/Banner";
import { EmailIcon, PhoneIcon, TelephoneIcon } from "../../components/icons";

const TermsAndConditions: React.FC = () => {
  return (
    <>
      <Banner title={"Terms And Conditions "} content={""} imageLink={""} />
      <div className=" flex flex-col gap-6 text-baseBlack container mx-auto py-2">
        <section className="flex flex-col gap-4 font-semibold">
          <h4 className="text-3xl ">
            Terms and Conditions for Maatson Instant Homes and Offices
          </h4>
          <h5 className="text-2xl ">Last Updated: [25/12/2024]</h5>
        </section>
        <section className="flex flex-col gap-4">
          <p className="text-lg sm:text-2xl  text-neutral-1000">
            Welcome to Maatson instant Homes and offices! These Terms and
            Conditions outline the rules and regulations for using our
            container-based housing and office solutions. By accessing and
            purchasing our products, you accept these terms in full. Please read
            carefully.
          </p>
        </section>
        <section className="flex flex-col gap-4">
          <h4 className="text-3xl font-semibold ">
            1. Product Information and Customization
          </h4>{" "}
          <ul className="list-disc px-8">
            <li>
              <p className="text-lg sm:text-2xl  text-neutral-1000">
                Maatson provides customizable container homes and offices based
                on specifications detailed on our website or agreed upon in
                writing.
              </p>
            </li>
            <li>
              <p className="text-lg sm:text-2xl  text-neutral-1000">
                Customizations and add-on features must be requested before
                purchase. Post-purchase changes may incur additional fees.
              </p>
            </li>
          </ul>
        </section>
        <section className="flex flex-col gap-4">
          <h4 className="text-3xl font-semibold ">2. Payment Terms</h4>{" "}
          <ul className="list-disc px-8">
            <li>
              <p className="text-lg sm:text-2xl  text-neutral-1000">
                Payment must follow the terms outlined in our invoice.
              </p>
            </li>
            <li>
              <p className="text-lg sm:text-2xl  text-neutral-1000">
                A deposit is required upon order, with the remaining balance due
                before Loading from our Warehouse in Chennai.
              </p>
            </li>
            <li>
              <p className="text-lg sm:text-2xl  text-neutral-1000">
                Payments are non-refundable unless otherwise stated in a
                specific purchase agreement.
              </p>
            </li>
          </ul>
        </section>
        <section className="flex flex-col gap-4">
          <h4 className="text-3xl font-semibold ">
            3. Delivery and Installation
          </h4>{" "}
          <ul className="list-disc px-8">
            <li>
              <p className="text-lg sm:text-2xl  text-neutral-1000">
                Delivery timelines are estimates and vary by location and
                availability.{" "}
              </p>
            </li>
            <li>
              <p className="text-lg sm:text-2xl  text-neutral-1000">
                Maatson provides delivery and basic installation, but customers
                are responsible for site preparation, permits, foundations, and
                other pre-installation requirements.
              </p>
            </li>
            <li>
              <p className="text-lg sm:text-2xl  text-neutral-1000">
                Transporting materials (assembled-type containers) and
                offloading them at the buyer's site are under the buyer's
                responsibility. Maatson is not liable for any damage, loss, or
                theft during transport or offloading. The buyer assumes full
                responsibility.
              </p>
            </li>
            <li>
              <p className="text-lg sm:text-2xl  text-neutral-1000">
                Installation and installation costs will be the buyer's
                responsibility. If the buyer requires Maatson's team for
                installation, all relevant expenses, including travel,
                accommodation, food, and installation costs, will also be
                covered by the buyer. However, Maatson will provide virtual
                guidance to assist with the installation process if needed
              </p>
            </li>
          </ul>
        </section>
        <section className="flex flex-col gap-4">
          <h4 className="text-3xl font-semibold ">
            4. Warranty and Maintenance
          </h4>{" "}
          <ul className="list-disc px-8">
            <li>
              <p className="text-lg sm:text-2xl  text-neutral-1000">
                Maatson offers a limited one-year warranty covering material
                defects, normal wear and tear, and workmanship issues. Warranty
                details may vary depending on the product and level of
                customization.
              </p>
            </li>
            <li>
              <p className="text-lg sm:text-2xl  text-neutral-1000">
                Modifications or repairs not performed by Maatson void the
                warranty.
              </p>
            </li>
            <li>
              <p className="text-lg sm:text-2xl  text-neutral-1000">
                Maintenance is the responsibility of the purchaser, though
                Maatson can offer guidance.
              </p>
            </li>
          </ul>
        </section>
        <section className="flex flex-col gap-4">
          <h4 className="text-3xl font-semibold ">5. Permits and Compliance</h4>{" "}
          <ul className="list-disc px-8">
            <li>
              <p className="text-lg sm:text-2xl  text-neutral-1000">
                Customers are responsible for ensuring Maatson Instant Homes and
                Offices comply with local building codes, zoning laws, and
                permit requirements in Chennai, Tamil Nadu, and other applicable
                regions.
              </p>
            </li>
            <li>
              <p className="text-lg sm:text-2xl  text-neutral-1000">
                Maatson is not liable for non-compliance with local regulations.
              </p>
            </li>
          </ul>
        </section>

        <section className="flex flex-col gap-4">
          <h4 className="text-3xl font-semibold ">6. Usage Restrictions</h4>{" "}
          <ul className="list-disc px-8">
            <li>
              <p className="text-lg sm:text-2xl  text-neutral-1000">
                Maatson’s container homes and offices are for intended use as
                specified in your purchase agreement. Any other use (e.g.,
                hazardous materials storage etc.,) is prohibited without written
                approval.
              </p>
            </li>
            <li>
              <p className="text-lg sm:text-2xl  text-neutral-1000">
                Maatson is NOT liable for damages resulting from improper use.{" "}
              </p>
            </li>
            <li>
              <p className="text-lg sm:text-2xl  text-neutral-1000">
                Maatson is NOT responsible for any unlawful or unauthorized
                activities involving the use of our container houses. We are not
                liable for any actions or consequences that arise from improper
                use. Buyers are responsible for ensuring compliance with all
                local laws and regulations.
              </p>
            </li>
          </ul>
        </section>
        <section className="flex flex-col gap-4">
          {" "}
          <h4 className="text-3xl font-semibold ">
            7. Returns and Cancellations
          </h4>{" "}
          <ul className="list-disc px-8">
            <li>
              <p className="text-lg sm:text-2xl  text-neutral-1000">
                Cancellations may be accepted under certain conditions before
                delivery and may incur fees.
              </p>
            </li>
            <li>
              <p className="text-lg sm:text-2xl  text-neutral-1000">
                Products are non-returnable after delivery and installation
                unless a defect is covered under warranty.
              </p>
            </li>
          </ul>
        </section>
        <section className="flex flex-col gap-4">
          <h4 className="text-3xl font-semibold ">
            8. Limitation of Liability
          </h4>{" "}
          <ul className="list-disc px-8">
            <li>
              <p className="text-lg sm:text-2xl  text-neutral-1000">
                Maatson is not responsible for any damages, including
                incidental, direct, indirect, or consequential losses, related
                to the use or inability to use container homes and offices.
                Additionally, events like natural disasters—earthquakes,
                landslides, cyclones, or other unexpected situations—are beyond
                Maatson's control.
              </p>
            </li>
          </ul>
        </section>
        <section className="flex flex-col gap-4">
          <h4 className="text-3xl font-semibold ">
            9. Intellectual Property Rights
          </h4>{" "}
          <ul className="list-disc px-8">
            <li>
              <p className="text-lg sm:text-2xl  text-neutral-1000">
                All content on the Maatson website, including images, designs,
                and text, is the property of Maatson and protected by
                intellectual property laws.
              </p>
            </li>
            <li>
              <p className="text-lg sm:text-2xl  text-neutral-1000">
                Reproduction, distribution, or modification of any Maatson
                content without permission is prohibited.
              </p>
            </li>
          </ul>
        </section>
        <section className="flex flex-col gap-4">
          <h4 className="text-3xl font-semibold ">10. Amendments</h4>{" "}
          <ul className="list-disc px-8">
            <li>
              <p className="text-lg sm:text-2xl  text-neutral-1000">
                Maatson reserves the right to amend these Terms and Conditions
                at any time.
              </p>
            </li>
            <li>
              <p className="text-lg sm:text-2xl  text-neutral-1000">
                Updated terms will be posted on our website, and continued use
                of our products indicates acceptance of the revised terms.
              </p>
            </li>
          </ul>
        </section>
        <section className="flex flex-col gap-4">
          <h4 className="text-3xl font-semibold ">11. Governing Law</h4>{" "}
          <ul className="list-disc px-8">
            <li>
              <p className="text-lg sm:text-2xl  text-neutral-1000">
                These terms are governed by the laws of Chennai, Tamil Nadu,
                India, without regard to conflict of law principles.
              </p>
            </li>
            <li>
              <p className="text-lg sm:text-2xl  text-neutral-1000">
                Any disputes arising from these terms shall be resolved through
                arbitration or in a court within the jurisdiction of Chennai,
                Tamil Nadu
              </p>
            </li>
          </ul>
        </section>
        <section className="flex flex-col gap-4">
          <h4 className="text-3xl font-semibold ">Contact Information</h4>{" "}
          <p className="text-lg sm:text-2xl  text-neutral-1000 font-light">
            For any questions, reach out to us at:
          </p>
          <p className="text-lg sm:text-2xl  text-neutral-1000 font-semibold">
            Maatson
          </p>
          <p className="text-lg sm:text-2xl  text-neutral-1000">
            Chennai, Tamil Nadu, India
          </p>
        </section>
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
    </>
  );
};

export default TermsAndConditions;
