import { toast } from "react-toastify";
import SuccessToast from "../components/toast/SuccessToast";
import ErrorToast from "../components/toast/ErrorToast";

// Your useSuccessNotify hook
const useToast = () => {
  const successNotify = (message: string, title?: string) => {
    toast.success(<SuccessToast message={message} title={title} />, {
      icon: false, // Disable default icon
      style: {
        backgroundColor: "#dcfce7 ", // Custom background color
      },
    });
  };
  const errorNotify = (message: string, title?: string) => {
    toast.error(<ErrorToast message={message} title={title} />, {
      icon: false, // Disable default icon
      style: {
        backgroundColor: "#F7B0AA", // Custom background color
      },
    });
  };

  return { successNotify, errorNotify };
};

export default useToast;
