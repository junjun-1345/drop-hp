import Navbar from "./Navbar";
import Footer from "./Footer";
import { FormProvider, useForm, useFormContext } from "react-hook-form";

export default function Layout({ children }) {
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

  return (
    <FormProvider {...methods}>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </FormProvider>
  );
}
