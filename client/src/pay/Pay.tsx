import { loadStripe } from "@stripe/stripe-js";
import {
  Elements,
  PaymentElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { FormEvent } from "react";

const stripePromise = loadStripe(
  "pk_test_51OLz7PACduFEJ0311jjfGzMg7gZ1jE6mGIAegJ8z5nQB3KAmyaeIrHdCg6WxXmxr6Xh9AokAHbjSrunL85gPN2gP00AYaxNJOi"
);

const Pay = () => {
  const stripe = useStripe(); // This is the connection to stripe
  const elements = useElements();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const payElement = elements?.getElement(PaymentElement);
    if (!payElement || !stripe) {
      return;
    }
    const result = await stripe.createPaymentMethod({
      element: payElement,
    });

    console.log(result);
  };

  //TODO: fix render of my pay component ⚠️
  return (
    <div className="pay_div_container">
      <div className="pay_section_products"></div>
      <div className="pay_section_form">
        <Elements stripe={stripePromise}>
          <form onSubmit={handleSubmit}>
            <PaymentElement />
          </form>
        </Elements>
      </div>
    </div>
  );
};

export { Pay };
