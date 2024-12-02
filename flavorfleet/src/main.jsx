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


import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import PaymentPage from "./stripe/payment";

export default function App() {
  const stripePromise = loadStripe("your-publishable-key-here");
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Elements stripe={stripePromise}>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="contact" element={<Contact />} />
              <Route path="cart" element={<Cart />} />
              <Route path="/payment" element={<PaymentPage />} />
              <Route path="*" element={<NoPage />} />
            </Route>
          </Routes>
        </Elements>
      </Provider>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
