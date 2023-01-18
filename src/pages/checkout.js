import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useRouter } from "next/router";
import { FormProvider, useForm, useFormContext } from "react-hook-form";
import Confirm from "../components/Form/Confirm/Confirm";
import Input from "../components/Form/Input/Input";

const checkout = () => {
  const methods = useForm({
    defaultValues: {
      familyName: "",
      firstName: "",
      representativeSex: "",
      email: "",
      organization: "",
      plan: "",
      representativeEvent: "",
      firstCompanionFamilyName: "",
      firstCompanionFirstName: "",
      firstCompanionSex: "",
      firstCompanionEvent: "",
      secondCompanionFamilyName: "",
      secondCompanionFirstName: "",
      secondCompanionSex: "",
      secondCompanionEvent: "",
    },
  });

  const router = useRouter();
  const isConfirm = router.query.confirm;

  const stripePromise = loadStripe(
    "pk_test_51MEUaxIvc9F6tCQvujBkuXYmP96OAndjtXCs79WgC0yba8BVYJE8unoFCVzad2lTr3vUa21nzqarVo3svFoERb53009DO06Gfv"
  );

  return (
    <Elements stripe={stripePromise}>
      <FormProvider {...methods}>
        {!isConfirm ? (
          <>
            <Input />
          </>
        ) : (
          <Confirm />
        )}
      </FormProvider>
    </Elements>
  );
};

export default checkout;
