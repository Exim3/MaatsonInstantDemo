import { BrowserRouter as Router } from "react-router-dom";
import AllRoutes from "./Routes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import Toastify styles
import ScrollToTop from "./utils/ScrollToTop";
/* slick */
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <>
      <Router>
        <AllRoutes />
        <ToastContainer
          position="top-center"
          hideProgressBar
          style={{ padding: 0 }}
        />
        <ScrollToTop />
      </Router>
    </>
  );
}

export default App;
