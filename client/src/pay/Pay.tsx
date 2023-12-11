import { loadStripe } from "@stripe/stripe-js";
import { Elements, CardElement } from "@stripe/react-stripe-js";

const stripePromise = loadStripe(
  "pk_test_51OLz7PACduFEJ0311jjfGzMg7gZ1jE6mGIAegJ8z5nQB3KAmyaeIrHdCg6WxXmxr6Xh9AokAHbjSrunL85gPN2gP00AYaxNJOi"
);

const Pay = () => {
  // TODO: Do the method for payment online - finish ⚠️
  const handleSubmit = () => {};

  return (
    <div className="pay_div_container">
      <div className="pay_section_products"></div>
      <div className="pay_section_form">
        <Elements stripe={stripePromise}>
          <form onSubmit={handleSubmit}>
            <CardElement />
          </form>
        </Elements>
      </div>
    </div>
  );
};

export { Pay };
