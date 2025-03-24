import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ClerkProvider } from "@clerk/clerk-react";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";
import "./index.css";
import Cart from "./helpers/Cart";
import store from "./redux/store";
import { Provider } from "react-redux";
import Success from "./pages/Success";
import Signin from "./pages/Signin";

import ErrorBoundary from "./components/ErrorBoundary";
const clerkPubKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

export default function App() {
  return (
    <ErrorBoundary>
      <ClerkProvider publishableKey={clerkPubKey}>
        <BrowserRouter>
          <Provider store={store}>
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
          </Provider>
        </BrowserRouter>
      </ClerkProvider>
    </ErrorBoundary>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
