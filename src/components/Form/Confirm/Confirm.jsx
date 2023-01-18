import {
  CardElement,
  Elements,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Link from "next/link";
import { FormProvider, useFormContext } from "react-hook-form";
import Card from "./Card";
import CompanionConfirm from "./CompanionConfirm";
import RepresentativeConfirm from "./RepresentativeConfirm";

const Confirm = (props) => {
  const methods = useFormContext();
  const { handleSubmit, getValues } = methods;

  const elements = useElements();
  const stripe = useStripe();

  const onSubmit = async () => {
    const cardElement = elements.getElement(CardElement);
    const token = await stripe.createToken(cardElement);
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/orders`, {
      method: "POST",
      body: JSON.stringify({
        familyName: getValues("familyName"),
        firstName: getValues("firstName"),
        representativeSex: getValues("representativeSex"),
        email: getValues("email"),
        organization: getValues("organization"),
        plan: getValues("plan"),
        representativeEvent: getValues("representativeEvent"),
        firstCompanionFamilyName: getValues("firstCompanionFamilyName"),
        firstCompanionFirstName: getValues("firstCompanionFirstName"),
        firstCompanionSex: getValues("firstCompanionSex"),
        firstCompanionEvent: getValues("firstCompanionEvent"),
        secondCompanionFamilyName: getValues("secondCompanionFamilyName"),
        secondCompanionFirstName: getValues("secondCompanionFirstName"),
        secondCompanionSex: getValues("secondCompanionSex"),
        secondCompanionEvent: getValues("secondCompanionEvent"),
        fee: fee,
        token: token.token.id,
      }),
    });

    if (response.ok) {
      console.log("注文に成功しました");
    } else {
      console.log("注文に失敗しました");
    }
  };

  const plan = getValues("plan");

  const fee = { value: 0 };

  if (plan === "ツイン") {
    fee.value = 13000;
  } else if (plan === "トリプル") {
    fee.value = 26000;
  }

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="xl:px-60 xl:py-32 sm:px-12 sm:py-6"
      >
        <RepresentativeConfirm fee={fee.value} />

        <CompanionConfirm people={1} name={"first"} />

        <CompanionConfirm people={2} name={"second"} />

        {/* <Card /> */}
        <div className="mt-10 sm:mt-5">
          <div className="md:grid md:grid-cols-3 md:gap-6">
            <div className="md:col-span-1">
              <div className="px-4 sm:px-0">
                <h3 className="text-lg p-2 font-medium leading-6 text-gray-900">
                  カード
                </h3>
              </div>
            </div>
            <div className="mt-5 md:col-span-2 md:mt-0">
              <div className="overflow-hidden shadow sm:rounded-md">
                <div className="bg-white px-4 py-5 sm:p-6">
                  <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-6 sm:col-span-4">
                      <label
                        htmlFor="card-element"
                        className="block text-sm font-medium text-gray-700"
                      >
                        クレジットカード/デビットカード
                      </label>
                      <div className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
                        <CardElement />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
          <button
            type="submit"
            className="mx-2 inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            確定
          </button>
          <Link
            href="/checkout"
            className="mx-2inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            戻る
          </Link>
        </div>
      </form>
    </FormProvider>
  );
};

export default Confirm;
