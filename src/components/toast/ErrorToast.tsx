import React from "react";
import { ErrorToastIcon } from "../icons";

const ErrorToast: React.FC<{ message: string; title?: string }> = ({
  title,
  message,
}) => {
  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
        }}
        className="bg-error-100 text-error "
      >
        <span style={{ marginRight: "10px", fontSize: "24px" }}>
          <ErrorToastIcon />{" "}
        </span>
        <div>
          {title && <strong>{title}</strong>}
          <p>{message}</p>
        </div>
      </div>
    </>
  );
};

export default ErrorToast;
