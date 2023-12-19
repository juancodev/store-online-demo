import { useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import {
  Elements,
  PaymentElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { FormEvent } from "react";
import style from "@/styles/Pay.module.scss";

const stripePromise = loadStripe(
  "pk_test_51OLz7PACduFEJ0311jjfGzMg7gZ1jE6mGIAegJ8z5nQB3KAmyaeIrHdCg6WxXmxr6Xh9AokAHbjSrunL85gPN2gP00AYaxNJOi"
);

const Pay = () => {
  const stripe = useStripe(); // This is the connection to stripe
  const elements = useElements();

  const [message, setMessage] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!stripe) {
      return;
    }

    const clientSecret = new URLSearchParams(window.location.search).get(
      "payment_intent_client_secret"
    );

    if (!clientSecret) {
      return;
    }

    stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
      if (!paymentIntent) {
        return;
      }

      switch (paymentIntent.status) {
        case "succeeded":
          setMessage("Payment succeeded!");
          break;
        case "processing":
          setMessage("Your payment is processing.");
          break;
        case "requires_payment_method":
          setMessage("Your payment was not successful, please try again.");
          break;
        default:
          setMessage("Something went wrong.");
          break;
      }
    });
  }, [stripe]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // stripe true and elements
    if (!stripe || !elements) {
      return;
    }

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: "http://localhost:5173",
      },
    });

    if (error.type === "card_error" || error.type === "validation_error") {
      setMessage(error.message!);
    } else {
      setMessage("An unexpected error occurred.");
    }

    setIsLoading(false);
  };

  const paymentElementOptions = {
    layout: "tabs",
  };

  return (
    <div className={style["pay_div_container"]}>
      <div className="pay_section_products">
        <div>
          <img
            src="	https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
            alt=""
            width={500}
            height={500}
          />
        </div>
      </div>
      <div className="pay_section_form">
        <form id={style["payment-form"]} onSubmit={handleSubmit}>
          <PaymentElement
            id={style["payment-element"]}
            options={paymentElementOptions}
          />
          <button disabled={isLoading || !stripe || !elements} id="submit">
            <span id="button-text">
              {isLoading ? (
                <div className={style.spinner} id="spinner"></div>
              ) : (
                "Pay now"
              )}
            </span>
          </button>
          {/* Show any error or success messages */}
          {message && <div id={style["payment-message"]}>{message}</div>}
        </form>
      </div>
    </div>
  );
};

const WrapperPayment = () => {
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    fetch("http://localhost:3200/api/v1/create-payment-intent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ items: [{ id: "xl-tshirt" }] }),
    })
      .then((res) => res.json())
      .then((data) => {
        setClientSecret(data.clientSecret);
        // console.log(data); => data = clientSecret;
      });
  }, []);

  const appearance = {
    theme: "stripe",
  };
  const options = {
    clientSecret,
    appearance,
  };

  return (
    <div>
      {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <Pay />
        </Elements>
      )}
    </div>
  );
};

export { WrapperPayment };
