import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class Toaster {
  // Property to hold the toast ID
  loaderToastId = undefined;

  // Function to show a simple toast notification
  justToast = (type, message) => {
    toast(message, {
      position: "bottom-right",
      type: type,
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };
}

// Export instance of the Toaster class
export default new Toaster();
