import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import Confirm from "../components/checkout/Confirm/Confirm";
import Input from "../components/checkout/Input/Input";

const checkout = () => {
  const router = useRouter();
  const isConfirm = router.query.confirm;

  const stripePromise = loadStripe(
    "pk_test_51MEUaxIvc9F6tCQvujBkuXYmP96OAndjtXCs79WgC0yba8BVYJE8unoFCVzad2lTr3vUa21nzqarVo3svFoERb53009DO06Gfv"
  );

  const { getValues } = useForm();

  const plan = getValues("plan");
  const feeCul = () => {
    let fee = 0;
    if (plan === "ツイン") {
      fee = 13000;
    } else if (plan === "トリプル") {
      fee = 26000;
    }
    return fee;
  };

  return (
    <Elements stripe={stripePromise}>
      {!isConfirm ? (
        <>
          <Input />
        </>
      ) : (
        <>
          <Confirm fee={feeCul(plan)} />
        </>
      )}
    </Elements>
  );
};

export default checkout;
