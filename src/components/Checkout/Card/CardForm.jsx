import {
  PaymentElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { useFormContext } from "react-hook-form";

export default function CheckoutForm(props) {
  const [cookies] = useCookies(["name", "fee"]);

  const plan = cookies.name;
  const fee = cookies.fee;

  const stripe = useStripe();
  const elements = useElements();

  const { getValues } = useFormContext();
  const email = getValues("email");

  const [message, setMessage] = useState(null);
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    setIsLoading(true);

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        // Make sure to change this to your payment completion page
        return_url: "http://localhost:3000/thanks",
        receipt_email: email,
      },
    });

    // This point will only be reached if there is an immediate error when
    // confirming the payment. Otherwise, your customer will be redirected to
    // your `return_url`. For some payment methods like iDEAL, your customer will
    // be redirected to an intermediate site first to authorize the payment, then
    // redirected to the `return_url`.
    if (error.type === "card_error" || error.type === "validation_error") {
      setMessage(error.message);
    } else {
      setMessage("An unexpected error occurred.");
    }

    setIsLoading(false);
  };

  const paymentElementOptions = {
    layout: "tabs",
  };

  const hundleClick = async () => {
    const post = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/orders`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        data: {
          name: `${getValues("familyName")}${getValues("firstName")}`,
          sex: `${getValues("representativeSex")}`,
          email: `${getValues("email")}`,
          organization: `${getValues("organization")}`,
          plan: `${plan}`,
          fee: `${fee}`,
          firstCompanionName: `${getValues(
            "firstCompanionFamilyName"
          )}${getValues("firstCompanionFirstName")}`,
          firstCompanionSex: `${getValues("firstCompanionSex")}`,
          firstCompanionEvent: `${getValues("firstCompanionEvent")}`,
          secondCompanionName: `${getValues(
            "secondCompanionFamilyName"
          )}${getValues("secondCompanionFirstName")}`,
          secondCompanionSex: `${getValues("secondCompanionSex")}`,
          secondCompanionEvent: `${getValues("secondCompanionEvent")}`,
          representativeEvent: `${getValues("representativeEvent")}`,
        },
      }),
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  };

  return (
    <div className="h-screen xl:mx-60 xl:my-32 sm:mx-12 sm:my-6">
      <form
        id="payment-form"
        onSubmit={handleSubmit}
        className="p-10  bg-gray-50 "
      >
        <div className="m-10 text-6xl text-right">
          {props.plan}プラン　　
          {props.fee}円
        </div>
        <PaymentElement id="payment-element" options={paymentElementOptions} />
        <div className="px-4 py-3 text-right sm:px-6">
          <button
            disabled={isLoading || !stripe || !elements}
            id="submit"
            onClick={hundleClick}
            className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            <span id="button-text">
              {isLoading ? (
                <div className="spinner" id="spinner"></div>
              ) : (
                "決済"
              )}
            </span>
          </button>
          {/* Show any error or success messages */}
          {message && <div id="payment-message">{message}</div>}
        </div>
      </form>
    </div>
  );
}
