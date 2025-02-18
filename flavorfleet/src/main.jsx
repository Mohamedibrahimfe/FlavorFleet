import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";
import "./index.css";
import Cart from "./helpers/Cart";

import store from "./redux/store";
import { Provider } from "react-redux";
import Success from "./pages/Success";

import { GoogleOAuthProvider } from "@react-oauth/google";
import Signin from "./pages/Signin";

export default function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="contact" element={<Contact />} />
              <Route path="cart" element={<Cart />} />
              <Route path="success" element={<Success />} />
              <Route path="signin" element={<Signin />} />
              <Route path="*" element={<NoPage />} />
            </Route>
          </Routes>
        </GoogleOAuthProvider>
      </Provider>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
