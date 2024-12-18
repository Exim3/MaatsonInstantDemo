import React from "react";
import { EmailIcon, PhoneIcon, TelephoneIcon } from "../icons";

interface ListData {
  title: string;
  content: string[];
  subTitle?: string;
}

interface Data {
  headerTitle: string;
  headerSubtitle: string;
  headerContent: string;
  listdata: ListData[];
  contactText: string;
}

const Policy: React.FC<Data> = (data) => {
  return (
    <>
      {" "}
      <div className=" flex flex-col gap-6 text-baseBlack container mx-auto py-2">
        <section className="flex flex-col gap-4 font-semibold">
          <h4 className="text-3xl ">{data.headerTitle}</h4>
          <h5 className="text-2xl ">{data.headerSubtitle}</h5>
        </section>
        {data.headerContent && (
          <section className="flex flex-col gap-4">
            <p className="text-lg sm:text-2xl  text-neutral-1000">
              {data.headerContent}
            </p>
          </section>
        )}
        {data.listdata.length > 0 &&
          data.listdata.map((listdata, index) => (
            <section className="flex flex-col gap-4" key={index}>
              <h4 className="text-2xl sm:text-3xl  font-semibold ">
                {listdata.title}
              </h4>{" "}
              {listdata.subTitle && (
                <h5 className="text-lg sm:text-2xl  text-neutral-1000 font-semibold">
                  {listdata.subTitle}
                </h5>
              )}
              <ul className="list-disc px-8">
                {listdata.content.length > 0 &&
                  listdata.content.map((content, index) => (
                    <li key={index}>
                      <p className="text-lg sm:text-2xl  text-neutral-1000">
                        {content}
                      </p>
                    </li>
                  ))}
              </ul>
            </section>
          ))}

        <section className="flex flex-col gap-4">
          <h4 className="text-3xl  font-semibold ">Contact Information</h4>{" "}
          <p className="text-lg  text-neutral-1000 font-semibold">
            {data.contactText}
          </p>
          <p className="text-lg sm:text-2xl  text-neutral-1000 font-semibold">
            Maatson Maritime Intl{" "}
          </p>
          <p className="text-lg sm:text-2xl  text-neutral-1000">
            NO: 6, Shastri Nagar, Kodungaiyur,
            <br />
            Chennai-600118
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

export default Policy;
