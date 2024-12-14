import React from "react";
import { SucessToastIcon } from "../icons";

interface SuccessToastProps {
  message: string;
  title?: string;
}

const SuccessToast: React.FC<SuccessToastProps> = ({ message, title }) => {
  return (
    <>
      <div className="flex items-center bg-green-100 text-green-800 rounded-lg">
        <span className="mr-4 text-2xl">
          <SucessToastIcon />
        </span>
        <div>
          {title && <strong className="block text-lg">{title}</strong>}
          <p>{message}</p>
        </div>
      </div>
    </>
  );
};

export default SuccessToast;
