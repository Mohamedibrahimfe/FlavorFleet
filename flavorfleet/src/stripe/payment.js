import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";

// Load your Stripe publishable key
const stripePromise = loadStripe(
  "pk_live_51QRhM5ArW04A4HUBVmpAH8hJnOesiwSz3f7Z2wPmhENtfccH2Fz1cv0A6AG4AG0kFt21R02eKFizfZNstmwpIUzX00ur6OQHwh"
);

const PaymentPage = () => {
  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm />
    </Elements>
  );
};

export default PaymentPage;
