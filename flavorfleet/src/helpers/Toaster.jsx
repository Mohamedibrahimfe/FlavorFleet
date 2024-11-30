import { toast } from "react-toastify";

// Import toastify css file
import "react-toastify/dist/ReactToastify.css";

// toast-configuration method,
// it is compulsory method.
toast.configure();

// This is main function
const Toaster = () => {
  return (
    <div>
      <ToastContainer />
    </div>
  );
};
export default Toaster;
