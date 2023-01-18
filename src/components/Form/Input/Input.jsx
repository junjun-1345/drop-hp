import { useRouter } from "next/router";
import { FormProvider, useFormContext } from "react-hook-form";
import CompanionForm from "./CompanionForm";
import RepresentativeForm from "./RepresentativeForm";

const Input = (props) => {
  const methods = useFormContext();

  const router = useRouter();

  const { handleSubmit } = methods;

  const onSubmit = async (data) => {
    console.log(data);
    router.push(`/checkout/?confirm=1`);
  };

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="xl:px-60 xl:py-32 sm:px-12 sm:py-6"
      >
        <RepresentativeForm />

        <CompanionForm people={1} name={"first"} />

        <CompanionForm people={2} name={"second"} />

        <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
          <button
            type="submit"
            className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            確認
          </button>
        </div>
      </form>
    </FormProvider>
  );
};

export default Input;
